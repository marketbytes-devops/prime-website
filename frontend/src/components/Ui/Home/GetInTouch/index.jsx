"use client"
import React from 'react';
import Image from 'next/image';
import Form from './Form';
import getInTouchImg from "@/assets/images/Form/get-in-touch.jpg";

const GetInTouch = () => {
    return (
        <div className="container">
            <div className="text-center mb-4 md:mb-10">
                <h2 className="mb-2 md:mb-6 block">
                    Get In Touch
                </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-stretch">
                {/* Left Side: Image */}
                <div className="relative aspect-[4/3] lg:aspect-auto h-full rounded-[32px] overflow-hidden shadow-lg shadow-black/5">
                    <Image
                        src={getInTouchImg}
                        alt="Contact Us - Industrial Facility"
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority
                    />
                </div>

                {/* Right Side: Form */}
                <div className="bg-white p-4 md:p-8 lg:p-0 rounded-[32px] flex flex-col justify-center">
                    <Form />
                </div>
            </div>
        </div>
    );
};

export default GetInTouch;
