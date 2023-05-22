import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import "../styles/footer.css";

export const Footer = () => {
  return (
    <div className="footer is-light">
      <div className="socialMedia">
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
      </div>
      <p>Copyright © 2023 Pizzalicious</p>
    </div>
  );
};
