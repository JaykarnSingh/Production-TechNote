import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import NavDropdown from 'react-bootstrap/NavDropdown';
import {incNum} from './../../Action/index.js'
import {useDispatch} from 'react-redux'

export const NavBar = (props) => {
  const dispatch=useDispatch();
  return (
    
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-4">
    <div className="container">
          <h3 id="navBarHeading"className="navbar-brand">{props.data}</h3>
         

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> 

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto ">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" id="Navlink">
                START
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/about" className="nav-link" onClick={()=>dispatch(incNum())}>
                ABOUT
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/contact" className="nav-link" id="Navlink">
                CONTACT
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/blog" className="nav-link" id="Navlink">
                NEWS
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/admin" className="nav-link" id="Navlink">
                ADMIN
              </NavLink>
            </li>

            <li className="nav-item">
              <NavDropdown
              className="drp"
              id="nav-dropdown-dark-example"
              title="WEBDEVELOPMENT"
              menuVariant="dark"
              >
              <NavDropdown.Item ><NavLink to="/card" className="nav-link" id="Navlink">COURSE</NavLink></NavDropdown.Item>
              <NavDropdown.Item >WEBSITE</NavDropdown.Item>
              </NavDropdown>
            </li>
        </ul>
           
          
      </div>
      </div>
    </nav>
   
  );
};
