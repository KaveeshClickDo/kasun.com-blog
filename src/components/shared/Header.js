'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const DesktopMenu = () => (

        <div className="hidden md:flex items-center md:pr-15">

            <Link
                href="/"
                className="relative p-4 hover:underline"
            >
                Home
            </Link>
            <Link
                href="/about"
                className="relative p-4 hover:underline"
            >
                About
            </Link>
            <Link
                href="/contact"
                className="relative p-4 hover:underline"
            >
                Contact
            </Link>

            
        </div>
    );

    const MobileMenu = () => (
        <div
            className={`md:hidden overflow-y-auto transition-all duration-300 ${mobileMenuOpen
                ? 'h-screen max-h-screen opacity-100'
                : 'h-0 max-h-0 opacity-0'
                }`}
        >
            <div className="pt-8 pb-3 space-y-1">
                <Link href="/about" className="block px-4 py-2 hover:bg-gray-100 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                    About
                </Link>
                <Link href="/contact" className="block px-4 py-2 hover:bg-gray-100 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                    Contact Us
                </Link>
            </div>
        </div>
    );

    const MobileHamburger = () => (
        <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="focus:outline-none" aria-label="Mobile Menu">
                {mobileMenuOpen ? (
                    <svg className="w-9 h-9" fill="none" stroke="white" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg className="w-10 h-10" fill="none" stroke="white" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8H13.75M5 12H19M10.25 16L19 16" />
                    </svg>
                )}
            </button>
        </div>
    );

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 w-full bg-[#181819] text-white p-4 lg:p-0 transition-shadow duration-300 ${isScrolled ? 'shadow-lg' : ''
                    }`}
            >
                <div className="container mx-auto flex items-center justify-between md:pl-10">
                    <Link href="/">
                        <Image
                            src="/images/shared/Kasun_Sameera.png"
                            alt="Kasun Sameera"
                            width={133}
                            height={62}
                            priority
                        />
                    </Link>
                    <DesktopMenu />
                    <MobileHamburger />
                </div>
                <MobileMenu />
            </nav>
            {/* Spacer to push content down */}
            <div className="h-20 md:h-14"></div>
        </>
    );
}