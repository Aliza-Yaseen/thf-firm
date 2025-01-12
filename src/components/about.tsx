"use client"; // Ensures client-side rendering

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export default function About() {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in milliseconds)
      once: true, // Ensures animation happens only once when scrolling down
    });
  }, []);

  return (
    <div className="bg-white text-black py-32 px-6 sm:px-12" id="About">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left Column - About Us Content */}
        <div
          className="flex flex-col justify-center text-center md:text-left space-y-8"
          data-aos="fade-up" // AOS fade-up animation
        >
          <h2 className="text-5xl font-bold tracking-tight">
            About <span className="text-gray-700">THF Ventures</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-lg mx-auto md:mx-0">
            At <span className="font-semibold">THF Ventures</span>, we
            specialize in delivering cutting-edge technology solutions that
            empower businesses to grow and excel. Our mission is to bridge the
            gap between innovation and business, helping organizations transform
            their challenges into opportunities.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed max-w-lg mx-auto md:mx-0">
            From AI-driven analytics to blockchain-powered security and scalable
            cloud computing, our team of experts is dedicated to providing
            premium-quality solutions that meet the demands of today’s digital
            landscape. THF Ventures is your trusted partner for harnessing the
            power of technology.
          </p>
        </div>

        {/* Right Column - Image */}
        <div
          className="flex justify-center items-center"
          data-aos="fade-down" // AOS fade-down animation
        >
          <div className="w-full max-w-md h-auto overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/images/team.jpg"
              alt="Team working together"
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
