import React, { useState } from "react";

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Integrate with API or email service here
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center py-8 md:py-16 bg-transparent text-yellow-700">
      <section className="w-full max-w-xl px-4 md:px-8 flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Contact Us</h2>
        {submitted ? (
          <p className="text-base md:text-lg text-green-600 bg-white/20 p-4 rounded-lg backdrop-blur-md shadow">
            Thank you for reaching out! We'll get back to you soon.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="w-full rounded-2xl border border-yellow-500 p-4 md:p-6 shadow-xl flex flex-col gap-4 md:gap-5
              bg-white/20 backdrop-blur-lg"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="px-3 md:px-4 py-2 md:py-3 rounded-lg border border-yellow-500 text-yellow-700 placeholder-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-white/10 backdrop-blur-sm text-sm md:text-base"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="px-3 md:px-4 py-2 md:py-3 rounded-lg border border-yellow-500 text-yellow-700 placeholder-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-white/10 backdrop-blur-sm text-sm md:text-base"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              rows={4}
              className="px-3 md:px-4 py-2 md:py-3 rounded-lg border border-yellow-500 text-yellow-700 placeholder-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none bg-white/10 backdrop-blur-sm text-sm md:text-base"
            />
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 md:py-3 rounded-lg transition-all duration-200 shadow-md text-sm md:text-base mt-2"
            >
              Send Message
            </button>
          </form>
        )}
      </section>
    </div>
  );
};

export default Contact;
