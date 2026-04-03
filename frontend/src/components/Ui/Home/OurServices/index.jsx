"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as MdIcons from "react-icons/md";
import servicesData from "@/data/services.json";

const OurServices = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="container overflow-hidden pb-12 sm:pb-0">
            <div className="mb-4 md:mb-10 flex flex-col items-center text-center lg:items-start lg:text-left">
                <p className="mb-2 md:mb-4 uppercase block">
                    Our Services
                </p>
                <h2>
                    A comprehensive set of services
                </h2>
            </div>

            <div className="services-slider-container relative">
                <Slider {...settings}>
                    {servicesData.map((service) => {
                        const Icon = MdIcons[service.icon] || MdIcons.MdHelpOutline;
                        return (
                            <div key={service.id} className="group px-4 h-full">
                                <div className="mx-1 relative pl-4 md:pl-6 pt-4 md:pt-8 h-full flex flex-col items-start border-l border-black hover:border-red transition-all duration-400">
                                    <div className="flex justify-between items-center w-full mb-4 md:mb-6">
                                        <h3 className="group-hover:text-red transition-colors duration-300">
                                            {service.title}
                                        </h3>
                                        <div className="text-4xl text-red pl-2 transition-all duration-300">
                                            <Icon />
                                        </div>
                                    </div>

                                    <p className="mb-4 md:mb-8 flex-grow">
                                        {service.description}
                                    </p>

                                    <button
                                        className="border-2 border-black hover:border-red text-red font-[600] px-6 py-4 rounded-full hover:bg-red hover:text-white transition-all duration-300"
                                    >
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </Slider>
            </div>

            <style jsx global>{`
                .services-slider-container .slick-list {
                    margin: 0 -1rem;
                }
                .services-slider-container .slick-track {
                    display: flex !important;
                }
                .services-slider-container .slick-slide {
                    height: inherit !important;
                }
                .services-slider-container .slick-slide > div {
                    height: 100%;
                }
                .services-slider-container .slick-dots {
                    bottom: -50px;
                }
                .services-slider-container .slick-dots li button:before {
                    color: var(--brand-red, #DA202A);
                    font-size: 10px;
                    opacity: 0.25;
                }
                .services-slider-container .slick-dots li.slick-active button:before {
                    color: var(--brand-red, #DA202A);
                    opacity: 1;
                }
            `}</style>
        </div>
    );
};

export default OurServices;