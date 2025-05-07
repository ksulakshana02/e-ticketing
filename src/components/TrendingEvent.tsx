// "use client";
// import React, {useRef} from "react";
//
// import EventCard from "./EventCard";
// import SectionTitle from "./SectionTitle";
//
// const TrendingEvents: React.FC = () => {
//     const events = [
//         {
//             image: "/event1.png",
//             title: "Dawasak Live In Concert",
//             date: "Apr 19, 2025",
//             time: "08.00 AM IST",
//             location: "Musaeus College Auditorium",
//             price: "5,000 LKR",
//         },
//         {
//             image: "/event2.png",
//             title: "80'S 90'S RETRO PARTY",
//             date: "Apr 19, 2025",
//             time: "08.00 AM IST",
//             location: "Musaeus College Auditorium",
//             price: "4,500 LKR",
//         },
//         {
//             image: "/event3.png",
//             title: "Sancharayak",
//             date: "Apr 19, 2025",
//             time: "08.00 AM IST",
//             location: "Musaeus College Auditorium",
//             price: "5,000 LKR",
//         },
//         {
//             image: "/event4.png",
//             title: "Camellia",
//             date: "Apr 19, 2025",
//             time: "08.00 AM IST",
//             location: "Musaeus College Auditorium",
//             price: "5,000 LKR",
//         },
//         {
//             image: "/event4.png",
//             title: "Camellia",
//             date: "Apr 19, 2025",
//             time: "08.00 AM IST",
//             location: "Musaeus College Auditorium",
//             price: "5,000 LKR",
//         },
//         {
//             image: "/event4.png",
//             title: "Camellia",
//             date: "Apr 19, 2025",
//             time: "08.00 AM IST",
//             location: "Musaeus College Auditorium",
//             price: "5,000 LKR",
//         },
//     ];
//
//     const scrollRef = useRef<HTMLDivElement>(null);
//
//     const scrollLeft = () => {
//         if (scrollRef.current) {
//             const cardWidth = 296; // Approximate width of a card including gap
//             scrollRef.current.scrollBy({left: -cardWidth, behavior: "smooth"});
//         }
//     };
//
//     const scrollRight = () => {
//         if (scrollRef.current) {
//             const cardWidth = 296; // Approximate width of a card including gap
//             scrollRef.current.scrollBy({left: cardWidth, behavior: "smooth"});
//         }
//     };
//
//     return (
//         <section className="py-10 px-4 sm:px-6 md:px-8 bg-white">
//             <div className="max-w-7xl mx-auto">
//                 <SectionTitle title="Trending Events"/>
//                 <div className="relative mt-8">
//                     {/* Slider Container */}
//                     <button
//                         onClick={scrollLeft}
//                         className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2"
//                         aria-label="Scroll left"
//                     >
//                         <svg width="50" height="50" viewBox="0 0 50 50" fill="none"
//                              xmlns="http://www.w3.org/2000/svg">
//                             <circle cx="25" cy="25" r="23.5" transform="rotate(-180 25 25)" fill="#F4FCFF"
//                                     stroke="white" strokeWidth="3"/>
//                             <path d="M27.1429 18.5714L21.4286 25L27.1429 31.4286" stroke="#27337C" strokeWidth="3"
//                                   strokeLinecap="round" strokeLinejoin="round"/>
//                         </svg>
//                     </button>
//                     <div
//                         ref={scrollRef}
//                         className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-4 py-4 scrollbar-hide"
//                         style={{scrollbarWidth: "none", msOverflowStyle: "none"}}
//                     >
//                         {events.map((event, index) => (
//                             <EventCard key={index} {...event} />
//                         ))}
//                     </div>
//                     <button
//                         onClick={scrollRight}
//                         className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2"
//                         aria-label="Scroll right"
//                     >
//                         <svg width="50" height="50" viewBox="0 0 50 50" fill="none"
//                              xmlns="http://www.w3.org/2000/svg">
//                             <circle cx="25" cy="25" r="23.5" transform="matrix(1 0 0 -1 0 50)" fill="#F4FCFF"
//                                     stroke="white" strokeWidth="3"/>
//                             <path d="M22.8571 18.5714L28.5714 25L22.8571 31.4286" stroke="#27337C" strokeWidth="3"
//                                   strokeLinecap="round" strokeLinejoin="round"/>
//                         </svg>
//                     </button>
//
//                     {/* Arrow Buttons (Visible on Desktop) */}
//
//
//                 </div>
//             </div>
//         </section>
//     );
// };
//
// export default TrendingEvents;


