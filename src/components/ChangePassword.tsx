import React, {useState} from "react";

interface ProfilePassword {
    oldPassword: string;
    newPassword: string;
    newPasswordConfirm: string;
}


const ChangePassword = () => {

    const [profilePassword, setProfilePassword] = useState<ProfilePassword>({
        oldPassword: "",
        newPassword: "",
        newPasswordConfirm: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setProfilePassword((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Profile Data:', profilePassword);
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="space-y-4 max-w-5xl">
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-18">
                    <div className="w-1/2">
                        <label htmlFor="oldPassword"
                               className="block text-base lg:text-[22px] font-inter font-medium text-[#222222]">
                            Old Password
                        </label>
                        <div
                            className="flex flex-row w-full px-1 items-center py-1 mt-2 border-3 border-[#EDF1F7] hover:border-[#2D3192]/50 rounded-md focus:outline-[#2D3192] focus:border-blue-500">
                            <input
                                type="password"
                                id="oldPassword"
                                value={profilePassword.oldPassword}
                                onChange={handleChange}
                                placeholder="Enter your old password"
                                className="w-full px-2 py-2 rounded-lg font-inter font-normal text-base text-[#505050] focus:outline-none"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-18">
                    <div className="w-full">
                        <label htmlFor="newPassword"
                               className="block text-base lg:text-[22px] font-inter font-medium text-[#222222]">
                            New Password
                        </label>
                        <div
                            className="flex flex-row w-full px-1 items-center py-1 mt-2 border-3 border-[#EDF1F7] hover:border-[#2D3192]/50 rounded-md focus:outline-[#2D3192] focus:border-blue-500">
                            <input
                                type="password"
                                id="newPassword"
                                value={profilePassword.newPassword}
                                onChange={handleChange}
                                placeholder="Enter your new password"
                                className="w-full px-2 py-2 rounded-lg font-inter font-normal text-base text-[#505050] focus:outline-none"
                            />
                        </div>
                    </div>

                    <div className="w-full">
                        <label htmlFor="newPasswordConfirm"
                               className="block text-base lg:text-[22px] font-inter font-medium text-[#222222]">
                            Re - enter New Password
                        </label>
                        <div
                            className="flex flex-row w-full px-1 items-center py-1 mt-2 border-3 border-[#EDF1F7] hover:border-[#2D3192]/50 rounded-md focus:outline-[#2D3192] focus:border-blue-500">
                            <input
                                type="text"
                                id="newPasswordConfirm"
                                value={profilePassword.newPasswordConfirm}
                                onChange={handleChange}
                                placeholder="Re enter your new password"
                                className="w-full px-2 py-2 rounded-lg font-inter font-normal text-base text-[#505050] focus:outline-none"
                            />

                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ChangePassword;