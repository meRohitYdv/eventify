import React from "react";
import Events from "../../components/Events";
import Header from "../../components/Header";
import "./index.css";

export default function HomePage(){
    return (
        <div className="homePage">
            <Header/>
            <Events/>
        </div>
    );
}