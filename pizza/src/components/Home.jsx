import React from "react";
import { Link } from "react-router-dom";

import "../styles/home.css";
export const Home = () => {
  return (
    <div className="mainPage">
      <div className="order">
        <Link to="/menu">
          <button class="button is-danger">ORDER NOW</button>
        </Link>
      </div>
    </div>
  );
};
