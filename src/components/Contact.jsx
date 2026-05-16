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
        "service_4qk1nvf",        // ✅ Service ID
        "template_ldkmyuf",       // ✅ Template ID
        e.target,
        "PvhhmUajvzvo4kIVP"       // ✅ Public Key
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
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Contact Me</h2>

        <p className="text-gray-300 mb-10 text-lg">
          Want to work together or have any questions?
        </p>

        <form
          onSubmit={sendEmail}
          className="bg-white/5 border border-white/10 rounded-3xl p-10 space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full bg-[#111827] border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-violet-500"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full bg-[#111827] border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-violet-500"
            required
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="w-full bg-[#111827] border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-violet-500"
            required
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl bg-violet-600 hover:bg-violet-700 transition font-semibold"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}