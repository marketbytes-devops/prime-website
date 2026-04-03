"use client"
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import ArrowDownIcon from "@/components/Icons/ArrowDownIcon";

const faqData = [
    {
        question: "How do I get an accurate moving quote?",
        answer: "Through our online form or a quick video survey of your premises."
    },
    {
        question: "Is my furniture insured during the move?",
        answer: "Yes, we provide comprehensive insurance coverage for all your items during transit."
    },
    {
        question: "Do you provide packing materials?",
        answer: "Absolutely! We provide high-quality packing materials including boxes, bubble wrap, and structural supports."
    },
    {
        question: "Are there hidden costs for stairs or elevators?",
        answer: "We are fully transparent about our pricing. Any considerations for stairs or elevators are included in your initial quote."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="container">
            <div className="text-center mb-4 md:mb-8">
                <h2 className="mb-4 md:mb-6">
                    <span className="block pb-2 md:pb-4">
                        You've Got Questions, We've
                    </span>
                    <span>
                        Got <span className="text-red">Answer</span>
                    </span>
                </h2>
            </div>

            <div className="max-w-full mx-auto space-y-4">
                {faqData.map((item, index) => (
                    <div
                        key={index}
                        className={`rounded-[24px] overflow-hidden transition-all duration-300 ${activeIndex === index ? "bg-[#F7F7F7]" : "bg-[#F7F7F7]"}`}
                    >
                        <button
                            onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
                            className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                        >
                            <span className="text-lg md:text-xl font-medium text-black pr-4">
                                {item.question}
                            </span>
                            <div className={`transition-transform duration-300 ${activeIndex === index ? "text-red rotate-180" : "text-black"}`}>
                                <ArrowDownIcon/>
                            </div>
                        </button>

                        <AnimatePresence initial={false}>
                            {activeIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                >
                                    <div className="px-6 md:px-8 pb-8 font-medium">
                                        <p>{item.answer}</p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
