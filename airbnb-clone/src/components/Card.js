import React from "react";
export default function Card(props) {
  console.log(props);
  return (
    <div className="card">
      <img src={`images/${props.img}`} className="card--img" />
      <div className="card--stats">
        <img src="images/star.png" alt="star" className="card--star" />
        <span>{props.rating}</span>
        <span className="gray">{props.reviewCount}</span>
        <span className="gray">•{props.country}</span>
      </div>
      <div>
        <p>{props.title}</p>
        <p>
          <strong className="cards--price">From ${props.price}</strong>/person
        </p>
      </div>
    </div>
  );
}
