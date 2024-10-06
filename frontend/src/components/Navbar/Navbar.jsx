import React, { useState } from "react";
import "./Navbar.css";
// import {assets} from '../../assets/assets';
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="menu-navbar">
      <ul>
        <li>
          <NavLink to="/" className={({isActive}) => (isActive ? 'link active' : 'link')}><i class="bi bi-house-check"></i></NavLink>
        </li>
        
      </ul>
      <ul>
        <li>
          <NavLink to="/skill" className={({isActive}) => (isActive ?   'link active' : 'link')}><i class="bi bi-person-raised-hand"></i></NavLink>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink to="/about" className={({isActive}) => (isActive ? 'link active' : 'link')}><i class="bi bi-file-person"></i></NavLink>
        </li>
      </ul>
    </div>
    </div>
  );
};

export default Navbar;
