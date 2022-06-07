import React from "react";

export default function Property({property}){
    return(
        <div className="property">
            <img src={property.photo} alt="Property"/>
            <div className="details">
                <div>
                    {property.superHost?<span className="super">SUPER HOST</span>: <></>}
                    <p>{property.type}</p>
                </div>
                <div>
                    <span className="material-icons rating">star</span>
                    <p>{property.rating}</p>
                </div>
            </div>
            <h2>{property.title}</h2>
        </div>
    )
}