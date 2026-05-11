import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Card } from './ui/card';
import {
  ArrowLeft, Mail, Phone, MapPin, Clock, Github, Linkedin, Send, Sparkles, Check
} from 'lucide-react';
import { contactData, profileData } from '../data/mock';
import { Button } from './ui/button';

const Contact = ({ setActiveSection }) => {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } }
  };

  const contactCards = [
    {
      icon: Mail,
      label: 'Email',
      value: contactData.email,
      href: `mailto:${contactData.email}`,
      color: 'from-spotify-green to-emerald-500',
      glow: 'rgba(29,185,84,0.4)'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: contactData.phone,
      href: `tel:${contactData.phone}`,
      color: 'from-blue-500 to-cyan-500',
      glow: 'rgba(59,130,246,0.4)'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: contactData.location,
      color: 'from-purple-500 to-pink-500',
      glow: 'rgba(168,85,247,0.4)'
    },
    {
      icon: Clock,
      label: 'Availability',
      value: contactData.availability,
      color: 'from-orange-500 to-red-500',
      glow: 'rgba(249,115,22,0.4)'
    }
  ];

  const socials = [
    { Icon: Github, href: profileData.social.github, label: 'GitHub' },
    { Icon: Linkedin, href: profileData.social.linkedin, label: 'LinkedIn' },
    {
      Icon: Mail,
      href: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contactData.email)}`,
      label: 'Email'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    const name = e.target.name.value;
    const email = e.target.email.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;

    setTimeout(() => {
      const yourEmail = 'themayankgupta17@gmail.com';
      const gmailURL =
        `https://mail.google.com/mail/?view=cm&fs=1` +
        `&to=${encodeURIComponent(yourEmail)}` +
        `&su=${encodeURIComponent(`Portfolio Contact: ${subject}`)}` +
        `&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

      window.open(gmailURL, '_blank');
      setSending(false);
      setSent(true);

      setTimeout(() => {
        setSent(false);
        e.target.reset();
      }, 3000);
    }, 1000);
  };

  return (
    <div className="relative min-h-screen p-6 lg:p-8 overflow-hidden">
      {/* Animated mesh gradient background */}
      <div className="mesh-gradient">
        <div className="mesh-blob mesh-blob-1"></div>
        <div className="mesh-blob mesh-blob-2"></div>
        <div className="mesh-blob mesh-blob-3"></div>
      </div>

      <div className="relative z-10">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button
            onClick={() => setActiveSection('home')}
            variant="ghost"
            className="mb-6 text-gray-400 hover:text-spotify-green transition-colors group"
          >
            <motion.span whileHover={{ x: -4 }} transition={{ type: 'spring', stiffness: 400 }} className="flex items-center">
              <ArrowLeft size={20} className="mr-2" />
              Back to Home
            </motion.span>
          </Button>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h1 className="text-4xl lg:text-6xl font-bold mb-3">
            <span className="gradient-text">Get in Touch</span>
          </h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-24 h-1 bg-spotify-green rounded origin-left mb-4"
          />
          <p className="text-gray-400 text-lg flex items-center gap-2 mb-4">
            <span className="eq-container">
              <span className="eq-bar"></span>
              <span className="eq-bar"></span>
              <span className="eq-bar"></span>
              <span className="eq-bar"></span>
            </span>
            Let's connect and turn data into decisions together
          </p>

          {/* Open-to-work data analyst banner */}
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-spotify-green/20 via-spotify-green/10 to-transparent border border-spotify-green/40 backdrop-blur-sm"
            style={{ boxShadow: '0 0 30px rgba(29,185,84,0.18)' }}
          >
            <motion.span
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.6, repeat: Infinity }}
              className="relative flex w-2.5 h-2.5"
            >
              <span className="absolute inset-0 rounded-full bg-spotify-green opacity-60 animate-ping" />
              <span className="relative w-2.5 h-2.5 rounded-full bg-spotify-green" style={{ boxShadow: '0 0 12px rgba(29,185,84,0.9)' }} />
            </motion.span>
            <span className="text-spotify-green font-bold text-sm uppercase tracking-wider">
              Actively seeking Data Analyst roles
            </span>
            <span className="hidden sm:inline text-gray-300 text-sm">
              · Internship & Full-time · Available Immediately
            </span>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Contact Info - takes 2 cols */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="lg:col-span-2 space-y-4"
          >
            {contactCards.map((card) => {
              const Icon = card.icon;
              const content = (
                <Tilt
                  tiltMaxAngleX={8}
                  tiltMaxAngleY={8}
                  glareEnable={true}
                  glareMaxOpacity={0.12}
                  glareColor="#1DB954"
                  glarePosition="all"
                  glareBorderRadius="12px"
                  scale={1.02}
                  transitionSpeed={1500}
                >
                  <Card className="relative bg-spotify-card border-none p-5 overflow-hidden group spotify-card-lift cursor-pointer">
                    <div
                      className={`absolute -top-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-br ${card.color} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500`}
                    />
                    <div className="relative flex items-center gap-4">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center flex-shrink-0 shadow-lg`}
                        style={{ boxShadow: `0 8px 24px ${card.glow}` }}
                      >
                        <Icon size={24} className="text-white drop-shadow" />
                      </motion.div>
                      <div className="min-w-0 flex-1">
                        <p className="text-gray-400 text-xs uppercase tracking-wider mb-0.5">{card.label}</p>
                        <p className="text-white font-semibold truncate group-hover:text-spotify-green transition-colors">
                          {card.value}
                        </p>
                      </div>
                    </div>
                    <div className="shine-overlay" />
                  </Card>
                </Tilt>
              );
              return (
                <motion.div key={card.label} variants={itemVariants}>
                  {card.href ? (
                    <a href={card.href} target={card.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="block">
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </motion.div>
              );
            })}

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <Card className="bg-gradient-to-br from-spotify-card via-[#1a1a1a] to-spotify-card border-none p-5 overflow-hidden relative">
                <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-spotify-green opacity-10 blur-3xl" />
                <h3 className="relative text-white font-bold mb-4 flex items-center gap-2">
                  <Sparkles size={18} className="text-spotify-green" />
                  Connect with me
                </h3>
                <div className="relative flex gap-3">
                  {socials.map(({ Icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5, scale: 1.15, rotate: [0, -8, 8, 0] }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                      className="w-12 h-12 rounded-full bg-spotify-dark flex items-center justify-center text-gray-400 hover:text-black hover:bg-spotify-green transition-colors"
                      aria-label={label}
                    >
                      <Icon size={22} />
                    </motion.a>
                  ))}
                </div>
              </Card>
            </motion.div>
          </motion.div>

          {/* Contact Form - takes 3 cols */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <Tilt
              tiltMaxAngleX={2}
              tiltMaxAngleY={2}
              glareEnable={true}
              glareMaxOpacity={0.08}
              glareColor="#1DB954"
              glarePosition="all"
              glareBorderRadius="16px"
              transitionSpeed={2000}
            >
              <Card className="relative bg-gradient-to-br from-spotify-card via-[#1a1a1a] to-spotify-card border-none p-6 lg:p-8 overflow-hidden">
                <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-spotify-green opacity-10 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-purple-500 opacity-10 blur-3xl" />

                <div className="relative">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="text-xs text-spotify-green font-bold uppercase tracking-[0.2em] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-spotify-green animate-pulse" />
                      Drop a message
                    </div>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-white mb-1">Send a Message</h2>
                  <p className="text-gray-400 text-sm mb-6">I'll get back to you as soon as I can.</p>

                  <form className="space-y-5" onSubmit={handleSubmit}>
                    {[
                      { id: 'name', label: 'Your Name', type: 'text', placeholder: 'John Doe' },
                      { id: 'email', label: 'Your Email', type: 'email', placeholder: 'john@example.com' },
                      { id: 'subject', label: 'Subject', type: 'text', placeholder: "What's this about?" }
                    ].map((field, idx) => (
                      <motion.div
                        key={field.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + idx * 0.1 }}
                        className="relative"
                      >
                        <label
                          htmlFor={field.id}
                          className={`block mb-2 text-sm font-medium transition-colors duration-200 ${
                            focusedField === field.id ? 'text-spotify-green' : 'text-gray-400'
                          }`}
                        >
                          {field.label}
                        </label>
                        <div className="relative">
                          <input
                            type={field.type}
                            id={field.id}
                            name={field.id}
                            onFocus={() => setFocusedField(field.id)}
                            onBlur={() => setFocusedField(null)}
                            className="w-full bg-spotify-dark/80 backdrop-blur border-2 border-gray-800 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-spotify-green transition-colors"
                            placeholder={field.placeholder}
                            required
                          />
                          {focusedField === field.id && (
                            <motion.div
                              layoutId="focusGlow"
                              className="absolute inset-0 rounded-xl pointer-events-none"
                              style={{ boxShadow: '0 0 24px rgba(29,185,84,0.25)' }}
                              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            />
                          )}
                        </div>
                      </motion.div>
                    ))}

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <label
                        htmlFor="message"
                        className={`block mb-2 text-sm font-medium transition-colors duration-200 ${
                          focusedField === 'message' ? 'text-spotify-green' : 'text-gray-400'
                        }`}
                      >
                        Message
                      </label>
                      <div className="relative">
                        <textarea
                          id="message"
                          name="message"
                          rows="5"
                          onFocus={() => setFocusedField('message')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full bg-spotify-dark/80 backdrop-blur border-2 border-gray-800 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-spotify-green transition-colors resize-none"
                          placeholder="Tell me about your project, idea, or just say hi..."
                          required
                        />
                        {focusedField === 'message' && (
                          <motion.div
                            layoutId="focusGlow"
                            className="absolute inset-0 rounded-xl pointer-events-none"
                            style={{ boxShadow: '0 0 24px rgba(29,185,84,0.25)' }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                          />
                        )}
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <motion.button
                        type="submit"
                        disabled={sending || sent}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="relative w-full overflow-hidden bg-spotify-green hover:bg-spotify-green-dark text-black font-bold py-4 rounded-full shadow-lg shadow-spotify-green/30 hover:shadow-spotify-green/50 transition-shadow flex items-center justify-center gap-2 disabled:opacity-90"
                      >
                        <AnimatePresence mode="wait">
                          {sent ? (
                            <motion.span
                              key="sent"
                              initial={{ opacity: 0, scale: 0.5 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.5 }}
                              className="flex items-center gap-2"
                            >
                              <Check size={20} strokeWidth={3} />
                              Message Sent!
                            </motion.span>
                          ) : sending ? (
                            <motion.span
                              key="sending"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="flex items-center gap-2"
                            >
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                                className="w-5 h-5 border-2 border-black border-t-transparent rounded-full"
                              />
                              Sending...
                            </motion.span>
                          ) : (
                            <motion.span
                              key="idle"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="flex items-center gap-2"
                            >
                              <Send size={20} />
                              Send Message
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </motion.button>
                    </motion.div>
                  </form>
                </div>
              </Card>
            </Tilt>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
