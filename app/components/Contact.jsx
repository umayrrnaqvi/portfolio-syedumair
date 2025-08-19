"use client";

import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import toast from "react-hot-toast";
import { ShineBorder } from "@/components/magicui/shine-border";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleEmailSend = async (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      toast.error("Please fill in all fields.");
      return;
    }
    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const result = await response.json();
      if (response.ok) {
        toast.success("Email sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(result.error || "Failed to send email");
      }
    } catch (error) {
      toast.error("Failed to send email: " + error.message);
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      toast.error("Please fill in all fields before sending to WhatsApp.");
      return;
    }
    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    const fullMessage = `Name: ${name}%0AEmail: ${email}%0ASubject: ${subject}%0AMessage: ${message}`;
    const whatsappURL = `https://wa.me/923126430506?text=${fullMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-black">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
          Get in Touch
        </h2>
      </div>

      <div className="max-w-7xl mx-auto py-5 md:px-10 grid md:grid-cols-2 gap-10">
        <div className="relative rounded-lg overflow-hidden transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl">
          <ShineBorder shineColor="blue" />
          <div className="bg-gray-100 rounded-lg p-6 md:p-10 w-full dark:bg-gray-600 dark:text-white">
            <form className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full">
                  <label className="block font-semibold mb-2 dark:text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition-all duration-500"
                  />
                </div>
                <div className="w-full">
                  <label className="block font-semibold mb-2 dark:text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition-all duration-500"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold mb-2 dark:text-white">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition-all duration-500"
                />
              </div>

              <div>
                <label className="block font-semibold mb-2 dark:text-white">
                  Message
                </label>
                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition-all duration-500"
                ></textarea>
              </div>

              <div className="flex items-center justify-between gap-4">
                <button
                  type="submit"
                  onClick={handleEmailSend}
                  className="w-full bg-blue-500 text-white font-semibold py-3 px-4 rounded-md hover:bg-blue-600 shadow-md cursor-pointer flex items-center justify-center gap-2 transition-all duration-500 hover:scale-105"
                >
                  Send via Email
                </button>

                <button
                  type="button"
                  onClick={handleSendMessage}
                  className="bg-green-500 hover:bg-green-600 p-3 rounded-xl shadow-md text-white transition-all duration-500 hover:scale-110"
                  title="Send via WhatsApp"
                >
                  <FaWhatsapp className="text-2xl" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Contact Info (unchanged) */}
        <div className="flex flex-col justify-center space-y-6 px-4 md:px-0">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 dark:text-white">
              Contact Information
            </h3>
            <p className="flex items-center gap-2 text-gray-700 mb-2 hover:scale-105 duration-700 dark:text-white">
              <FiMail className="text-blue-600" /> umairnaqvi902@gmail.com
            </p>
            <p className="flex items-center gap-2 text-gray-700 mb-2 hover:scale-105 duration-700 dark:text-white">
              <FiPhone className="text-blue-600" /> +92 312-6430506
            </p>
            <p className="flex items-center gap-2 text-gray-700 hover:scale-105 duration-700 dark:text-white">
              <FiMapPin className="text-blue-600" /> Bahawalpur, Pakistan
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-4">
            <a
              href="https://github.com/umayrrnaqvi"
              className="text-gray-800 dark:text-white hover:text-blue-600 text-2xl hover:scale-110 duration-700"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/umyrr"
              className="text-gray-800 dark:text-white hover:text-blue-600 text-2xl hover:scale-110 duration-700"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/syedumyrr"
              className="text-gray-800 dark:text-white hover:text-blue-600 text-2xl hover:scale-110 duration-700"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
