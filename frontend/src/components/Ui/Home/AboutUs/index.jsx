"use client";
import Image from "next/image";
import aboutImg from "@/assets/images/Home/about-us.jpg";

const AboutUs = () => {
    return (
        <div className="container">
            <div className="flex flex-col lg:flex-row items-start gap-4 md:gap-8">
                <div className="lg:w-1/2 order-2 lg:order-1">
                    <p className="mb-4 md:mb-6 uppercase block">
                        About Us
                    </p>
                    <h2 className="mb-4 md:mb-6">
                        Excellence in Every Endeavor
                    </h2>
                    <div className="space-y-2 mb-4 md:mb-6">
                        <p>
                            At Prime Group, our journey began with a vision to redefine industry standards through innovation, dedication, and excellence. Over the years, we've expanded our horizons, growing from a small enterprise into a global leader across diverse sectors.
                        </p>
                        <p>
                            Our story is one of continuous evolution, driven by a commitment to delivering unparalleled quality and customer satisfaction.
                        </p>
                    </div>
                    <button className="border-2 border-red text-red font-[600] px-10 py-3 rounded-full hover:bg-red hover:text-white transition-all duration-300">
                        See How we Innovate
                    </button>
                </div>
                <div className="lg:w-1/2 w-full order-1 lg:order-2">
                    <div className="relative w-full aspect-[16/10] sm:aspect-square md:aspect-[16/9] lg:aspect-[1.5/1] rounded-[32px] overflow-hidden shadow-2xl mb-4 md:mb-6">
                        <Image
                            src={aboutImg}
                            alt="Excellence in Every Endeavor"
                            fill
                            className="object-cover rounded-[32px]"
                            priority
                        />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                        <div className="flex flex-col items-start sm:pr-4">
                            <h4 className="mb-2">Clients satisfaction</h4>
                            <span className="text-red text-4xl xl:text-5xl font-semibold">100%</span>
                        </div>
                        <div className="flex flex-col items-start sm:px-4">
                            <h4 className="mb-2">Clients worldwide</h4>
                            <span className="text-red text-4xl xl:text-5xl font-semibold">503+</span>
                        </div>
                        <div className="flex flex-col items-start sm:pl-4">
                            <h4 className="mb-2">Years of experience</h4>
                            <span className="text-red text-4xl xl:text-5xl font-semibold">25+</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;