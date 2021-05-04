import React from "react";
import { NavLink } from 'react-router-dom';
import SideMenu from "../SideMenu";
import './style.css';

const Nav = props => {
  return (
    <div>
      <div className="navbar">
        <p></p>
        <div className="toggle-btn">
          <SideMenu click={props.drawerToggleClickHandler} />
        </div>
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
              <a href="/adventure">ADVENTURE</a>
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
            to="/register-for-updates"
            activeClassName="active"
            >UPDATES</NavLink>
            {/* <NavLink 
            to="/rsvp"
            activeClassName="active"
            >RSVP</NavLink> */}
        </div>
      </div>
      <div className="header-container">
        <a href="/" id="background"/>
        {/* <a href="/register-for-updates"><button className="reg-button">Get Updates</button></a> */}
      </div>
    </div>
  );
}

export default Nav;
