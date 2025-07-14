import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Join = () => {
  const location = useLocation();
  const plan = location.state?.plan || "your preferred plan";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: plan,
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
          body: JSON.stringify({
            ...formData,
            _subject: `New Join Request - ${plan}`,
            _captcha: false,
            _template: "box",
          }),
        }
      );

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          plan,
        });
      } else {
        console.error("Form submission failed.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-20"
      style={{ backgroundImage: "url('/contact.jpg')" }}
    >
      {submitted ? (
        <div className="bg-white/90 backdrop-blur-md p-8 rounded-lg shadow-lg text-center text-green-700 text-xl font-semibold max-w-md mx-auto">
          ✅ Your request has been received!
          <p className="text-sm mt-2 text-gray-700">
            We’ll contact you shortly via your email or phone to complete the
            payment and activate your gym membership.
            <br />
            Thank you for choosing <strong>FitNova 💪</strong>
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-white/90 backdrop-blur-md p-8 rounded-lg shadow-lg space-y-6"
        >
          <h1 className="text-3xl font-bold text-center text-blue-600">
            Join <span className="text-black">{plan}</span>
          </h1>

          <div className="space-y-2">
            <label htmlFor="name" className="block text-gray-700 font-medium">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              autoComplete="on"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Your Name"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              autoComplete="on"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="you@example.com"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="block text-gray-700 font-medium">Phone</label>
            <input
              id="phone"
              type="tel"
              name="phone"
              autoComplete="on"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Your Phone Number"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
          >
            Join Now
          </button>
        </form>
      )}
    </section>
  );
};

export default Join;
