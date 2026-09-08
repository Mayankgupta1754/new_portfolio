const path = require("path");
const { TWIN_SYSTEM_PROMPT } = require("./knowledge");

try {
  require("dotenv").config({ path: path.join(__dirname, "../../.env.local") });
  require("dotenv").config({ path: path.join(__dirname, "../../.env") });
} catch (_) {
  // dotenv is optional on Vercel
}

const TOOLS = [
  {
    type: "function",
    function: {
      name: "record_user_details",
      description:
        "Record that a visitor wants to be contacted and provided an email address",
      parameters: {
        type: "object",
        properties: {
          email: { type: "string", description: "The visitor's email address" },
          name: { type: "string", description: "The visitor's name, if provided" },
          notes: {
            type: "string",
            description: "Useful context from the conversation",
          },
        },
        required: ["email"],
        additionalProperties: false,
      },
    },
  },
  {
    type: "function",
    function: {
      name: "record_unknown_question",
      description:
        "Record a career question that could not be answered from Mayank's known profile",
      parameters: {
        type: "object",
        properties: {
          question: { type: "string", description: "The unanswered question" },
        },
        required: ["question"],
        additionalProperties: false,
      },
    },
  },
];

async function pushNotification(text) {
  const user = process.env.PUSHOVER_USER;
  const token = process.env.PUSHOVER_TOKEN;
  if (!user || !token) return;

  await fetch("https://api.pushover.net/1/messages.json", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ token, user, message: String(text).slice(0, 1000) }),
  });
}

async function runTool(name, args) {
  if (name === "record_user_details") {
    const email = args.email || "unknown";
    const visitorName = args.name || "Name not provided";
    const notes = args.notes || "not provided";
    await pushNotification(
      `Portfolio twin: interest from ${visitorName} <${email}> — ${notes}`
    );
    return "OK";
  }
  if (name === "record_unknown_question") {
    await pushNotification(
      `Portfolio twin could not answer: ${args.question || "unknown"}`
    );
    return "OK";
  }
  return `Unknown tool: ${name}`;
}

function sanitizeHistory(history) {
  if (!Array.isArray(history)) return [];
  return history
    .filter(
      (item) =>
        item &&
        (item.role === "user" || item.role === "assistant") &&
        typeof item.content === "string"
    )
    .slice(-12)
    .map((item) => ({
      role: item.role,
      content: item.content.slice(0, 4000),
    }));
}

async function openaiChat(messages) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    const error = new Error("MISSING_API_KEY");
    error.code = "MISSING_API_KEY";
    throw error;
  }

  const model = process.env.OPENAI_MODEL || "gpt-4o-mini";
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      messages,
      tools: TOOLS,
      temperature: 0.4,
      max_tokens: 700,
    }),
  });

  const data = await response.json();
  if (!response.ok) {
    const message = data?.error?.message || "OpenAI request failed";
    const error = new Error(message);
    error.code = "OPENAI_ERROR";
    throw error;
  }
  return data;
}

async function processTwinChat({ message, history } = {}) {
  const userMessage = typeof message === "string" ? message.trim() : "";
  if (!userMessage) {
    return { status: 400, body: { error: "Please enter a question." } };
  }
  if (userMessage.length > 2000) {
    return { status: 400, body: { error: "Keep questions under 2000 characters." } };
  }

  const messages = [
    { role: "system", content: TWIN_SYSTEM_PROMPT },
    ...sanitizeHistory(history),
    { role: "user", content: userMessage },
  ];

  let completion = await openaiChat(messages);
  let guard = 0;

  while (
    completion?.choices?.[0]?.finish_reason === "tool_calls" &&
    guard < 4
  ) {
    const assistantMessage = completion.choices[0].message;
    const toolCalls = assistantMessage.tool_calls || [];
    messages.push(assistantMessage);

    for (const call of toolCalls) {
      let args = {};
      try {
        args = JSON.parse(call.function?.arguments || "{}");
      } catch (_) {
        args = {};
      }
      const result = await runTool(call.function?.name, args);
      messages.push({
        role: "tool",
        tool_call_id: call.id,
        content: JSON.stringify(result),
      });
    }

    completion = await openaiChat(messages);
    guard += 1;
  }

  const reply = completion?.choices?.[0]?.message?.content?.trim();
  if (!reply) {
    return {
      status: 502,
      body: { error: "The twin did not return a reply. Try again in a moment." },
    };
  }

  return { status: 200, body: { reply } };
}

module.exports = { processTwinChat };
