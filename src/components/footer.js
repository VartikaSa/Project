import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faAddressBook,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "../footer.css";

const Footer = () => {
  return (
    <div className="container12">
      <div className="section">
        <img
          src="https://image.similarpng.com/very-thumbnail/2020/08/Adventure-logo-design-on-transparent-background-PNG.png"
          alt="Small Image"
          style={{ width: "125px", height: "60px" }}
        />
        <p className="content">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste aut
          ipsam veniam officiis vero pariatur eum perferendis ipsa neque porro?
          Culpa nemo officiis reprehenderit ea eligendi molestias.
        </p>
      </div>
      <div className="section">
        <h2 className="contact">Contact Details</h2>
        <ul>
          <li>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            NewYork
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} />
            contact@example.com
          </li>
          <li>
            <FontAwesomeIcon icon={faAddressBook} />
            Phone: 123-456-7890
          </li>
        </ul>
      </div>
      <div className="section">
        <h2 className="contact2">Get to Know Us</h2>
        <ul>
          <li>About Us</li>
          <li>Our Team</li>
          <li>Our Mission</li>
        </ul>
      </div>
      <div className="section">
        <h2 className="contact3">Let Us Help You</h2>
        <ul>
          <li>FAQs</li>
          <li>Customer Support</li>
          <li>Shipping Information</li>
        </ul>
      </div>
      <div className="imagesApp">
        <div className="firstApp">
          <img
            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
            alt="Google Play Store"
            style={{ width: "125px", height: "60px" }}
          />
        </div>
        <div className="secondApp">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1200px-Download_on_the_App_Store_Badge.svg.png"
            alt="App Store"
            style={{ width: "100px", height: "40px" }}
          />
        </div>
      </div>
      <div className="footer">
        <div className="copyright">Copyright &copy;,All rights reserved</div>
        <div className="follow-us">
          Follow Us:
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faInstagram} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
