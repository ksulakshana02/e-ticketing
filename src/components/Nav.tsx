// "use client";
//
// import React, { useState } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
//
// const NavigationBar: React.FC = () => {
//     const menuItems = ["Home", "Events", "About Us", "Contact Us", "FAQ"];
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//
//     const toggleMobileMenu = () => {
//         setIsMobileMenuOpen((prev) => !prev);
//     };
//
//     // Framer Motion variants for mobile menu
//     const menuVariants = {
//         closed: {
//             opacity: 0,
//             y: -20,
//             transition: { duration: 0.3, ease: "easeInOut" },
//         },
//         open: {
//             opacity: 1,
//             y: 0,
//             transition: { duration: 0.3, ease: "easeInOut" },
//         },
//     };
//
//     // Staggered animation for menu items
//     const itemVariants = {
//         closed: { opacity: 0, x: -10 },
//         open: { opacity: 1, x: 0, transition: { duration: 0.2 } },
//     };
//
//     return (
//         <header className="w-full bg-indigo-900 px-4 py-4 sm:px-6 md:px-8 rounded-md shadow-md">
//             <div className="max-w-7xl mx-auto flex items-center justify-between">
//                 {/* Logo - Always Visible */}
//                 <div className="flex items-center">
//                     <Image
//                         src="/logo.png"
//                         alt="Logo"
//                         width={140}
//                         height={68}
//                         className="object-contain"
//                         priority
//                     />
//                 </div>
//
//                 {/* Mobile Menu Toggle */}
//                 <button
//                     className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-white rounded-md p-3"
//                     onClick={toggleMobileMenu}
//                     aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
//                     aria-expanded={isMobileMenuOpen}
//                 >
//                     <svg
//                         className="w-7 h-7"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//                         />
//                     </svg>
//                 </button>
//
//                 {/* Navigation Menu and Auth Buttons - Desktop */}
//                 <div className="hidden md:flex md:items-center md:gap-6">
//                     <nav className="flex flex-row gap-4 items-center text-white font-inter text-xl font-mediumt-">
//                         {menuItems.map((item) => (
//                             <motion.button
//                                 key={item}
//                                 className="px-4 py-2 rounded-full hover:bg-indigo-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
//                                 whileHover={{ scale: 1.05 }}
//                                 whileTap={{ scale: 0.95 }}
//                             >
//                                 {item}
//                             </motion.button>
//                         ))}
//                     </nav>
//                     <div className="flex flex-row gap-3">
//                         <motion.button
//                             className="px-6 py-2.5 text-white font-inter text-base font-medium border-2 border-white rounded-md hover:bg-indigo-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                         >
//                             Sign Up
//                         </motion.button>
//                         <motion.button
//                             className="px-6 py-2.5 text-[#27337C] font-inter text-base font-medium bg-white border-2 border-white rounded-md hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                         >
//                             Sign In
//                         </motion.button>
//                     </div>
//                 </div>
//             </div>
//
//             {/* Mobile Menu - Animated with Framer Motion */}
//             <AnimatePresence>
//                 {isMobileMenuOpen && (
//                     <>
//                         {/* Backdrop */}
//                         <motion.div
//                             className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 0.5 }}
//                             exit={{ opacity: 0 }}
//                             transition={{ duration: 0.3 }}
//                             onClick={toggleMobileMenu}
//                         />
//
//                         {/* Mobile Menu Content */}
//                         <motion.div
//                             className="md:hidden bg-indigo-900 w-full absolute left-0 top-[100px] z-20 px-4 pb-6 rounded-b-md shadow-lg"
//                             variants={menuVariants}
//                             initial="closed"
//                             animate="open"
//                             exit="closed"
//                         >
//                             <nav className="flex flex-col gap-2 text-white text-lg">
//                                 {menuItems.map((item, index) => (
//                                     <motion.button
//                                         key={item}
//                                         className="w-full px-4 py-3 rounded-md hover:bg-indigo-800 transition-colors duration-200 text-left focus:outline-none focus:ring-2 focus:ring-white"
//                                         variants={itemVariants}
//                                         initial="closed"
//                                         animate="open"
//                                         transition={{ delay: index * 0.1 }}
//                                         onClick={toggleMobileMenu}
//                                     >
//                                         {item}
//                                     </motion.button>
//                                 ))}
//                             </nav>
//                             <div className="flex flex-col gap-3 mt-4">
//                                 <motion.button
//                                     className="w-full px-6 py-3 text-white border-2 border-white rounded-md hover:bg-indigo-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
//                                     variants={itemVariants}
//                                     initial="closed"
//                                     animate="open"
//                                     transition={{ delay: menuItems.length * 0.1 }}
//                                     onClick={toggleMobileMenu}
//                                 >
//                                     Sign Up
//                                 </motion.button>
//                                 <motion.button
//                                     className="w-full px-6 py-3 text-indigo-900 bg-white border-2 border-white rounded-md hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
//                                     variants={itemVariants}
//                                     initial="closed"
//                                     animate="open"
//                                     transition={{ delay: (menuItems.length + 1) * 0.1 }}
//                                     onClick={toggleMobileMenu}
//                                 >
//                                     Sign In
//                                 </motion.button>
//                             </div>
//                         </motion.div>
//                     </>
//                 )}
//             </AnimatePresence>
//         </header>
//     );
// };
//
// export default NavigationBar;


