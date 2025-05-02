import Image from "next/image";
import React from "react";

const Newsletters = () => {
    return (
        <div className="w-full py-12 px-4 sm:px-6 md:px-8 lg:px-12">
            <div
                className=""
            >
                <div
                    className="relative justify-center">
                    <Image
                        className="absolute -bottom-20 overflow-hidden object-cover"
                        width={1400}
                        height={600}
                        alt=""
                        src="/newsletters.png"
                    />
                    <div
                        className="flex relative flex-col items-center text-center py-12 px-6 sm:px-8 md:px-16 lg:px-24 ml-16 md:ml-24">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4">
                            Subscribe Our Newsletter
                        </h2>

                        <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8">
                            Lorem ipsum dolor sit amet consectetur. Ut pulvinar ullamcorper enim vulputate. Facilisi
                            bibendum
                            vulputate Lorem ipsum dolor sit amet consectetur. Ut pulvinar ullamcorper enim vulputate.
                        </p>

                        <div className="w-full max-w-xl relative rounded-md bg-white">
                            <input
                                type="email"
                                placeholder="Enter your email ..."
                                className="w-full h-12 md:h-14 px-4 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#27337C]"
                            />
                            <button
                                className="absolute right-1 top-1 bottom-1 bg-[#27337C] hover:bg-[#1c255b] transition-colors px-4 sm:px-6 rounded-md text-white font-medium text-sm sm:text-base"
                            >
                                Subscribe Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletters;
