"use client"
import MainHeader from "@/components/MainHeader";
import Image from "next/image";
import {useParams} from "next/navigation";
import {useEventById} from "@/hooks/useEvent";
import * as React from "react";
import {getLocalDateTime} from "@/util/util";

interface HeroProps {
    image: string;
    title: string;
    subTitle: string;
    type: string;
    time?: string;
}

interface Ticket {
    price: number;
    ticketCount: number | null;
    ticketTypeId: number;
    ticketTypeName: string;
}

// interface Artist {
//     artistId: number;
//     artistName: string;
// }

// interface Event {
//     id: number;
//     name: string;
//     slug: string;
//     start_date_time: string;
//     end_date_time: string;
//     description: string;
//     policy: string;
//     organized_by: string;
//     location: string;
//     banner_image: string | null;
//     featured_image: string | null;
//     ticket_details: Ticket[];
//     artist_details: Artist[];
//     status: string;
// }

const EventPage = () => {
    const {id} = useParams();

    console.log("--------", id);
    const {data: eventData, isLoading, error: eventError} = useEventById(id);
    console.log(eventData);

    const image: string = eventData?.banner_image;
    const title: string = eventData?.name;
    const time = eventData?.start_date_time;

    const hero: HeroProps = {
        // image: "/event-in.png",
        image: image,
        title: title,
        subTitle: "Event will start On",
        type: "countdown",
        time: time
    }

    const {localDate, localTime} = getLocalDateTime(eventData?.start_date_time);

    if (isLoading) {
        return <div className="flex justify-center items-center min-h-screen">
            Loading...
        </div>
    }

    if (eventError) {
        return <div className="text-center text-red-500 p-8">Error fetching events</div>
    }

    return (
        <div className="min-h-screen">
            <MainHeader hero={hero}/>
            <div className="w-full py-6 sm:py-8 md:py-10 lg:py-12 xl:py-14 2xl:py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
                    <div className="flex flex-col lg:flex-row gap-6">
                        <div className="w-full lg:w-2/3">
                            <h2 className="text-lg md:text-xl lg:text-[25px] font-inter font-semibold text-[#27337C] mb-4">More
                                Information</h2>
                            <p className="text-sm sm:text-lg md:text-xl max-w-3xl lg:text-[22px] grotesk text-[#222222] mb-4">
                                {eventData?.description}
                            </p>
                            <div className="space-y-4 mt-10">
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-inter font-semibold gap-6 text-[#1C1B1F] flex items-center">
                                    <Image src="/calendar.png" alt="" width={25} height={25}/>
                                    {/*2025-05-23 19:00:00*/}
                                    {localDate} {localTime}
                                </p>
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-inter font-semibold gap-6 text-[#1C1B1F] flex items-center">
                                    <Image src="/location.png" alt="" width={25} height={25}/>
                                    {/*Musaeus College Auditorium*/}
                                    {eventData?.location}
                                </p>
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-inter font-semibold gap-6 text-[#1C1B1F] flex items-center">
                                    <Image src="/person.png" alt="" width={25} height={25}/>
                                    Organized by {eventData?.organized_by}
                                </p>
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-inter font-semibold gap-6 text-[#1C1B1F] flex items-center">
                                    <Image src="/artist.png" alt="" width={25} height={25}/>
                                    {/*Artists - Namal | Amal | Bathiya & Santhus | Hana*/}
                                    Artists -{" "}
                                    {eventData.artist_details?.map((artist: {
                                        artistName: string;
                                    }) => artist.artistName).join(" | ") || "N/A"}
                                </p>
                                <p className="text-lg md:text-xl lg:text-[25px] font-inter font-semibold text-[#27337C] mb-4 mt-10">Ticket
                                    Policy</p>
                                <p className="text-sm sm:text-lg md:text-xl lg:text-[22px] max-w-3xl grotesk text-[#222222] mb-4">
                                    {/*Lorem ipsum dolor sit amet consectetur. Sapien varius nunc mi phasellus non integer.*/}
                                    {/*Phasellus urna aliquam condimentum sem. Eu nisi libero tellus dui sapien integer*/}
                                    {/*egestas morbi.*/}
                                    {eventData.policy || "No policy specified"}
                                </p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/3 bg-[#F4FCFF] p-2 rounded-md">
                            <div
                                className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[400px] mb-4">
                                <Image
                                    // src="/event-inner.png"
                                    src={eventData?.featured_image}
                                    alt="Event Image"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg"
                                    priority
                                    quality={90}
                                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1536px) 100vw, 2560px"
                                />
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl px-2 groteskBold text-[#27337C] mb-4">Ticket
                                Prices</h3>
                            <div className="space-y-2 px-2">
                                {/*<p className="text-base sm:text-lg md:text-xl lg:text-[25px] font-medium font-inter text-[#000000]">VVIP*/}
                                {/*    Seated <span className="float-right groteskSemiBold text-[#27337C]">3,500 LKR</span>*/}
                                {/*</p>*/}
                                {/*<p className="text-base sm:text-lg md:text-xl lg:text-[25px] font-medium font-inter text-[#000000]">VIP*/}
                                {/*    Standing <span*/}
                                {/*        className="float-right groteskSemiBold text-[#27337C]">2,500 LKR</span></p>*/}
                                {/*<p className="text-base sm:text-lg md:text-xl lg:text-[25px] font-medium font-inter text-[#000000]">General*/}
                                {/*    Entrance <span*/}
                                {/*        className="float-right groteskSemiBold text-[#27337C]">1,500 LKR</span></p>*/}
                                {eventData.ticket_details?.map((ticket: Ticket, index: number) => (
                                    <p
                                        key={index}
                                        className="text-base sm:text-lg md:text-xl lg:text-[25px] font-medium font-inter text-[#000000]"
                                    >
                                        {ticket.ticketTypeName}{" "}
                                        <span className="float-right groteskSemiBold text-[#27337C]">
                      {ticket.price} LKR
                    </span>
                                    </p>
                                )) || (
                                    <p className="text-base sm:text-lg md:text-xl lg:text-[25px] font-medium font-inter text-[#000000]">
                                        No ticket details available
                                    </p>
                                )}
                            </div>
                            {/*<button*/}
                            {/*    className="mt-10 mb-4 px-20 mx-auto text-center place-content-center bg-[#27337C] text-white py-2 sm:py-3 rounded-lg font-inter font-medium text-xs md:text-sm hover:bg-blue-800 transition-colors">*/}
                            {/*    Buy Tickets*/}
                            {/*</button>*/}

                            <div className="flex justify-center mt-10 mb-4">
                                <button
                                    className="px-20 bg-[#27337C] text-white py-2 sm:py-3 rounded-lg font-inter font-medium text-xs md:text-sm hover:bg-blue-800 transition-colors">
                                    Buy Tickets
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventPage;