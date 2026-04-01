"use client";
import Image from "next/image";
import aboutImg from "@/assets/images/Home/about-us.jpg";

const AboutUs = () => {
    return (
        <div className="container">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 md:gap-8">
                <div className="lg:w-1/2 flex flex-col items-center text-center lg:items-start lg:text-left order-1 lg:order-2">
                    <p className="mb-2 md:mb-4 uppercase block">
                        About Us
                    </p>
                    <h2 className="mb-4 md:mb-6">
                        Excellence in Every Endeavor
                    </h2>
                    <div className="space-y-4 mb-4 md:mb-6 text-gray max-w-xl">
                        <p>
                            At Prime Group, our journey began with a vision to redefine industry standards through innovation, dedication, and excellence. Over the years, we've expanded our horizons, growing from a small enterprise into a global leader across diverse sectors.
                        </p>
                        <p>
                            Our story is one of continuous evolution, driven by a commitment to delivering unparalleled quality and customer satisfaction.
                        </p>
                    </div>
                    <button className="border-2 border-red text-red font-[600] px-6 py-4 rounded-full hover:bg-red hover:text-white transition-all duration-300">
                        See How we Innovate
                    </button>
                </div>
                <div className="lg:w-1/2 w-full order-1 lg:order-2">
                    <div className="relative w-full aspect-[16/10] sm:aspect-square md:aspect-[16/6] rounded-[32px] overflow-hidden shadow-2xl mb-4 md:mb-6">
                        <Image
                            src={aboutImg}
                            alt="Excellence in Every Endeavor"
                            fill
                            className="object-cover rounded-[32px]"
                            priority
                        />
                    </div>
                    <div className="flex flex-col sm:flex-row items-center sm:items-stretch mt-4 md:mt-6 gap-y-4 sm:gap-0">
                        <div className="flex flex-col items-center sm:items-start text-center sm:text-left sm:pr-12">
                            <h4 className="mb-2 md:mb-4 max-w-[140px] leading-snug">Clients satisfaction</h4>
                            <span className="text-black text-2xl md:text-6xl font-semibold tracking-tight">100<span className="text-red">%</span></span>
                        </div>
                        <div className="hidden sm:block w-[2.5px] bg-gradient-to-b from-[#000000]/0 via-[#333333]/30 to-[#666666]/0" />
                        <div className="flex flex-col items-center sm:items-start text-center sm:text-left sm:px-12">
                            <h4 className="mb-2 md:mb-4 max-w-[140px] leading-snug">Clients worldwide</h4>
                            <span className="text-black text-2xl md:text-6xl font-semibold tracking-tight">503<span className="text-red">+</span></span>
                        </div>
                        <div className="hidden sm:block w-[2.5px] bg-gradient-to-b from-[#000000]/0 via-[#333333]/30 to-[#666666]/0" />
                        <div className="flex flex-col items-center sm:items-start text-center sm:text-left sm:pl-12">
                            <h4 className="mb-2 md:mb-4 max-w-[140px] leading-snug">Years of experience</h4>
                            <span className="text-black text-2xl md:text-6xl font-semibold tracking-tight">25<span className="text-red">+</span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;