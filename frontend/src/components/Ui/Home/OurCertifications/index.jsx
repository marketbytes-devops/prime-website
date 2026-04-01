import React from "react";
import Image from "next/image";
import certOne from "@/assets/images/Home/certificate-one.png";
import certTwo from "@/assets/images/Home/certificate-two.png";
import certThree from "@/assets/images/Home/certificate-three.png";

const OurCertifications = () => {
    const certifications = [
        { id: 1, img: certOne, alt: "ISO Certification 1" },
        { id: 2, img: certTwo, alt: "ISO Certification 2" },
        { id: 3, img: certThree, alt: "ISO Certification 3" },
    ];

    return (
        <div className="container">
            <div className="text-center mb-4 md:mb-8">
                <h2 className="mb-2 md:mb-6 block">
                    Our Certifications and Accreditations
                </h2>
                <p className="mb-4 md:mb-6 max-w-3xl mx-auto">
                    We are dedicated to upholding the highest standards in our operations, as evidenced by our certifications and memberships:
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {certifications.map((cert) => (
                    <div
                        key={cert.id}
                        className="border border-[#D1D1D1] rounded-[24px] p-4 flex items-center justify-center bg-[#FDFDFD] hover:shadow-lg transition-shadow duration-300"
                    >
                        <div className="relative w-full aspect-square max-w-[200px]">
                            <Image
                                src={cert.img}
                                alt={cert.alt}
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurCertifications;