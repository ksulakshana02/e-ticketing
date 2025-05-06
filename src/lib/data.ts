interface Artist {
    id: number;
    name: string;
}

interface Location {
    id: number;
    name: string;
}

interface EventFilters {
    startDate: Date | null;
    endDate: Date | null;
    artist: Artist | null;
    location: Location | null;
    priceRange: number[];
}

interface ExtendedEvent {
    image: string;
    title: string;
    date: string;
    time: string;
    location: string;
    price: string;
    artist: Artist; // Added artist field
}


export const events: ExtendedEvent[] = [
    {
        image: "/event1.png",
        title: "Melodies of the Heart",
        date: "Apr 12, 2025",
        time: "07:00 PM IST",
        location: "Nelum Pokuna Theatre",
        price: "6,500 LKR",
        artist: {id: 1, name: "Victor Rathnayake"},
    },
    {
        image: "/event2.png",
        title: "Retro Rhythms Night",
        date: "May 03, 2025",
        time: "08:00 PM IST",
        location: "Musaeus College Auditorium",
        price: "4,000 LKR",
        artist: {id: 2, name: "Nanda Malini"},
    },
    {
        image: "/event3.png",
        title: "Symphony of Souls",
        date: "Jun 15, 2025",
        time: "06:30 PM IST",
        location: "BMICH",
        price: "8,000 LKR",
        artist: {id: 3, name: "Amaradeva"},
    },
    {
        image: "/event4.png",
        title: "Classical Harmony",
        date: "Jul 20, 2025",
        time: "07:30 PM IST",
        location: "Lionel Wendt Theatre",
        price: "5,500 LKR",
        artist: {id: 4, name: "Rohana Weerasinghe"},
    },
    {
        image: "/event1.png",
        title: "Golden Voices Unplugged",
        date: "Aug 08, 2025",
        time: "06:00 PM IST",
        location: "Viharamahadevi Amphitheatre",
        price: "3,500 LKR",
        artist: {id: 5, name: "Sunil Edirisinghe"},
    },
    {
        image: "/event1.png",
        title: "Island Beats Festival",
        date: "Sep 14, 2025",
        time: "05:00 PM IST",
        location: "Galle Face Green",
        price: "2,500 LKR",
        artist: {id: 6, name: "Kasun Kalhara"},
    },
    {
        image: "/event1.png",
        title: "Echoes of Tradition",
        date: "Oct 05, 2025",
        time: "07:00 PM IST",
        location: "Nelum Pokuna Theatre",
        price: "7,000 LKR",
        artist: {id: 1, name: "Victor Rathnayake"},
    },
    {
        image: "/event2.png",
        title: "80s Rewind Party",
        date: "Oct 25, 2025",
        time: "08:00 PM IST",
        location: "Musaeus College Auditorium",
        price: "4,800 LKR",
        artist: {id: 7, name: "Rukantha Gunathilaka"},
    },
    {
        image: "/event3.png",
        title: "Serenade Under the Stars",
        date: "Nov 02, 2025",
        time: "06:00 PM IST",
        location: "Viharamahadevi Amphitheatre",
        price: "3,000 LKR",
        artist: {id: 8, name: "Nirosha Virajini"},
    },
    {
        image: "/event4.png",
        title: "Raga & Rhythms",
        date: "Nov 16, 2025",
        time: "07:00 PM IST",
        location: "BMICH",
        price: "9,000 LKR",
        artist: {id: 3, name: "Amaradeva"},
    },
    {
        image: "/event1.png",
        title: "Folk Fusion Night",
        date: "Nov 02, 2025",
        time: "07:00 PM IST",
        location: "Lionel Wendt Theatre",
        price: "12,000 LKR",
        artist: {id: 9, name: "Bathiya Jayakody"},
    },
    {
        image: "/event1.png",
        title: "New Year’s Eve Gala",
        date: "Dec 31, 2025",
        time: "09:00 PM IST",
        location: "Galle Face Green",
        price: "10,000 LKR",
        artist: {id: 10, name: "Iraj Weeraratne"},
    },
    {
        image: "/event4.png",
        title: "Rhythms of Lanka",
        date: "Sep 06, 2025",
        time: "07:00 PM IST",
        location: "Ananda College Theatre",
        price: "5,800 LKR",
        artist: {id: 13, name: "Sangeeth Wijesuriya"},
    },
    {
        image: "/event1.png",
        title: "Sunset Sessions",
        date: "Sep 20, 2025",
        time: "05:30 PM IST",
        location: "Galle Face Green",
        price: "2,500 LKR",
        artist: {id: 6, name: "Kasun Kalhara"},
    },
    {
        image: "/event2.png",
        title: "Traditional Tunes",
        date: "Oct 04, 2025",
        time: "07:00 PM IST",
        location: "Lionel Wendt Theatre",
        price: "6,200 LKR",
        artist: {id: 5, name: "Sunil Edirisinghe"},
    },
    {
        image: "/event3.png",
        title: "Jazz by the Bay",
        date: "Oct 18, 2025",
        time: "06:30 PM IST",
        location: "Colombo Town Hall",
        price: "7,800 LKR",
        artist: {id: 14, name: "Chandralekha Perera"},
    },
    {
        image: "/event4.png",
        title: "Harmony Festival",
        date: "Nov 01, 2025",
        time: "07:30 PM IST",
        location: "BMICH",
        price: "11,000 LKR",
        artist: {id: 9, name: "Bathiya Jayakody"},
    },
    {
        image: "/event4.png",
        title: "Deepavali Musical Night",
        date: "Nov 15, 2025",
        time: "07:00 PM IST",
        location: "Nelum Pokuna Theatre",
        price: "8,000 LKR",
        artist: {id: 8, name: "Nirosha Virajini"},
    },
    {
        image: "/event4.png",
        title: "Winter Acoustic Vibes",
        date: "Dec 06, 2025",
        time: "06:00 PM IST",
        location: "Viharamahadevi Amphitheatre",
        price: "3,000 LKR",
        artist: {id: 12, name: "Athma Liyanage"},
    },
    {
        image: "/event4.png",
        title: "Christmas Concert",
        date: "Dec 20, 2025",
        time: "07:30 PM IST",
        location: "Musaeus College Auditorium",
        price: "5,500 LKR",
        artist: {id: 15, name: "Umaria Sinhawansa"},
    },
    {
        image: "/event4.png",
        title: "New Year’s Eve Spectacular",
        date: "Dec 31, 2025",
        time: "09:00 PM IST",
        location: "Galle Face Green",
        price: "12,000 LKR",
        artist: {id: 10, name: "Iraj Weeraratne"},
    },
    {
        image: "/event2.png",
        title: "Rock the Island",
        date: "Jun 07, 2025",
        time: "08:30 PM IST",
        location: "Galle Face Green",
        price: "3,500 LKR",
        artist: {id: 10, name: "Iraj Weeraratne"},
    },
    {
        image: "/event3.png",
        title: "Classical Echoes",
        date: "Jun 21, 2025",
        time: "07:00 PM IST",
        location: "Lionel Wendt Theatre",
        price: "7,000 LKR",
        artist: {id: 11, name: "Sisira Senaratne"},
    },
    {
        image: "/event4.png",
        title: "Folk Fusion Fest",
        date: "Jul 05, 2025",
        time: "06:00 PM IST",
        location: "Viharamahadevi Amphitheatre",
        price: "3,200 LKR",
        artist: {id: 12, name: "Athma Liyanage"},
    },
    {
        image: "/event4.png",
        title: "Golden Era Revival",
        date: "Jul 19, 2025",
        time: "07:30 PM IST",
        location: "BMICH",
        price: "10,000 LKR",
        artist: {id: 1, name: "Victor Rathnayake"},
    },
    {
        image: "/event4.png",
        title: "Vesak Harmony Concert",
        date: "Aug 02, 2025",
        time: "06:30 PM IST",
        location: "Nelum Pokuna Theatre",
        price: "6,500 LKR",
        artist: {id: 3, name: "Amaradeva"},
    },
    {
        image: "/event4.png",
        title: "90s Pop Blast",
        date: "Aug 16, 2025",
        time: "08:00 PM IST",
        location: "Musaeus College Auditorium",
        price: "4,500 LKR",
        artist: {id: 7, name: "Rukantha Gunathilaka"},
    },
];


