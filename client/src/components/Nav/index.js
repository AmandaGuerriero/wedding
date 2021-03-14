import React from "react";
import { Link } from 'react-router-dom';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Nav() {
  return (
    <div className="navbar">
      <FontAwesomeIcon icon={faHome} />
      <div className="navbar-right">
        <a href="#">OUR STORY</a>
        <div className="dropdown">
          <button className="dropbtn">LOGISTICS	&nbsp;
          <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <a href="#">TRAVEL</a>
            <a href="#">LODGING</a>
            <a href="#">ADVENTURE</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">WEDDING &nbsp;
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <a href="#">DETAILS</a>
            <a href="#">SCHEDULE</a>
          </div>
        </div> 
        <a href="/registry">REGISTRY</a>
        <a href="/rsvp">RSVP</a>
      </div>
    </div> 
  );
}

export default Nav;
