import Image from "next/image";
import ISO1 from "@/assets/images/AboutUs/ISO1.png";
import ISO2 from "@/assets/images/AboutUs/ISO2.png";
import ISO3 from "@/assets/images/AboutUs/ISO3.png";

import symbol1 from "@/assets/images/AboutUs/symbol1.png";
import symbol2 from "@/assets/images/AboutUs/symbol2.png";
import symbol3 from "@/assets/images/AboutUs/symbol3.png";
import symbol4 from "@/assets/images/AboutUs/symbol4.png";
import symbol5 from "@/assets/images/AboutUs/symbol5.png";
import symbol6 from "@/assets/images/AboutUs/symbol6.png";
import symbol7 from "@/assets/images/AboutUs/symbol7.png";

import client1 from "@/assets/images/AboutUs/client1.jpg";
import client2 from "@/assets/images/AboutUs/client2.jpg";
import client3 from "@/assets/images/AboutUs/client3.jpg";

const clients = [symbol1, symbol2, symbol3, symbol4, symbol5, symbol6, symbol7];

const testimonials = [
    {
        image: client1,
        text: "Prime Innovation has been instrumental in our fabrication projects, providing us with high-quality, customized solutions. Their technical expertise and commitment to delivering on time have made them our go-to partner for all our fabrication needs.",
        authorName: "Mr. Velayuthan",
        authorRole: "PMT, Zamil Structural Steel Company"
    },
    {
        image: client2,
        text: "Working with Prime Innovation for our calibration needs has been an absolute game-changer. Their attention to detail, precision, and timely service have ensured our equipment runs at optimal performance.",
        authorName: "Mr. Baiju",
        authorRole: "General Manager, Saudi Wells"
    },
    {
        image: client3,
        text: "As a project manager, I rely on partners who can deliver quality work on schedule and within budget. Prime Innovation has consistently exceeded our expectations in every contracting project we’ve undertaken together.",
        authorName: "Mr. Purushan Kesavan",
        authorRole: "Project Manager, Khalid S. Al Shahrani"
    }
];

const Certificates = () => {
    return (
        <section className="w-full max-w-[1240px] mx-auto px-4 xl:px-0 flex flex-col items-center mb-[120px]">
            <h2 className="font-bold text-[48px] leading-[54px] text-black text-center m-0 w-full max-w-[991px]" style={{fontFamily: '"Lato", sans-serif'}}>
                Our Certifications and Accreditations
            </h2>
            
            <p className="font-normal text-[18px] leading-[30px] text-[#5F5F5F] text-center w-full max-w-[743px] mt-[16px] mb-[30px] m-0" style={{fontFamily: '"Poppins", sans-serif'}}>
                We are dedicated to upholding the highest standards in our operations, as evidenced by our certifications and memberships: 
            </p>

            {/* Certificates Grid */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-[22px] w-full max-w-[929px]">
                {/* Certificate 1 */}
                <div className="w-full md:w-[295px] h-[153px] rounded-[24px] border border-[#D1D1D1] bg-white flex items-center justify-center p-6 flex-shrink-0">
                    <div className="relative w-full h-full max-w-[120px] max-h-[120px]">
                        <Image src={ISO1} alt="ISO Certification 9001:2015" fill className="object-contain" />
                    </div>
                </div>

                {/* Certificate 2 */}
                <div className="w-full md:w-[295px] h-[153px] rounded-[24px] border border-[#D1D1D1] bg-white flex items-center justify-center p-6 flex-shrink-0">
                    <div className="relative w-full h-full max-w-[120px] max-h-[120px]">
                        <Image src={ISO2} alt="ISO/IEC Certification 17025:2017" fill className="object-contain" />
                    </div>
                </div>

                {/* Certificate 3 */}
                <div className="w-full md:w-[295px] h-[153px] rounded-[24px] border border-[#D1D1D1] bg-white flex items-center justify-center p-6 flex-shrink-0">
                    <div className="relative w-full h-full max-w-[120px] max-h-[120px]">
                        <Image src={ISO3} alt="ISO Certification 45001:2018" fill className="object-contain" />
                    </div>
                </div>
            </div>

            {/* Clientele We Serve Section */}
            <div className="flex flex-col items-center mt-[120px] w-full">
                <h2 className="font-bold text-[48px] leading-[54px] text-black text-center m-0 w-full" style={{fontFamily: '"Lato", sans-serif'}}>
                    Clientele We Serve
                </h2>
                <p className="font-normal text-[18px] leading-[30px] text-[#5F5F5F] text-center w-full max-w-[1078px] mt-[16px] m-0" style={{fontFamily: '"Poppins", sans-serif'}}>
                    We proudly serve a diverse range of clients across industries, delivering tailored solutions with exceptional service. Our commitment ensures satisfaction and success for every partnership.
                </p>
            </div>

            {/* Moving Client Slider */}
            <div className="w-[100vw] max-w-[1552px] self-center mt-[40px] overflow-hidden mb-10">
                <style dangerouslySetInnerHTML={{__html: `
                    @keyframes slideLoop {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-33.33333%); }
                    }
                    .animate-slider-loop {
                        animation: slideLoop 25s linear infinite;
                        display: flex;
                        width: max-content;
                    }
                    .animate-slider-loop:hover {
                        animation-play-state: paused;
                    }
                `}} />
                <div className="animate-slider-loop gap-[20px]">
                    {[...clients, ...clients, ...clients].map((client, idx) => (
                        <div key={idx} className="w-[190px] h-[91px] rounded-[12px] bg-[#F5F7FA] flex items-center justify-center p-4 flex-shrink-0">
                            <div className="relative w-full h-full">
                                <Image src={client} alt={`Client Logo ${idx}`} fill className="object-contain" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Client Insights */}
            <div className="flex flex-col items-center mt-[120px] w-full max-w-[1039px]">
                <h2 className="font-bold text-[48px] leading-[54px] text-black text-center m-0 w-full" style={{fontFamily: '"Lato", sans-serif'}}>
                    Client Insights
                </h2>

                <div className="flex flex-col md:flex-row justify-between items-stretch gap-[53px] mt-[83px] w-full">
                    {testimonials.map((item, index) => (
                        <div key={index} className="w-full md:w-[311px] min-h-[323px] bg-[#F5F5F5] rounded-[20px] relative px-[23px] pt-[60px] pb-[30px] flex flex-col flex-shrink-0">
                            {/* Author Image Floating */}
                            <div className="absolute top-[-41px] left-1/2 transform -translate-x-1/2 w-[82px] h-[82px] rounded-full overflow-hidden bg-white flex items-center justify-center shadow-sm">
                                <Image src={item.image} alt={item.authorName} fill className="object-cover" />
                            </div>

                            <p className="font-light text-[16px] leading-[150%] text-black m-0" style={{fontFamily: '"Poppins", sans-serif'}}>
                                {item.text}
                            </p>

                            <div className="mt-auto pt-6">
                                <p className="font-medium text-[15px] leading-[150%] text-black m-0" style={{fontFamily: '"Poppins", sans-serif'}}>
                                    {item.authorName}
                                    <br />
                                    {item.authorRole}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
