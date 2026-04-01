import Image from "next/image";
import ISO1 from "@/assets/images/AboutUs/ISO1.png";
import ISO2 from "@/assets/images/AboutUs/ISO2.png";
import ISO3 from "@/assets/images/AboutUs/ISO3.png";

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
        </section>
    );
};

export default Certificates;
