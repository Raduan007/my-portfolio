"use client";

import emailjs from "emailjs-com";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_4qk1nvf",
        "template_ldkmyuf",
        e.target,
        "PvhhmUajvzvo4kIVP"
      )
      .then(() => {
        setLoading(false);
        e.target.reset();
        alert("Message sent successfully!");
      })
      .catch(() => {
        setLoading(false);
        alert("Failed to send message. Try again.");
      });
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-white dark:bg-[#0B1120] transition-colors duration-300"
    >
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-500">Touch</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Have a project in mind or just want to say hi? Feel free to send me a message!
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={sendEmail}
          className="bg-gray-50 dark:bg-[#111827] border border-gray-200 dark:border-gray-800 rounded-3xl p-8 md:p-10 shadow-xl shadow-black/5 dark:shadow-black/20 transition-colors duration-300 space-y-6 relative overflow-hidden"
        >
          {/* Decorative glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-violet-500/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid md:grid-cols-2 gap-6 relative z-10">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1F2937] text-gray-900 dark:text-white px-5 py-4 outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1F2937] text-gray-900 dark:text-white px-5 py-4 outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all"
            />
          </div>

          <div className="relative z-10">
            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              required
              className="w-full rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1F2937] text-gray-900 dark:text-white px-5 py-4 outline-none resize-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:opacity-90 text-white font-bold tracking-wide transition duration-300 disabled:opacity-60 shadow-lg shadow-violet-500/30 relative z-10"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}