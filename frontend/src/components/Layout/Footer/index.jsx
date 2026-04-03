"use client"
import styles from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/images/Logo/logo.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineLocationOn, MdOutlineMail, MdOutlinePhoneInTalk } from "react-icons/md";

const Footer = () => {
    return (
        <footer className={styles.footerMain}>
            {/* CTA Section */}
            <div className={styles.footerCtaContainer}>
                <div className="container">
                    <div className={styles.footerCtaContent}>
                        <h2 className={styles.ctaHeading}>We&apos;re The Future Of Metallurgy Industry</h2>
                        <button className={styles.ctaButtonRed}>Get A Quote</button>
                    </div>
                </div>
            </div>

            <div className={styles.footerDividerTop}></div>

            {/* Main Footer content */}
            <div className={styles.footerContentSection}>
                <div className="container">
                    <div className={styles.footerGrid}>
                        {/* Column 1: About Us */}
                        <div className={`${styles.footerColumn} ${styles.aboutColumn}`}>
                            <div className={styles.footerLogo}>
                                <Image src={Logo} alt="PrimeInnovation" width={160} height={60} className={styles.footerLogoImg} />
                            </div>
                            <h3 className={styles.footerColTitle}>About Us</h3>
                            <p className={styles.aboutText}>
                                Delivering superior construction, calibration, fabrication, and trading
                                services with unmatched expertise and dedication to excellence.
                            </p>
                            <div className={styles.socialSection}>
                                <h3 className={`${styles.footerColTitle} ${styles.socialTitle}`}>Social</h3>
                                <div className={styles.socialIcons}>
                                    <Link href="#" className={styles.socialIcon} aria-label="Facebook"><FaFacebookF /></Link>
                                    <Link href="#" className={styles.socialIcon} aria-label="Instagram"><FaInstagram /></Link>
                                    <Link href="#" className={styles.socialIcon} aria-label="LinkedIn"><FaLinkedinIn /></Link>
                                </div>
                            </div>
                        </div>

                        {/* Column 2: Useful links */}
                        <div className={styles.footerColumn}>
                            <h3 className={styles.footerColTitle}>Useful link</h3>
                            <ul className={styles.footerLinksList}>
                                <li><Link href="/about">About</Link></li>
                                <li><Link href="/industries">Industries</Link></li>
                                <li><Link href="/blog">Blog</Link></li>
                                <li><Link href="/products">Products</Link></li>
                                <li><Link href="/cart">Cart</Link></li>
                            </ul>
                        </div>

                        {/* Column 3: Services */}
                        <div className={styles.footerColumn}>
                            <h3 className={styles.footerColTitle}>Services</h3>
                            <ul className={styles.footerLinksList}>
                                <li><Link href="/services/automation">Automation & Switchgear</Link></li>
                                <li><Link href="/services/air-dryer">Air Dryer & Compressors</Link></li>
                                <li><Link href="/services/cables">Cables & Accessories</Link></li>
                                <li><Link href="/services/instrumentation">Instrumentation & Pumps</Link></li>
                                <li><Link href="/services/laboratory">Laboratory equipment</Link></li>
                                <li><Link href="/services/electrical">Electrical Items</Link></li>
                                <li><Link href="/services/mechanical">Mechanical Parts</Link></li>
                            </ul>
                        </div>

                        {/* Column 4: Contact Us */}
                        <div className={`${styles.footerColumn} ${styles.contactColumn}`}>
                            <h3 className={styles.footerColTitle}>Contact us</h3>
                            <div className={styles.contactItem}>
                                <MdOutlineLocationOn className={styles.contactIcon} />
                                <div className={styles.contactText}>
                                    <strong>Address</strong>
                                    <a 
                                        href="https://www.google.com/maps/search/?api=1&query=Fayha+dist,+Ras+Tanura+32817,+Saudi+Arabia" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className={styles.contactLink}
                                    >
                                        Fayha dist, Ras Tanura 32817 , Saudi Arabia
                                    </a>
                                </div>
                            </div>
                            <div className={styles.contactItem}>
                                <MdOutlineMail className={styles.contactIcon} />
                                <div className={styles.contactText}>
                                    <strong>Mail Us</strong>
                                    <a href="mailto:info@primearabiagroup.com" className={styles.contactLink}>
                                        info@primearabiagroup.com
                                    </a>
                                </div>
                            </div>
                            <div className={styles.contactItem}>
                                <MdOutlinePhoneInTalk className={styles.contactIcon} />
                                <div className={styles.contactText}>
                                    <strong>Call Us</strong>
                                    <div className={styles.phoneLinks}>
                                        <a href="tel:+966505847698" className={styles.contactLink}>+966505847698</a>
                                        <span className={styles.phoneSep}>&nbsp;</span>
                                        <a href="tel:+966138976520" className={styles.contactLink}>+966138976520</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.footerDividerBottom}></div>

            {/* Bottom bar */}
            <div className={styles.footerBottom}>
                <div className="container">
                    <div className={styles.footerBottomFlex}>
                        <div className={styles.copyright}>
                            &copy; 2025 All Rights Reserved by Prime Group.
                        </div>
                        <div className={styles.footerLegalLinks}>
                            <Link href="/disclaimer">Disclaimer</Link> | 
                            <Link href="/terms">Terms & Condition</Link> | 
                            <Link href="/privacy">Privacy Policy</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;