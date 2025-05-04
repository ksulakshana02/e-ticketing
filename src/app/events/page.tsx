"use client"
import HeroSection from "@/components/HeroSection";
import EventFilterSection from "@/components/Filter";
import Pagination from "@/components/Pagination";
import EventSection from "@/components/EventSection";

interface HeroProps {
    image: string;
    title: string;
    subTitle: string
}

const EventsPage = () => {

    const hero: HeroProps = {
        image: "/event-hero.png",
        title: "Explore Our Events",
        subTitle: "Discover your favorite entertainment right here",
    }

    return (
        <div className="min-h-screen">
            <HeroSection hero={hero}/>
            <EventFilterSection/>
            <EventSection/>
            <div className="my-10 flex justify-center">
                <Pagination/>
            </div>
        </div>
    );
}

export default EventsPage;