// "use client";
//
// import React, {useState} from "react";
// import Image from "next/image";
// import {motion, AnimatePresence} from "framer-motion";
//
// const NavigationBar: React.FC = () => {
//     const menuItems = ["Home", "Events", "About Us", "Contact Us", "FAQ"];
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//
//     const toggleMobileMenu = () => {
//         setIsMobileMenuOpen((prev) => !prev);
//     };
//
//     // Framer Motion variants for mobile menu
//     const menuVariants = {
//         closed: {opacity: 0, y: -20, transition: {duration: 0.3, ease: "easeInOut"}},
//         open: {opacity: 1, y: 0, transition: {duration: 0.3, ease: "easeInOut"}},
//     };
//
//     // Staggered animation for menu items
//     const itemVariants = {
//         closed: {opacity: 0, x: -10},
//         open: {opacity: 1, x: 0, transition: {duration: 0.2}},
//     };
//
//     return (
//         <header className="w-full bg-indigo-900 px-4 py-4 sm:px-6 lg:px-8 rounded-md shadow-md">
//             <div className="mx-auto flex max-w-screen-2xl items-center justify-between">
//                 {/* Logo - Responsive sizing */}
//                 <div className="flex items-center">
//                     <Image
//                         src="/logo.png"
//                         alt="Logo"
//                         width={120}
//                         height={60}
//                         className="object-contain sm:w-[140px] lg:w-[160px]"
//                         priority
//                     />
//                 </div>
//
//                 {/* Mobile Menu Toggle */}
//                 <button
//                     className="lg:hidden text-white focus:outline-none focus:ring-2 focus:ring-white rounded-md p-2"
//                     onClick={toggleMobileMenu}
//                     aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
//                     aria-expanded={isMobileMenuOpen}
//                 >
//                     <svg
//                         className="w-6 h-6 sm:w-7 sm:h-7"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//                         />
//                     </svg>
//                 </button>
//
//                 {/* Navigation Menu and Auth Buttons - Desktop/Tablet */}
//                 <div className="hidden lg:flex lg:items-center lg:gap-4 xl:gap-6">
//                     <nav
//                         className="flex flex-row gap-2 xl:gap-4 items-center text-white font-inter text-base xl:text-lg font-medium">
//                         {menuItems.map((item) => (
//                             <motion.button
//                                 key={item}
//                                 className="px-3 py-2 rounded-full hover:bg-indigo-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
//                                 whileHover={{scale: 1.05}}
//                                 whileTap={{scale: 0.95}}
//                             >
//                                 {item}
//                             </motion.button>
//                         ))}
//                     </nav>
//                     <div className="flex flex-row gap-2 xl:gap-3">
//                         <motion.button
//                             className="px-4 py-2 xl:px-6 xl:py-2.5 text-white font-inter text-sm xl:text-base font-medium border-2 border-white rounded-md hover:bg-indigo-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
//                             whileHover={{scale: 1.05}}
//                             whileTap={{scale: 0.95}}
//                         >
//                             Sign Up
//                         </motion.button>
//                         <motion.button
//                             className="px-4 py-2 xl:px-6 xl:py-2.5 text-indigo-900 font-inter text-sm xl:text-base font-medium bg-white border-2 border-white rounded-md hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
//                             whileHover={{scale: 1.05}}
//                             whileTap={{scale: 0.95}}
//                         >
//                             Sign In
//                         </motion.button>
//                     </div>
//                 </div>
//             </div>
//
//             {/* Mobile Menu - Animated with Framer Motion */}
//             <AnimatePresence>
//                 {isMobileMenuOpen && (
//                     <>
//                         {/* Backdrop */}
//                         <motion.div
//                             className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
//                             initial={{opacity: 0}}
//                             animate={{opacity: 0.5}}
//                             exit={{opacity: 0}}
//                             transition={{duration: 0.3}}
//                             onClick={toggleMobileMenu}
//                         />
//
//                         {/* Mobile Menu Content */}
//                         <motion.div
//                             className="lg:hidden bg-indigo-900 w-full absolute left-0 top-[88px] sm:top-[96px] z-20 px-4 pb-6 rounded-b-md shadow-lg"
//                             variants={menuVariants}
//                             initial="closed"
//                             animate="open"
//                             exit="closed"
//                         >
//                             <nav className="flex flex-col gap-2 text-white text-base sm:text-lg">
//                                 {menuItems.map((item, index) => (
//                                     <motion.button
//                                         key={item}
//                                         className="w-full px-4 py-3 rounded-md hover:bg-indigo-800 transition-colors duration-200 text-left focus:outline-none focus:ring-2 focus:ring-white"
//                                         variants={itemVariants}
//                                         initial="closed"
//                                         animate="open"
//                                         transition={{delay: index * 0.1}}
//                                         onClick={toggleMobileMenu}
//                                     >
//                                         {item}
//                                     </motion.button>
//                                 ))}
//                             </nav>
//                             <div className="flex flex-col gap-3 mt-4">
//                                 <motion.button
//                                     className="w-full px-6 py-3 text-white border-2 border-white rounded-md hover:bg-indigo-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
//                                     variants={itemVariants}
//                                     initial="closed"
//                                     animate="open"
//                                     transition={{delay: menuItems.length * 0.1}}
//                                     onClick={toggleMobileMenu}
//                                 >
//                                     Sign Up
//                                 </motion.button>
//                                 <motion.button
//                                     className="w-full px-6 py-3 text-indigo-900 bg-white border-2 border-white rounded-md hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
//                                     variants={itemVariants}
//                                     initial="closed"
//                                     animate="open"
//                                     transition={{delay: (menuItems.length + 1) * 0.1}}
//                                     onClick={toggleMobileMenu}
//                                 >
//                                     Sign In
//                                 </motion.button>
//                             </div>
//                         </motion.div>
//                     </>
//                 )}
//             </AnimatePresence>
//         </header>
//     );
// };
//
// export default NavigationBar;