"use client";

import React, { useRef } from "react";
import EventCard from "./EventCard";
import SectionTitle from "./SectionTitle";
import Link from "next/link";

const TrendingEvents: React.FC = () => {
    const events = [
        {
            image: "/event1.png",
            title: "Dawasak Live In Concert",
            date: "Apr 19, 2025",
            time: "08.00 AM IST",
            location: "Musaeus College Auditorium",
            price: "5,000 LKR",
        },
        {
            image: "/event2.png",
            title: "80'S 90'S RETRO PARTY",
            date: "Apr 19, 2025",
            time: "08.00 AM IST",
            location: "Musaeus College Auditorium",
            price: "4,500 LKR",
        },
        {
            image: "/event3.png",
            title: "Sancharayak",
            date: "Apr 19, 2025",
            time: "08.00 AM IST",
            location: "Musaeus College Auditorium",
            price: "5,000 LKR",
        },
        {
            image: "/event4.png",
            title: "Camellia",
            date: "Apr 19, 2025",
            time: "08.00 AM IST",
            location: "Musaeus College Auditorium",
            price: "5,000 LKR",
        },
        {
            image: "/event2.png",
            title: "80'S 90'S RETRO PARTY",
            date: "Apr 19, 2025",
            time: "08.00 AM IST",
            location: "Musaeus College Auditorium",
            price: "4,500 LKR",
        },
        {
            image: "/event3.png",
            title: "Sancharayak",
            date: "Apr 19, 2025",
            time: "08.00 AM IST",
            location: "Musaeus College Auditorium",
            price: "5,000 LKR",
        },
        {
            image: "/event4.png",
            title: "Camellia",
            date: "Apr 19, 2025",
            time: "08.00 AM IST",
            location: "Musaeus College Auditorium",
            price: "5,000 LKR",
        },
    ];

    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            const cardWidth = scrollRef.current.querySelector("article")?.offsetWidth || 296;
            scrollRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            const cardWidth = scrollRef.current.querySelector("article")?.offsetWidth || 296;
            scrollRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
        }
    };

    return (
        <section className="py-6 md:py-10 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <SectionTitle title="Trending Events"/>
                <div className="relative mt-6">
                    {/* Slider Container */}
                    <div
                        ref={scrollRef}
                        className="grid grid-flow-col auto-cols-[minmax(280px,1fr)] sm:auto-cols-[minmax(296px,1fr)] gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth py-4 scrollbar-hide"
                        style={{scrollbarWidth: "none", msOverflowStyle: "none"}}
                    >
                        {events.map((event, index) => (
                            <div key={index} className="snap-start">
                                <EventCard {...event} />
                            </div>
                        ))}
                    </div>

                    {/* Navigation Arrows (Visible on Desktop) */}
                    <button
                        onClick={scrollLeft}
                        className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 -ml-15"
                        aria-label="Scroll left"
                    >
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="25" cy="25" r="23.5" transform="rotate(-180 25 25)" fill="#F4FCFF"
                                    stroke="white" strokeWidth="3"/>
                            <path d="M27.1429 18.5714L21.4286 25L27.1429 31.4286" stroke="#27337C" strokeWidth="3"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                    <button
                        onClick={scrollRight}
                        className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 -mr-15"
                        aria-label="Scroll right"
                    >
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="25" cy="25" r="23.5" transform="matrix(1 0 0 -1 0 50)" fill="#F4FCFF"
                                    stroke="white" strokeWidth="3"/>
                            <path d="M22.8571 18.5714L28.5714 25L22.8571 31.4286" stroke="#27337C" strokeWidth="3"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
                <div className="flex justify-center mt-4 sm:mt-6">
                    <Link href="/events">
                    <button
                        className="w-max bg-[#27337C] font-inter font-medium text-xs sm:text-sm text-white py-2 sm:py-3 px-4 sm:px-6 rounded-md hover:bg-blue-800 transition-colors">
                        View More
                    </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default TrendingEvents;
