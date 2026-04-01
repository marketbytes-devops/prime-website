import Image from "next/image";
import whyChooseUsImg from "@/assets/images/AboutUs/WhyChooseUs.png";

const WhyChooseUs = () => {
    return (
        <section className="w-full max-w-[1240px] mx-auto px-4 xl:px-0 flex flex-col lg:flex-row justify-between items-start mb-[120px]">
            {/* Left Column (Text Content) */}
            <div className="flex flex-col w-full lg:max-w-[700px]">
                <h2 className="font-bold text-[48px] leading-[120%] text-black m-0" style={{fontFamily: '"Lato", sans-serif'}}>
                    Why choose us
                </h2>

                <p className="font-normal text-[18px] leading-[177%] text-[#787878] mt-[16px] m-0 w-full" style={{fontFamily: '"Poppins", sans-serif'}}>
                    We deliver innovative solutions across diverse industries, from construction to precision calibration. Our commitment to quality, expertise, and client satisfaction drives us to consistently exceed expectations and achieve outstanding results.
                </p>

                <p className="font-normal text-[18px] leading-[177%] text-[#787878] mt-[16px] m-0 w-full" style={{fontFamily: '"Poppins", sans-serif'}}>
                    We deliver innovative solutions across diverse industries, from construction to precision calibration.
                </p>

                <button className="flex items-center justify-center mt-[57px] w-[204px] h-[52px] rounded-[20px] bg-white border-[0.5px] border-black transition-colors hover:bg-gray-50 cursor-pointer">
                    <span className="font-semibold text-[16px] leading-[120%] text-[#DA202A]" style={{fontFamily: '"Poppins", sans-serif'}}>
                        Request a call
                    </span>
                </button>
            </div>

            {/* Right Column (Image) */}
            <div 
                className="w-full lg:w-[505px] h-[402px] mt-10 lg:mt-0 relative flex-shrink-0 rounded-[32px] bg-white overflow-hidden"
                style={{boxShadow: '3px -1px 5px 0px rgba(0,0,0,0.25)'}}
            >
                <Image 
                    src={whyChooseUsImg} 
                    alt="Why choose us" 
                    fill 
                    className="object-cover"
                />
            </div>
        </section>
    );
};

export default WhyChooseUs;
