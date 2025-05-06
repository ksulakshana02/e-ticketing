"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface EventCardProps {
    image: string;
    title: string;
    date: string;
    time: string;
    location: string;
    price: string;
}

const EventCard: React.FC<EventCardProps> = ({
                                                 image,
                                                 title,
                                                 date,
                                                 time,
                                                 location,
                                                 price,
                                             }) => {
    return (
        <Link href={`/events/${title}`}>
            <article className="w-full max-w-[296px] mx-auto">
                <div className="border-2 border-violet-100 rounded-md">
                    <div className="p-3">
                        <Image
                            src={image}
                            alt={title}
                            width={280}
                            height={238}
                            className="object-cover w-full rounded-md aspect-[1.18]"
                        />
                        <div className="px-2 justify-between">
                            <h3 className="mt-4 text-xl font-medium groteskMedium text-[#011C2A]">{title}</h3>
                            <div className="flex gap-4 sm:gap-6 mt-4">
                                <div className="flex gap-3 text-xs font-inter font-medium text-[#6B7280]">
                                    <Image
                                        src="/calendar.png"
                                        alt=""
                                        width={15}
                                        height={15}
                                        className="object-contain"
                                    />
                                    <time>{date}</time>
                                </div>
                                <div className="flex gap-3 text-xs font-inter font-medium text-[#6B7280]">
                                    <Image
                                        src="/clock.png"
                                        alt=""
                                        width={18}
                                        height={18}
                                        className="object-contain"
                                    />
                                    <time>{time}</time>
                                </div>
                            </div>
                            <div
                                className="flex justify-start items-center gap-3 mt-3 text-xs font-inter font-medium text-[#6B7280]">
                                <Image
                                    src="/location.png"
                                    alt=""
                                    width={19}
                                    height={19}
                                    className="object-contain"
                                />
                                <p>{location}</p>
                            </div>
                            <div className="flex gap-2 mt-4 font-semibold ">
                                <p className="text-xl groteskSemiBold font-semibold text-[#011C2A]">{price}</p>
                                <p className="text-xs text-gray-500 self-center">Upwards</p>
                            </div>
                        </div>
                    </div>
                    <Link href={`/events/${title}`}>
                        <button
                            className="mt-6 w-full px-6 py-3 bg-[#27337C] text-white font-inter font-medium text-sm cursor-pointer rounded-b-md border-2 border-[#27337C] hover:bg-indigo-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            Buy Tickets
                        </button>
                    </Link>
                </div>
            </article>
        </Link>
    );
};

export default EventCard;
