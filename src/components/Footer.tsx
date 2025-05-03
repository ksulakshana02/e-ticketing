"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
    return (
        <footer className="w-full relative bg-[#F4FCFF]">
            {/* Footer Top */}
            <div className="w-full py-12">
                {/*<div*/}
                {/*    className="absolute bg-repeat-round w-full inset-0">*/}
                {/*    <Image src="/movie-ticket.png" alt="" width={100} height={200} className="bg-repeat-round inset-0 absolute"/>*/}
                {/*</div>*/}
                <div
                    className="absolute bg-[url('/movie-ticket.png')] bg-repeat-round inset-0 w-full h-full bg-[length:100px_auto]"
                ></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Logo and Description */}
                        <div className="w-full md:w-1/3">
                            <div className="flex items-center gap-4">
                                <div className="w-32 sm:w-40 md:w-48">
                                    <Image
                                        src="/logo.png"
                                        alt="Quick Seats logo"
                                        width={150}
                                        height={80}
                                        className="w-full h-auto"
                                    />
                                </div>
                            </div>
                            <p className="mt-4 font-inter font-normal text-sm text-[#2D2A70] min-w-8 leading-6">
                                Lorem ipsum dolor sit amet consectetur. Eget adipiscing consequat
                                purus nulla non cras velit. Velit posuere fames consequat sit
                                nulla porta diam. Lorem ipsum dolor sit amet consectetur. Eget
                                adipiscing consequat purus nulla non cras velit.
                            </p>
                            {/* Social Icons */}
                            <div className="flex gap-4 mt-6">
                                {["facebook", "instagram", "linkedin", "youtube"].map((social) => (
                                    <Link
                                        key={social}
                                        href="#"
                                        className="relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border border-indigo-900/20 hover:bg-indigo-100 transition-colors"
                                    >
                                        <Image
                                            src={`/${social}.png`}
                                            alt={`${social} logo`}
                                            fill
                                            style={{objectFit: "contain"}}
                                        />
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Site Map */}
                        <div className="w-full md:w-1/5">
                            <div className="flex justify-between items-center">
                                <h2 className="text-base font-inter font-semibold uppercase text-[#27337C]">
                                    SITE MAP
                                </h2>
                            </div>
                            <div className="mt-4 text-base font-inter font-medium text-[#27337C]">
                                <ul className="space-y-4">
                                    {["Events", "About Us", "Contact Us", "Sign In", "Sign Up"].map(
                                        (item) => (
                                            <li key={item}>
                                                <a
                                                    href={`/${item.toLowerCase().replace(" ", "")}`}
                                                    className="hover:text-indigo-700"
                                                >
                                                    {item}
                                                </a>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        </div>

                        {/* Useful Links */}
                        <div className="w-full md:w-1/5">
                            <div className="flex justify-between items-center">
                                <h2 className="text-base font-inter font-semibold uppercase text-[#27337C]">
                                    USEFUL LINKS
                                </h2>
                            </div>
                            <nav className="mt-4 text-base font-inter font-medium text-[#27337C]">
                                <ul className="space-y-4">
                                    {["Terms and Conditions", "Privacy Policy", "Refund Policy", "FAQ"].map(
                                        (item) => (
                                            <li key={item}>
                                                <a
                                                    href={`/${item.toLowerCase().replace(" ", "")}`}
                                                    className="hover:text-indigo-700"
                                                >
                                                    {item}
                                                </a>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </nav>
                        </div>

                        {/* Contact Us */}
                        <div className="w-full md:w-1/4">
                            <h2 className="text-base font-semibold uppercase text-indigo-900">
                                CONTACT US
                            </h2>
                            <div className="mt-4 text-base font-inter font-medium text-[#27337C] space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="relative w-6 h-6 sm:w-8 sm:h-8">
                                        {/*<Image*/}
                                        {/*    src="/location1.png"*/}
                                        {/*    alt="location icon"*/}
                                        {/*    fill*/}
                                        {/*    style={{objectFit: "contain"}}*/}
                                        {/*/>*/}
                                        <Image src="/location1.png" alt="telephone" width={35} height={35}/>
                                    </div>
                                    <p className="">
                                        Lorem ipsum dolor sit amet conse
                                    </p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="relative w-6 h-6 sm:w-8 sm:h-8">
                                        {/*<Image*/}
                                        {/*    src="/email.png"*/}
                                        {/*    alt="email icon"*/}
                                        {/*    fill*/}
                                        {/*    style={{objectFit: "contain"}}*/}
                                        {/*/>*/}
                                        <Image src="/email.png" alt="telephone" width={35} height={35}/>
                                    </div>
                                    <a
                                        href="mailto:quickseats@booking.lk"
                                        className="hover:text-indigo-700"
                                    >
                                        quickseats@booking.lk
                                    </a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="relative w-6 h-6 sm:w-8 sm:h-8">
                                        {/*<Image*/}
                                        {/*    src="/tel.png"*/}
                                        {/*    alt="telephone icon"*/}
                                        {/*    fill*/}
                                        {/*    style={{objectFit: "contain"}}*/}
                                        {/*/>*/}
                                        <Image src="/tel.png" alt="telephone" width={35} height={35}/>
                                    </div>
                                    <a href="tel:+94112512069" className="hover:text-indigo-700">
                                        +94 11 2512069
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="relative w-full py-6 bg-[#27337C]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div
                        className="flex flex-col md:flex-row gap-5 grotesk justify-between text-base leading-none text-white">
                        <p>Copyright © 2025 Quick Seats.LK Designed</p>
                        <nav className="flex gap-5">
                            <a href="/privacy" className="hover:text-gray-200">
                                Privacy Policy
                            </a>
                            <a href="/terms" className="hover:text-gray-200">
                                Terms and Conditions
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;