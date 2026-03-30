import banner from "@/assets/images/Home/banner.jpg"
import Link from "next/link";

const Banner = () => {
    return (
        <section className="relative w-full h-[60vh] md:h-[85vh] overflow-hidden">
            {/* Background Image with Overlay */}
            <div 
                className="absolute inset-0 z-0"
                style={{ 
                    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url(${banner.src})`, 
                    backgroundRepeat: "no-repeat", 
                    backgroundSize: "cover", 
                    backgroundPosition: "center" 
                }}
            />

            {/* Content Container */}
            <div className="container h-full relative z-10 flex flex-col justify-center">
                <div className="max-w-2xl text-white">
                    <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold tracking-wider uppercase bg-red rounded-sm">
                        Quality & Precision Guaranteed
                    </span>
                    <h1 className="text-white mb-6 leading-tight">
                        Expert <span className="text-red">Contracting</span> & <br />
                        Fabrication Services
                    </h1>
                    <p className="text-white/90 text-lg md:text-xl mb-10 max-w-lg">
                        Delivering world-class solutions in Calibration, Contracting, and Fabrication across Saudi Arabia.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link href="/services" className="btn-primary bg-red text-white hover:bg-blue transform hover:-translate-y-1 transition-all shadow-lg">
                            Our Services
                        </Link>
                        <Link href="/contact" className="btn-primary bg-white text-black hover:bg-red hover:text-white transform hover:-translate-y-1 transition-all shadow-lg">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
            
            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block animate-bounce">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                </svg>
            </div>
        </section>
    );
};

export default Banner;