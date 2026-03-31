import Image from "next/image";
import Link from "next/link";
import bannerImg from "@/assets/images/AboutUs/BannerImg.png";

const stats = [
    { number: "35", symbol: "+", label: "Years of\nIndustry Experience" },
    { number: "500", symbol: "+", label: "Projects\nCompleted" },
    { number: "50", symbol: "+", label: "Highly Skilled\nTechnicians" },
    { number: "24/7", symbol: "", label: "Customer\nSupport" },
];

const Banner = () => {
    return (
        <section className="container">
            <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16 py-10 md:py-16">

                {/* ── Left: Image ─────────────────────────────── */}
                <div className="flex-shrink-0 w-full lg:w-auto">
                    <Image
                        src={bannerImg}
                        alt="Prime Innovation industrial facility"
                        width={446}
                        height={431}
                        priority
                        style={{
                            width: "100%",
                            maxWidth: "446px",
                            height: "auto",
                            borderRadius: "32px",
                            objectFit: "cover",
                            display: "block",
                        }}
                    />
                </div>

                {/* ── Right: Text Content ──────────────────────── */}
                <div className="flex flex-col flex-1">

                    {/* Heading: "Welcome to Prime Innovation" */}
                    <h2
                        style={{
                            fontFamily: "'Lato', sans-serif",
                            fontWeight: 700,
                            fontSize: "clamp(28px, 3.5vw, 48px)",
                            lineHeight: "55px",
                            letterSpacing: "0",
                            color: "#000000",
                            margin: 0,
                            marginBottom: "12px",
                        }}
                    >
                        Welcome to{" "}
                        <span style={{ color: "#DA202A" }}>Prime Innovation</span>
                    </h2>

                    {/* Body text */}
                    <p
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontWeight: 400,
                            fontSize: "18px",
                            lineHeight: "177%",
                            letterSpacing: "0",
                            color: "#000000",
                            maxWidth: "753px",
                            margin: 0,
                            marginBottom: "28px",
                        }}
                    >
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry&apos;s standard dummy
                        text ever since the 1500s, when an unknown printer took a galley of
                        type and scrambled it to make a type specimen book. It has survived
                        not only five centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged.
                    </p>

                    {/* Know More Button */}
                    <div style={{ marginBottom: "36px" }}>
                        <Link
                            href="/contact"
                            className="know-more-btn"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: "20px",
                                border: "0.5px solid #000000",
                                paddingTop: "10px",
                                paddingBottom: "10px",
                                paddingLeft: "30px",
                                paddingRight: "30px",
                                gap: "10px",
                                fontFamily: "'Poppins', sans-serif",
                                fontWeight: 600,
                                fontSize: "16px",
                                lineHeight: "120%",
                                color: "#DA202A",
                                textDecoration: "none",
                                backgroundColor: "transparent",
                                transition: "background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease",
                            }}
                        >
                            Know more
                        </Link>
                    </div>

                    {/* ── Stats Row ────────────────────────────────── */}
                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            alignItems: "flex-start",
                            gap: "0",
                            maxWidth: "685px",
                        }}
                    >
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                    paddingRight: index < stats.length - 1 ? "36px" : "0",
                                    marginRight: index < stats.length - 1 ? "36px" : "0",
                                    borderRight: index < stats.length - 1 ? "1px solid #E0E0E0" : "none",
                                }}
                            >
                                {/* Number + symbol */}
                                <div style={{ display: "flex", alignItems: "baseline" }}>
                                    <span
                                        style={{
                                            fontFamily: "'Lato', sans-serif",
                                            fontWeight: 700,
                                            fontSize: "clamp(28px, 3.2vw, 48px)",
                                            lineHeight: 1,
                                            color: "#000000",
                                        }}
                                    >
                                        {stat.number}
                                    </span>
                                    {stat.symbol && (
                                        <span
                                            style={{
                                                fontFamily: "'Lato', sans-serif",
                                                fontWeight: 700,
                                                fontSize: "clamp(28px, 3.2vw, 48px)",
                                                lineHeight: 1,
                                                color: "#DA202A",
                                            }}
                                        >
                                            {stat.symbol}
                                        </span>
                                    )}
                                </div>

                                {/* Label */}
                                <p
                                    style={{
                                        fontFamily: "'Poppins', sans-serif",
                                        fontWeight: 400,
                                        fontSize: "13px",
                                        lineHeight: "1.4",
                                        color: "#000000",
                                        margin: 0,
                                        marginTop: "8px",
                                        whiteSpace: "pre-line",
                                    }}
                                >
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Know More hover style */}
            <style>{`
                .know-more-btn:hover {
                    background-color: #DA202A !important;
                    color: #ffffff !important;
                    border-color: #DA202A !important;
                }
            `}</style>
        </section>
    );
};

export default Banner;
