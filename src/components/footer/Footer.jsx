import React from "react";

import Newsletter from "./Newsletter";

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

import Gericht from "../../assets/gericht-footer.png";
import SubImage from "../../assets/header-sub-img.svg";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <Newsletter />
      <div className="footer__data">
        <div className="contact">
          <h5 className="contact__title">contact us</h5>
          <p>9 W 53rd St, New York, NY 10019, USA</p>
          <span>+20 1026-877-608</span>
          <span>+20 1026-877-608</span>
        </div>
        <div className="gericht">
          <img src={Gericht} alt="gericht" className="gericht__image" />
          <p>
            “The best way to find yourself is to lose yourself in the service of
            others.”
          </p>
          <img src={SubImage} alt="logo" />
          <ul>
            <li>
              <a href="/">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="/">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="/">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
        <div className="working">
          <h5 className="working__title">Working Hours</h5>
          <p>
            Monday-Friday:
            <br />
            08:00 am -12:00 am
          </p>
          <p>
            Saturday-Sunday:
            <br />
            07:00am -11:00 pm
          </p>
        </div>
      </div>
      <div className="copy">
        © 2023 Geritcht Taher Abozeid. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
