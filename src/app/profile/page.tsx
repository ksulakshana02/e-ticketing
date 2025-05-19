"use client"
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import React from "react";
import ProfileNavigation from "@/components/ProfileNavigation";
import ProfileForm from "@/components/ProfileForm";
import ChangePassword from "@/components/ChangePassword";
import BookingHistory from "@/components/BookingHistory";
import PaymentHistory from "@/components/PaymentHistory";

interface HeroProps {
    image: string;
    title: string;
    subTitle: string
}


interface FormFieldProps {
    label: string;
    placeholder: string;
    type?: string;
    className?: string;
}

const FormField: React.FC<FormFieldProps> = ({
                                                 label,
                                                 placeholder,
                                                 type = "text",
                                                 className = "",
                                             }) => {
    return (
        <div className={`flex flex-col gap-4 w-[500px] max-sm:w-full ${className}`}>
            <label className="text-2xl font-medium text-neutral-800 max-sm:text-lg">
                {label}
            </label>
            <div
                className="flex items-center p-4 rounded-md border-solid border-[3px] border-slate-100 h-[60px] max-sm:h-[50px]">
                <input
                    type={type}
                    placeholder={placeholder}
                    className="w-full text-base border-[none] text-neutral-600 outline-none"
                />
            </div>
        </div>
    );
};


const ProfilePage = () => {

    const hero: HeroProps = {
        image: "/profile-hero.png",
        title: "Profile",
        subTitle: "Discover your favorite entertainment right here",
    }

    return (
        <div className="min-h-screen">
            <HeroSection hero={hero}/>
            <div className="py-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <SectionTitle title="Profile Setting"/>
                    <div className="mt-12 w-full">
                        <ProfileNavigation/>

                        <div className="mt-12">
                            {/*<ProfileForm/>*/}
                            {/*<ChangePassword/>*/}
                            {/*<BookingHistory/>*/}
                            <PaymentHistory/>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    );
}

export default ProfilePage;