export const getLocalDateTime = (utcDateTime: string) => {
    const date = new Date(utcDateTime);
    const localDate = date.toLocaleDateString("en-CA", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    });

    const localTime = date.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    });
    return {localDate, localTime};
};