"use client";
import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        const init = async () => {
            const { Carousel, initTWE } = await import("tw-elements");
            initTWE({ Carousel });
        };
        init();
    }, []);

    return (
        <div
            id="carouselExampleCaptions"
            className="relative"
            data-twe-carousel-init
            data-twe-ride="carousel"
            
        >
            {/* Carousel Indicators */}
            <div
                className="absolute bottom-4 left-0 right-0 z-[2] flex list-none justify-center"
                id="Home"
                data-twe-carousel-indicators
            >
                <button
                    type="button"
                    data-twe-target="#carouselExampleCaptions"
                    data-twe-slide-to="0"
                    data-twe-carousel-active
                    className="mx-[3px] h-[10px] w-[10px] rounded-full bg-white opacity-50 transition-opacity duration-300 ease-in-out hover:opacity-100"
                    aria-current="true"
                    aria-label="Slide 1"
                ></button>
                <button
                    type="button"
                    data-twe-target="#carouselExampleCaptions"
                    data-twe-slide-to="1"
                    className="mx-[3px] h-[10px] w-[10px] rounded-full bg-white opacity-50 transition-opacity duration-300 ease-in-out hover:opacity-100"
                    aria-label="Slide 2"
                ></button>
                <button
                    type="button"
                    data-twe-target="#carouselExampleCaptions"
                    data-twe-slide-to="2"
                    className="mx-[3px] h-[10px] w-[10px] rounded-full bg-white opacity-50 transition-opacity duration-300 ease-in-out hover:opacity-100"
                    aria-label="Slide 3"
                ></button>
            </div>

            {/* Carousel Items */}
            <div className="relative w-full overflow-hidden">
                {/* First Item (Video) */}
                <div
                    className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out"
                    data-twe-carousel-active
                    data-twe-carousel-item
                >
                    <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
                        <video
                            className="object-cover w-full h-full"
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            <source src="/images/small.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6 sm:px-8 md:px-10">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 text-center">
                            Welcome to THF Ventures
                        </h1>
                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 text-center">
                            Driving Innovation, Empowering Businesses
                        </h3>
                        <p className="text-center text-sm sm:text-lg md:text-xl max-w-[90%] sm:max-w-[80%] md:max-w-[70%]">
                            Unlock your business potential with our expertise in cloud
                            computing, artificial intelligence, and digital
                            transformation.
                        </p>
                    </div>
                </div>

                {/* Second Item */}
                <div
                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out"
                    data-twe-carousel-item
                >
                    <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
                        <video
                            className="object-cover w-full h-full"
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            <source src="/images/small.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6 sm:px-8 md:px-10">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 text-center">
                            Our Expertise, Your Growth
                        </h1>
                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 text-center">
                            Tech That Transforms, Solutions That Scale
                        </h3>
                        <p className="text-center text-sm sm:text-lg md:text-xl max-w-[90%] sm:max-w-[80%] md:max-w-[70%]">
                            Unlock your business potential with our expertise in cloud
                            computing, artificial intelligence, and digital
                            transformation.
                        </p>
                    </div>
                </div>

                {/* Third Item */}
                <div
                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out"
                    data-twe-carousel-item
                >
                    <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
                        <video
                            className="object-cover w-full h-full"
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            <source src="/images/small.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6 sm:px-8 md:px-10">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 text-center">
                            Building the Future Together
                        </h1>
                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 text-center">
                            Your Vision, Our Innovation
                        </h3>
                        <p className="text-center text-sm sm:text-lg md:text-xl max-w-[90%] sm:max-w-[80%] md:max-w-[70%]">
                            Whether you are looking to scale your operations or
                            revolutionize your industry, THF Ventures is your partner in
                            success.
                        </p>
                    </div>
                </div>
            </div>

            {/* Prev Button */}
            <button
                className="absolute left-4 top-1/2 z-[3] -translate-y-1/2 text-white bg-black/50 p-3 rounded-full hover:bg-black/75"
                type="button"
                data-twe-target="#carouselExampleCaptions"
                data-twe-slide="prev"
            >
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
                <span className="sr-only">Previous</span>
            </button>

            {/* Next Button */}
            <button
                className="absolute right-4 top-1/2 z-[3] -translate-y-1/2 text-white bg-black/50 p-3 rounded-full hover:bg-black/75"
                type="button"
                data-twe-target="#carouselExampleCaptions"
                data-twe-slide="next"
            >
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
                <span className="sr-only">Next</span>
            </button>
        </div>
    );
};

export default Home;
