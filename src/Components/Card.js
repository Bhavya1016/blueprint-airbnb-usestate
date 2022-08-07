import React from "react";

export default Card = (props) => {
    let badgeText
    if (props.item.openSpots === 0){
        badgeText = "SOLD OUT"
    }else if (props.item.location === "Online"){
        badgeText = "ONLINE"
    }


    // currently this page is static and in the Data.js component,  you cansee tha
    const [stuff , setStuff] = React.useState("Click For More Information")

    function infoClick(){
        setStuff(props.item.description)
    }

    return (
        <div className="card">

            {badgeText && <div className="card-badge"> {badgeText} </div>}
            <img src= {props.item.img} className="airbnb-card"/>
            <div className="card-stats">
                <img src= "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/440px-Red_star.svg.png" className="star-image" />
                <span>{props.item.stats.rating}</span>
                <span className="grey">({props.item.stats.reviewCount}) • </span>
                <span className="grey">{props.item.location}</span>
            </div>
            <p>{props.item.title}</p>
            <p><span className="bold">From ${props.item.cost} </span> / person</p>

            <button onClick = {infoClick} className="info-button"> {stuff}</button> 
        </div>
    )
}

