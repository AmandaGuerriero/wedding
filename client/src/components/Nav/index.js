import React from "react";
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown'

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg">
      <a href="/">
        GuerrierOlen Wedding
      </a>
      <ul>
        <p>OUR STORY</p>
      </ul>
      {/* LOGISTICS DROPDOWN */}
      <ul>
      <Dropdown>
        <Dropdown.Toggle variant="custom" className="menu-dropdown dropdown-btn">
          LOGISTICS
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">TRAVEL</Dropdown.Item>
          <Dropdown.Item href="#/action-2">LODGING</Dropdown.Item>
          <Dropdown.Item href="#/action-3">ADVENTURE</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </ul>
      {/* WEDDING DROPDOWN */}
      <ul>
      <Dropdown>
      <Dropdown.Toggle variant="custom" className="menu-dropdown dropdown-btn">
          WEDDING
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">DETAILS</Dropdown.Item>
          <Dropdown.Item href="#/action-2">SCHEDULE</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </ul>
      <ul>
        <p>REGISTRY</p>
      </ul>
      <ul>
        <p>RSVP</p>
      </ul>
    </nav>
  );
}

export default Nav;
