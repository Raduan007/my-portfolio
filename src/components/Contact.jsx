"use client";

import emailjs from "emailjs-com";
import { useState } from "react";

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
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-6">
          Contact Me
        </h2>

        <p className="text-center text-gray-600 dark:text-gray-300 mb-10 text-lg">
          Want to work together or have any questions? Feel free to send me a
          message.
        </p>

        <form
          onSubmit={sendEmail}
          className="bg-gray-100 dark:bg-[#111827] border border-gray-200 dark:border-gray-700 rounded-3xl p-8 md:p-10 shadow-lg transition-colors duration-300 space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1F2937] text-gray-900 dark:text-white px-5 py-4 outline-none focus:ring-2 focus:ring-violet-500 transition"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1F2937] text-gray-900 dark:text-white px-5 py-4 outline-none focus:ring-2 focus:ring-violet-500 transition"
          />

          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            required
            className="w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1F2937] text-gray-900 dark:text-white px-5 py-4 outline-none resize-none focus:ring-2 focus:ring-violet-500 transition"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-semibold transition duration-300 disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}