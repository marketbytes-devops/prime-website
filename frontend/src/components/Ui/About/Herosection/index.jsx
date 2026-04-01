"use client";

import React from "react";
import bannerOne from "@/assets/images/Home/banner.jpg";

const Herosection = () => {
    return (
        <section className="w-full max-w-[1240px] mx-auto px-4 xl:px-0 mt-8">
            <div className="relative w-full rounded-[32px] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] h-[450px] md:h-[650px] flex items-center justify-center">
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.4) 100%), url(${bannerOne.src})`
                    }}
                />
                
                <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 w-full max-w-[928px]">
                    <h1 className="font-bold text-[48px] md:text-[64px] leading-[54px] text-black m-0 animate-fade-in-up" style={{fontFamily: '"Lato", sans-serif'}}>
                        About Us
                    </h1>
                    
                    <p className="font-normal text-[16px] md:text-[18px] leading-[24px] text-[#787878] mt-[26px] m-0 animate-fade-in-up delay-200" style={{fontFamily: '"Poppins", sans-serif'}}>
                        Lorem ipsum dolor sit amet consectetur sit sit orci aliquet sed nulla porttitor amet auctor auctor vitae ut magna in sit dui erat urna erat amet arcu.
                    </p>
                </div>

                <style jsx>{`
                    @keyframes fade-in-up {
                        from { opacity: 0; transform: translateY(20px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                    .animate-fade-in-up {
                        animation: fade-in-up 0.8s ease-out forwards;
                    }
                    .delay-200 { animation-delay: 0.2s; }
                `}</style>
            </div>
        </section>
    );
};

export default Herosection;
