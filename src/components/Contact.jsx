import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">
          Contact Me
        </h2>

        <p className="text-gray-300 mb-10 text-lg">
          Want to work together or have any questions?
        </p>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-10 space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-[#111827] border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-violet-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-[#111827] border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-violet-500"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full bg-[#111827] border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-violet-500"
          ></textarea>

          <button className="w-full py-4 rounded-xl bg-violet-600 hover:bg-violet-700 transition font-semibold">
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;