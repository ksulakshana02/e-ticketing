"use client"
import React, {useState} from "react";
import Image from "next/image";
import {motion, AnimatePresence} from "framer-motion";
import Link from "next/link";

const NavigationBar: React.FC = () => {
    const menuItems = [
        {title: "Home", link: "/"},
        {title: "Events", link: "/events"},
        {title: "About Us", link: "/about-us"},
        {title: "Contact Us", link: "/contact-us"},
        {title: "FAQ", link: "/faq"}
    ];
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    // Framer Motion variants for mobile menu (dropdown effect)
    const menuVariants = {
        closed: {opacity: 0, y: -20, transition: {duration: 0.3, ease: "easeInOut"}},
        open: {opacity: 1, y: 0, transition: {duration: 0.3, ease: "easeInOut"}},
    };

    // Staggered animation for menu items
    const itemVariants = {
        closed: {opacity: 0, y: -10},
        open: {opacity: 1, y: 0, transition: {duration: 0.2}},
    };

    return (
        <header className="w-full bg-indigo-900 px-4 py-2 sm:px-6 lg:px-8 rounded-md shadow-md">
            <div className="mx-auto flex max-w-screen-2xl items-center justify-between">
                {/* Logo - Responsive sizing */}
                <div className="flex items-center">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={120}
                        height={60}
                        className="object-contain sm:w-[140px] lg:w-[160px]"
                        priority
                    />
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden text-white focus:outline-none focus:ring-2 focus:ring-white rounded-md p-3"
                    onClick={toggleMobileMenu}
                    aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMobileMenuOpen}
                >
                    <svg
                        className="w-7 h-7 sm:w-8 sm:h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>

                {/* Navigation Menu and Auth Buttons - Desktop/Tablet */}
                <div className="hidden lg:flex lg:items-center lg:gap-4 xl:gap-6">
                    <nav
                        className="flex flex-row gap-2 xl:gap-4 items-center text-white font-inter text-base xl:text-lg font-medium"
                    >
                        {menuItems.map((item) => (
                            <Link href={item.link} key={item.link}>
                                <motion.button
                                    className="px-4 py-2 rounded-full hover:bg-indigo-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
                                    whileHover={{scale: 1.05}}
                                    whileTap={{scale: 0.95}}
                                >
                                    {item.title}
                                </motion.button>
                            </Link>
                        ))}
                    </nav>
                    <div className="flex flex-row gap-2 xl:gap-3">
                        <motion.button
                            className="px-4 py-2 xl:px-6 xl:py-2.5 text-white font-inter text-sm xl:text-base font-medium border-2 border-white rounded-md hover:bg-indigo-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.95}}
                        >
                            Sign Up
                        </motion.button>
                        <motion.button
                            className="px-4 py-2 xl:px-6 xl:py-2.5 text-indigo-900 font-inter text-sm xl:text-base font-medium bg-white border-2 border-white rounded-md hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.95}}
                        >
                            Sign In
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu - Animated Dropdown */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.nav
                        className="lg:hidden mt-4 rounded-md px-4 py-4 z-50"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                    >
                        <div className="flex flex-col gap-3">
                            {menuItems.map((item, index) => (
                                <Link href={item.link} key={item.link}>
                                    <motion.button
                                        className="text-white text-left font-inter text-base font-medium py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
                                        variants={itemVariants}
                                        initial="closed"
                                        animate="open"
                                        transition={{delay: index * 0.1}}
                                        onClick={toggleMobileMenu}
                                    >
                                        {item.title}
                                    </motion.button>
                                </Link>
                            ))}
                            <div className="flex flex-col gap-3 pt-2">
                                <motion.button
                                    className="px-4 py-2 text-white font-inter text-base font-medium border-2 border-white rounded-md hover:bg-indigo-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
                                    variants={itemVariants}
                                    initial="closed"
                                    animate="open"
                                    transition={{delay: menuItems.length * 0.1}}
                                    onClick={toggleMobileMenu}
                                >
                                    Sign Up
                                </motion.button>
                                <motion.button
                                    className="px-4 py-2 text-indigo-900 font-inter text-base font-medium bg-white border-2 border-white rounded-md hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
                                    variants={itemVariants}
                                    initial="closed"
                                    animate="open"
                                    transition={{delay: (menuItems.length + 1) * 0.1}}
                                    onClick={toggleMobileMenu}
                                >
                                    Sign In
                                </motion.button>
                            </div>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
};

export default NavigationBar;