import React from "react";
import filterIcon from "../../assets/icons/filterIcon.jpeg";
import searchIcon from "../../assets/icons/searchicon.png";
import "./index.css";

export default function FilterAndSearch({data, setFilteredData}){
    const [filterType, setFilterType] = React.useState("all");
    
    function checkAll(){
        return filterType==="all";
    }
    function checkBookmarked(){
        return filterType==="bookmarked";
    }
    function checkRegistered(){
        return filterType==="registered";
    }
    function checkSeatsAvailable(){
        return filterType==="seatsavailable";
    }

    function handlleAllClick(){
        setFilteredData(data);
        setFilterType("all");
    }
    function handleRegisteredClick(){
        setFilteredData(data.filter((element)=> element.isRegistered));
        setFilterType("registered");
    }
    function handleBookmarkedClick(){
        setFilteredData(data.filter((element)=> element.isBookmarked));
        setFilterType("bookmarked");
    }
    function handleSeatsAvailClick(){
        setFilteredData(data.filter((element)=> element.areSeatsAvailable));
        setFilterType("seatsavailable");
    }
    function handleSearch(event){
        setFilteredData(data.filter(element => element.name.includes(event.target.value)));
    }

    return (
        <div className="filterAndSearch">
            <div className="searchHeader">
                <img className="filterIcon" src={filterIcon} alt="filter icon"/>
                <div>
                    <input className="textBox" type="text" onChange={handleSearch} /> 
                    <img className="searchIcon" src={searchIcon} alt="search icon" />
                </div>
            </div>
            <input type="checkbox" id="all" value="all" checked={checkAll} onChange={handlleAllClick}/>
            <label for="all">All</label>
            <input type="checkbox" id="bookmarked" value="bookmarked" checked={checkBookmarked} onChange={handleBookmarkedClick}/>
            <label for="bookmarked">BOOKMARKED</label>
            <input type="checkbox" id="registered" value="registered" checked={checkRegistered} onChange={handleRegisteredClick}/>
            <label for="registered">REGISTERED</label>
            <input type="checkbox" id="seatsavailable" value="seatsavailable" checked={checkSeatsAvailable} onChange={handleSeatsAvailClick}/>
            <label for="seatsavailable">SEATS AVAILABLE</label>

            
        </div>
    );
}