import React from "react";
import "./style.css";

function Button(props) {
    return (
        <div className="card container" value={props.id}>
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
            <div className="txt-container">
                <div className="text">{props.text}</div>
            </div>
        </div>  
    );
}

export default Button;
