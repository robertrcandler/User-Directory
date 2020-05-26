
import React from "react";
import "./style.css";

function Card(i){
    return (
        <div className = "card">
            <div className= "img-container">
                <img alt ={i.name} src={i.picture} />
            </div>
            <div className ="content">
                <ul>
                    <li>
                        <strong>Name:</strong> {i.name}
                    </li>
                    <li>
                        <strong>Occupation:</strong> {i.occupation}
                    </li>
                    <li>
                        <strong>Office Number:</strong>{i.location}
                    </li>
                    <li>
                        <strong>Username:</strong>{i.username}
                    </li>
                    <li>
                        <strong>Phone Number:</strong>{i.phone}
                    </li>
                    <li>
                        <strong>Email:</strong>{i.email}
                    </li>
                    <li>
                        <strong>ID:</strong>{i.id}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Card;