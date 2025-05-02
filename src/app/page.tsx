"use client";
import EventsSection from "../components/EventSection";
import MainHeader from "../components/MainHeader";
import TrendingEvents from "../components/TrendingEvent";
import Testimonials from "@/components/Testimonials";
import Newsletters from "@/components/NewsLetter";

export default function Home() {
    return (

        <div className="min-h-screen">
            <MainHeader/>
            <TrendingEvents/>
            <EventsSection/>
            <Testimonials/>
            <Newsletters/>
        </div>
    );
}
