import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";

interface HeroProps {
    image: string;
    title: string;
    subTitle: string
}

const ContactUsPage = () => {

    const hero: HeroProps = {
        image: "/contact-hero.png",
        title: "Contact Us",
        subTitle: "Discover your favorite entertainment right here",
    }

    return (
        <div className="min-h-screen">
            <HeroSection hero={hero}/>
            <div className="w-full py-6 sm:py-8 md:py-10 lg:py-12 xl:py-14 2xl:py-16">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
                    <SectionTitle title="Contact Us"/>
                    <div className="flex flex-col lg:flex-row gap-6">
                        {/* Contact Information */}
                        <div className="w-full lg:w-1/2 bg-blue-900 text-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-lg">
                            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-4">Contact
                                Information</h3>
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl mb-4">Say
                                something to start a live chat!</p>
                            <div className="space-y-4">
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl flex items-center">
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 mr-2" fill="currentColor"
                                         viewBox="0 0 24 24">
                                        <path
                                            d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                                    </svg>
                                    Lorem ipsum dolor sit amet consectetur. Sed tempus sed, consectetur. Sed tempus sed
                                </p>
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl flex items-center">
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 mr-2" fill="currentColor"
                                         viewBox="0 0 24 24">
                                        <path
                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3h.01L12 7h-2V5h2zm0 14h-2v-2h2v2zm0-4h-2v-6h2v6z"/>
                                    </svg>
                                    primeticket@booking.lk
                                </p>
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl flex items-center">
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 mr-2" fill="currentColor"
                                         viewBox="0 0 24 24">
                                        <path
                                            d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.27 1.12.29 2.26.43 3.41.43.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C9.31 21 3 14.69 3 7c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.15.14 2.29.43 3.41.09.35 0 .75-.27 1.02l-2.2 2.2z"/>
                                    </svg>
                                    +94 112 512069
                                </p>
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl flex items-center">
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 mr-2" fill="currentColor"
                                         viewBox="0 0 24 24">
                                        <path
                                            d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.27 1.12.29 2.26.43 3.41.43.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C9.31 21 3 14.69 3 7c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.15.14 2.29.43 3.41.09.35 0 .75-.27 1.02l-2.2 2.2z"/>
                                    </svg>
                                    +94 112 512069
                                </p>
                            </div>
                            <div className="flex space-x-4 mt-6">
                                <a href="#" className="text-white">
                                    <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M22 0H2C.9 0 0 .9 0 2v20c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM8 20H5V9h3v11zm-1.5-12.5C5.67 7.5 5 6.83 5 6s.67-1.5 1.5-1.5S8 5.17 8 6s-.67 1.5-1.5 1.5zM19 20h-3v-5.5c0-1.38-.62-2-2-2s-2 .62-2 2V20h-3V9h3v1.5c.62-.83 1.83-1.5 3-1.5 2.48 0 4 1.69 4 4.5V20z"/>
                                    </svg>
                                </a>
                                <a href="#" className="text-white">
                                    <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 15h-3v-3h3v3zm0-5h-3V9h3v3zm-5 5H9v-3h3v3zm0-5H9V9h3v3zm-5 5H4v-3h3v3zm0-5H4V9h3v3z"/>
                                    </svg>
                                </a>
                                <a href="#" className="text-white">
                                    <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 15h-3v-3h3v3zm0-5h-3V9h3v3zm-5 5H9v-3h3v3zm0-5H9V9h3v3zm-5 5H4v-3h3v3zm0-5H4V9h3v3z"/>
                                    </svg>
                                </a>
                                <a href="#" className="text-white">
                                    <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 15h-3v-3h3v3zm0-5h-3V9h3v3zm-5 5H9v-3h3v3zm0-5H9V9h3v3zm-5 5H4v-3h3v3zm0-5H4V9h3v3z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        {/* Contact Form */}
                        <div className="w-full lg:w-1/2 bg-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-lg shadow-md">
                            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-blue-900 mb-4">Reach
                                out to us for any inquiries</h3>
                            <div className="space-y-4">
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <input type="text" placeholder="First Name"
                                           className="w-full sm:w-1/2 p-3 border rounded-lg text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"/>
                                    <input type="text" placeholder="Last Name"
                                           className="w-full sm:w-1/2 p-3 border rounded-lg text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"/>
                                </div>
                                <input type="email" placeholder="Email"
                                       className="w-full p-3 border rounded-lg text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"/>
                                <input type="tel" placeholder="Phone Number"
                                       className="w-full p-3 border rounded-lg text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"/>
                                <div className="flex flex-wrap gap-2">
                                    <button
                                        className="px-4 py-2 bg-blue-900 text-white rounded-full text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">General
                                        Inquiry
                                    </button>
                                    <button
                                        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">Refund
                                        Request
                                    </button>
                                    <button
                                        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">Tech
                                        Issue
                                    </button>
                                    <button
                                        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">Event
                                        Listing
                                    </button>
                                </div>
                                <textarea placeholder="Write your message..."
                                          className="w-full p-3 border rounded-lg h-32 sm:h-40 md:h-48 lg:h-56 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"></textarea>
                                <button
                                    className="w-full bg-blue-900 text-white py-3 rounded-lg text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl hover:bg-blue-800 transition-colors">
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUsPage;