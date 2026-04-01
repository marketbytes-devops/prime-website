const Offer = () => {
    return (
        <section className="w-full max-w-[1240px] mx-auto px-4 xl:px-0 flex flex-col items-center mt-[120px] mb-[120px]">
            <h2 className="font-bold text-[48px] leading-[120%] text-black text-center m-0" style={{fontFamily: '"Lato", sans-serif'}}>
                What we offers
            </h2>
            <p className="font-normal text-[18px] leading-[30px] text-[#5F5F5F] text-center w-full max-w-[723px] mt-[16px] mb-[26px]" style={{fontFamily: '"Poppins", sans-serif'}}>
                Lorem ipsum dolor sit amet consectetur sit sit orci aliquet sed nulla porttitor amet auctor auctor vitae ut magna in sit dui erat urna erat amet arcu.
            </p>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px] w-full mb-[31px]">
                {/* Card 1: Best Quality */}
                <div className="w-full md:max-w-[400px] min-h-[488px] bg-white rounded-[32px] flex flex-col items-center mx-auto p-4" style={{boxShadow: '4px 4px 4px 0px rgba(0,0,0,0.25), -4px -4px 4px 0px rgba(0,0,0,0.25)'}}>
                    <div className="w-[70px] flex-shrink-0 h-[70px] bg-[#DA202A] rounded-full mt-[22px] flex items-center justify-center">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/>
                            <path d="m9 12 2 2 4-4"/>
                        </svg>
                    </div>
                    <h3 className="font-bold text-[32px] leading-[120%] text-black text-center mt-[24px]" style={{fontFamily: '"Lato", sans-serif'}}>
                        Best Quality
                    </h3>
                    <p className="font-light text-[20px] leading-[154%] text-black text-center max-w-[317px] mt-[20px]" style={{fontFamily: '"Poppins", sans-serif'}}>
                        We prioritize excellence with top-tier craftsmanship, innovative techniques, and a dedicated team, delivering exceptional results that exceed industry standards.
                    </p>
                </div>

                {/* Card 2: On Time Delivery */}
                <div className="w-full md:max-w-[400px] min-h-[488px] bg-white rounded-[32px] flex flex-col items-center mx-auto p-4" style={{boxShadow: '4px 4px 4px 0px rgba(0,0,0,0.25), -4px -4px 4px 0px rgba(0,0,0,0.25)'}}>
                    <div className="w-[70px] flex-shrink-0 h-[70px] bg-[#DA202A] rounded-full mt-[22px] flex items-center justify-center">
                        <svg width="42" height="31" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="4" width="14" height="13"></rect>
                            <polygon points="16 8 21 8 23 11 23 17 16 17 16 8"></polygon>
                            <circle cx="6" cy="18" r="2.5"></circle>
                            <circle cx="18" cy="18" r="2.5"></circle>
                            <path d="M12 9L8 14h3v4l4-5h-3L12 9z" fill="white" stroke="none"/>
                        </svg>
                    </div>
                    <h3 className="font-bold text-[32px] leading-[120%] text-black text-center mt-[24px]" style={{fontFamily: '"Lato", sans-serif'}}>
                        On Time Delivery
                    </h3>
                    <p className="font-light text-[20px] leading-[154%] text-black text-center max-w-[317px] mt-[20px]" style={{fontFamily: '"Poppins", sans-serif'}}>
                        At Prime Group, we value your time. Our efficient processes and dedicated team ensure projects are completed on time, with precision and reliability. Expect timely delivery.
                    </p>
                </div>

                {/* Card 3: Affordable Price */}
                <div className="w-full md:max-w-[400px] min-h-[488px] bg-white rounded-[32px] flex flex-col items-center mx-auto p-4" style={{boxShadow: '4px 4px 4px 0px rgba(0,0,0,0.25), -4px -4px 4px 0px rgba(0,0,0,0.25)'}}>
                    <div className="w-[70px] flex-shrink-0 h-[70px] bg-[#DA202A] rounded-full mt-[22px] flex items-center justify-center">
                        <svg width="40" height="37" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/>
                            <path d="m9 15 6-6"/>
                            <circle cx="9" cy="9" r="1.5" fill="white"/>
                            <circle cx="15" cy="15" r="1.5" fill="white"/>
                        </svg>
                    </div>
                    <h3 className="font-bold text-[32px] leading-[120%] text-black text-center mt-[24px]" style={{fontFamily: '"Lato", sans-serif'}}>
                        Affordable Price
                    </h3>
                    <p className="font-light text-[20px] leading-[154%] text-black text-center max-w-[317px] mt-[20px]" style={{fontFamily: '"Poppins", sans-serif'}}>
                        We balance quality and cost-efficiency, using advanced technologies and optimized workflows to deliver high-quality services at affordable prices, within your budget.
                    </p>
                </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex items-center justify-center gap-[4px] w-[81px] h-[19px]">
                <div className="w-[35px] h-[19px] rounded-[50px] bg-[#DA202A] cursor-pointer hover:opacity-80 transition-opacity"></div>
                <div className="w-[19px] h-[19px] rounded-full bg-[#D9D9D9] cursor-pointer hover:bg-[#c0c0c0] transition-colors"></div>
                <div className="w-[19px] h-[19px] rounded-full bg-[#D9D9D9] cursor-pointer hover:bg-[#c0c0c0] transition-colors"></div>
            </div>
        </section>
    );
};

export default Offer;
