import React from 'react'
import { NavLink } from "react-router-dom";
import "./Card.css";




export const Card = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success">

  
    <ul className="navbar-nav m-auto">
      <li className="nav-item active">
      <NavLink to="/card/html" className="nav-link" id="Navlink1">HTML</NavLink>
      </li>
      <li className="nav-item">
      <NavLink to="/card/css" className="nav-link" id="Navlink1">CSS</NavLink>
      </li> 
      <li className="nav-item">
      <NavLink  className="nav-link" id="Navlink1">JAVASCRIPT</NavLink>
      </li>
      <li className="nav-item">
      <NavLink  className="nav-link" id="Navlink1">REACTJS</NavLink>
      </li>
      <li className="nav-item">
      <NavLink  className="nav-link" id="Navlink1">NODEJS</NavLink>
      </li>
      <li className="nav-item">
      <NavLink  className="nav-link" id="Navlink1">MONGODB</NavLink>
      </li>
      <li className="nav-item">
      <NavLink  className="nav-link" id="Navlink1">BOOTSTRAP</NavLink>
      </li>
    </ul>
  
</nav>


  )
}
