import React, { useRef, useEffect } from "react";
import { Row } from "../Common/Grid";
import { Col } from "../Common/Grid";
import { Container } from "../Common/Grid";
import { Theme, makeStyles } from "@material-ui/core/styles";

import ImgBackground from "../Home/clients-logo/Wireframe-light.jpeg";
import MidSplash from "../../assets/midsectionSplash.jpg";
import CardSection from "../../Components/UI_upperSection/CardUISection";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import Insight from "../../assets/insight.png";
import Butterfly from "../../assets/butterfly.png";
import Innovation from "../../assets/innovation.png";
import Champion from "../../assets/champion.png";
import mainuiux from "../../assets/mainuiux.jpeg";

import "./UIsection.css";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: "#5f61ab",
  },

  img: {
    width: "100%",
    opacity: "0.71",
    paddingBottom: "13px",
  },

  media: {
    height: 140,
  },
  imgmid: {
    marginTop: "28.5%",
    position: "relative",
    height: "550px",
    width: "120%",
    [theme.breakpoints.up(320)]: {
      width: "100%",
      height: "auto",
    },
    [theme.breakpoints.up(650)]: {
      width: "88%",
    height: "550px",
    marginLeft:" 78px",
    },
  },

  imguiux: {
    marginTop: "100px",
    marginBottom: "500px",
    position: "absolute",
    height: "600px",
    width: "50%",
    [theme.breakpoints.up(320)]: {
      marginTop: "40px",
      width: "90%",
      height: "fit-content",
    },
    [theme.breakpoints.up(750)]: {
      height: "600px",
      width: "50%",
    },
  },
}));

const scrollTop = (): void => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

