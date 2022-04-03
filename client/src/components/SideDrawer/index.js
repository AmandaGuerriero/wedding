import React from "react";
import "./style.css";

const sideDrawer = (props) => {
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
        <li><a href="/story">OUR STORY</a></li>
        <li className="logistics-menu">LOGISTICS</li>
              <li className="sub-li"><a href="/travel">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TRAVEL</a></li>
              <li className="sub-li"><a href="/lodging">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LODGING</a></li>
              <li className="sub-li"><a href="/adventure">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ADVENTURE</a></li>
        <li><a href="/details">EVENT DETAILS</a></li>
        <li><a href="/registry">REGISTRY</a></li>
        <li><a href="/rsvp">RSVP</a></li>
      </ul>
    </nav>
  );
};
export default sideDrawer;
