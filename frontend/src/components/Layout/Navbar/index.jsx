"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Logo from "@/assets/images/Logo/logo.png";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);

    const navItems = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Industries", href: "/industries" },
        { name: "Blog", href: "/blog" },
        { name: "Products", href: "/products" },
        { name: "Contact", href: "/contact" },
    ];

    // Close menu on click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target) && buttonRef.current && !buttonRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    return (
        <nav className="container">
            <div className="navbar-wrapper">
                <div className="logo-section">
                    <Link href="/" className="flex items-center">
                        <Image
                            src={Logo}
                            alt="Prime Innovation Contracting Co."
                            width={100}
                            height={60}
                            priority
                            className="object-contain"
                        />
                    </Link>
                </div>

                <ul className="nav-links hidden lg:flex">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <Link
                                href={item.href}
                                className={pathname === item.href ? "active" : ""}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="action-section hidden lg:flex flex-row items-center gap-6">
                    <div className="cart-icon cursor-pointer relative group">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#DA202A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:scale-110">
                            <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                        </svg>
                        <span className="sr-only">Cart</span>
                    </div>
                    <button className="btn-primary bg-red text-white hover:bg-blue transition-all duration-300">
                        Get A Quote
                    </button>
                </div>

                {/* Hamburger menu for mobile */}
                <div className="lg:hidden flex items-center">
                    <button ref={buttonRef} onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-red-500 focus:outline-none p-2 relative z-50">
                        {isMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div 
                className={`lg:hidden fixed inset-0 bg-black/60 z-[90] transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                onClick={() => setIsMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <div
                ref={menuRef}
                className={`lg:hidden fixed top-0 left-0 w-[85%] max-w-[320px] h-screen bg-white z-[100] shadow-2xl transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} overflow-y-auto flex flex-col`}
            >
                <div className="flex justify-between items-center p-5 border-b border-gray-100">
                    <div className="logo-section">
                        <Link href="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
                            <Image
                                src={Logo}
                                alt="Prime Innovation Contracting Co."
                                width={90}
                                height={50}
                                priority
                                className="object-contain"
                            />
                        </Link>
                    </div>
                    <button onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-red-600 focus:outline-none p-1 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
                <div className="flex-1 overflow-y-auto">
                    <ul className="flex flex-col px-6 py-8 gap-6">
                        {navItems.map((item) => (
                            <li key={item.name} className="border-b border-gray-50 pb-2">
                                <Link
                                    href={item.href}
                                    className={`${pathname === item.href ? "text-red-600 font-semibold" : "text-gray-700 font-medium"} hover:text-red-600 transition-colors text-lg block w-full`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                
                <div className="px-6 py-8 border-t border-gray-100 bg-gray-50 mt-auto">
                    <div className="flex items-center justify-between gap-4">
                        <div className="cart-icon cursor-pointer relative group flex items-center justify-center bg-white p-3 rounded-full shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#DA202A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:scale-110">
                                <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                            </svg>
                            <span className="sr-only">Cart</span>
                        </div>
                        <button className="flex-1 btn-primary bg-red-600 text-white hover:bg-red-700 rounded decoration-none py-3 px-4 font-semibold text-center transition-all duration-300 shadow-md">
                            Get A Quote
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;