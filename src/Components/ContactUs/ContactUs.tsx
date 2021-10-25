import React, { useEffect } from "react";
import { Row, Col } from "../Common/Grid";
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';

import "./ContactUs.css";

const ContactUs = (): JSX.Element => {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  },[]);
  
  return(
    <>
    <div className="top-container">
      <Row justify="center" alignItems="center" className="center">
        <Col xs={11} sm={11} md={11} lg={11}>
          <span className="contact-heading-text">Contact Us</span>
          <p className="sub-heading">Let's build the future together!</p>
        </Col>
      </Row>
    </div>
    <div className="bottom-container">
      <Row justify="center" alignItems="center" className="center">
        <Col xs={11} sm={11} md={5} lg={5}>
          <h3>Contact</h3>
          <p className="contact-text">
            Do you have a solution you’d love us to help bring into reality 
            or you have a problem you’d love us to provide a digital solution 
            for. Don’t hesitate to speak to our representative.
          </p>
          <p className="contact-location">New Delhi, India</p>
          <a 
            target="_blank" 
            rel="noopener noreferrer" 
            href="mailto:thello@tekonika.co" 
            className="contact-links"
          >
            <span className="contact-links-text"><EmailIcon /> hello@tekonika.co</span>
          </a>
          <a 
            target="_blank" 
            rel="noopener noreferrer" 
            href="tel:+91 7400077777" 
            className="contact-links"
          >
            <span className="contact-links-text"><PhoneIcon /> +91 7400077777</span>
          </a>
        </Col>
      </Row>
    </div>
    </>
  )
}

export default ContactUs;