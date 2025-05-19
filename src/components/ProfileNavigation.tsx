"use client"
import React, {useState} from "react";

export type NavigationTab = "details" | "security" | "bookingHistory" | "paymentHistory";

interface ProfileNavigationProps {
    initialTab?: NavigationTab;
    onTabChange?: (tab: NavigationTab) => void;
    onUpdate?: () => void;
}


interface UpdateButtonProps {
    onClick?: () => void;
}

const UpdateButton: React.FC<UpdateButtonProps> = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="px-3 py-4 text-base leading-6 text-white bg-indigo-900 rounded-md border-2 border-indigo-900 border-solid cursor-pointer w-[172px] max-md:w-full max-sm:px-2 max-sm:py-3 max-sm:text-sm"
        >
            Update
        </button>
    );
};

function InputDesign() {
    const handleTabChange = (tab: string) => {
        console.log(`Tab changed to: ${tab}`);
    };

    const handleUpdate = () => {
        console.log("Update button clicked");
    };

    return (
        <ProfileNavigation
            initialTab="details"
            onTabChange={(tab) => handleTabChange(tab)}
            onUpdate={handleUpdate}
        />
    );
}


interface ProfileNavigationTabProps {
    label: string;
    isActive?: boolean;
    onClick?: () => void;
}

const ProfileNavigationTab: React.FC<ProfileNavigationTabProps> = ({
                                                                       label,
                                                                       isActive = false,
                                                                       onClick,
                                                                   }) => {
    return (
        <button
            onClick={onClick}
            className={`
        px-3 py-4 text-base leading-6 text-indigo-900 rounded-md cursor-pointer
        h-[42px] w-[172px] max-md:w-full max-sm:px-2 max-sm:py-3 max-sm:h-9 max-sm:text-sm
        ${isActive ? "bg-white" : "bg-[#F1F5F9]"}
      `}
            aria-selected={isActive}
            role="tab"
        >
            {label}
        </button>
    );
};

const ProfileNavigation: React.FC<ProfileNavigationProps> = ({
                                                                 initialTab = "details",
                                                                 onTabChange,
                                                                 onUpdate,
                                                             }) => {
    const [activeTab, setActiveTab] = useState<NavigationTab>(initialTab);

    const handleTabChange = (tab: NavigationTab) => {
        setActiveTab(tab);
        if (onTabChange) {
            onTabChange(tab);
        }
    };

    const handleUpdate = () => {
        if (onUpdate) {
            onUpdate();
        }
    };

    return (
        <nav className="flex gap-72 justify-between items-center px-5 py-0 mx-auto my-0 h-14 max-md:flex-col max-md:gap-5 p-2.5 sm:p-5">
            <div className="flex flex-1 gap-2.5 items-start max-md:w-full">
                <div
                    className="flex flex-1 gap-2.5 items-center px-1.5 py-1 rounded-md border-[#27337C] border-solid bg-[#F1F5F9] border-[0.25px] max-md:flex-col max-md:gap-2.5"
                    role="tablist"
                    aria-label="Profile navigation"
                >
                    <ProfileNavigationTab
                        label="My Details"
                        isActive={activeTab === "details"}
                        onClick={() => handleTabChange("details")}
                    />
                    <ProfileNavigationTab
                        label="Security"
                        isActive={activeTab === "security"}
                        onClick={() => handleTabChange("security")}
                    />
                    <ProfileNavigationTab
                        label="Booking History"
                        isActive={activeTab === "bookingHistory"}
                        onClick={() => handleTabChange("bookingHistory")}
                    />
                    <ProfileNavigationTab
                        label="Payment History"
                        isActive={activeTab === "paymentHistory"}
                        onClick={() => handleTabChange("paymentHistory")}
                    />
                </div>
            </div>
            {
                activeTab === "details" || activeTab === "security" ? (<UpdateButton onClick={handleUpdate} />) : ""
            }

        </nav>
    );
};

export default ProfileNavigation;