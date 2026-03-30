"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Logo from "@/assets/images/Logo/logo.png";

const Navbar = () => {
    const pathname = usePathname();

    const navItems = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Industries", href: "/industries" },
        { name: "Blog", href: "/blog" },
        { name: "Products", href: "/products" },
        { name: "Contact", href: "/contact" },
    ];

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

                <ul className="nav-links">
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

                <div className="action-section flex items-center gap-6">
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
            </div>
        </nav>
    );
};

export default Navbar;