// "use client";
//
// import React, {useState} from "react";
// import Image from "next/image";
// import {motion, AnimatePresence} from "framer-motion";
//
// const NavigationBar: React.FC = () => {
//     const menuItems = ["Home", "Events", "About Us", "Contact Us", "FAQ"];
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//
//     const toggleMobileMenu = () => {
//         setIsMobileMenuOpen((prev) => !prev);
//     };
//
//     // Framer Motion variants for mobile menu (slide-in from right)
//     const menuVariants = {
//         closed: {x: "100%", opacity: 0, transition: {duration: 0.3, ease: "easeInOut"}},
//         open: {x: 0, opacity: 1, transition: {duration: 0.3, ease: "easeInOut"}},
//     };
//
//     // Staggered animation for menu items
//     const itemVariants = {
//         closed: {opacity: 0, x: 20},
//         open: {opacity: 1, x: 0, transition: {duration: 0.2}},
//     };
//
//     return (
//         <header className="w-full bg-indigo-900 px-4 py-4 sm:px-6 lg:px-8 rounded-md shadow-md">
//             <div className="mx-auto flex max-w-screen-2xl items-center justify-between">
//                 {/* Logo - Responsive sizing */}
//                 <div className="flex items-center">
//                     <Image
//                         src="/logo.png"
//                         alt="Logo"
//                         width={120}
//                         height={60}
//                         className="object-contain sm:w-[140px] lg:w-[160px]"
//                         priority
//                     />
//                 </div>
//
//                 {/* Mobile Menu Toggle */}
//                 <button
//                     className="lg:hidden text-white focus:outline-none focus:ring-2 focus:ring-white rounded-md p-3"
//                     onClick={toggleMobileMenu}
//                     aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
//                     aria-expanded={isMobileMenuOpen}
//                 >
//                     <svg
//                         className="w-7 h-7 sm:w-8 sm:h-8"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//                         />
//                     </svg>
//                 </button>
//
//                 {/* Navigation Menu and Auth Buttons - Desktop/Tablet */}
//                 <div className="hidden lg:flex lg:items-center lg:gap-4 xl:gap-6">
//                     <nav
//                         className="flex flex-row gap-2 xl:gap-4 items-center text-white font-inter text-base xl:text-lg font-medium">
//                         {menuItems.map((item) => (
//                             <motion.button
//                                 key={item}
//                                 className="px-4 py-2 rounded-full hover:bg-indigo-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
//                                 whileHover={{scale: 1.05}}
//                                 whileTap={{scale: 0.95}}
//                             >
//                                 {item}
//                             </motion.button>
//                         ))}
//                     </nav>
//                     <div className="flex flex-row gap-2 xl:gap-3">
//                         <motion.button
//                             className="px-4 py-2 xl:px-6 xl:py-2.5 text-white font-inter text-sm xl:text-base font-medium border-2 border-white rounded-md hover:bg-indigo-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
//                             whileHover={{scale: 1.05}}
//                             whileTap={{scale: 0.95}}
//                         >
//                             Sign Up
//                         </motion.button>
//                         <motion.button
//                             className="px-4 py-2 xl:px-6 xl:py-2.5 text-indigo-900 font-inter text-sm xl:text-base font-medium bg-white border-2 border-white rounded-md hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
//                             whileHover={{scale: 1.05}}
//                             whileTap={{scale: 0.95}}
//                         >
//                             Sign In
//                         </motion.button>
//                     </div>
//                 </div>
//             </div>
//
//             {/* Mobile Menu - Animated with Framer Motion */}
//             <AnimatePresence>
//                 {isMobileMenuOpen && (
//                     <>
//                         {/* Backdrop */}
//                         <motion.div
//                             className="fixed inset-0 bg-black bg-opacity-60 z-40 lg:hidden"
//                             initial={{opacity: 0}}
//                             animate={{opacity: 0.6}}
//                             exit={{opacity: 0}}
//                             transition={{duration: 0.3}}
//                             onClick={toggleMobileMenu}
//                         />
//
//                         {/* Mobile Menu Content - Full-screen slide-in */}
//                         <motion.div
//                             className="fixed inset-y-0 right-0 w-4/5 max-w-sm bg-indigo-800 z-50 lg:hidden shadow-xl overflow-y-auto"
//                             variants={menuVariants}
//                             initial="closed"
//                             animate="open"
//                             exit="closed"
//                         >
//                             <div className="flex flex-col h-full p-6">
//                                 {/* Close Button */}
//                                 <div className="flex justify-end">
//                                     <motion.button
//                                         className="p-3 text-white focus:outline-none focus:ring-2 focus:ring-white rounded-md"
//                                         onClick={toggleMobileMenu}
//                                         aria-label="Close menu"
//                                         variants={itemVariants}
//                                         initial="closed"
//                                         animate="open"
//                                     >
//                                         <svg
//                                             className="w-8 h-8"
//                                             fill="none"
//                                             stroke="currentColor"
//                                             viewBox="0 0 24 24"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                         >
//                                             <path
//                                                 strokeLinecap="round"
//                                                 strokeLinejoin="round"
//                                                 strokeWidth={2}
//                                                 d="M6 18L18 6M6 6l12 12"
//                                             />
//                                         </svg>
//                                     </motion.button>
//                                 </div>
//
//                                 {/* Navigation Items */}
//                                 <nav
//                                     className="flex flex-col gap-4 mt-6 text-white text-lg sm:text-xl font-inter font-medium">
//                                     {menuItems.map((item, index) => (
//                                         <motion.a
//                                             key={item}
//                                             href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
//                                             className="w-full px-4 py-4 rounded-md hover:bg-indigo-700 transition-colors duration-200 text-left focus:outline-none focus:ring-2 focus:ring-white"
//                                             variants={itemVariants}
//                                             initial="closed"
//                                             animate="open"
//                                             transition={{delay: index * 0.1}}
//                                         >
//                                             {item}
//                                         </motion.a>
//                                     ))}
//                                 </nav>
//
//                                 {/* Divider */}
//                                 <hr className="my-6 border-indigo-600"/>
//
//                                 {/* Auth Buttons */}
//                                 <div className="flex flex-col gap-4">
//                                     <motion.button
//                                         className="w-full px-6 py-4 text-white text-lg font-inter font-medium border-2 border-white rounded-md hover:bg-indigo-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
//                                         variants={itemVariants}
//                                         initial="closed"
//                                         animate="open"
//                                         transition={{delay: menuItems.length * 0.1}}
//                                         onClick={toggleMobileMenu}
//                                     >
//                                         Sign Up
//                                     </motion.button>
//                                     <motion.button
//                                         className="w-full px-6 py-4 text-indigo-900 text-lg font-inter font-medium bg-white border-2 border-white rounded-md hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
//                                         variants={itemVariants}
//                                         initial="closed"
//                                         animate="open"
//                                         transition={{delay: (menuItems.length + 1) * 0.1}}
//                                         onClick={toggleMobileMenu}
//                                     >
//                                         Sign In
//                                     </motion.button>
//                                 </div>
//                             </div>
//                         </motion.div>
//                     </>
//                 )}
//             </AnimatePresence>
//         </header>
//     );
// };
//
// export default NavigationBar;

