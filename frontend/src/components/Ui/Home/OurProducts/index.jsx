"use client"
import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import product1 from "@/assets/images/Products/Product-1.jpg";
import product2 from "@/assets/images/Products/Product-2.jpg";
import product3 from "@/assets/images/Products/Product-3.jpg";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="absolute bottom-[-70px] lg:bottom-auto lg:top-1/2 right-[30%] sm:right-[38%] md:right-[42%] lg:-right-12 z-10 lg:-translate-y-1/2 bg-[#D9D9D9]/30 hover:bg-gray-200 text-gray-500 rounded-full p-2 cursor-pointer transition-all duration-300 shadow-sm flex items-center justify-center"
            onClick={onClick}
        >
            <MdChevronRight size={28} color="#000" />
        </div>
    );
}

const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="absolute bottom-[-70px] lg:bottom-auto lg:top-1/2 left-[30%] sm:left-[38%] md:left-[42%] lg:-left-12 z-10 lg:-translate-y-1/2 bg-[#D9D9D9]/30 hover:bg-gray-200 text-gray-500 rounded-full p-2 cursor-pointer transition-all duration-300 shadow-sm flex items-center justify-center"
            onClick={onClick}
        >
            <MdChevronLeft size={28} color="#000" />
        </div>
    );
}

const OurProducts = () => {
    const [activeTab, setActiveTab] = useState("Safety");

    const products = [
        { id: 1, image: product1, title: "3M Protecta Fall Protection" },
        { id: 2, image: product2, title: "3M Protecta Fall Protection" },
        { id: 3, image: product3, title: "3M Protecta Fall Protection" },
        { id: 4, image: product1, title: "3M Protecta Fall Protection" },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className="container">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 w-full mb-4">
                <div className="text-center lg:text-left lg:max-w-3xl">
                    <h2 className="mb-2 md:mb-4">Our products</h2>
                    <p className="mb-0 md:mb-6">
                        Lorem ipsum dolor sit amet consectetur sit sit orci aliquet sed nulla porttitor
                        amet auctor auctor vitae ut magna in sit dui erat urna erat amet arcu.
                    </p>
                </div>
                <div className="flex items-center justify-center lg:justify-end gap-2 p-2 bg-red rounded-[12px] h-fit w-full lg:w-auto">
                    <button
                        onClick={() => setActiveTab("Safety")}
                        className={`flex-1 lg:flex-none px-4 sm:px-8 py-2.5 rounded-[10px] font-semibold text-sm transition-all duration-300 ${activeTab === "Safety" ? "bg-[#2B3990] text-white" : "bg-white text-black border border-red"}`}
                    >
                        Safety
                    </button>
                    <button
                        onClick={() => setActiveTab("Electrical")}
                        className={`flex-1 lg:flex-none px-4 sm:px-8 py-2.5 rounded-[10px] font-semibold text-sm transition-all duration-300 ${activeTab === "Electrical" ? "bg-[#2B3990] text-white" : "bg-white text-black border border-red"}`}
                    >
                        Electrical
                    </button>
                    <button
                        onClick={() => setActiveTab("Lifelines")}
                        className={`flex-1 lg:flex-none px-4 sm:px-8 py-2.5 rounded-[10px] font-semibold text-sm transition-all duration-300 ${activeTab === "Lifelines" ? "bg-[#2B3990] text-white" : "bg-white text-black border border-red"}`}
                    >
                        Lifelines
                    </button>
                </div>
            </div>

            <div className="product-slider relative pb-8 lg:pb-0">
                <Slider {...settings}>
                    {products.map((p) => (
                        <div key={p.id} className="p-2 md:p-4 outline-none">
                            <div className="bg-[#D9D9D94D]/30 space-y-4 p-4 rounded-[32px] flex flex-col items-center shadow shadow-black/10 hover:shadow-lg transition-shadow duration-300 h-full">
                                <div className="relative w-full aspect-square overflow-hidden rounded-[32px]">
                                    <Image
                                        src={p.image}
                                        alt={p.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h4 className="text-center text-lg font-bold">
                                    {p.title}
                                </h4>
                                <button className="mb-4 bg-red hover:bg-blue text-white font-[600] px-8 py-4 rounded-full transition-all duration-300 hover:shadow-md leading-none">
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            <div className="mt-16 md:mt-16 text-center">
                <button
                    className="border-2 border-black hover:border-red text-red font-[600] px-10 py-4 rounded-full hover:bg-red hover:text-white transition-all duration-300"
                >
                    View All
                </button>
            </div>

            <style jsx global>{`
                .product-slider .slick-list {
                    margin: 0 -0.5rem;
                }
                @media (min-width: 768px) {
                    .product-slider .slick-list {
                        margin: 0 -1rem;
                    }
                }
                @media (min-width: 1024px) {
                    .product-slider .slick-list {
                        margin: 0 -2.5rem;
                    }
                }
                .product-slider .slick-track {
                    display: flex !important;
                }
                .product-slider .slick-slide {
                    height: inherit !important;
                }
                .product-slider .slick-slide > div {
                    height: 100%;
                }
            `}</style>
        </div>
    );
};

export default OurProducts;