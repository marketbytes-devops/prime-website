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
            <div className="flex items-center justify-between py-2">
                <div className="logo-section flex items-center">
                    <Link href="/" className="flex items-center">
                        <Image
                            src={Logo}
                            alt="Prime Innovation Contracting Co."
                            width={110}
                            height={70}
                            priority
                            className="object-contain"
                            style={{ height: "auto" }}
                        />
                    </Link>
                </div>

                <ul className="nav-links hidden lg:flex items-center rounded-full">
                    {navItems.map((item) => {
                        const isActive = item.href === "/"
                            ? pathname === "/"
                            : pathname.startsWith(item.href);
                        return (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className={`transition-colors h-full flex items-center ${isActive ? "active text-red" : "text-black hover:text-red"}`}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                <div className="action-section hidden lg:flex items-center gap-10">
                    <div className="cart-icon cursor-pointer relative group flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#DA202A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:scale-110">
                            <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                        </svg>
                    </div>
                    <button className="flex items-center justify-center bg-red hover:bg-blue text-white font-[600] px-6 py-4 rounded-full transition-all duration-300 hover:shadow-md leading-none whitespace-nowrap">
                        Get A Quote
                    </button>
                </div>

                {/* Mobile */}
                <div className="lg:hidden flex items-center">
                    <button ref={buttonRef} onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-black hover:text-red focus:outline-none p-2 relative z-50">
                        {isMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#DA202A" stroke="#DA202A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#DA202A" stroke="#DA202A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                            </svg>
                        )}
                    </button>
                </div>
                <div
                    ref={menuRef}
                    className={`fixed top-0 right-0 h-full w-full bg-white z-40 shadow-2xl transition-transform duration-300 ease-in-out transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"} lg:hidden`}
                >
                    <div className="flex flex-col h-full pt-24 px-4 pb-10">
                        <div className="flex-1 overflow-y-auto">
                            <ul className="flex flex-col gap-6">
                                {navItems.map((item) => {
                                    const isActive = item.href === "/"
                                        ? pathname === "/"
                                        : pathname.startsWith(item.href);
                                    return (
                                        <li key={item.name} onClick={() => setIsMenuOpen(false)}>
                                            <Link
                                                href={item.href}
                                                className={`text-xl font-semibold transition-colors flex items-center justify-between group ${isActive ? "text-red" : "text-black"}`}
                                            >
                                                {item.name}
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform ${isActive ? "translate-x-0" : "group-hover:translate-x-0"}`}>
                                                    <path d="m9 18 6-6-6-6"/>
                                                </svg>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className="mt-auto space-y-6 pt-6 border-t border-gray-100">
                            <button className="w-full flex items-center justify-center bg-red hover:bg-blue text-white font-bold px-8 py-4 rounded-[12px] text-lg transition-all shadow-lg hover:shadow-xl active:scale-[0.98]">
                                Get A Quote
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;