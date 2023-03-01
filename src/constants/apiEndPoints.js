export const BACKEND_URL = "http://localhost:8000/";

export const GET_ALL_EVENTS = {
    url: "api/events",
    method: "get"
};
export const GET_EVENT_BY_ID =(eventID)=>({
    url: `api/events/${eventID}`,
    method: "get"
});
export const UPDATE_EVENT_BY_ID = (eventID) =>{
    return {
        url: `api/events/${eventID}`,
        method: 'patch'
    }
};