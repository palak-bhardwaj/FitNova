import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const My_mail = import.meta.env.VITE_MY_MAIL;

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        My_mail,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });

        setTimeout(() => setSubmitted(false), 5000);
      } else {
        console.error("Form submission failed.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section
      id="contact"
      className="bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center px-4 py-20 scroll-mt-24"
      style={{ backgroundImage: "url('/contact.jpg')" }}
    >
      <div className="w-full max-w-4xl flex flex-col lg:flex-row gap-10 items-center bg-white/90 backdrop-blur-md p-8 rounded-lg shadow-xl">
        <form onSubmit={handleSubmit} className="flex-1 w-full space-y-4">
          <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">
            Contact Us
          </h1>

          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="box" />

          {[
            { label: "Full Name", name: "name", type: "text", autoComplete: "name", required: true },
            { label: "Email", name: "email", type: "email", autoComplete: "email", required: true },
            { label: "Phone (optional)", name: "phone", type: "tel", autoComplete: "tel", required: false },
            { label: "Subject", name: "subject", type: "text", autoComplete: "on", required: true },
          ].map(({ label, name, type, autoComplete, required }) => (
            <div key={name} className="space-y-1">
              <label htmlFor={name} className="block text-gray-700 font-medium">
                {label}
              </label>
              <input
                id={name}
                name={name}
                type={type}
                value={formData[name]}
                onChange={handleChange}
                required={required}
                autoComplete={autoComplete}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder={label}
              />
            </div>
          ))}

          <div className="space-y-1">
            <label htmlFor="message" className="block text-gray-700 font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              value={formData.message}
              onChange={handleChange}
              autoComplete="on"
              className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:border-blue-500"
              placeholder="Write your message..."
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-3 bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
          >
            <FaPaperPlane /> Send Message
          </button>

          {submitted && (
            <p className="text-center text-green-600 font-medium mt-4 animate-pulse">
              ✅ Thank you! Your message has been sent.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;  