const UiDesign = (): JSX.Element => {
  const classes = useStyles();
  const sec2 = useRef(null);

  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <>
      <div>
        <Container style={{ marginBottom: "300px" }}>
          <Row>
            <Col md={8}>
              <img src={ImgBackground} className={classes.imguiux} />
            </Col>
            <Col md={4}>
              <h1 className="bold-heading-text ">
                <span className="blue-text">UI</span>/
                <span className="yellow-text">UX</span> Design Company
              </h1>
              <p className="UI-sub-heading ">
                We create with focus on your brand, and with the user at the
                center of design
              </p>

              <Link style={{ textDecoration: "none" }} to="/request-a-quote">
                <Button
                  variant="contained"
                  className="blue-btn"
                  style={{ marginTop: "30px" }}
                >
                  Learn More
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
      <div style={{ marginTop: "100px" }}>
        <CardSection />
      </div>

      <Container>
        <Row>
          <Col md={6}>
            <img className={classes.imgmid} src={mainuiux} />
          </Col>
          <Col md={6} style={{ }}>
            <div className="container-box">
              <h2 className="heading-upper">
                If you wish to make an app from scratch, you must first invent a
                good prototype.
              </h2>
              <p className="para-lower">
                We are your partner in designs and we collaborate exquisitely
                great with businesses like yours. We help businesses gain
                confidence in their products and position them as brands that
                clients can trust.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="container_1">
        <Container style={{ paddingTop: "30px" }}>
          <Row style={{ paddingTop: "30px" }} justify="space-around">
            <Col xs={11} sm={11} md={4} lg={4} style={{}}>
              <div>
                <span className="UIheading-text" style={{}}>
                  An exceptionally <span className="weight-text">UI/UX </span>
                  design unique experience tailored to you
                </span>
                <img
                  className="UIheading-img"
                  style={{}}
                  src={MidSplash}
                  alt=""
                />
                <div style={{ display: "flex", height: "30px" }}>
                  <Link
                    style={{ textDecoration: "none" }}
                    to="/request-a-quote"
                  >
                    <Button variant="contained" className="blue-btn">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </Col>
            <Col xs={11} sm={11} md={5} lg={5}>
              <Row justify="space-evenly">
                <Col
                  xs={9}
                  sm={9}
                  md={5}
                  lg={5}
                  className="card-background"
                  style={{
                    margin: "30px 0px 40px 0px",
                    boxShadow: "0px 0px 10px gray",
                    borderRadius: "5%",
                  }}
                >
                  <img
                    style={{ margin: "20px" }}
                    src={Insight}
                    width="20%"
                    alt=""
                  />

                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: 400,
                      lineHeight: "32px",
                      opacity: "1",
                    }}
                  >
                    Insight Driven
                  </span>
                  <p
                    style={{
                      fontSize: "16px",
                      lineHeight: "29px",
                      opacity: "0.75",
                      color: "#444",
                      fontStyle: "inherit",
                      textAlign: "left",
                    }}
                  >
                    We leverage on the power of information and research to find
                    out specific solutions to design problems
                  </p>
                </Col>
                <Col
                  xs={9}
                  sm={9}
                  md={5}
                  lg={5}
                  className="card-background"
                  style={{
                    margin: "30px 0px 40px 0px",
                    boxShadow: "0px 0px 10px gray",
                    borderRadius: "5%",
                  }}
                >
                  <img
                    style={{ margin: "20px" }}
                    src={Butterfly}
                    width="20%"
                    alt=""
                  />

                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: 400,
                      lineHeight: "32px",
                      opacity: "1",
                    }}
                  >
                    Elegant Design
                  </span>
                  <p
                    style={{
                      fontSize: "16px",
                      lineHeight: "29px",
                      opacity: "0.75",
                      color: "#444",
                      fontStyle: "inherit",
                      textAlign: "left",
                    }}
                  >
                    We understand the impact of beautiful designs and stunning
                    works of art. We build with style using tools like figma
                  </p>
                </Col>
              </Row>
              <Row justify="space-evenly">
                <Col
                  xs={9}
                  sm={9}
                  md={5}
                  lg={5}
                  className="card-background"
                  style={{
                    margin: "30px 0px 0px 0px",
                    boxShadow: "0px 0px 10px gray",
                    borderRadius: "5%",
                  }}
                >
                  <img
                    style={{ margin: "20px" }}
                    src={Innovation}
                    width="20%"
                    alt=""
                  />

                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: 400,
                      lineHeight: "32px",
                      opacity: "1",
                    }}
                  >
                    User Centric
                  </span>
                  <p
                    style={{
                      fontSize: "16px",
                      lineHeight: "29px",
                      opacity: "0.75",
                      color: "#444",
                      fontStyle: "inherit",
                      textAlign: "left",
                    }}
                  >
                    At the center of our designs is the belief that the user is
                    the definer of purpose. We thus create designs that improve
                    human experience.
                  </p>
                </Col>
                <Col
                  xs={9}
                  sm={9}
                  md={5}
                  lg={5}
                  className="card-background"
                  style={{
                    margin: "30px 0px 0px 0px",
                    boxShadow: "0px 0px 10px gray",
                    borderRadius: "5%",
                  }}
                >
                  <img
                    style={{ margin: "20px" }}
                    src={Champion}
                    width="20%"
                    alt=""
                  />

                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: 400,
                      lineHeight: "32px",
                      opacity: "1",
                    }}
                  >
                    Quality Tested
                  </span>
                  <p
                    style={{
                      fontSize: "16px",
                      lineHeight: "29px",
                      opacity: "0.75",
                      color: "#444",
                      fontStyle: "inherit",
                      textAlign: "left",
                    }}
                  >
                    We chose quality above just doing it. Our solutions make
                    sure you appreciate the beauty of great designs
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>

      <div
        style={{
          backgroundColor: "#f2f2f2",
          width: "100%",
          borderTopLeftRadius: "300px",
          borderTopRightRadius: "300px",
          backfaceVisibility: "visible",
        }}
      >
        <Container>
          <Row xs={12} sm={12} md={12} lg={12} style={{ margin: "auto" }}>
            <div
              className={classes.root}
              style={{
                width: "100%",
                display: "flex-start",
                height: "100%",
                borderRadius: "20px",
                margin: "auto",
                marginBottom: "10px",
              }}
            >
              <br />
              <br />
              <br />
              <br />
              <h2 className="h2footer" style={{}}>
                Build your dream Web or Mobile app today.
              </h2>
              <br />
              <Row
                xs={12}
                sm={12}
                md={6}
                lg={12}
                style={{
                  position: "relative",
                  margin: "auto",
                  display: "flex",
                }}
              >
                <Link
                  to="request-a-quote"
                  className="linkName"
                  style={{ padding: "10px", margin: "auto" }}
                >
                  <Button
                    variant="outlined"
                    style={{
                      color: "whitesmoke",
                      borderColor: "whitesmoke",
                      borderBlockWidth: "2px",
                    }}
                  >
                    Request quote
                  </Button>
                </Link>
              </Row>
              <br />
              <br />
              <br />
              <br />
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default UiDesign;
