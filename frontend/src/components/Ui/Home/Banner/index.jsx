"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bannerOne from "@/assets/images/Home/banner.jpg";
import bannerTwo from "@/assets/images/Home/banner-innovation.jpg";
import bannerThree from "@/assets/images/Home/banner-construction.jpg";
import Link from "next/link";

const Banner = () => {
    const slides = [
        {
            image: bannerOne,
            subtitle: "Welcome to Prime Innovation",
            title: <>We Build Your <br /> <span className="text-red">Best Future</span></>,
            description: "Transforming visions into reality with innovative solutions and exceptional expertise.",
            buttonText: "See How We Innovate",
            buttonLink: "/about"
        },
        {
            image: bannerTwo,
            subtitle: "Innovation for Tomorrow",
            title: <>Engineering <br /> <span className="text-red">Excellence</span></>,
            description: "Driving success through precision, quality, and a commitment to customer satisfaction.",
            buttonText: "Explore Solutions",
            buttonLink: "/services"
        },
        {
            image: bannerThree,
            subtitle: "Sustainable Growth",
            title: <>Building a <br /> <span className="text-red">Better World</span></>,
            description: "Committed to sustainable practices and cutting-edge industrial developments.",
            buttonText: "Join Our Journey",
            buttonLink: "/contact"
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        arrows: false,
        dotsClass: "slick-dots custom-dots",
    };

    return (
        <section className="container banner-slider-section">
            <div className="relative w-full rounded-[32px] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)]">
                <Slider {...settings}>
                    {slides.map((slide, index) => (
                        <div key={index} className="relative w-full h-[450px] md:h-[650px] outline-none">
                            <div
                                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                                style={{
                                    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.5) 100%), url(${slide.image.src})`
                                }}
                            />
                            <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/60 via-black/20 to-transparent lg:block hidden" />
                            <div className="absolute inset-0 z-10 bg-black/40 lg:hidden block" />

                            <div className="relative z-20 h-full flex flex-col justify-center px-4 md:px-10 lg:pl-20 items-center text-center lg:items-start lg:text-left">
                                <div className="max-w-3xl space-y-3">
                                    <p className="!text-white animate-slide-down">
                                        {slide.subtitle}
                                    </p>
                                    <h1 className="!text-white animate-fade-in-up">
                                        {slide.title}
                                    </h1>
                                    <p className="!text-white max-w-xl mx-auto animate-fade-in-up delay-200">
                                        {slide.description}
                                    </p>
                                    <div className="pt-4 flex justify-center lg:justify-start animate-fade-in-up delay-500">
                                        <button
                                            className="flex items-center justify-center bg-red hover:bg-blue text-white font-semibold px-6 py-4 rounded-[12px] transition-all duration-300 hover:shadow-md leading-none whitespace-nowrap"
                                        >
                                            {slide.buttonText}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            <style jsx global>{`
                .banner-slider-section .custom-dots {
                    bottom: 40px !important;
                    left: 50% !important;
                    transform: translateX(-50%) !important;
                    display: flex !important;
                    align-items: center !important;
                    justify-content: center !important;
                    gap: 8px !important;
                    width: auto !important;
                }

                .banner-slider-section .custom-dots li {
                    margin: 0 !important;
                    width: auto !important;
                    height: auto !important;
                }

                .banner-slider-section .custom-dots li button {
                    width: 12px !important;
                    height: 12px !important;
                    padding: 0 !important;
                    background: #FFFFFF !important;
                    border-radius: 50% !important;
                    transition: all 0.4s ease !important;
                    opacity: 0.5 !important;
                }

                .banner-slider-section .custom-dots li button:before {
                    display: none !important;
                }

                .banner-slider-section .custom-dots li.slick-active button {
                    width: 32px !important;
                    border-radius: 100px !important;
                    background: #DA202A !important;
                    opacity: 1 !important;
                }

                /* Basic Animations for Slider Content */
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes slide-down {
                    from { opacity: 0; transform: translateY(-20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out forwards;
                }
                .animate-slide-down {
                    animation: slide-down 0.8s ease-out forwards;
                }
                .delay-200 { animation-delay: 0.2s; }
                .delay-500 { animation-delay: 0.5s; }
            `}</style>
        </section>
    );
};

export default Banner;
