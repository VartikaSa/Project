import React from "react";
import "../haeder.css"; // assuming you have a CSS file for styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faSearch,
  faHiking,
  faCar,
} from "@fortawesome/free-solid-svg-icons";
import USFlag from "../FLAG.png";

const Header = () => {
  return (
    <div className="navbar">
      <div className="top-left">
        <select className="left-dropdown">
          <option value="Ashok Nagar">Ashok Nagar</option>
        </select>
      </div>
      <div className="top-right">
        <select className="right-dropdown1">
          <div>
            <img
              src={USFlag}
              alt="US Flag"
              style={{ width: "50px", height: "auto" }}
            />
          </div>
          <option value="English">English</option>
        </select>
        <div className="bell-icon">
          <FontAwesomeIcon icon={faBell} />
        </div>
        <div className="right-dropdown">
          <div className="symbol"></div>
          <img
            src="https://i.pinimg.com/736x/98/58/74/9858745cd157f2797065e639c5b3bf23.jpg"
            alt="Small Image"
            style={{ width: "25px", height: "25px", objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="center">
        <span>DISCOVER THE BEST ACTIVITIES</span>
        <div className="II">FOR YOU</div>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search Activities..." />
        <div className="search-icon">
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <div className="search-text">Search</div>
      </div>
      <div className="bottom-container">
        <div className="bottom">
          <div className="hiking-icon">
            <FontAwesomeIcon icon={faHiking} />
          </div>
          <div>Activities</div>
        </div>
        <div className="bottom1">
          <div className="car-icon">
            <FontAwesomeIcon icon={faCar} />
          </div>
          <div>Rent a Car</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
