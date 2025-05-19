import React, {useState} from "react";

interface ProfileData {
    firstName: string;
    lastName: string;
    gender: string;
    nicPassport: string;
    contactNumber: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    dateOfBirth: string;
    email: string;
    country: string;
}


const ProfileForm = () => {

    const [profileData, setProfileData] = useState<ProfileData>({
        firstName: '',
        lastName: '',
        gender: '',
        nicPassport: '',
        contactNumber: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        dateOfBirth: '',
        email: '',
        country: '',
    });


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setProfileData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Profile Data:', profileData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-5xl">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-18">
                <div className="w-full">
                    <label htmlFor="firstName"
                           className="block text-base lg:text-[22px] font-inter font-medium text-[#222222]">
                        First Name
                    </label>
                    <div
                        className="flex flex-row w-full px-1 items-center py-1 mt-2 border-3 border-[#EDF1F7] hover:border-[#2D3192]/50 rounded-md focus:outline-[#2D3192] focus:border-blue-500">
                        <input
                            type="text"
                            id="firstName"
                            value={profileData.firstName}
                            onChange={handleChange}
                            placeholder="Enter your first name"
                            className="w-full px-2 py-2 rounded-lg font-inter font-normal text-base text-[#505050] focus:outline-none"
                        />
                    </div>
                </div>

                {/* Last Name */}
                <div className="w-full">
                    <label htmlFor="lastName"
                           className="block text-base lg:text-[22px] font-inter font-medium text-[#222222]">
                        Last Name
                    </label>
                    <div
                        className="flex flex-row w-full px-1 items-center py-1 mt-2 border-3 border-[#EDF1F7] hover:border-[#2D3192]/50 rounded-md focus:outline-[#2D3192] focus:border-blue-500">
                        <input
                            type="text"
                            id="lastName"
                            value={profileData.lastName}
                            onChange={handleChange}
                            placeholder="Enter your last name"
                            className="w-full px-2 py-2 rounded-lg font-inter font-normal text-base text-[#505050] focus:outline-none"
                        />

                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-18">
                <div className="w-full">
                    <label htmlFor="gender"
                           className="block text-base lg:text-[22px] font-inter font-medium text-[#222222]">
                        Gender
                    </label>
                    <div
                        className="flex flex-row w-full px-1 items-center py-1 mt-2 border-3 border-[#EDF1F7] hover:border-[#2D3192]/50 rounded-md focus:outline-[#2D3192] focus:border-blue-500">
                        <input
                            type="text"
                            id="gender"
                            value={profileData.gender}
                            onChange={handleChange}
                            placeholder="Enter your Gender"
                            className="w-full px-2 py-2 rounded-lg font-inter font-normal text-base text-[#505050] focus:outline-none"
                        />
                    </div>
                </div>

                {/* Last Name */}
                <div className="w-full">
                    <label htmlFor="dateOfBirth"
                           className="block text-base lg:text-[22px] font-inter font-medium text-[#222222]">
                        Date of Birth
                    </label>
                    <div
                        className="flex flex-row w-full px-1 items-center py-1 mt-2 border-3 border-[#EDF1F7] hover:border-[#2D3192]/50 rounded-md focus:outline-[#2D3192] focus:border-blue-500">
                        <input
                            type="text"
                            id="dateOfBirth"
                            value={profileData.dateOfBirth}
                            onChange={handleChange}
                            placeholder="Date / Month / Year"
                            className="w-full px-2 py-2 rounded-lg font-inter font-normal text-base text-[#505050] focus:outline-none"
                        />

                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-18">
                <div className="w-full">
                    <label htmlFor="nicPassport"
                           className="block text-base lg:text-[22px] font-inter font-medium text-[#222222]">
                        NIC / Passport
                    </label>
                    <div
                        className="flex flex-row w-full px-1 items-center py-1 mt-2 border-3 border-[#EDF1F7] hover:border-[#2D3192]/50 rounded-md focus:outline-[#2D3192] focus:border-blue-500">
                        <input
                            type="text"
                            id="nicPassport"
                            value={profileData.nicPassport}
                            onChange={handleChange}
                            placeholder="Enter your NIC / Passport"
                            className="w-full px-2 py-2 rounded-lg font-inter font-normal text-base text-[#505050] focus:outline-none"
                        />
                    </div>
                </div>

                {/* Last Name */}
                <div className="w-full">
                    <label htmlFor="email"
                           className="block text-base lg:text-[22px] font-inter font-medium text-[#222222]">
                        Email
                    </label>
                    <div
                        className="flex flex-row w-full px-1 items-center py-1 mt-2 border-3 border-[#EDF1F7] hover:border-[#2D3192]/50 rounded-md focus:outline-[#2D3192] focus:border-blue-500">
                        <input
                            type="text"
                            id="email"
                            value={profileData.email}
                            onChange={handleChange}
                            placeholder="Enter your Email"
                            className="w-full px-2 py-2 rounded-lg font-inter font-normal text-base text-[#505050] focus:outline-none"
                        />

                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-18">
                <div className="w-full">
                    <label htmlFor="contactNumber"
                           className="block text-base lg:text-[22px] font-inter font-medium text-[#222222]">
                        Contact Number
                    </label>
                    <div
                        className="flex flex-row w-full px-1 items-center py-1 mt-2 border-3 border-[#EDF1F7] hover:border-[#2D3192]/50 rounded-md focus:outline-[#2D3192] focus:border-blue-500">
                        <input
                            type="text"
                            id="contactNumber"
                            value={profileData.contactNumber}
                            onChange={handleChange}
                            placeholder="Enter your contact number"
                            className="w-full px-2 py-2 rounded-lg font-inter font-normal text-base text-[#505050] focus:outline-none"
                        />
                    </div>
                </div>

                {/* Last Name */}
                <div className="w-full">
                    <label htmlFor="country"
                           className="block text-base lg:text-[22px] font-inter font-medium text-[#222222]">
                        Country
                    </label>
                    <div
                        className="flex flex-row w-full px-1 items-center py-1 mt-2 border-3 border-[#EDF1F7] hover:border-[#2D3192]/50 rounded-md focus:outline-[#2D3192] focus:border-blue-500">
                        <input
                            type="text"
                            id="country"
                            value={profileData.country}
                            onChange={handleChange}
                            placeholder="Enter your first name"
                            className="w-full px-2 py-2 rounded-lg font-inter font-normal text-base text-[#505050] focus:outline-none"
                        />

                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-18">
                <div className="w-full">
                    <label htmlFor="addressLine1"
                           className="block text-base lg:text-[22px] font-inter font-medium text-[#222222]">
                        Address Line 1
                    </label>
                    <div
                        className="flex flex-row w-full px-1 items-center py-1 mt-2 border-3 border-[#EDF1F7] hover:border-[#2D3192]/50 rounded-md focus:outline-[#2D3192] focus:border-blue-500">
                        <input
                            type="text"
                            id="addressLine1"
                            value={profileData.addressLine1}
                            onChange={handleChange}
                            placeholder="Enter your Address Line 1"
                            className="w-full px-2 py-2 rounded-lg font-inter font-normal text-base text-[#505050] focus:outline-none"
                        />
                    </div>
                </div>

                {/* Last Name */}
                <div className="w-full">
                    <label htmlFor="addressLine2"
                           className="block text-base lg:text-[22px] font-inter font-medium text-[#222222]">
                        Address Line 2
                    </label>
                    <div
                        className="flex flex-row w-full px-1 items-center py-1 mt-2 border-3 border-[#EDF1F7] hover:border-[#2D3192]/50 rounded-md focus:outline-[#2D3192] focus:border-blue-500">
                        <input
                            type="text"
                            id="addressLine2"
                            value={profileData.addressLine2}
                            onChange={handleChange}
                            placeholder="Enter your Address Line 2"
                            className="w-full px-2 py-2 rounded-lg font-inter font-normal text-base text-[#505050] focus:outline-none"
                        />

                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-18">
                <div className="w-1/2">
                    <label htmlFor="city"
                           className="block text-base lg:text-[22px] font-inter font-medium text-[#222222]">
                        City
                    </label>
                    <div
                        className="flex flex-row w-full px-1 items-center py-1 mt-2 border-3 border-[#EDF1F7] hover:border-[#2D3192]/50 rounded-md focus:outline-[#2D3192] focus:border-blue-500">
                        <input
                            type="text"
                            id="city"
                            value={profileData.city}
                            onChange={handleChange}
                            placeholder="Enter your City"
                            className="w-full px-2 py-2 rounded-lg font-inter font-normal text-base text-[#505050] focus:outline-none"
                        />
                    </div>
                </div>
            </div>
        </form>
    );
}

export default ProfileForm;