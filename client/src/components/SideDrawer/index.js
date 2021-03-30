import React from "react";
import "./style.css";
import { NavLink } from 'react-router-dom';

const sideDrawer = props => {
  let drawerClasses = ["side-drawer"];

  if (props.show) {
    drawerClasses = ["side-drawer", "open"];
  }
  return (
    <nav className={drawerClasses.join(" ")}>
      <ul>
        <li>
          <a href="/">HOME</a>
        </li>
        <li>
        <NavLink 
            to="/story"
            activeClassName="active"
            >OUR STORY</NavLink>
        </li>
        <li>LOGISTICS
              <li className="sub-li"><a href="/travel">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TRAVEL</a></li>
              <li className="sub-li"><a href="/lodging">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LODGING</a></li>
              <li className="sub-li"><a href="/lodging">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ADVENTURE</a></li>
        </li>
        <li>
        <NavLink 
            to="/rsvp"
            activeClassName="active"
            >RSVP</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default sideDrawer;
