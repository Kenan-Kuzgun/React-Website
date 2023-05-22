import React from "react";
import "bulma/css/bulma.css";
import ReactDOM from "react-dom";
import $ from "jquery";
import BrandLogo from "../assets/pizzalicious-high-resolution-logo-color-on-transparent-background.png";
import { Link } from "react-router-dom";

$(document).ready(function () {
  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function () {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });
});

export const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar is-light"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link className="navbar-item" to={"/"}>
            <img src={BrandLogo} width="200" />
          </Link>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link to="/" className="navbar-item">
              Home
            </Link>

            <Link to="/menu" className="navbar-item">
              Menu
            </Link>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <Link to="/about" className="navbar-item">
                About
              </Link>

              <Link to="/contact" className="navbar-item">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
