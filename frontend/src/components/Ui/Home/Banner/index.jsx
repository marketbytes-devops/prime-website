import banner from "@/assets/images/Home/banner.jpg"
import Link from "next/link";

const Banner = () => {
    return (
        <section className="container">
            <div className="relative w-full h-[400px] md:h-[650px] lg:h-[750px] rounded-[32px] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] group">
                <div
                    className="absolute inset-0 z-0 transition-transform duration-[15s] ease-out group-hover:scale-105"
                    style={{
                        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.5) 100%), url(${banner.src})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                />
                <div className="md:hidden absolute inset-0 z-0" style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.2) 100%)`
                }} />
                <div className="hidden md:block absolute inset-0 z-0" style={{
                    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.2) 60%, rgba(0, 0, 0, 0) 100%)`
                }} />
                <div
                    className="h-full relative z-10 flex flex-col justify-center px-4 md:px-10 lg:pl-20 items-center text-center lg:items-start lg:text-left"
                >
                    <div className="max-w-3xl space-y-2 md:space-y-4">
                        <div className="flex items-center justify-center lg:justify-start animate-fade-in">
                            <p className="!text-white font-medium uppercase tracking-wider">
                                Welcome to Prime Innovation
                            </p>
                        </div>
                        <h1 className="!text-white">
                            We Build Your <br />
                            <span className="text-red">Best Future</span>
                        </h1>
                        <p className="!text-white max-w-xl leading-relaxed mx-auto lg:mx-0">
                            Transforming visions into reality with innovative solutions and exceptional expertise.
                        </p>
                        <div className="flex flex-wrap gap-4 sm:gap-6 justify-center lg:justify-start">
                            <Link
                                href="/about"
                                className="flex items-center justify-center bg-red hover:bg-white hover:!text-red !text-white font-semibold px-8 py-4 rounded-[12px] transition-all duration-300 hover:shadow-[0_10px_20px_rgba(218,32,42,0.3)] leading-none whitespace-nowrap text-base sm:text-lg min-w-[200px] sm:min-w-0"
                            >
                                See How We Innovate
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
