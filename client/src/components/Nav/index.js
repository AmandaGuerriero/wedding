import React from "react";
import { NavLink } from 'react-router-dom';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Nav() {
  return (
    <div>
      <div className="navbar">
        <p></p>
        <div className="navbar-right">
          <a href="/">HOME</a>
          <NavLink 
            to="/story"
            activeClassName="active"
            >OUR STORY</NavLink>
          <div className="dropdown">
            <button className="dropbtn">LOGISTICS	&nbsp;
            <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <a href="/travel">TRAVEL</a>
              <a href="/lodging">LODGING</a>
              <a href="/lodging">ADVENTURE</a>
            </div>
          </div>
          {/* <div className="dropdown">
            <button className="dropbtn">WEDDING &nbsp;
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <a href="#">DETAILS</a>
              <a href="#">SCHEDULE</a>
            </div>
          </div>  */}
          {/* <NavLink 
            to="/registry"
            activeClassName="active"
            >REGISTRY</NavLink> */}
            <NavLink 
            to="/rsvp"
            activeClassName="active"
            >RSVP</NavLink>
        </div>
      </div>
      <div className="header-container">
        <div id="background"/>
      </div>
    </div>
  );
}

export default Nav;
