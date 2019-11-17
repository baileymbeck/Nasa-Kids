import React from "react";
import "./style.css";

function ImageCard(props) {
  console.log('process.env.PUBLIC_URL', process.env.PUBLIC_URL)
  return (
    <div className="card-game" value={props.id} onClick={() => props.handleClick(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default ImageCard;