// "use client";
//
// import React, {useState} from "react";
// import Image from "next/image";
// import {motion, AnimatePresence} from "framer-motion";
//
// const NavigationBar: React.FC = () => {
//     const menuItems = ["Home", "Events", "About Us", "Contact Us", "FAQ"];
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//
//     const toggleMobileMenu = () => {
//         setIsMobileMenuOpen((prev) => !prev);
//     };
//
//     // Framer Motion variants for mobile menu (dropdown effect)
//     const menuVariants = {
//         closed: {opacity: 0, y: -20, transition: {duration: 0.3, ease: "easeInOut"}},
//         open: {opacity: 1, y: 0, transition: {duration: 0.3, ease: "easeInOut"}},
//     };
//
//     // Staggered animation for menu items
//     const itemVariants = {
//         closed: {opacity: 0, y: -10},
//         open: {opacity: 1, y: 0, transition: {duration: 0.2}},
//     };
//
//     return (
//         <header className="w-full bg-indigo-900 px-4 py-4 sm:px-6 lg:px-8 rounded-md shadow-md">
//             <div className="mx-auto flex max-w-screen-2xl items-center justify-between">
//                 {/* Logo - Responsive sizing */}
//                 <div className="flex items-center">
//                     <Image
//                         src="/logo.png"
//                         alt="Logo"
//                         width={120}
//                         height={60}
//                         className="object-contain sm:w-[140px] lg:w-[160px]"
//                         priority
//                     />
//                 </div>
//
//                 {/* Mobile Menu Toggle */}
//                 <button
//                     className="lg:hidden text-white focus:outline-none focus:ring-2 focus:ring-white rounded-md p-3"
//                     onClick={toggleMobileMenu}
//                     aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
//                     aria-expanded={isMobileMenuOpen}
//                 >
//                     <svg
//                         className="w-7 h-7 sm:w-8 sm:h-8"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//                         />
//                     </svg>
//                 </button>
//
//                 {/* Navigation Menu and Auth Buttons - Desktop/Tablet */}
//                 <div className="hidden lg:flex lg:items-center lg:gap-4 xl:gap-6">
//                     <nav
//                         className="flex flex-row gap-2 xl:gap-4 items-center text-white font-inter text-base xl:text-lg font-medium">
//                         {menuItems.map((item) => (
//                             <motion.button
//                                 key={item}
//                                 className="px-4 py-2 rounded-full hover:bg-indigo-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
//                                 whileHover={{scale: 1.05}}
//                                 whileTap={{scale: 0.95}}
//                             >
//                                 {item}
//                             </motion.button>
//                         ))}
//                     </nav>
//                     <div className="flex flex-row gap-2 xl:gap-3">
//                         <motion.button
//                             className="px-4 py-2 xl:px-6 xl:py-2.5 text-white font-inter text-sm xl:text-base font-medium border-2 border-white rounded-md hover:bg-indigo-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
//                             whileHover={{scale: 1.05}}
//                             whileTap={{scale: 0.95}}
//                         >
//                             Sign Up
//                         </motion.button>
//                         <motion.button
//                             className="px-4 py-2 xl:px-6 xl:py-2.5 text-indigo-900 font-inter text-sm xl:text-base font-medium bg-white border-2 border-white rounded-md hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
//                             whileHover={{scale: 1.05}}
//                             whileTap={{scale: 0.95}}
//                         >
//                             Sign In
//                         </motion.button>
//                     </div>
//                 </div>
//             </div>
//         </header>
//     );
// };
//
// export default NavigationBar;


