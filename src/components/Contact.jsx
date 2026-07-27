import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaCopy, FaCheck, FaPaperPlane } from 'react-icons/fa';
import {
  MAILTO,
  TEL_ID,
  TEL_MY,
  PHONE_ID,
  PHONE_MY,
  EMAIL,
} from "../constants/links";

const Contact = () => {
  const [copiedType, setCopiedType] = useState(null);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  return (
    <section
      name="contact"
      aria-label="Contact section"
      className="w-full bg-[#080c14] text-slate-300 py-20 sm:py-28 border-t border-slate-900 scroll-mt-20"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="pb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
            Contact <span className="gradient-text">Information</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg max-w-2xl">
            Whether you have a senior engineering opportunity, consultation, or project inquiry, feel free to reach out.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left Column: Direct Contact & One-Click Copy Info */}
          <div className="space-y-6">
            
            {/* Quick Copy Contact Card */}
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6">
              <h3 className="text-xl font-bold text-slate-100 pb-3 border-b border-slate-800">
                Direct Contact Channels
              </h3>

              {/* Email Row */}
              <div className="flex items-start justify-between gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800/80">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-cyan-950 text-cyan-400 border border-cyan-500/30">
                    <FaEnvelope size={18} />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block">Email Address</span>
                    <a href={MAILTO} className="text-sm sm:text-base font-semibold text-slate-100 hover:text-cyan-400 transition-colors">
                      {EMAIL}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(EMAIL, 'email')}
                  className="p-2.5 text-xs text-slate-300 hover:text-cyan-400 bg-slate-800 hover:bg-slate-700 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer no-print"
                  title="Copy email to clipboard"
                >
                  {copiedType === 'email' ? <FaCheck className="text-emerald-400" /> : <FaCopy />}
                  <span className="hidden sm:inline font-mono">{copiedType === 'email' ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              {/* Phone Malaysia Row */}
              <div className="flex items-start justify-between gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800/80">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-indigo-950 text-indigo-400 border border-indigo-500/30">
                    <FaPhoneAlt size={18} />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block">Phone (Malaysia)</span>
                    <a href={TEL_MY} className="text-sm sm:text-base font-semibold text-slate-100 hover:text-cyan-400 transition-colors font-mono">
                      +60 17-949-0797
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(PHONE_MY, 'phone_my')}
                  className="p-2.5 text-xs text-slate-300 hover:text-cyan-400 bg-slate-800 hover:bg-slate-700 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer no-print"
                  title="Copy MY phone to clipboard"
                >
                  {copiedType === 'phone_my' ? <FaCheck className="text-emerald-400" /> : <FaCopy />}
                  <span className="hidden sm:inline font-mono">{copiedType === 'phone_my' ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              {/* Phone Indonesia Row */}
              <div className="flex items-start justify-between gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800/80">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-purple-950 text-purple-400 border border-purple-500/30">
                    <FaPhoneAlt size={18} />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block">Phone (Indonesia)</span>
                    <a href={TEL_ID} className="text-sm sm:text-base font-semibold text-slate-100 hover:text-cyan-400 transition-colors font-mono">
                      +62 812-2148-3613
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(PHONE_ID, 'phone_id')}
                  className="p-2.5 text-xs text-slate-300 hover:text-cyan-400 bg-slate-800 hover:bg-slate-700 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer no-print"
                  title="Copy ID phone to clipboard"
                >
                  {copiedType === 'phone_id' ? <FaCheck className="text-emerald-400" /> : <FaCopy />}
                  <span className="hidden sm:inline font-mono">{copiedType === 'phone_id' ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              {/* Location Row */}
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-900/80 border border-slate-800/80">
                <div className="p-3 rounded-xl bg-slate-800 text-slate-300">
                  <FaMapMarkerAlt size={18} />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block">Locations</span>
                  <span className="text-sm font-semibold text-slate-200">Kuala Lumpur, Malaysia & Garut, Indonesia</span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Send Message Form */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 no-print">
            <h3 className="text-xl font-bold text-slate-100 mb-6">
              Send a Direct Message
            </h3>

            <form
              method="POST"
              action="https://getform.io/f/8b32dafc-5b4d-4ec0-8625-93188b890d34"
              className="flex flex-col gap-4"
            >
              <div>
                <label htmlFor="name" className="block text-xs font-mono text-slate-400 mb-1.5">
                  Your Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="e.g. Alex Smith"
                  required
                  className="w-full p-3.5 bg-slate-900/90 border border-slate-800 rounded-xl text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 transition-colors text-sm"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-mono text-slate-400 mb-1.5">
                  Your Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="e.g. alex@company.com"
                  required
                  className="w-full p-3.5 bg-slate-900/90 border border-slate-800 rounded-xl text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 transition-colors text-sm"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono text-slate-400 mb-1.5">
                  Message Content
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Write your project requirements or job opportunity..."
                  required
                  className="w-full p-3.5 bg-slate-900/90 border border-slate-800 rounded-xl text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 transition-colors text-sm resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 font-semibold text-white bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 rounded-xl shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <FaPaperPlane className="text-sm" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;