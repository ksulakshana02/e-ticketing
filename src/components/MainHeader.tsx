// // "use client";
// // import * as React from "react";
// // import HeroSection from "./HeroSection";
// // import Nav from "@/components/Nav";
// //
// // const MainHeader = () => {
// //   return (
// //     <main className="overflow-hidden font-medium rounded-none">
// //       <div className="flex relative flex-col w-full rounded-none min-h-[600px] max-md:max-w-full">
// //         <img
// //           src="/home-hero.png"
// //           alt="Background"
// //           className="object-cover absolute inset-0 size-full"
// //         />
// //         <div className="relative px-20 pt-10 pb-40 w-full rounded-none max-md:px-5 max-md:pb-24 max-md:max-w-full">
// //           <Nav/>
// //           <HeroSection />
// //         </div>
// //       </div>
// //     </main>
// //   );
// // }
// //
// // export default MainHeader;
//
// //
// // "use client";
// //
// // import React from "react";
// // import Image from "next/image";
// // import HeroSection from "./HeroSection";
// // import Nav from "@/components/Nav";
// //
// // const MainHeader: React.FC = () => {
// //   return (
// //       <main className="relative w-full font-medium overflow-hidden">
// //         <div className="relative flex flex-col w-full min-h-[600px] sm:min-h-[700px]">
// //           <Image
// //               src="/home-hero.png"
// //               alt="Background"
// //               fill
// //               className="object-cover"
// //               priority
// //               quality={85}
// //           />
// //           <div className="relative z-10 px-4 py-8 sm:px-6 md:px-16 md:py-12 lg:px-20 lg:py-16 w-full max-w-7xl mx-auto">
// //             <Nav />
// //             <HeroSection />
// //           </div>
// //         </div>
// //       </main>
// //   );
// // };
// //
// // export default MainHeader;
//
//
// "use client";
//
// import React from "react";
// import Image from "next/image";
// import Nav from "@/components/Nav";
//
// const Hero: React.FC = () => {
//     return (
//         <main className="relative w-full min-h-[600px] font-medium">
//             {/* Background Image */}
//             <Image
//                 src="/hero.png"
//                 alt="Background"
//                 fill
//                 className="object-cover rounded-b-[100px]"
//                 priority
//                 quality={85}
//             />
//
//             {/* Content */}
//             <div
//                 className="relative z-10 flex flex-col w-full max-w-7xl mx-auto px-4 py-8 sm:px-6 md:px-10 md:py-12 lg:py-16">
//                 {/* Navigation */}
//                 <Nav/>
//
//                 {/* Hero Content */}
//                 <section className="mt-10 md:mt-16 lg:mt-20 flex flex-col items-start max-w-2xl">
//                     <h1 className="text-4xl sm:text-5xl md:text-6xl groteskBold text-white leading-6 max-w-full">
//                         Let’s Book Your Ticket
//                     </h1>
//                     <p className="mt-4 text-lg sm:text-xl md:text-2xl font-inter font-light text-white max-w-full">
//                         Discover your favorite entertainment right here
//                     </p>
//
//                     {/* Search Bar */}
//                     <form
//                         className="mt-8 w-full max-w-md bg-white rounded-lg flex flex-col sm:flex-row items-stretch text-lg">
//                         <input
//                             type="text"
//                             placeholder="Search for events, Artists"
//                             className="grow px-4 py-3 sm:rounded-l-lg rounded-t-lg sm:rounded-tr-none font-inter font-medium text-[#27337C] outline-none sm:border-r-0 border-b sm:border-b-0 border-gray-300"
//                             aria-label="Search for events or artists"
//                         />
//                         <button
//                             type="submit"
//                             className="flex items-center font-inter font-medium text-lg justify-center gap-2 px-6 py-3 bg-[#27337C] text-white sm:rounded-r-lg rounded-b-lg sm:rounded-bl-none hover:bg-indigo-800 transition-colors duration-200"
//                             aria-label="Search"
//                         >
//                             <Image
//                                 src="/search.png"
//                                 alt=""
//                                 width={24}
//                                 height={24}
//                                 className="object-contain"
//                             />
//                             <span>Search</span>
//                         </button>
//                     </form>
//                 </section>
//             </div>
//         </main>
//     );
// };
//
// export default Hero;

"use client";

import React from "react";
import Image from "next/image";
import Nav from "@/components/Nav";

const Hero: React.FC = () => {
    return (
        <main className="relative w-full min-h-[500px] sm:min-h-[600px] font-medium">
            {/* Background Image */}
            <Image
                src="/hero.png"
                alt="Background"
                fill
                className="object-cover rounded-b-[40px] sm:rounded-b-[60px] lg:rounded-b-[80px] 2xl:rounded-b-[100px]"
                priority
                quality={90}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, (max-width: 1536px) 100vw, 1920px"
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col w-full max-w-screen-2xl mx-auto px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-12 lg:py-14 xl:px-16 xl:py-16 2xl:px-20 2xl:py-20">
                {/* Navigation */}
                <Nav />

                {/* Hero Content */}
                <section className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 xl:mt-20 2xl:mt-24 flex flex-col items-start max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl groteskBold text-white leading-6">
                        Let’s Book Your Ticket
                    </h1>
                    <p className="mt-3 sm:mt-4 md:mt-5 lg:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-inter font-light text-white">
                        Discover your favorite entertainment right here
                    </p>

                    {/* Search Bar */}
                    <form className="mt-6 sm:mt-8 md:mt-10 w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl bg-white rounded-lg flex flex-col sm:flex-row items-stretch text-base sm:text-lg">
                        <input
                            type="text"
                            placeholder="Search for events, Artists"
                            className="grow px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4 sm:rounded-l-lg rounded-t-lg sm:rounded-tr-none font-inter font-medium text-[#27337C] outline-none sm:border-r-0 border-b sm:border-b-0 border-gray-300 text-sm sm:text-base md:text-lg"
                            aria-label="Search for events or artists"
                        />
                        <button
                            type="submit"
                            className="flex items-center font-inter font-medium text-sm sm:text-base md:text-lg justify-center gap-1.5 sm:gap-2 px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-4 bg-[#27337C] text-white sm:rounded-r-lg rounded-b-lg sm:rounded-bl-none hover:bg-indigo-800 transition-colors duration-200"
                            aria-label="Search"
                        >
                            <Image
                                src="/search.png"
                                alt=""
                                width={20}
                                height={20}
                                className="object-contain sm:w-6 sm:h-6 md:w-7 md:h-7"
                            />
                            <span>Search</span>
                        </button>
                    </form>
                </section>
            </div>
        </main>
    );
};

export default Hero;