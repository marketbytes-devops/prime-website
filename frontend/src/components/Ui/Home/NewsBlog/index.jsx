"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import DatePickerIcon from "@/components/Icons/DatePickerIcon";
import blogsData from "@/data/blogs.json";

// Import images from assets
import blog1 from "@/assets/images/Blog/blog-1.jpg";
import blog2 from "@/assets/images/Blog/blog-2.jpg";
import blog3 from "@/assets/images/Blog/blog-3.jpg";

const blogImages = {
    1: blog1,
    2: blog2,
    3: blog3
};

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

const BlogCard = ({ blog }) => {
    return (
        <div className="p-2 md:p-4 outline-none h-full">
            <div className="bg-[#F4F4F4] space-y-4 p-2 rounded-[32px] flex flex-col items-center shadow shadow-black/10 hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-[32px]">
                    <Image
                        src={blogImages[blog.id] || blog1}
                        alt={blog.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                </div>
                <div className="py-2 px-4">
                    <h4 className="text-left !text-lg md:!text-xl font-medium line-clamp-2 uppercase pb-4">
                        {blog.title}
                    </h4>
                    <div className="flex items-center justify-between w-full mt-auto pb-2">
                        <div className="flex items-center text-red gap-2 text-sm md:text-base font-[400]">
                            <DatePickerIcon />
                            <span>{blog.date}</span>
                        </div>

                        <button
                            onClick={() => router.push(`/blog/${blog.id}`)}
                            className="bg-red hover:bg-blue text-white font-[600] px-8 py-4 rounded-full transition-all duration-300 hover:shadow-md leading-none"
                        >
                            Read More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const NewsBlog = ({ limit = 3 }) => {
    const blogs = limit ? blogsData.slice(0, limit) : blogsData;

    const settings = {
        dots: false,
        infinite: blogs.length > 3,
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
                    infinite: blogs.length > 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    infinite: blogs.length > 1,
                }
            }
        ]
    };

    return (
        <div className="container">
            <div className="text-center mb-4 md:mb-8">
                <h2 className="mb-2 md:mb-6 block">
                    News & Blog
                </h2>
                <p className="mb-4 md:mb-6 max-w-3xl mx-auto">
                    Read our latest blogs, news etc. Stay here for update
                </p>
            </div>

            <div className="news-blog-slider relative pb-8 lg:pb-0">
                {limit ? (
                    <Slider {...settings}>
                        {blogs.map((blog) => (
                            <BlogCard key={blog.id} blog={blog} />
                        ))}
                    </Slider>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {blogs.map((blog) => (
                            <BlogCard key={blog.id} blog={blog} />
                        ))}
                    </div>
                )}
            </div>
            <style jsx global>{`
                .news-blog-slider .slick-list {
                    margin: 0 -0.5rem;
                    padding-bottom: 2rem;
                }
                @media (min-width: 768px) {
                    .news-blog-slider .slick-list {
                        margin: 0 -1rem;
                    }
                }
                @media (min-width: 1024px) {
                    .news-blog-slider .slick-list {
                        margin: 0 -2.5rem;
                    }
                }
                .news-blog-slider .slick-track {
                    display: flex !important;
                }
                .news-blog-slider .slick-slide {
                    height: inherit !important;
                }
                .news-blog-slider .slick-slide > div {
                    height: 100%;
                }
            `}</style>
        </div>
    );
};

export default NewsBlog;