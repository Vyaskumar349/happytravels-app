import React from "react";

const TripData=(props)=>{
    return(<div className="t-card">

        <div className="t-image">
        <img alt="img" src={props.image}></img>
        </div>
        <h1>{props.heading}</h1>
        
        <p>{props.text}</p>
    </div>)
}
export default TripData;