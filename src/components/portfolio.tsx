
// "use client";

// import { useState } from 'react';

// export default function Portfolio() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [activeIndex, setActiveIndex] = useState(0);

//   const images = [
//     "https://mdbcdn.b-cdn.net/img/new/slides/041.webp",
//     "https://mdbcdn.b-cdn.net/img/new/slides/042.webp",
//     "https://mdbcdn.b-cdn.net/img/new/slides/043.webp",
//   ];

//   // Function to handle the opening of the modal
//   const openModal = () => setIsModalOpen(true);

//   // Function to handle the closing of the modal
//   const closeModal = () => setIsModalOpen(false);

//   // Function to go to the next slide
//   const nextSlide = () => {
//     setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   // Function to go to the previous slide
//   const prevSlide = () => {
//     setActiveIndex(
//       (prevIndex) => (prevIndex - 1 + images.length) % images.length
//     );
//   };

//   return (
//     <div className="relative">
//       {/* Portfolio Thumbnails */}
//       <div className="w-full sm:w-1/2 p-4">
//         <div
//           onClick={openModal}
//           className="cursor-pointer flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:shadow-lg transform transition duration-300 rounded-xl overflow-hidden"
//         >
//           <img
//             src={images[0]} // Display the first image thumbnail
//             alt="Thumbnail"
//             className="w-32 h-32 object-cover transform transition duration-300 hover:scale-110"
//           />
//         </div>
//       </div>

//       {/* Modal */}
//       {isModalOpen && (
//         <div
//           onClick={closeModal}
//           className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
//         >
//           <div
//             onClick={(e) => e.stopPropagation()} // Prevent modal close on clicking inside modal content
//             className="relative bg-white w-[90%] sm:w-[90%] md:w-[80%] p-4 sm:p-6 rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 opacity-100 max-h-[80vh] md:max-h-[80vh] h-auto"
//           >
//             {/* Close Button */}
//             <button
//               onClick={closeModal}
//               className="absolute top-4 right-4 p-2 bg-black text-white rounded-full sm:rounded-lg z-10"
//             >
//               X
//             </button>

//             {/* Portfolio Section Inside Modal */}
//             <div className="flex flex-wrap max-h-[70vh] overflow-y-auto">
//               {/* Carousel Column */}
//               <div className="w-full sm:w-1/2 p-2">
//                 <div className="relative">
//                   {/* Carousel items */}
//                   <div className="relative w-full overflow-hidden rounded-xl">
//                     <div className="relative w-full">
//                       <img
//                         src={images[activeIndex]}
//                         className="block w-full h-full object-cover transition-all duration-500 ease-in-out"
//                         alt="Slide"
//                       />
//                       <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity duration-300">
//                         <button className="text-white text-xl font-semibold transform transition duration-300 hover:scale-110">
//                           Preview
//                         </button>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Carousel controls */}
//                   <button
//                     onClick={prevSlide}
//                     className="absolute top-0 left-0 z-[1] flex items-center justify-center w-[15%] h-full bg-transparent text-white opacity-50 hover:opacity-90 transition-all duration-150"
//                     type="button"
//                   >
//                     <span className="inline-block h-8 w-8">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         strokeWidth="1.5"
//                         stroke="currentColor"
//                         className="h-6 w-6"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M15.75 19.5L8.25 12l7.5-7.5"
//                         />
//                       </svg>
//                     </span>
//                   </button>

//                   <button
//                     onClick={nextSlide}
//                     className="absolute top-0 right-0 z-[1] flex items-center justify-center w-[15%] h-full bg-transparent text-white opacity-50 hover:opacity-90 transition-all duration-150"
//                     type="button"
//                   >
//                     <span className="inline-block h-8 w-8">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         strokeWidth="1.5"
//                         stroke="currentColor"
//                         className="h-6 w-6"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M8.25 4.5l7.5 7.5-7.5 7.5"
//                         />
//                       </svg>
//                     </span>
//                   </button>
//                 </div>
//               </div>

//               {/* Content Column */}
//               <div className="w-full sm:w-1/2 p-2">
//                 <h2 className="text-3xl font-extrabold text-gray-800">Portfolio Content</h2>
//                 <p className="mt-4 text-lg text-gray-600">
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias odit ea hic fuga quas
//                   error eveniet explicabo corrupti vitae voluptatibus, laboriosam odio molestiae doloremque
//                   non incidunt, consectetur dolorum quidem minima? Let s make this more readable and engaging.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }




"use client";

import { useState } from "react";

export default function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    "https://mdbcdn.b-cdn.net/img/new/slides/041.webp",
    "https://mdbcdn.b-cdn.net/img/new/slides/042.webp",
    "https://mdbcdn.b-cdn.net/img/new/slides/043.webp",
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

  return (
    <div className="relative min-h-screen bg-gray-100 text-gray-800" id="Portfolio">
      {/* Portfolio Header Section */}
      <div className="text-center py-16 px-6">
        <h1 className="text-5xl font-bold tracking-tight mb-4">
          My Professional Portfolio
        </h1>
        <p className="text-lg font-medium text-gray-600">
          Explore my curated gallery of projects. Click the thumbnail to view
          details.
        </p>
      </div>

      {/* Portfolio Thumbnail */}
      <div className="flex justify-center items-center py-8">
        <div
          onClick={openModal}
          className="cursor-pointer flex justify-center items-center bg-white border border-gray-300 shadow-lg hover:shadow-2xl hover:scale-105 transform transition duration-300 rounded-lg overflow-hidden"
          style={{ width: "450px", height: "300px" }}
        >
          <img
            src={images[0]}
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
              <div className="w-full sm:w-1/2 p-2">
                <div className="relative">
                  <div className="relative w-full overflow-hidden rounded-xl">
                    <div className="relative w-full">
                      <img
                        src={images[activeIndex]}
                        className="block w-full h-full object-cover transition-all duration-500 ease-in-out"
                        alt="Slide"
                      />
                      <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <button className="text-white text-xl font-semibold transform transition duration-300 hover:scale-110">
                          Preview
                        </button>
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
              </div>

              {/* Content Column */}
              <div className="w-full sm:w-1/2 p-2">
                <h2 className="text-3xl font-bold text-gray-800">
                  Project Details
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Explore this project’s finer details. Each creation embodies
                  quality, attention to detail, and a touch of innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
