import React from "react";
import "./style.css";
import "./img1.png";
import "./img/img1.png"

function ImageCard(props) {
  return (
    <div className="card-game" value={props.id} onClick={() => props.handleClick(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default ImageCard;
