import type {Metadata} from "next";
import {Inter, Space_Grotesk} from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
    title: "Quick Seats.lk - Book Your Tickets",
    description: "Discover and book tickets for your favorite events",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        {children}
        <Footer/>
        </body>
        </html>
    );
}
