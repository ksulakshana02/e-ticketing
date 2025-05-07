import React, {useRef} from "react";

import EventCard from "@/components/EventCard";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";

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
];

const EventsSection = () => {

    const scrollRef = useRef<HTMLDivElement>(null);

    return (
        // <section className="py-10 px-4 sm:px-6 md:px-8 bg-white">
        //     <div className="max-w-7xl mx-auto">
        //         <SectionTitle title="Upcoming Events"/>
        //         <div className="grid grid-cols-4 gap-5 max-md:grid-cols-2 max-sm:grid-cols-1">
        //             {events.map((event, index) => (
        //                 <EventCard key={index} {...event} />
        //             ))}
        //         </div>
        //     </div>
        // </section>

        <section className="py-6 md:py-10 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <SectionTitle title="Upcoming Events"/>
                <div className="hidden lg:block">
                    <div className="grid lg:grid-cols-4 py-4 gap-6 mt-8">
                        {events.map((event, index) => (
                            <EventCard key={index} {...event} />
                        ))}
                    </div>
                </div>

                <div className="block lg:hidden mt-6">
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
}

export default EventsSection;
