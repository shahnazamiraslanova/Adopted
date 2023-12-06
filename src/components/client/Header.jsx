import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="firstNav">
        <div className="firstNavLeft">
          <FaTwitter />
          <FaFacebookF />
          <CiInstagram />
          <FaLinkedinIn />
        </div>
        <div className="firstNavRight">
          <button>Sponsor</button>
          <button>Login</button>
        </div>
      </div>
      <div className="secondNav">
       
          <div className="secondNavLeft">
            <NavLink to="/">Adopted</NavLink>
        </div>
        <div className="secondNavRight">
        <ul>
              <NavLink to="/">Home</NavLink>
              <li>
                <select name="" id="">
                    <option value="">Adoptaion</option>
                    <option value="">Witing children</option>
                    <option value="">How to Adopt</option>
                </select>
              </li>
              <li>Succes Stories</li>
              <li>About</li>
              <NavLink to="/contact">Contact</NavLink>
            </ul>
       
        </div>
      </div>
    </div>
  );
};

export default Header;