import React, {useState} from "react";
import Image from "next/image";
import {motion, AnimatePresence} from "framer-motion";

const NavigationBar: React.FC = () => {
    const menuItems = ["Home", "Events", "About Us", "Contact Us", "FAQ"];
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    // Framer Motion variants for mobile menu (dropdown effect)
    const menuVariants = {
        closed: {opacity: 0, y: -20, transition: {duration: 0.3, ease: "easeInOut"}},
        open: {opacity: 1, y: 0, transition: {duration: 0.3, ease: "easeInOut"}},
    };

    // Staggered animation for menu items
    const itemVariants = {
        closed: {opacity: 0, y: -10},
        open: {opacity: 1, y: 0, transition: {duration: 0.2}},
    };

    return (
        <header className="w-full bg-indigo-900 px-4 py-4 sm:px-6 lg:px-8 rounded-md shadow-md">
            <div className="mx-auto flex max-w-screen-2xl items-center justify-between">
                {/* Logo - Responsive sizing */}
                <div className="flex items-center">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={120}
                        height={60}
                        className="object-contain sm:w-[140px] lg:w-[160px]"
                        priority
                    />
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden text-white focus:outline-none focus:ring-2 focus:ring-white rounded-md p-3"
                    onClick={toggleMobileMenu}
                    aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMobileMenuOpen}
                >
                    <svg
                        className="w-7 h-7 sm:w-8 sm:h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>

                {/* Navigation Menu and Auth Buttons - Desktop/Tablet */}
                <div className="hidden lg:flex lg:items-center lg:gap-4 xl:gap-6">
                    <nav
                        className="flex flex-row gap-2 xl:gap-4 items-center text-white font-inter text-base xl:text-lg font-medium"
                    >
                        {menuItems.map((item) => (
                            <motion.button
                                key={item}
                                className="px-4 py-2 rounded-full hover:bg-indigo-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
                                whileHover={{scale: 1.05}}
                                whileTap={{scale: 0.95}}
                            >
                                {item}
                            </motion.button>
                        ))}
                    </nav>
                    <div className="flex flex-row gap-2 xl:gap-3">
                        <motion.button
                            className="px-4 py-2 xl:px-6 xl:py-2.5 text-white font-inter text-sm xl:text-base font-medium border-2 border-white rounded-md hover:bg-indigo-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.95}}
                        >
                            Sign Up
                        </motion.button>
                        <motion.button
                            className="px-4 py-2 xl:px-6 xl:py-2.5 text-indigo-900 font-inter text-sm xl:text-base font-medium bg-white border-2 border-white rounded-md hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.95}}
                        >
                            Sign In
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu - Animated Dropdown */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.nav
                        className="lg:hidden mt-4 rounded-md px-4 py-4 z-50"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                    >
                        <div className="flex flex-col gap-3">
                            {menuItems.map((item, index) => (
                                <motion.button
                                    key={item}
                                    className="text-white text-left font-inter text-base font-medium py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
                                    variants={itemVariants}
                                    initial="closed"
                                    animate="open"
                                    transition={{delay: index * 0.1}}
                                    onClick={toggleMobileMenu}
                                >
                                    {item}
                                </motion.button>
                            ))}
                            <div className="flex flex-col gap-3 pt-2">
                                <motion.button
                                    className="px-4 py-2 text-white font-inter text-base font-medium border-2 border-white rounded-md hover:bg-indigo-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
                                    variants={itemVariants}
                                    initial="closed"
                                    animate="open"
                                    transition={{delay: menuItems.length * 0.1}}
                                    onClick={toggleMobileMenu}
                                >
                                    Sign Up
                                </motion.button>
                                <motion.button
                                    className="px-4 py-2 text-indigo-900 font-inter text-base font-medium bg-white border-2 border-white rounded-md hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
                                    variants={itemVariants}
                                    initial="closed"
                                    animate="open"
                                    transition={{delay: (menuItems.length + 1) * 0.1}}
                                    onClick={toggleMobileMenu}
                                >
                                    Sign In
                                </motion.button>
                            </div>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
};

export default NavigationBar;