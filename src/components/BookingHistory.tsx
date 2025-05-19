import React, {useState} from 'react';
import Pagination from "@/components/Pagination";

interface TicketDetails {
    eventName: string;
    date: string;
    time: string;
    ticketType: string;
    ticketCount: number;
    price: string;
    status: string;
}

const EventCard: React.FC<TicketDetails> = ({
                                                eventName,
                                                date,
                                                time,
                                                ticketType,
                                                ticketCount,
                                                price,
                                                status,
                                            }) => {
    const statusClasses = status === 'Issued' ? 'bg-[#FDF7EA] text-[#FFC217]' : 'bg-[#E8F2ED] text-[#117F45]';

    return (
        <div className="px-6 py-8 border border-[#E7EAE9] rounded-md w-full">
            <div className="flex justify-between items-center">
                {/* Event Details */}
                <div>
                    <h3 className="text-xl text-[#000000] font-inter font-semibold">{eventName}</h3>
                    <p className="text-sm text-[#6B7280] font-inter font-semibold">
                        {date} • {time}
                    </p>
                </div>

                <div className="mt-2 flex justify-between items-center">
                    <div>
                        <p className="text-base text-[#6B7280] font-inter">
                            {ticketType} {ticketCount} Ticket(s) • {price}
                        </p>
                        {/*<span>•</span>*/}
                        {/*<p className="text-base text-[#6B7280] font-inter">{price}</p>*/}
                    </div>
                </div>


                {/* Status Badge */}
                <div className={`px-2 py-1 flex text-xs font-medium leading-tight items-center rounded-md ${statusClasses}`}>
                    <span className="mr-1"><div className={`p-1 h-1 w-1 rounded-full ${status === 'Issued' ? "bg-[#FFC217]" : "bg-[#117F45]" } `}/></span>
                    {status}
                </div>
            </div>
        </div>
    );
};

const ticketsData = [
    {
        eventName: 'Hendakare Live In Concert',
        date: 'May 31, 2025',
        time: '06:00 PM IST',
        ticketType: 'VIP Standard',
        ticketCount: 1,
        price: '2,800 LKR',
        status: 'Issued',
    },
    {
        eventName: 'Hendakare Live In Concert',
        date: 'May 31, 2025',
        time: '06:00 PM IST',
        ticketType: 'VIP Standard',
        ticketCount: 1,
        price: '2,800 LKR',
        status: 'Upcoming',
    },
    {
        eventName: 'Hendakare Live In Concert',
        date: 'May 31, 2025',
        time: '06:00 PM IST',
        ticketType: 'VIP Standard',
        ticketCount: 1,
        price: '2,800 LKR',
        status: 'Issued',
    },
];


const totalPages= 10;

const BookingHistory = () => {

    const [currentPage, setCurrentPage] = useState(1);

    return (
        <div className="">
            <div className="flex justify-center items-center">
                <div className="w-full p-6 space-y-8">
                    {ticketsData.map((ticket, index) => (
                        <EventCard key={index} {...ticket} />
                    ))}
                </div>

            </div>
            <div className="my-10 flex justify-center">
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            </div>
        </div>
    );
}

export default BookingHistory;