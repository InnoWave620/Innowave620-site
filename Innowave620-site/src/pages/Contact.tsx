import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [state, handleSubmit] = useForm("xpwraola");
  const [showForm, setShowForm] = useState(true);
  const [formResetKey, setFormResetKey] = useState(0); // To reset form

  // Reset form and show again after thank-you message
  useEffect(() => {
    if (state.succeeded) {
      setShowForm(false); // Hide form
      setTimeout(() => {
        setShowForm(true); // Show form again
        setFormData({ name: "", email: "", message: "" }); // Reset data
        setFormResetKey(prev => prev + 1); // Force form re-render
      }, 5000);
    }
  }, [state.succeeded]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center py-8 md:py-16 text-yellow-700">
      <section className="w-full max-w-xl px-4 md:px-8 flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h2>

        {!showForm ? (
          <p className="text-lg text-green-700 text-center p-4 rounded-lg max-w-md w-full">
            ✅ Thank you for reaching out! We'll get back to you soon.
          </p>
        ) : (
          <form
            key={formResetKey}
            onSubmit={handleSubmit}
            className="w-full rounded-2xl border border-yellow-500 p-4 md:p-6 shadow-xl flex flex-col gap-5 bg-white/20 backdrop-blur-lg"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="px-4 py-3 rounded-lg border border-yellow-500 text-yellow-700 placeholder-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-white/10 backdrop-blur-sm text-base"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="px-4 py-3 rounded-lg border border-yellow-500 text-yellow-700 placeholder-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-white/10 backdrop-blur-sm text-base"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="px-4 py-3 rounded-lg border border-yellow-500 text-yellow-700 placeholder-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none bg-white/10 backdrop-blur-sm text-base"
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />

            <button
              type="submit"
              disabled={state.submitting}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-lg transition-all duration-200 shadow-md text-base mt-2"
            >
              {state.submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </section>
    </div>
  );
};

export default Contact;
