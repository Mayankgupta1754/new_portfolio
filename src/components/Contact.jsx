import React from 'react';
import { Card } from './ui/card';
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Clock,
  Github,
  Linkedin,
  Send,
} from 'lucide-react';
import { contactData, profileData } from '../data/mock';
import { Button } from './ui/button';

const Contact = ({ setActiveSection }) => {
  return (
    <div className="min-h-screen p-6 lg:p-8">
      {/* Back Button */}
      <Button
        onClick={() => setActiveSection('home')}
        variant="ghost"
        className="mb-6 text-gray-400 hover:text-spotify-green transition-colors"
      >
        <ArrowLeft size={20} className="mr-2" />
        Back to Home
      </Button>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
          Contact Me
        </h1>
        <div className="w-20 h-1 bg-spotify-green rounded"></div>
        <p className="text-gray-400 mt-4 text-lg">
          Let's connect and create something amazing together
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Contact Info */}
        <div className="space-y-6">
          <Card className="bg-spotify-card border-none p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-spotify-green flex items-center justify-center">
                <Mail size={24} className="text-black" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <a
                  href={`mailto:${contactData.email}`}
                  className="text-white font-semibold hover:text-spotify-green transition-colors"
                >
                  {contactData.email}
                </a>
              </div>
            </div>
          </Card>

          <Card className="bg-spotify-card border-none p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                <Phone size={24} className="text-white" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Phone</p>
                <a
                  href={`tel:${contactData.phone}`}
                  className="text-white font-semibold hover:text-spotify-green transition-colors"
                >
                  {contactData.phone}
                </a>
              </div>
            </div>
          </Card>

          <Card className="bg-spotify-card border-none p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center">
                <MapPin size={24} className="text-white" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Location</p>
                <p className="text-white font-semibold">
                  {contactData.location}
                </p>
              </div>
            </div>
          </Card>

          <Card className="bg-spotify-card border-none p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center">
                <Clock size={24} className="text-white" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Availability</p>
                <p className="text-white font-semibold">
                  {contactData.availability}
                </p>
              </div>
            </div>
          </Card>

          {/* Social Links */}
          <Card className="bg-spotify-card border-none p-6">
            <h3 className="text-white font-semibold mb-4">
              Connect with me
            </h3>
            <div className="flex gap-4">
              <a
                href={profileData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-spotify-dark flex items-center justify-center text-gray-400 hover:text-spotify-green transition-all"
              >
                <Github size={24} />
              </a>
              <a
                href={profileData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-spotify-dark flex items-center justify-center text-gray-400 hover:text-spotify-green transition-all"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={`mailto:${contactData.email}`}
                className="w-12 h-12 rounded-full bg-spotify-dark flex items-center justify-center text-gray-400 hover:text-spotify-green transition-all"
              >
                <Mail size={24} />
              </a>
            </div>
          </Card>
        </div>

        {/* Contact Form */}
        <Card className="bg-spotify-card border-none p-8">
          <h2 className="text-2xl font-bold text-white mb-6">
            Send a Message
          </h2>

          <form
  className="space-y-4"
  onSubmit={(e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;

    const yourEmail = 'themayankgupta17@gmail.com';

    const gmailURL =
      `https://mail.google.com/mail/?view=cm&fs=1` +
      `&to=${encodeURIComponent(yourEmail)}` +
      `&su=${encodeURIComponent(`Portfolio Contact: ${subject}`)}` +
      `&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      )}`;

    window.open(gmailURL, '_blank');
  }}
>

            <div>
              <label
                htmlFor="name"
                className="text-gray-400 text-sm block mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-spotify-dark border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-spotify-green"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="text-gray-400 text-sm block mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-spotify-dark border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-spotify-green"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="text-gray-400 text-sm block mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full bg-spotify-dark border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-spotify-green"
                placeholder="What's this about?"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="text-gray-400 text-sm block mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full bg-spotify-dark border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-spotify-green resize-none"
                placeholder="Your message..."
                required
              ></textarea>
            </div>

            <Button
              type="submit"
              className="w-full bg-spotify-green hover:bg-spotify-green-dark text-black font-semibold py-3"
            >
              <Send size={18} className="mr-2" />
              Send Email
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
