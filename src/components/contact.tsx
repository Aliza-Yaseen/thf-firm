
"use client";
import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaChrome,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const form = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing function
      once: true, // Only animate once
    });
  }, []);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id",
        "your_template_id",
        form.current!,
        "your_public_key"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Your message has been sent successfully!");
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("Failed to send your message. Please try again later.");
        }
      );
  };

  return (
    <section className="bg-gray-50 py-16 px-6" id="Contact">
      {/* Heading and Paragraph */}
      <div
        className="text-center mb-16"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-bold mb-4 text-black">
          Connect with Our Team
        </h2>
        <p className="text-lg text-gray-600 w-full sm:w-[70%] md:w-[50%] mx-auto pb-4 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ready to take
          the next step? Let’s get in touch and make things happen!
        </p>
      </div>

      {/* 2-Column Layout Left Side: Contact Form */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div
          className="bg-white p-10 rounded-lg shadow-lg"
          data-aos="fade-right"
        >
          <h3 className="text-3xl font-semibold mb-6 text-black">
            Get in Touch with Us
          </h3>
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Your name"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Your email"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-600 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Your message"
                rows={5}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-black text-white font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-black hover:border hover:border-black transition-all"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Side: Contact Details */}
        <div data-aos="fade-left">
          <h3 className="text-3xl font-semibold mb-6 text-black">
            Contact Our Team
          </h3>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            We’re here to assist you with all your queries and support needs.
            Our team is ready to help.
          </p>

          {/* Contact Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Address Card */}
            <div className="flex items-center bg-white p-5 rounded-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="h-10 w-[25%] px-2 flex items-center justify-center bg-gray-900 rounded mr-5">
                <FaMapMarkerAlt className="text-xl text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-black">Address</h4>
                <p className="text-gray-600">
                  123 Main Street, Karachi Pakistan
                </p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="flex items-center bg-white p-5 rounded-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="h-10 w-[25%] px-2 flex items-center justify-center bg-gray-900 rounded mr-5">
                <FaPhoneAlt className="text-xl text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-black">Mobile</h4>
                <p className="text-gray-600">+123 456 7890</p>
              </div>
            </div>

            {/* Availability Card */}
            <div className="flex items-center bg-white p-5 rounded-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="h-10 w-[25%] px-2 flex items-center justify-center bg-gray-900 rounded mr-5">
                <FaClock className="text-xl text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-black">
                  Availability
                </h4>
                <p className="text-gray-600">Mon - Fri: 9:00 AM - 5:00 PM</p>
              </div>
            </div>

            {/* Email Card */}
            <div className="flex items-center bg-white p-5 rounded-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="h-10 w-[25%] px-2 flex items-center justify-center bg-gray-900 text-white rounded mr-5">
                <FaEnvelope className="text-xl text-white" />
              </div>
              <div className="w-[75%]">
                <h4 className="font-semibold text-lg text-black">Email</h4>
                <p className="text-gray-600 break-words overflow-hidden text-ellipsis">
                  fahim@thfventures.com
                </p>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="mt-6 flex flex-col sm:flex-row sm:justify-between items-center space-y-6 sm:space-y-0">
            <h4 className="text-xl font-semibold text-black">Social Media</h4>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-black bg-white p-4 rounded-lg border border-gray-200 shadow-lg hover:bg-black hover:text-white transition-all"
              >
                <FaFacebook className="text-2xl" />
              </a>
              <a
                href="#"
                className="text-black bg-white p-4 rounded-lg border border-gray-200 shadow-lg hover:bg-black hover:text-white transition-all"
              >
                <FaTwitter className="text-2xl" />
              </a>
              <a
                href="#"
                className="text-black bg-white p-4 rounded-lg border border-gray-200 shadow-lg hover:bg-black hover:text-white transition-all"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a
                href="#"
                className="text-black bg-white p-4 rounded-lg border border-gray-200 shadow-lg hover:bg-black hover:text-white transition-all"
              >
                <FaChrome className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
