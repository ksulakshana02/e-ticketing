import * as React from "react";

import EventCard from "@/components/EventCard";
import SectionTitle from "@/components/SectionTitle";

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

        <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <SectionTitle title="Upcoming Events"/>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                    {events.map((event, index) => (
                        <EventCard key={index} {...event} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default EventsSection;
