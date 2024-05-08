// Card.js
import React from "react";
import "../card.css";

const Card = ({ activityName, backgroundImage }) => {
  return (
    <div
      className="card"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="rating">
        <div className="rating-stars">
          {[...Array(5)].map((_, index) => (
            <span key={index}>&#9733;</span>
          ))}
        </div>
        <div className="rating-number">(4.5)</div>
      </div>
      <h2 className="activity-name">{activityName}</h2>
      <div className="company">
        <span>Activity Category |</span>
        <img
          src="https://thumbs.dreamstime.com/b/surreal-landscape-split-road-signpost-arrows-showing-two-different-courses-left-right-direction-to-choose-splits-167422571.jpg"
          alt="Company Logo"
          className="logo"
        />
        <span>4 Mins Away</span>
      </div>
      <div className="omr">40 0MR</div>
    </div>
  );
};

export default Card;
