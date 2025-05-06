// "use client"
// import {useState} from "react";
// import HeroSection from "@/components/HeroSection";
// import Pagination from "@/components/Pagination";
// import EventFilter from "@/components/Filter";
// import SectionTitle from "@/components/SectionTitle";
// import * as React from "react";
// import EventCard from "@/components/EventCard";
//
// interface HeroProps {
//     image: string;
//     title: string;
//     subTitle: string
// }
//
// interface Artist {
//     id: number;
//     name: string;
// }
//
// interface Location {
//     id: number;
//     name: string;
// }
//
// interface EventFilters {
//     startDate: Date | null;
//     endDate: Date | null;
//     artist: Artist | null;
//     location: Location | null;
//     priceRange: number[];
// }
//
// const EventsPage = () => {
//
//     const [filters, setFilters] = useState<EventFilters | null>(null);
//
//     const hero: HeroProps = {
//         image: "/event-hero.png",
//         title: "Explore Our Events",
//         subTitle: "Discover your favorite entertainment right here",
//     }
//
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
//     ];
//
//     const handleFilterChange = (newFilters: EventFilters) => {
//         setFilters(newFilters);
//         console.log(filters);
//         console.log('Filters applied:', newFilters);
//     };
//
//     return (
//         <div className="min-h-screen">
//             <HeroSection hero={hero}/>
//             <div className="py-8 px-4 sm:px-6 lg:px-20">
//                 <div className="py-2 sm:py-10 px-4 sm:px-6 max-w-7xl mx-auto">
//                     <SectionTitle title="Latest Events"/>
//                 </div>
//                 <div className="py-5 px-4 sm:px-6 lg:px-12">
//                     <EventFilter onFilterChange={handleFilterChange}/>
//                 </div>
//                 <section className="px-4 sm:px-6 lg:px-8 bg-white">
//                     <div className="max-w-7xl mx-auto">
//                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
//                             {events.map((event, index) => (
//                                 <EventCard key={index} {...event} />
//                             ))}
//                         </div>
//                     </div>
//                 </section>
//                 <div className="my-10 flex justify-center">
//                     <Pagination/>
//                 </div>
//             </div>
//         </div>
//     );
// }
//
// export default EventsPage;

"use client";
import {useState} from "react";
import HeroSection from "@/components/HeroSection";
import Pagination from "@/components/Pagination";
import EventFilter from "@/components/Filter";
import SectionTitle from "@/components/SectionTitle";
import * as React from "react";
import EventCard from "@/components/EventCard";
import {useSearchParams} from "next/navigation";
import {events} from "@/lib/data"

interface HeroProps {
    image: string;
    title: string;
    subTitle: string;
}

interface Artist {
    id: number;
    name: string;
}

interface Location {
    id: number;
    name: string;
}

interface EventFilters {
    startDate: Date | null;
    endDate: Date | null;
    artist: Artist | null;
    location: Location | null;
    priceRange: number[];
}

interface ExtendedEvent {
    image: string;
    title: string;
    date: string;
    time: string;
    location: string;
    price: string;
    artist: Artist; // Added artist field
}

const EventsPage = () => {
    const [filters, setFilters] = useState<EventFilters | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const eventsPerPage = 12;
    const searchParams = useSearchParams();
    const searchQuery = searchParams.get("search")?.toLowerCase() || "";

    const hero: HeroProps = {
        image: "/event-hero.png",
        title: "Explore Our Events",
        subTitle: "Discover your favorite entertainment right here",
    };

    const handleFilterChange = (newFilters: EventFilters) => {
        setFilters(newFilters);
        setCurrentPage(1);
    };

    // Function to parse price from string to number
    const parsePrice = (price: string): number => {
        return parseInt(price.replace(/[^0-9]/g, ""));
    };

    // Function to parse date string to Date object
    const parseEventDate = (date: string): Date => {
        return new Date(date);
    };

    // Filter events based on the current filters
    // const filteredEvents = filters
    //     ? events.filter((event) => {
    //         const eventDate = parseEventDate(event.date);
    //         const eventPrice = parsePrice(event.price);
    //
    //         // Date range filter
    //         const dateMatch =
    //             !filters.startDate ||
    //             !filters.endDate ||
    //             (eventDate >= filters.startDate && eventDate <= filters.endDate);
    //
    //         // Artist filter
    //         const artistMatch =
    //             !filters.artist || event.artist.id === filters.artist.id;
    //
    //         // Location filter
    //         const locationMatch =
    //             !filters.location || event.location === filters.location.name;
    //
    //         // Price range filter
    //         const priceMatch =
    //             eventPrice >= filters.priceRange[0] &&
    //             eventPrice <= filters.priceRange[1];
    //
    //         return dateMatch && artistMatch && locationMatch && priceMatch;
    //     })
    //     : events;

    const filteredEvents = events.filter((event) => {
        const eventDate = parseEventDate(event.date);
        const eventPrice = parsePrice(event.price);

        // Search query filter
        const searchMatch =
            !searchQuery ||
            event.title.toLowerCase().includes(searchQuery) ||
            event.artist.name.toLowerCase().includes(searchQuery);

        // EventFilter filters
        const dateMatch =
            !filters?.startDate ||
            !filters?.endDate ||
            (eventDate >= filters.startDate && eventDate <= filters.endDate);

        const artistMatch = !filters?.artist || event.artist.id === filters.artist.id;

        const locationMatch =
            !filters?.location || event.location === filters.location.name;

        const priceMatch =
            !filters?.priceRange ||
            (eventPrice >= filters.priceRange[0] && eventPrice <= filters.priceRange[1]);

        return searchMatch && dateMatch && artistMatch && locationMatch && priceMatch;
    });

    const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);
    const startIndex = (currentPage - 1) * eventsPerPage;
    const paginatedEvents = filteredEvents.slice(startIndex, startIndex + eventsPerPage);

    return (
        <div className="min-h-screen">
            <HeroSection hero={hero}/>
            <div className="py-8 px-4 sm:px-6 lg:px-20">
                <div className="py-2 sm:py-10 px-4 sm:px-6 max-w-7xl mx-auto">
                    <SectionTitle title="Latest Events"/>
                </div>
                <div className="py-5 px-4 sm:px-6 lg:px-12">
                    <EventFilter onFilterChange={handleFilterChange}/>
                </div>
                <section className="px-4 sm:px-6 lg:px-8 bg-white">
                    <div className="max-w-7xl mx-auto">
                        {paginatedEvents.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                                {paginatedEvents.map((event, index) => (
                                    <EventCard key={index} {...event} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-10">
                                <p className="text-gray-500">No events match the selected filters.</p>
                            </div>
                        )}
                    </div>
                </section>
                <div className="my-10 flex justify-center">
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                    />
                </div>
            </div>
        </div>
    );
};

export default EventsPage;