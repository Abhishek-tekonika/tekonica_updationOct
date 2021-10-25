import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faYoutube,
  faTwitter,
  faInstagram,
  faWhatsapp,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import "./Navbar.css";

const Navbar = (): JSX.Element => {
  return (
    <div className=" nav1 ">
      <div className="row2">
        <div className="">
          <span className="para1">
            Canada : +1(416)556-3325 | Gurgaon : +91-7400077777
          </span>
          <a href="https://wa.me/7400077777" className="twitter social">
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
          </a>
          <a href="https://www.linkedin.com/company/tekonika-technologies/about/" className="instagram social">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
         
        </div>
      </div>
    </div>
  );
};
export default Navbar;
