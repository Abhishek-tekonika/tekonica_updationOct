import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "../Common/Grid";
import phoneImg1 from "../../assets/phone-img1.jpg";
import phoneImg2 from "../../assets/web-developer.png";
import phoneImg3 from "../../assets/web-developer-2.png";
import Button from "@material-ui/core/Button";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import BrushOutlinedIcon from "../../assets/design.png";
import SettingsOutlinedIcon from "../../assets/codelaptop.png";
import CloudDoneOutlinedIcon from "../../assets/cloud.png";
import ContactSupportOutlinedIcon from "../../assets/question.png";

import PhoneIphoneOutlinedIcon from "../../assets/mobile.png";
import GroupAddOutlinedIcon from "../../assets/experience.png";
import BubbleChartOutlinedIcon from "../../assets/crossplatform.png";
import LocalAtmOutlinedIcon from "../../assets/monetization.png";

import "./MobileAppDev.css";

const scrollToRef = (ref: any) =>
  ref.current.scrollIntoView({ behavior: "smooth", block: "start" });

const MobileAppDev = (): JSX.Element => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const sec2 = useRef(null);
  const handleLearnMore = (): void => {
    scrollToRef(sec2);
  };

  const scrollTop = (): void => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <>
      <Container className="container-1">
        <Row>
          <Col xs={12} sm={11} md={8} lg={9}>
            <img width="100%" src={phoneImg1} alt="" />
          </Col>
          <Col xs={11} sm={11} md={4} lg={3}>
            <div className={matches ? "alignment-top-sub-heading" : ""}>
              <span className="heading-text">
                Quality is what matters most in Mobile Apps
              </span>
              <p className="sub-heading-text">
                Tekonika develops a myriad of engaging, personalized and
                adaptive mobile applications using a 100% agile approach for
                B2B, B2C and Enterprises. We are a result oriented mobile app
                development company
              </p>
              <Button
                onClick={handleLearnMore}
                className="learn-more"
                variant="contained"
              >
                LEARN MORE
                <ArrowForwardIosIcon />
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="icon-section-container" ref={sec2}>
        <Container>
          <Row style={{ paddingTop: "30px" }}>
            <Col xs={11} sm={11} md={4} lg={4}>
              <span className="heading-text">
                One of the best
                <span className="highlighted-text">mobile apps</span>
                development company.
              </span>
              <p className="sub-heading-text mt-50">
                You are about to hire a professional mobile app developer for
                your business idea. Be it for Android, IOS or Windows, we’ve got
                you covered. Tekonika, a recognized mobile app development
                company, delivers business-centric and highly customized native,
                hybrid and cross platform mobile apps to startups and
                enterprises.
              </p>
            </Col>
            <Col xs={12} sm={12} md={2} lg={2}></Col>
            <Col xs={11} sm={11} md={5} lg={5} style={{ marginLeft: "60px" }}>
              <Row className="row">
                <Col
                  xs={11}
                  sm={11}
                  md={5}
                  lg={5}
                  className="colimg"
                  style={{
                    margin: "30px 30px 40px 0px",
                    boxShadow: "0px 0px 10px gray",
                    borderRadius: "5%",
                    padding: "5%",
                  }}
                >
                  <div>
                    <img
                      src={BrushOutlinedIcon}
                      width="30%"
                      height="50px"
                      alt=""
                    />
                    <span className="label">Design</span>
                  </div>

                  <p className="sub-heading-text">
                    Our team prepares a professional UI and UX design for your
                    mobile application.
                  </p>
                </Col>
                <Col
                  xs={11}
                  sm={11}
                  md={5}
                  lg={5}
                  style={{
                    margin: "30px 30px 40px 0px",
                    boxShadow: "0px 0px 10px gray",
                    borderRadius: "5%",
                    padding: "5%",
                  }}
                >
                  <div>
                    <img
                      src={SettingsOutlinedIcon}
                      width="30%"
                      height="50px"
                      alt=""
                    />
                    <span className="label">Develop</span>
                  </div>

                  <p className="sub-heading-text">
                    We develop mobile app using hybrid tech for android and iOS
                  </p>
                </Col>
              </Row>
              <Row className="row">
                <Col
                  xs={11}
                  sm={11}
                  md={5}
                  lg={5}
                  style={{
                    margin: "30px 30px 0px 0px",
                    boxShadow: "0px 0px 10px gray",
                    borderRadius: "5%",
                    padding: "5%",
                  }}
                >
                  <div>
                    <img
                      src={CloudDoneOutlinedIcon}
                      width="30%"
                      height="50px"
                      alt=""
                    />
                    <span className="label">Deploy</span>
                  </div>

                  <p className="sub-heading-text">
                    After adequate testing, we get your mobile app on the Google
                    Playstore and Apple Appstore.
                  </p>
                </Col>
                <Col
                  xs={11}
                  sm={11}
                  md={5}
                  lg={5}
                  style={{
                    margin: "30px 30px 0px 0px",
                    boxShadow: "0px 0px 10px gray",
                    borderRadius: "5%",
                    padding: "5%",
                  }}
                >
                  <div>
                    <img
                      src={ContactSupportOutlinedIcon}
                      width="30%"
                      height="50px"
                      alt=""
                    />
                    <span className="label">Support</span>
                  </div>

                  <p className="sub-heading-text">
                    We render post development support for bug fixes and new
                    features integration.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <div style={{ width: "100%" }}>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
            <img src={matches ? phoneImg3 : phoneImg2} width="100%" alt="" />
          </Col>
          <Col xs={12} sm={12} md={1} lg={1}></Col>
          <Col xs={11} sm={11} md={5} lg={4}>
            <div className="container-3">
              <span className="heading-text">
                Need a Mobile App Developer for that idea?
              </span>
              <p className="sub-heading-text">
                Cool, you have the next big idea are you planning to get the
                business idea closer to your customer through their mobile
                device? If yes, that’s a great decision. <br /> <br />
                Tekonika develops cross-platform mobile applications using
                modern technologies and state-of-the-art UI and UX designs to
                justify and complement your idea.
              </p>
              <Button onClick={scrollTop} className="learn-more">
                Get Started!
              </Button>
            </div>
          </Col>
        </Row>
      </div>
      <div className="icon-section-container">
        <Container>
          <Row justify="center">
            <div className="center">
              <span className="heading-text">Our Mobile App Development</span>
              <br />
              <span className="heading-text"> Offers</span>
            </div>
          </Row>
          <Row style={{ marginTop: "40px" }}>
            <Col xs={12} sm={12} md={5} lg={3}>
              <div className="icon-card center">
                <div>
                  <img
                    src={PhoneIphoneOutlinedIcon}
                    width="40px"
                    height="40px"
                    alt=""
                    className="img-icon"
                  />
                  <span className="icon-heading">App Strategy</span>
                </div>

                <p className="sub-heading-text">
                  Mobile app strategy begins with the idea of interaction. The
                  ultimate goal is to build the app that provides customers with
                  exactly, what they want.
                </p>
              </div>
            </Col>
            <Col xs={12} sm={12} md={5} lg={3}>
              <div className="icon-card center">
                <div>
                  <img
                    src={GroupAddOutlinedIcon}
                    width="40px"
                    height="40px"
                    alt=""
                    className="img-icon"
                  />
                  <span className="icon-heading">User Experience</span>
                </div>

                <p className="sub-heading-text">
                  User experience is way more than the way, app looks in terms
                  of user interfaces. Its about providing “WOW” feeling to
                  users, while they navigate.
                </p>
              </div>
            </Col>
            <Col xs={12} sm={12} md={5} lg={3}>
              <div className="icon-card center">
                <div>
                  <img
                    src={BubbleChartOutlinedIcon}
                    width="40px"
                    height="40px"
                    alt=""
                    className="img-icon"
                  />
                  <span className="icon-heading">Cross Platform</span>
                </div>

                <p className="sub-heading-text">
                  Enterprise-to-consumer apps are fueling demand of cross
                  platform app development to rapidly develop and deploy mobile
                  apps on several mobile platforms.
                </p>
              </div>
            </Col>
            <Col xs={12} sm={12} md={5} lg={3}>
              <div className="icon-card center">
                <div>
                  <img
                    src={LocalAtmOutlinedIcon}
                    width="40px"
                    height="40px"
                    alt=""
                    className="img-icon"
                  />
                  <span className="icon-heading">Monetization</span>
                </div>

                <p className="sub-heading-text">
                  With millions of $ of app related revenues expected by 2021,
                  freemium apps leading the stock but in-app advertising is
                  taking monetization to next level.
                </p>
              </div>
            </Col>
          </Row>
          <Row justify="center" className="center">
            <Col xs={12} sm={12} md={4} lg={2}>
              <Link className="links" to="/request-a-quote">
                <Button className="big-blue-btn" variant="contained">
                  Request Quote
                </Button>
              </Link>
            </Col>
            <Col xs={12} sm={12} md={4} lg={2}>
              <Link className="links" to="/contact-us">
                <Button className="big-blue-btn" variant="contained" style={{width:"10rem"}}>
                  Contact Us
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default MobileAppDev;
