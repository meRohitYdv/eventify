/* eslint-disable */
import React from "react";
import "./index.css";
import checkIcon from "../../assets/icons/checkIcon.png";
import bookmarkedIcon from "../../assets/icons/bookmarked.png";
import notBookmarkedIcon from "../../assets/icons/notBookmarked.jpeg";
import { UPDATE_EVENT_BY_ID } from "../../constants/apiEndPoints";
import makeRequest from "../../utils/makeRequest";
import crossIcon from "../../assets/icons/cross.png";

export default function Card({data, navigate}){
    let {areSeatsAvailable, datetime, description, id, imgUrl, isBookmarked, isRegistered, name, timezone, venue } = data;
    const [_isBookmarked, set_isBookmarked] = React.useState(isBookmarked);

    async function bookmarkClickHandler(){
        set_isBookmarked(!_isBookmarked);
        const data = await makeRequest(UPDATE_EVENT_BY_ID(id), {data: {isBookmarked: !_isBookmarked}});
    }

    function setBookMarkIcon(){
        return (_isBookmarked)? bookmarkedIcon: notBookmarkedIcon;
    }
    function setBookmarkIconClass(){
        return (isRegistered || !areSeatsAvailable)? "bookmarkImage": "marginedBookmarkImage";
    }

    return (
        <div className="card" >
            <img className="cardImage" src={imgUrl} alt="event image"/>
            <hr />
            <p className="name">{name.toUpperCase()}</p>
            <p className="description">{description}</p>
            <p className="venue">VENUE: {venue}</p>
            <p className="date">DATE: {datetime}</p>
            <div className="cardFooter"> 
               { isRegistered &&  (
                        <div className="registration">
                        <img className="checkIcon" src={checkIcon} alt="check icon" />
                        <p>REGISTERED</p>
                        </div>
                )
               }
               {
                !areSeatsAvailable && (
                        <div className="noSeatsAvailable">
                        <img className="crossIcon" src={crossIcon} alt="cross icon" />
                        <p>NO SEATS AVAILABLE</p>
                        </div>
                )
               }
                
                <img className={setBookmarkIconClass()} src={setBookMarkIcon()} onClick={bookmarkClickHandler} alt="bookmark icon" />
            </div>
        </div>
    );
};