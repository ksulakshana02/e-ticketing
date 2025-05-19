// import React, {forwardRef, useImperativeHandle, useState} from "react";
//
// interface ProfilePassword {
//     oldPassword: string;
//     newPassword: string;
//     newPasswordConfirm: string;
// }
//
// interface ChangePasswordRef {
//     submit: () => void;
// }
//
//
//
// // eslint-disable-next-line react/display-name
// const ChangePassword = forwardRef<ChangePasswordRef>((props, ref) => {
//
//     const [profilePassword, setProfilePassword] = useState<ProfilePassword>({
//         oldPassword: "",
//         newPassword: "",
//         newPasswordConfirm: "",
//     });
//
//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;
//         setProfilePassword((prevData) => ({
//             ...prevData,
//             [name]: value,
//         }));
//     };
//
//     const handleSubmit = (e?: React.FormEvent) => {
//         if (e) e.preventDefault();
//         // Basic validation
//         if (profilePassword.newPassword !== profilePassword.newPasswordConfirm) {
//             console.log("New passwords do not match");
//             return;
//         }
//         // Replace with actual submission logic (e.g., API call)
//         console.log("Password Change Submitted:", profilePassword);
//     };
//
//     // Expose submit method to parent via ref
//     useImperativeHandle(ref, () => ({
//         submit: handleSubmit,
//     }));
//
//     return (
//         <div>
//             <form onSubmit={handleSubmit} className="space-y-4 max-w-5xl">
//                 <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-18">
//                     <div className="w-1/2">
//                         <label htmlFor="oldPassword"
//                                className="block text-base lg:text-[22px] font-inter font-medium text-[#222222]">
//                             Old Password
//                         </label>
//                         <div
//                             className="flex flex-row w-full px-1 items-center py-1 mt-2 border-3 border-[#EDF1F7] hover:border-[#2D3192]/50 rounded-md focus:outline-[#2D3192] focus:border-blue-500">
//                             <input
//                                 type="password"
//                                 id="oldPassword"
//                                 value={profilePassword.oldPassword}
//                                 onChange={handleChange}
//                                 placeholder="Enter your old password"
//                                 className="w-full px-2 py-2 rounded-lg font-inter font-normal text-base text-[#505050] focus:outline-none"
//                             />
//                         </div>
//                     </div>
//                 </div>
//                 <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-18">
//                     <div className="w-full">
//                         <label htmlFor="newPassword"
//                                className="block text-base lg:text-[22px] font-inter font-medium text-[#222222]">
//                             New Password
//                         </label>
//                         <div
//                             className="flex flex-row w-full px-1 items-center py-1 mt-2 border-3 border-[#EDF1F7] hover:border-[#2D3192]/50 rounded-md focus:outline-[#2D3192] focus:border-blue-500">
//                             <input
//                                 type="password"
//                                 id="newPassword"
//                                 value={profilePassword.newPassword}
//                                 onChange={handleChange}
//                                 placeholder="Enter your new password"
//                                 className="w-full px-2 py-2 rounded-lg font-inter font-normal text-base text-[#505050] focus:outline-none"
//                             />
//                         </div>
//                     </div>
//
//                     <div className="w-full">
//                         <label htmlFor="newPasswordConfirm"
//                                className="block text-base lg:text-[22px] font-inter font-medium text-[#222222]">
//                             Re - enter New Password
//                         </label>
//                         <div
//                             className="flex flex-row w-full px-1 items-center py-1 mt-2 border-3 border-[#EDF1F7] hover:border-[#2D3192]/50 rounded-md focus:outline-[#2D3192] focus:border-blue-500">
//                             <input
//                                 type="text"
//                                 id="newPasswordConfirm"
//                                 value={profilePassword.newPasswordConfirm}
//                                 onChange={handleChange}
//                                 placeholder="Re enter your new password"
//                                 className="w-full px-2 py-2 rounded-lg font-inter font-normal text-base text-[#505050] focus:outline-none"
//                             />
//
//                         </div>
//                     </div>
//                 </div>
//             </form>
//         </div>
//     );
// })
//
// export default ChangePassword;

"use client";
import React, { forwardRef, useImperativeHandle, useCallback, memo } from "react";
import {useForm, Controller, Control} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Define validation schema with zod
const passwordSchema = z
    .object({
        oldPassword: z.string().min(8, "Old password must be at least 8 characters"),
        newPassword: z
            .string()
            .min(8, "New password must be at least 8 characters")
            .regex(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                "New password must include at least one uppercase letter, one lowercase letter, and one number"
            ),
        newPasswordConfirm: z.string().min(8, "Please confirm your new password"),
    })
    .refine((data) => data.newPassword === data.newPasswordConfirm, {
        message: "New passwords do not match",
        path: ["newPasswordConfirm"],
    });

// Infer form data type from schema
type ProfilePassword = z.infer<typeof passwordSchema>;

interface ChangePasswordRef {
    submit: () => void;
}

// Reusable InputField component
const InputField: React.FC<{
    label: string;
    id: keyof ProfilePassword;
    type: string;
    placeholder: string;
    control: Control<ProfilePassword>;
    error?: string;
}> = memo(({ label, id, type, placeholder, control, error }) => {
    return (
        <div className="flex flex-col w-full max-w-md">
            <label htmlFor={id} className="block text-base lg:text-xl font-inter font-medium text-[#222222]">
                {label}
            </label>
            <div className="mt-2 relative">
                <Controller
                    name={id}
                    control={control}
                    render={({ field }) => (
                        <input
                            {...field}
                            type={type}
                            id={id}
                            placeholder={placeholder}
                            className={`
                w-full px-3 py-2.5 rounded-md border-2 border-[#EDF1F7] hover:border-[#2D3192]/50
                focus:outline-none focus:border-blue-500 font-inter text-base text-[#505050]
                ${error ? "border-red-500" : ""}
              `}
                            aria-invalid={error ? "true" : "false"}
                            aria-describedby={error ? `${id}-error` : undefined}
                        />
                    )}
                />
                {error && (
                    <p id={`${id}-error`} className="mt-1 text-sm text-red-500" role="alert">
                        {error}
                    </p>
                )}
            </div>
        </div>
    );
});
InputField.displayName = "InputField";

// ChangePassword component
const ChangePassword = forwardRef<ChangePasswordRef>((props, ref) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<ProfilePassword>({
        resolver: zodResolver(passwordSchema),
        defaultValues: {
            oldPassword: "",
            newPassword: "",
            newPasswordConfirm: "",
        },
    });

    const onSubmit = useCallback((data: ProfilePassword) => {
        console.log("Password Change Submitted:", data);
        // Replace with API call, e.g.:
        // await fetch("/api/change-password", { method: "POST", body: JSON.stringify(data) });
    }, []);

    useImperativeHandle(ref, () => ({
        submit: () => handleSubmit(onSubmit)(),
    }));

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6">
                <InputField
                    label="Old Password"
                    id="oldPassword"
                    type="password"
                    placeholder="Enter your old password"
                    control={control}
                    error={errors.oldPassword?.message}
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                    label="New Password"
                    id="newPassword"
                    type="password"
                    placeholder="Enter your new password"
                    control={control}
                    error={errors.newPassword?.message}
                />
                <InputField
                    label="Re-enter New Password"
                    id="newPasswordConfirm"
                    type="password"
                    placeholder="Re-enter your new password"
                    control={control}
                    error={errors.newPasswordConfirm?.message}
                />
            </div>
        </form>
    );
});

ChangePassword.displayName = "ChangePassword";

export default memo(ChangePassword);