"use client";

import * as React from "react";

interface NewsletterFormProps {
    className?: string;
}

export const NewsletterForm: React.FC<NewsletterFormProps> = ({
                                                                  className,
                                                              }) => {
    const [email, setEmail] = React.useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log("Subscribing email:", email);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className={`flex relative flex-wrap gap-5 justify-between py-0.5 pr-0.5 pl-5 mt-9 mr-36 max-w-full text-sm font-medium bg-white rounded-xl w-[530px] max-md:mr-2.5 ${className}`}
            aria-label="Newsletter subscription form"
        >
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email ..."
                className="my-auto leading-7 text-neutral-500 bg-transparent outline-none flex-grow"
                aria-label="Email address"
                required
            />
            <button
                type="submit"
                className="px-7 py-4 text-white bg-indigo-900 rounded-xl hover:bg-indigo-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-colors max-md:px-5"
                aria-label="Subscribe to newsletter"
            >
                Subscribe Now
            </button>
        </form>
    );
};
