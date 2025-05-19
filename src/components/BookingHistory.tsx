// import React, {useState} from 'react';
// import Pagination from "@/components/Pagination";
//
// interface TicketDetails {
//     eventName: string;
//     date: string;
//     time: string;
//     ticketType: string;
//     ticketCount: number;
//     price: string;
//     status: string;
// }
//
// const EventCard: React.FC<TicketDetails> = ({
//                                                 eventName,
//                                                 date,
//                                                 time,
//                                                 ticketType,
//                                                 ticketCount,
//                                                 price,
//                                                 status,
//                                             }) => {
//     const statusClasses = status === 'Issued' ? 'bg-[#FDF7EA] text-[#FFC217]' : 'bg-[#E8F2ED] text-[#117F45]';
//
//     return (
//         <div className="px-6 py-8 border border-[#E7EAE9] rounded-md w-full">
//             <div className="flex justify-between items-center">
//                 {/* Event Details */}
//                 <div>
//                     <h3 className="text-xl text-[#000000] font-inter font-semibold">{eventName}</h3>
//                     <p className="text-sm text-[#6B7280] font-inter font-semibold">
//                         {date} • {time}
//                     </p>
//                 </div>
//
//                 <div className="mt-2 flex justify-between items-center">
//                     <div>
//                         <p className="text-base text-[#6B7280] font-inter">
//                             {ticketType} {ticketCount} Ticket(s) • {price}
//                         </p>
//                         {/*<span>•</span>*/}
//                         {/*<p className="text-base text-[#6B7280] font-inter">{price}</p>*/}
//                     </div>
//                 </div>
//
//
//                 {/* Status Badge */}
//                 <div className={`px-2 py-1 flex text-xs font-medium leading-tight items-center rounded-md ${statusClasses}`}>
//                     <span className="mr-1"><div className={`p-1 h-1 w-1 rounded-full ${status === 'Issued' ? "bg-[#FFC217]" : "bg-[#117F45]" } `}/></span>
//                     {status}
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// const ticketsData = [
//     {
//         eventName: 'Hendakare Live In Concert',
//         date: 'May 31, 2025',
//         time: '06:00 PM IST',
//         ticketType: 'VIP Standard',
//         ticketCount: 1,
//         price: '2,800 LKR',
//         status: 'Issued',
//     },
//     {
//         eventName: 'Hendakare Live In Concert',
//         date: 'May 31, 2025',
//         time: '06:00 PM IST',
//         ticketType: 'VIP Standard',
//         ticketCount: 1,
//         price: '2,800 LKR',
//         status: 'Upcoming',
//     },
//     {
//         eventName: 'Hendakare Live In Concert',
//         date: 'May 31, 2025',
//         time: '06:00 PM IST',
//         ticketType: 'VIP Standard',
//         ticketCount: 1,
//         price: '2,800 LKR',
//         status: 'Issued',
//     },
// ];
//
//
// const totalPages= 10;
//
// const BookingHistory = () => {
//
//     const [currentPage, setCurrentPage] = useState(1);
//
//     return (
//         <div className="">
//             <div className="flex justify-center items-center">
//                 <div className="w-full p-6 space-y-8">
//                     {ticketsData.map((ticket, index) => (
//                         <EventCard key={index} {...ticket} />
//                     ))}
//                 </div>
//
//             </div>
//             <div className="my-10 flex justify-center">
//                 <Pagination
//                     currentPage={currentPage}
//                     totalPages={totalPages}
//                     onPageChange={setCurrentPage}
//                 />
//             </div>
//         </div>
//     );
// }
//
// export default BookingHistory;


"use client";
import React, {useState, useCallback, memo} from "react";
import Pagination from "@/components/Pagination";

// Define ticket details interface
interface TicketDetails {
    eventName: string;
    date: string;
    time: string;
    ticketType: string;
    ticketCount: number;
    price: string;
    status: "Issued" | "Upcoming";
}

// EventCard component
const EventCard: React.FC<TicketDetails> = memo(
    ({eventName, date, time, ticketType, ticketCount, price, status}) => {
        const statusClasses =
            status === "Issued"
                ? "bg-[#FDF7EA] text-[#FFC217]"
                : "bg-[#E8F2ED] text-[#117F45]";
        const statusDotClasses =
            status === "Issued" ? "bg-[#FFC217]" : "bg-[#117F45]";

        return (
            <div
                className="px-4 py-6 border border-[#E7EAE9] rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow w-full max-w-3xl mx-auto"
                role="article"
                aria-label={`Event card for ${eventName}`}
            >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    {/* Event Details */}
                    <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-inter font-semibold text-[#000000]">
                            {eventName}
                        </h3>
                        <p className="text-sm text-[#6B7280] font-inter font-medium mt-1">
                            {date} • {time}
                        </p>
                    </div>

                    {/* Ticket Details */}
                    <div className="flex-1 text-sm sm:text-base text-[#6B7280] font-inter">
                        {ticketType} • {ticketCount} Ticket{ticketCount !== 1 ? "s" : ""} • {price}
                    </div>

                    {/* Status Badge */}
                    <div
                        className={`px-2 py-1 flex items-center text-xs font-medium rounded-md ${statusClasses}`}
                        aria-label={`Status: ${status}`}
                    >
            <span className="mr-1">
              <div className={`h-1.5 w-1.5 rounded-full ${statusDotClasses}`}/>
            </span>
                        {status}
                    </div>
                </div>
            </div>
        );
    }
);
EventCard.displayName = "EventCard";

// Sample ticket data
const ticketsData: TicketDetails[] = [
    {
        eventName: "Hendakare Live In Concert",
        date: "May 31, 2025",
        time: "06:00 PM IST",
        ticketType: "VIP Standard",
        ticketCount: 1,
        price: "2,800 LKR",
        status: "Issued",
    },
    {
        eventName: "Hendakare Live In Concert",
        date: "May 31, 2025",
        time: "06:00 PM IST",
        ticketType: "VIP Standard",
        ticketCount: 1,
        price: "2,800 LKR",
        status: "Upcoming",
    },
    {
        eventName: "Hendakare Live In Concert",
        date: "May 31, 2025",
        time: "06:00 PM IST",
        ticketType: "VIP Standard",
        ticketCount: 1,
        price: "2,800 LKR",
        status: "Issued",
    },
];

// BookingHistory component
const BookingHistory: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;

    const handlePageChange = useCallback((page: number) => {
        setCurrentPage(page);
        // Optionally fetch new data for the page
    }, []);

    return (
        <div className="py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="space-y-6">
                    {ticketsData.map((ticket, index) => (
                        <EventCard key={`${ticket.eventName}-${index}`} {...ticket} />
                    ))}
                </div>
                <div className="mt-10 flex justify-center">
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default memo(BookingHistory);