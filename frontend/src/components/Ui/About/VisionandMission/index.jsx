import Image from "next/image";
import missionIcon from "@/assets/images/AboutUs/missionIcon.png";
import visionIcon from "@/assets/images/AboutUs/visionIcon.png";

const VisionandMission = () => {
    return (
        <section className="w-full max-w-[1240px] mx-auto px-4 xl:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                {/* Mission Card */}
                <div className="w-full md:max-w-[610px] min-h-[384px] rounded-[32px] border border-[#787878] p-[35px] flex flex-col justify-start bg-white">
                    <div className="flex items-center gap-[22px] mb-[14px]">
                        <Image src={missionIcon} alt="Mission Icon" width={82} height={82} className="object-contain" />
                        <h2 className="font-bold text-[32px] leading-[120%] text-black m-0" style={{fontFamily: '"Lato", sans-serif'}}>
                            Our mission
                        </h2>
                    </div>
                    <p className="font-normal text-[18px] leading-[177%] text-[#787878] m-0 w-full" style={{fontFamily: '"Poppins", sans-serif'}}>
                        We deliver innovative solutions across diverse industries, from construction to precision calibration. Our commitment to quality, expertise, and client satisfaction drives us to consistently exceed expectations and achieve outstanding results.
                    </p>
                </div>

                {/* Vision Card */}
                <div className="w-full md:max-w-[610px] min-h-[384px] rounded-[32px] border border-[#787878] p-[35px] flex flex-col justify-start bg-white">
                    <div className="flex items-center gap-[32px] mb-[14px]">
                        <Image src={visionIcon} alt="Vision Icon" width={77} height={77} className="object-contain" />
                        <h2 className="font-bold text-[32px] leading-[120%] text-black m-0" style={{fontFamily: '"Lato", sans-serif'}}>
                            Our vision
                        </h2>
                    </div>
                    <p className="font-normal text-[18px] leading-[177%] text-[#787878] m-0 w-full" style={{fontFamily: '"Poppins", sans-serif'}}>
                        At Prime Group, our journey began with a vision to redefine industry standards through innovation, dedication, and excellence. Over the years, we’ve expanded our horizons, growing from a small enterprise into a global leader across diverse sectors. Our story is one of continuous evolution, driven by a commitment to delivering unparalleled quality and customer satisfaction.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default VisionandMission;
