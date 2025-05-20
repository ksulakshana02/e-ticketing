import axiosInstance from "@/util/axiosinstance";

export const getAllEvents = async () => {
    const response = await axiosInstance.get(`/get-all-events`);
    return response.data;
}

export const getTrendingEvents = async () => {
    const response = await axiosInstance.get(`/get-trending-events`);
    return response.data;
}

export const getUpcomingEvents = async () => {
    const response = await axiosInstance.get(`/get-upcoming-events`);
    return response.data;
}

export const getEventById = async (id: string | Array<string> | undefined) => {
    const response = await axiosInstance.get(`/get-event-details/${id}`);
    return response.data;
}