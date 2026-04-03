"use client"
import React from 'react';

const Form = () => {
    return (
        <form className="space-y-4 md:space-y-6">
            <div>
                <input
                    type="text"
                    placeholder="Name"
                    className="w-full bg-[#F7F7F7] border-none rounded-[12px] p-4 focus:ring-1 focus:ring-red outline-none text-black placeholder:text-gray-500 font-medium"
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full bg-[#F7F7F7] border-none rounded-[12px] p-4 focus:ring-1 focus:ring-red outline-none text-black placeholder:text-gray-500 font-medium"
                />
            </div>
            <div>
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-[#F7F7F7] border-none rounded-[12px] p-4 focus:ring-1 focus:ring-red outline-none text-black placeholder:text-gray-500 font-medium"
                />
            </div>
            <div>
                <textarea
                    placeholder="In put type of equipments"
                    rows={4}
                    className="w-full bg-[#F7F7F7] border-none rounded-[12px] p-4 focus:ring-1 focus:ring-red outline-none text-black placeholder:text-gray-500 font-medium resize-none"
                ></textarea>
            </div>
            <button
                type="submit"
                className="w-full flex items-center justify-center bg-red hover:bg-blue text-white font-[600] px-6 py-4 rounded-full transition-all duration-300 hover:shadow-md leading-none whitespace-nowrap"
            >
                Submit
            </button>
        </form>
    );
};

export default Form;
