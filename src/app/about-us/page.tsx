import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";

interface HeroProps {
    image: string;
    title: string;
    subTitle: string
}

const AboutUsPage = () => {

    const hero : HeroProps = {
        image: "/about-hero.png",
        title: "Who We Are",
        subTitle: "Discover your favorite entertainment right here",
    }

    return (
        <div className="min-h-screen">
            <HeroSection hero={hero}/>
            <div className="w-full py-6 sm:py-8 md:py-10 lg:py-12 xl:py-14 2xl:py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
                    <SectionTitle title="About Us"/>
                    <div
                        className="relative mt-12 w-full h-64 sm:h-80 md:h-96 lg:h-[400px] xl:h-[700px] mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                        <Image
                            src="/about-bg.png"
                            alt="About Us"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                            priority
                            quality={90}
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1536px) 100vw, 2560px"
                        />
                    </div>
                    <p className="text-sm sm:text-base md:text-lg lg:text-[22px] text-[#222222] grotesk leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur. Sapien varius nunc mi phasellus non integer. Phasellus
                        urna aliquam condimentum sem. Eu nisi libero tellus dui sapien integer egestas morbi. Commodo id
                        sed egestas iorci magna laoreet gravida eu. Lorem enim nulla purus scelerisque mattis. Lorem
                        enim nulla purus scelerisque mattis. Lorem ipsum dolor sit amet consectetur. Sapien varius nunc
                        mi phasellus non integer. Phasellus urna aliquam condimentum sem. Eu nisi libero tellus dui
                        sapien integer egestas morbi. Commodo id sed egestas iorci magna laoreet gravida eu. Lorem enim
                        nulla purus scelerisque mattis. Lorem enim nulla purus scelerisque mattis.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutUsPage;