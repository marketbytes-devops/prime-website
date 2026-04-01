"use client"
import Image from "next/image"
import Link from "next/link"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import onTimeImg from "@/assets/images/Home/on-time-delivery.jpg"
import bestQualityImg from "@/assets/images/Home/best-quality.jpg"
import affordablePricingImg from "@/assets/images/Home/affordable-pricing.jpg"
import dedicatedTeamImg from "@/assets/images/Home/dedicated-team.jpg"

const offers = [
    { image: onTimeImg, title: "On Time Delivery" },
    { image: bestQualityImg, title: "Best Quality" },
    { image: affordablePricingImg, title: "Affordable Pricing" },
    { image: dedicatedTeamImg, title: "Dedicated Team" },
]

const WeOffersItem = ({ image, title, className }) => {
    return (
        <div className={`relative overflow-hidden rounded-[24px] group ${className}`}>
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-85" />

            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-10">
                <h3 className="!text-white">
                    {title}
                </h3>
            </div>
        </div>
    )
}

const WeOffers = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
    }

    return (
        <div className="container">
            <div className="text-center mb-4 md:mb-8">
                <h2 className="mb-2 md:mb-6">
                    What we Offers
                </h2>
                <p className="mb-4 md:mb-6 max-w-3xl mx-auto">
                    Lorem ipsum dolor sit amet consectetur sit sit orci aliquet sed nulla porttitor
                    amet auctor auctor vitae ut magna in sit dui erat urna erat amet arcu.
                </p>
            </div>
            <div className="hidden lg:grid grid-cols-12 gap-6 lg:h-[700px]">
                <WeOffersItem
                    image={offers[0].image}
                    title={offers[0].title}
                    className="col-span-7"
                />
                <WeOffersItem
                    image={offers[1].image}
                    title={offers[1].title}
                    className="col-span-5"
                />
                <WeOffersItem
                    image={offers[2].image}
                    title={offers[2].title}
                    className="col-span-5"
                />
                <WeOffersItem
                    image={offers[3].image}
                    title={offers[3].title}
                    className="col-span-7"
                />
            </div>
            <div className="lg:hidden we-offers-slider">
                <Slider {...sliderSettings}>
                    {offers.map((offer, index) => (
                        <div key={index} className="px-1">
                            <WeOffersItem
                                image={offer.image}
                                title={offer.title}
                                className="aspect-[16/10] h-[350px] w-full"
                            />
                        </div>
                    ))}
                </Slider>
            </div>

            <div className="mt-6 md:mt-24 text-center">
                <button
                    className="border-2 border-black hover:border-red text-red font-[600] px-6 py-4 rounded-full hover:bg-red hover:text-white transition-all duration-300"
                >
                    Get a Quote
                </button>
            </div>

            <style jsx global>{`
                .we-offers-slider .slick-dots {
                    bottom: -40px;
                }
                .we-offers-slider .slick-dots li button:before {
                    color: var(--brand-red, #DA202A);
                    font-size: 10px;
                    opacity: 0.25;
                }
                .we-offers-slider .slick-dots li.slick-active button:before {
                    color: var(--brand-red, #DA202A);
                    opacity: 1;
                }
            `}</style>
        </div>
    )
}

export default WeOffers
