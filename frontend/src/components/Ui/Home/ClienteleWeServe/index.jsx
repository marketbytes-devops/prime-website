"use client"
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import logo1 from "@/assets/images/Home/client-logo-1.png";
import logo2 from "@/assets/images/Home/client-logo-2.png";
import logo3 from "@/assets/images/Home/client-logo-3.png";
import logo4 from "@/assets/images/Home/client-logo-4.png";
import logo5 from "@/assets/images/Home/client-logo-5.png";
import logo6 from "@/assets/images/Home/client-logo-6.png";
import logo7 from "@/assets/images/Home/client-logo-7.png";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

const ClienteleWeServe = () => {
    return (
        <div className="py-6 md:py-24 bg-[#F2F2F2] overflow-hidden">
            <div className="container">
                <div className="text-center mb-4 md:mb-8">
                    <h2 className="mb-2 md:mb-6 block">
                        Clientele We Serve
                    </h2>
                    <p className="mb-4 md:mb-6 max-w-5xl mx-auto">
                        We proudly serve a diverse range of clients across industries, delivering tailored solutions with exceptional service. Our commitment ensures satisfaction and success for every partnership.
                    </p>
                </div>
            </div>

            {/* Marquee effect for logos */}
            <div className="relative flex overflow-hidden pt-2 md:pt-12">
                {/* Gradient Overlays */}
                <div className="absolute top-0 left-0 bottom-0 w-20 md:w-60 bg-gradient-to-r from-[#F2F2F2] to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 right-0 bottom-0 w-20 md:w-60 bg-gradient-to-l from-[#F2F2F2] to-transparent z-10 pointer-events-none" />

                <motion.div
                    animate={{
                        x: [0, -1800],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 35,
                            ease: "linear",
                        },
                    }}
                    className="flex flex-none gap-6 md:gap-10 items-center px-4 md:px-8"
                >
                    {[...logos, ...logos, ...logos].map((logo, index) => (
                        <div
                            key={index}
                            className="flex-none transition-all duration-500 cursor-pointer"
                        >
                            <div className="bg-black/5 shadow-sm rounded-xl px-4 md:px-8 py-3 md:py-6 h-20 md:h-32 flex items-center justify-center min-w-[140px] md:min-w-[220px]">
                                <div className="relative w-full h-full">
                                    <Image
                                        src={logo}
                                        alt={`Client Logo ${index + 1}`}
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 768px) 140px, 220px"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default ClienteleWeServe;
