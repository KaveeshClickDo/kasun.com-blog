'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function ClientHeader({ headerData }) {
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
            {headerData?.addHeaderNavigations?.map((nav) => (
                <Link
                    key={nav.id}
                    href={nav.pageLink || "#"}
                    className="relative p-4 hover:underline"
                    style={{ color: headerData?.headerFontColor || '#ffffff' }}
                >
                    {nav.pageName}
                </Link>
            ))}
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
                {headerData?.addHeaderNavigations?.map((nav) => (
                    <Link 
                        key={nav.id}
                        href={nav.pageLink || "#"} 
                        className="block px-4 py-2 hover:bg-gray-100 text-lg font-medium" 
                        style={{ color: headerData?.headerFontColor || '#ffffff' }}
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        {nav.pageName}
                    </Link>
                ))}
            </div>
        </div>
    );

    const MobileHamburger = () => (
        <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="focus:outline-none" aria-label="Mobile Menu">
                {mobileMenuOpen ? (
                    <svg 
                        className="w-9 h-9" 
                        fill="none" 
                        stroke={headerData?.headerFontColor || '#ffffff'} 
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg 
                        className="w-10 h-10" 
                        fill="none" 
                        stroke={headerData?.headerFontColor || '#ffffff'} 
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8H13.75M5 12H19M10.25 16L19 16" />
                    </svg>
                )}
            </button>
        </div>
    );


    const getImageUrl = () => {
        if (!headerData?.headerImage?.url) return "/images/shared/Your-Logo-here-placeholder.png"; // fallback
        
        const imageUrl = headerData.headerImage.url;

        if (imageUrl.startsWith('http')) {
            return imageUrl;
        }

        return `${process.env.NEXT_PUBLIC_API_URL || ''}${imageUrl}`;
    };

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 w-full p-4 lg:p-0 transition-shadow duration-300 ${isScrolled ? 'shadow-lg' : ''
                    }`}
                style={{ 
                    backgroundColor: headerData?.headerBgColor || '#000000',
                    color: headerData?.headerFontColor || '#ffffff'
                }}
            >
                <div className="container mx-auto flex items-center justify-between md:pl-10">
                    <Link href="/">
                        <Image
                            src={getImageUrl()}
                            alt={headerData?.headerImage?.alternativeText || "Header Logo"}
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