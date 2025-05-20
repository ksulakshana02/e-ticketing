import {useQuery} from "@tanstack/react-query";
import {getAllEvents, getEventById, getTrendingEvents, getUpcomingEvents} from "@/services/eventService";


const defaultQueryOptions = {
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    retry: 3,
    refetchOnWindowFocus: false,
};


export const useEvents = () => {
    return useQuery({
        queryKey: ["events"],
        queryFn: () => getAllEvents(),
        ...defaultQueryOptions,
        refetchInterval: 10000,
    });
};

export const useUpcomingEvents = () => {
    return useQuery({
        queryKey: ["upcoming events"],
        queryFn: () => getUpcomingEvents(),
        ...defaultQueryOptions,
        refetchInterval: 10000,
    });
};

export const useTrendingEvents = () => {
    return useQuery({
        queryKey: ["trending events"],
        queryFn: () => getTrendingEvents(),
        ...defaultQueryOptions,
        refetchInterval: 10000,
    });
};

export const useEventById = (id: string | Array<string> | undefined) => {
    return useQuery({
        queryKey:["events", id],
        queryFn: () => getEventById(id),
        ...defaultQueryOptions,
        refetchInterval: 10000,
    })
}