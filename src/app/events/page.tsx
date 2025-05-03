import HeroSection from "@/components/HeroSection";

interface HeroProps {
    image: string;
    title: string;
    subTitle: string
}

const EventsPage = () => {

    const hero : HeroProps = {
        image: "/event-hero.png",
        title: "Explore Our Events",
        subTitle: "Discover your favorite entertainment right here",
    }

    return (
        <div className="min-h-screen">
            <HeroSection hero={hero}/>
        </div>
    );
}

export default EventsPage;