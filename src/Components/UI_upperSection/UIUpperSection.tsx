import React, { useRef } from "react";
import { Row } from "../Common/Grid";
import { Col } from "../Common/Grid";
import { Container } from "../Common/Grid";
import { Theme, makeStyles } from "@material-ui/core/styles";
import ImgBackground from "../../assets/UIsplash_bg.jpg";
import MidSplash from "../../assets/midsectionSplash.jpg";
import CardSection from "../../Components/UI_upperSection/CardUISection";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import Insight from "../../assets/insight.png";
import Butterfly from "../../assets/butterfly.png";
import Innovation from "../../assets/innovation.png";
import Champion from "../../assets/champion.png";

import "./UIsection.css";

const scrollToHandle = (ref: any) =>
  ref.current.scrollIntoView({ behaviour: "smooth", block: "start" });

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
}));

const UiDesign = (): JSX.Element => {
  const classes = useStyles();
  const sec2 = useRef(null);
  const handleLearnMore = (): void => {
    scrollToHandle(sec2);
  };

  return (
    <>
      <div>
        <Parallax
          className="blur-background"
          blur={2}
          bgImage={ImgBackground}
          strength={300}
        >
          <Container>
            <Row justify="flex-start">
              <Col xs={12} sm={10} md={6} lg={4} justify="space-evenly">
                <div className="UI-height-100">
                  <h1 className="bold-heading-text ">
                    <span className="blue-text">Best UI</span>/
                    <span className="yellow-text">UX</span> Design Company
                  </h1>
                  <p className="UI-sub-heading ">
                    We create with focus on your brand, and with the user at the
                    center of design
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </Parallax>
      </div>
      <CardSection />
      <div className="container_1">
        <Container style={{ paddingTop: "30px", paddingBottom: "40px" }}>
          <Row style={{ paddingTop: "30px" }} justify="space-around">
            <Col xs={11} sm={11} md={4} lg={4} style={{ paddingLeft: "50px" }}>
              <div>
                <span className="UIheading-text" style={{ paddingTop: "29px" }}>
                  An exceptionally <span className="weight-text">UI UX </span>
                  design unique experience tailored to you
                </span>
                <img
                  style={{ margin: "12px" }}
                  src={MidSplash}
                  width="100%"
                  alt=""
                />
                <div style={{ display: "flex", height: "30px" }}>
                  <Button
                    onClick={handleLearnMore}
                    className="ui-learn-more"
                    variant="contained"
                  >
                    Get Started
                  </Button>
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
                  style={{ margin: "20px" }}
                >
                  <img
                    style={{ margin: "30px" }}
                    src={Insight}
                    width="25%"
                    alt=""
                  />
                  <br />
                  <span
                    style={{
                      fontSize: "28px",
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
                  style={{ margin: "20px" }}
                >
                  <img
                    style={{ margin: "30px" }}
                    src={Butterfly}
                    width="25%"
                    alt=""
                  />
                  <br />
                  <span
                    style={{
                      fontSize: "28px",
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
                  style={{ margin: "20px" }}
                >
                  <img
                    style={{ margin: "30px" }}
                    src={Innovation}
                    width="25%"
                    alt=""
                  />
                  <br />
                  <span
                    style={{
                      fontSize: "28px",
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
                  style={{ margin: "20px" }}
                >
                  <img
                    style={{ margin: "30px" }}
                    src={Champion}
                    width="25%"
                    alt=""
                  />
                  <br />
                  <span
                    style={{
                      fontSize: "28px",
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
              }}
            >
              <br />
              <br />
              <br />
              <br />
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                style={{
                  textAlign: "center",
                  fontFamily: "Arial !important",
                  fontStyle: "normal",
                  fontWeight: 700,
                  color: "#ffffff",
                  fontSize: "35.2px",
                  lineHeight: "41.6px",
                }}
              >
                Build your dream Web or Mobile app today.
              </Typography>
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
