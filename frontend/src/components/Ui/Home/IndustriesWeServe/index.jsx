"use client"
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import oilAndGas from "@/assets/images/Industries/oil-and-gas.png";
import petrochemical from "@/assets/images/Industries/petrochemical.png";
import power from "@/assets/images/Industries/power.png";
import mining from "@/assets/images/Industries/mining.png";
import construction from "@/assets/images/Industries/construction.png";
import engineering from "@/assets/images/Industries/engineering.png";

const industries = [
    {
        id: "oil-gas",
        title: "Oil & Gas",
        description: "Precision calibration and inspections for safe and efficient oil and gas operations.",
        image: oilAndGas
    },
    {
        id: "petrochemical",
        title: "Petrochemical",
        description: "Precision calibration and inspections for safe and efficient oil and gas operations. Precision calibration and inspections for safe and efficient oil and gas operations. Precision calibration and inspections for safe and efficient oil and gas operations. Precision calibration and inspections for safe and efficient oil and gas operations.",
        image: petrochemical
    },
    {
        id: "power",
        title: "Power",
        description: "Precision calibration and inspections for safe and efficient oil and gas operations.",
        image: power
    },
    {
        id: "mining",
        title: "Mining",
        description: "Precision calibration and inspections for safe and efficient oil and gas operations.",
        image: mining
    },
    {
        id: "construction",
        title: "Construction",
        description: "Precision calibration and inspections for safe and efficient oil and gas operations.",
        image: construction
    },
    {
        id: "engineering",
        title: "Engineering",
        description: "Precision calibration and inspections for safe and efficient oil and gas operations.",
        image: engineering
    }
];

const IndustriesWeServe = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    return (
        <div className="container">
            <div className="text-center mb-4 md:mb-8">
                <h2 className="mb-2 md:mb-6 block">
                    Industries We Serve
                </h2>
                <p className="mb-4 md:mb-6 max-w-3xl mx-auto">
                    We specialize in delivering comprehensive inspection and calibration services to a diverse range of industries, including:
                </p>
            </div>
            <div className="flex flex-col border-t border-black">
                {industries.map((item, index) => (
                    <div
                        key={item.id}
                        className="border-b border-black cursor-pointer group"
                        onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
                        onMouseEnter={() => setActiveIndex(index)}
                    >
                        <div className="flex flex-col md:flex-row md:items-start justify-between py-6 md:py-10 gap-x-10">
                            <div className="flex-1 w-full">
                                <h3 className={`text-2xl md:text-3xl font-bold transition-all duration-300 ${activeIndex === index ? "text-black" : "text-gray-900/60 group-hover:text-black"}`}>
                                    {item.title}
                                </h3>
                                
                                <AnimatePresence initial={false}>
                                    {activeIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                            className="overflow-hidden"
                                        >
                                            <p className="mt-4 text-gray-600 max-w-full leading-relaxed text-sm md:text-base">
                                                {item.description}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <div className="w-full md:w-1/3 lg:w-1/4">
                                <AnimatePresence mode="wait">
                                    {activeIndex === index && (
                                        <motion.div
                                            key={item.id}
                                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                            animate={{ opacity: 1, scale: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.95, y: 10 }}
                                            transition={{ duration: 0.3 }}
                                            className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-xl mt-4 md:mt-0"
                                        >
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 100vw, 400px"
                                            />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IndustriesWeServe;
