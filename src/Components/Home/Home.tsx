import React, { useRef } from "react";
import { Row } from "../Common/Grid";
import { Col } from "../Common/Grid";
import { Container } from "../Common/Grid";
import Snippet from "../../assets/tekonika-site.gif";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import MidSection from "./MidSection";

import "./Home.css";

const Fade = require("react-reveal/Fade");

const scrollToRef = (ref: any) =>
  ref.current.scrollIntoView({ behavior: "smooth", block: "start" });

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  img: {
    width: "100%",
    height: "100%",
  },
  text: {
    fontSize: "18px",
    lineHeight: "28px",
    fontWeight: 300,
    marginTop: 20,
    [theme.breakpoints.up(320)]: {
      fontSize: "14px",
    },
    [theme.breakpoints.up(900)]: {
      fontSize: "18px",
    },
  },
}));

const Home = (): JSX.Element => {
  const classes = useStyles();

  const sliderSec = useRef(null);
  const handleLearnMore = (): void => {
    scrollToRef(sliderSec);
  };
  return (
    <React.Fragment>
      <Container>
        <Row style={{ marginTop: "5%" }} justify="center">
          <Col xs={12} sm={12} md={6} lg={6}>
            <div className="h-100">
              <br />

              <span className="head">We Design & Build Products</span>

              <br />

              <span className={classes.text}>
                Tekonika is a Web & Mobile app development company providing
                dedicated remote teams globally. We work closely with you to
                design and build your digital products.
              </span>

              <br />

              <Button
                style={{ marginTop: "3%", marginBottom: "3%" }}
                className="blue-btn"
                variant="contained"
                size="large"
                onClick={handleLearnMore}
              >
                Learn More
              </Button>
            </div>
          </Col>
          <Col xs={12} sm={12} md={1} lg={1}></Col>
          <Col xs={12} sm={12} md={5} lg={5}>
            <Col
              style={{
                borderRadius: "10px",
                border: "2px solid yellow",
                padding: "20px",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <img className={classes.img} src={Snippet} alt="" />
            </Col>
          </Col>
        </Row>
      </Container>
      <div ref={sliderSec}>
        <MidSection />
      </div>
    </React.Fragment>
  );
};

export default Home;
