import React from "react";
import "./style.css";

function ImageCard(props) {
  return (
    <div className="card-game" value={props.id} onClick={() => props.handleClick(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={process.env.PUBLIC_URL + props.image} />
      </div>
    </div>
  );
}

export default ImageCard;
