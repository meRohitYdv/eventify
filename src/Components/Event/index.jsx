import React from "react";
import { useParams } from "react-router-dom";
import { GET_EVENT_BY_ID } from "../../constants/apiEndPoints";
import Card from "../Card";
import makeRequest from "../../utils/makeRequest";

export default function Event (){
    const [cardData, setCardData] = React.useState();
    const {eventId} = useParams();

    React.useEffect(()=>{
        makeRequest(GET_EVENT_BY_ID(eventId)).then(data => {
            setCardData(data);
            console.log(data);
        });
    }, []);

    return ( 
        <div className="Event">
            <Card data={cardData}/>
        </div>
    );
}