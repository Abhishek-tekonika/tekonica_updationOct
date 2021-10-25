import React from "react";
import { Container, Row, Col } from "../Common/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Divider } from "@material-ui/core";

import "./Footer.css";

const Footer = (): JSX.Element => {
  return (
    <div style={{ background: "#d9d9d9" }}>
      <Container className="footer-container ">
        <Row justify="space-between">
          <Col xs={5} sm={5} md={5} lg={5}>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12}>
                <p className="footer-uppercase-heading">
                  Want to work with us?
                </p>
                <p className="footer-text">
                  We build technology rich apps and solutions which give the
                  best user experience. We always use latest technologies and
                  methodology to build the products. We provide extensive
                  support to our clients in the areas of design, development and
                  marketing.
                </p>
                <p className="footer-bold-text">Hire us today!</p>
              </Col>
            </Row>
            {/* <Row style={{ marginBottom: "40px" }}>
              <Col xs={12} sm={12} md={12} lg={12}>
                <p className="footer-uppercase-heading">
                  Follow us on social media
                </p> */}
            {/* <List>
                  <ListItem>
                    <ListItemIcon>
                      <FacebookIcon />
                    </ListItemIcon>
                    <ListItemText>
                      <span className="footer-links">Facebook</span>
                    </ListItemText>
                  </ListItem>
                </List>
                <Divider /> 
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <LinkedInIcon />
                    </ListItemIcon>
                    <ListItemText>
                      <span className="footer-links">LinkedIn</span>
                    </ListItemText>
                  </ListItem>
                </List> */}
            {/* <Divider />
              </Col>
            </Row> */}
            <Row>
              <Col xs={12} sm={12} md={12} lg={12}>
                <p className="footer-text">
                  © 2021 Tekonika. All Rights Reserved
                </p>
              </Col>
            </Row>
          </Col>
          <Col xs={5} sm={5} md={5} lg={5}>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12}>
                <p className="footer-uppercase-heading">Get in touch</p>
                <ul className="footer-contact-list">
                  <li className="pt-20">
                    <label className="footer-bold-text" htmlFor="email">
                      Email
                    </label>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="mailto:hello@tekonika.co"
                      className="contact-links"
                    >
                      <p className="footer-text" id="email">
                        hello@tekonika.co
                      </p>
                    </a>
                  </li>

                  <Divider className="mt-10" />
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
