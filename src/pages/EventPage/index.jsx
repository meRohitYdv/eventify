import React from "react";
import Header from "../../components/Header";
import Event from "../../components/Event";
import "./index.css";

export default function EventPage (){
    return (
        <div className="EventPage">
            <Header />
            <Event />
        </div>
    );
}