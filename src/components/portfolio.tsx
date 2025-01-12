"use client";

import { useState, useEffect } from "react";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

export default function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    {
      url: "https://mdbcdn.b-cdn.net/img/new/slides/041.webp",
      title: "Lorem ipsum dolor sit amet",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      url: "https://mdbcdn.b-cdn.net/img/new/slides/042.webp",
      title: "Lorem ipsum dolor sit amet",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      url: "https://mdbcdn.b-cdn.net/img/new/slides/043.webp",
      title: "Lorem ipsum dolor sit amet",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    AOS.init(); // Initialize AOS when component is mounted
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-100 text-gray-800" id="Portfolio">
      {/* Portfolio Header Section */}
      <div
        className="text-center py-16 px-6"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1 className="text-5xl font-bold tracking-tight mb-4">
          Our Professional Portfolio
        </h1>
        <p className="text-lg font-medium text-gray-600">
          Explore Our curated gallery of projects. Click the thumbnail to view
          details.
        </p>
      </div>

      {/* Portfolio Thumbnail */}
      <div
        className="flex justify-center items-center py-8 zoom-out-down"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <div
          onClick={openModal}
          className="cursor-pointer flex justify-center items-center bg-white border border-gray-300 shadow-lg hover:shadow-2xl hover:scale-105 transform transition duration-300 rounded-lg overflow-hidden"
          style={{ width: "450px", height: "300px" }}
        >
          <img
            src={images[0].url}
            alt="Thumbnail"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          onClick={closeModal}
          className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50"
          data-aos="fade-in"
          data-aos-duration="1000"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white w-[90%] p-4 sm:p-6 rounded-2xl shadow-2xl max-h-[90vh] overflow-hidden transform transition-all duration-500 h-auto"
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 bg-gray-300 text-gray-700 rounded-full hover:bg-gray-400 hover:text-black z-10"
            >
              X
            </button>

            {/* Modal Content */}
            <div className="flex flex-wrap max-h-[75vh] overflow-y-auto">
              {/* Carousel Column */}
              <div className="w-full sm:w-1/2 p-2" data-aos="fade-right" data-aos-duration="1000">
                <div className="relative">
                  <div className="relative w-full overflow-hidden rounded-xl">
                    <div className="relative w-full">
                      <img
                        src={images[activeIndex].url}
                        className="block w-full h-full object-cover transition-all duration-500 ease-in-out"
                        alt="Slide"
                      />
                      <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                        {/* <button className="text-white text-xl font-semibold transform transition duration-300 hover:scale-110">
                          Preview
                        </button> */}
                      </div>
                    </div>
                  </div>

                  {/* Carousel controls */}
                  <button
                    onClick={prevSlide}
                    className="absolute top-0 left-0 z-[1] flex items-center justify-center w-[15%] h-full bg-transparent text-gray-700 opacity-50 hover:opacity-90 transition-all duration-150"
                    type="button"
                  >
                    <span className="inline-block h-8 w-8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 19.5L8.25 12l7.5-7.5"
                        />
                      </svg>
                    </span>
                  </button>

                  <button
                    onClick={nextSlide}
                    className="absolute top-0 right-0 z-[1] flex items-center justify-center w-[15%] h-full bg-transparent text-gray-700 opacity-50 hover:opacity-90 transition-all duration-150"
                    type="button"
                  >
                    <span className="inline-block h-8 w-8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </span>
                  </button>
                </div>

                {/* Caption below the slide */}
                <div className="text-center mt-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {images[activeIndex].title}
                  </h3>
                  <p className="text-gray-600">{images[activeIndex].description}</p>
                </div>
              </div>

              {/* Content Column */}
              <div className="w-full sm:w-1/2 p-2" data-aos="fade-left" data-aos-duration="1000">
                <h2 className="text-3xl font-bold text-gray-800">
                  Project Details
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Explore Best  project’s  details. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quasi esse vitae veritatis eos aliquid modi assumenda aspernatur a hic, veniam recusandae dolores pariatur! Dignissimos animi optio nemo et temporibus.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
