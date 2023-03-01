import React from "react";
import makeRequest from "../../utils/makeRequest";
import { GET_ALL_EVENTS } from "../../constants/apiEndPoints";
import { useNavigate } from "react-router-dom";
import FilterAndSearch from "../FilterAndSearch";
import Card from "../Card";
import "./index.css";

export default function Events(){
    const [eventsList, setEventsList] = React.useState();
    const [filteredData, setFilteredData] = React.useState(eventsList);
    const navigate = useNavigate();
    
    React.useEffect(()=>{
        makeRequest(GET_ALL_EVENTS).then(data => {
            setEventsList(data);
            setFilteredData(data);
        });
    }, []);
    return (
        <div className="events">
            <FilterAndSearch data={eventsList} setFilteredData={setFilteredData}/>
            {
                (eventsList)?
                <div className="cardContainer">
                {filteredData.map(element => <Card key={element.id} data={element} navigate={navigate}/>)}
                </div>: <p> Loading ...</p>
            }
        </div>
    );
}