export const artists: Artist[] = [
    {id: 1, name: "Victor Rathnayake"},
    {id: 2, name: "Nanda Malini"},
    {id: 3, name: "Amaradeva"},
    {id: 4, name: "Rohana Weerasinghe"},
    {id: 5, name: "Sunil Edirisinghe"},
    {id: 6, name: "Kasun Kalhara"},
    {id: 7, name: "Rukantha Gunathilaka"},
    {id: 8, name: "Nirosha Virajini"},
    {id: 9, name: "Bathiya Jayakody"},
    {id: 10, name: "Iraj Weeraratne"},
    {id: 11, name: "Sisira Senaratne"},
    {id: 12, name: "Athma Liyanage"},
    {id: 13, name: "Sangeeth Wijesuriya"},
    {id: 14, name: "Chandralekha Perera"},
    {id: 15, name: "Umaria Sinhawansa"},
];


export const locations: Location[] = [
    { id: 1, name: "Musaeus College Auditorium" },
    { id: 2, name: "Nelum Pokuna Theatre" },
    { id: 3, name: "Lionel Wendt Theatre" },
    { id: 4, name: "BMICH" },
    { id: 5, name: "Viharamahadevi Amphitheatre" },
    { id: 6, name: "Galle Face Green" },
    { id: 7, name: "Ananda College Theatre" },
    { id: 8, name: "Colombo Town Hall" },
];