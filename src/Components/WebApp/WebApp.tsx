import React, { useEffect } from "react";
import { Row, Col } from "../Common/Grid";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import FrontEnd from "../../assets/tekonika-frontend-pic.png";
import BackEnd from "../../assets/tekonika-backend-pic.png";
import MidSection from "./MidSection/MidSection";
import Carousel from "./Carousel/Carousel";
import FacebookIcon from "@material-ui/icons/Facebook";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyle = makeStyles((theme) => ({
  icon: {
    marginRight: "5%",
    marginTop: "10%",
    cursor: "pointer",
  },
  images: {
    [theme.breakpoints.up(300)]: {
      width: "127%",
      height: "50%",
      marginLeft: "-19px"
    },
    [theme.breakpoints.up(500)]: {
      width: "159%",
      height: "50%",
      marginLeft: "-40px"
    },
    [theme.breakpoints.up(900)]: {
      width: "100%",
      height: "50%",
    },
  },
  head: {
    color: "rgb(95,97,171)",

    lineHeight: "68px",
    fontWeight: 500,
    [theme.breakpoints.up(320)]: {
      fontSize: "25px",
    },
    [theme.breakpoints.up(500)]: {
      fontSize: "35px",
    },
    [theme.breakpoints.up(900)]: {
      fontSize: "60px",
    },
  },

  text: {
    fontSize: "18px",
    lineHeight: "28px",
    fontWeight: 300,
    marginTop: 20,
    color: "black",
    [theme.breakpoints.up(320)]: {
      fontSize: "14px",
    },
    [theme.breakpoints.up(900)]: {
      fontSize: "18px",
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

const WebApp = (): JSX.Element => {
  const classes = useStyle();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("xl"));

  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <React.Fragment>
      <div style={{ backgroundColor: "#fffff" }}>
        <Row
          style={{
            paddingLeft: "10%",
            paddingTop: "3%",
            paddingRight: "5%",
            paddingBottom: "3%",
          }}
          justify="space-between"
        >
          <Col sm={8} md={5} lg={6} xs={10} style={{ color: "whitesmoke" }}>
            <Col
              sm={8}
              md={5}
              lg={6}
              xs={10}
              style={{
                marginTop: "2%",
                paddingLeft: matches ? "18%" : "4%",
              }}
            >
              <span className={classes.head}>TEKONIKA</span>
              <br />

              <p className={classes.text}>
                Tekonika is one of the best Web App development Companies. We
                have a team of professional experts having years of experience
                in the field of development. Our specialised team can provide
                custom web solutions to establish your business online.
              </p>
            </Col>
          </Col>
          <Col />
          <Col
            sm={8}
            md={6}
            lg={6}
            xs={10}
            style={{ marginTop: "1%", padding: "auto" }}
          >
            <img alt="" className={classes.images} src={FrontEnd} />
            <img alt="" className={classes.images} src={BackEnd} />
          </Col>
        </Row>
      </div>
      <MidSection />
      <Carousel />
    </React.Fragment>
  );
};
export default WebApp;
