import React from "react";
import { Row, Col, Container } from "../Common/Grid";
import "./Slider/Slider.css";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import design from "../../assets/design.svg";
import code from "../../assets/code.svg";
import ux from "../../assets/ux.svg";
import database from "../../assets/database.svg";

const useStyles = makeStyles((theme) => ({
  p20: {
    padding: "20px",
  },
  text: {
    color: "white",
    fontSize: "3vh",
    lineHeight: "20px",
    [theme.breakpoints.up(320)]: {
      marginTop: "-40px",
      marginLeft: "100px",
    },
    [theme.breakpoints.up(600)]: {
      marginTop: "-40px",
      marginLeft: "100px",
    },
  },
  icon: {
    height: "60px",
  },
  leftCol: {
    marginTop: "10%",
  },
  striv: {
    fontWeight: "bold",
    [theme.breakpoints.up(320)]: {
      fontSize: "2vh",
    },
    [theme.breakpoints.up(600)]: {
      fontSize: "4vh",
    },
  },
}));
const Cards = (): JSX.Element => {
  const classes = useStyles();
  // const theme = useTheme();
  // const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Container>
      <Row
        justify="space-between"
        style={{ padding: "20px", marginTop: "10%" }}
      >
        <Col xs={12} md={5} lg={5} sm={12} className={classes.leftCol}>
          <span className={classes.striv} style={{}}>
            Striving to make digital technology a more beautiful tool for every
            business and individuals
          </span>
        </Col>
        <Col xs={12} md={6} sm={12} lg={6}>
          <Row justify="space-between">
            <Col xs={12} sm={6} md={6} lg={6}>
              <Box
                boxShadow={3}
                bgcolor="background.paper"
                px="auto"
                style={{
                  margin: "5px",
                  height: "90%",
                  borderRadius: "5px",
                  backgroundColor: "#44CBED",
                }}
                className={classes.p20}
              >
                <img className={classes.icon} src={design} alt="" />
                <h3 className={classes.text}>Mobile Apps Dev </h3>
                <p className={classes.text}>
                  Mobile Apps now controls users engagement over the internet.
                </p>
              </Box>
            </Col>
            <Col xs={12} sm={6} md={6} lg={6}>
              <Box
                boxShadow={3}
                bgcolor="background.paper"
                px="auto"
                style={{
                  margin: "5px",
                  height: "90%",
                  borderRadius: "5px",
                  backgroundColor: "#378DD8",
                }}
                className={classes.p20}
              >
                <img className={classes.icon} src={code} alt="" />
                <h3 className={classes.text}>Web Design</h3>
                <p className={classes.text} style={{ lineHeight: "20px" }}>
                  Let us get you a converting office in the cloud.
                </p>
              </Box>
            </Col>
          </Row>
          <Row justify="space-between">
            <Col xs={12} sm={6} md={6} lg={6}>
              <Box
                boxShadow={3}
                bgcolor="background.paper"
                px="auto"
                style={{
                  margin: "5px",
                  marginTop: "10%",
                  height: "90%",
                  borderRadius: "5px",
                  backgroundColor: "#4DB369",
                }}
                className={classes.p20}
              >
                <img className={classes.icon} alt="" src={ux} />
                <h3 style={{ fontSize: "3vh" }} className={classes.text}>
                  {" "}
                  UI/UX Design
                </h3>
                <p className={classes.text} style={{ lineHeight: "20px" }}>
                  How your users interacts with your application matters.
                </p>
              </Box>
            </Col>
            <Col xs={12} sm={6} md={6} lg={6}>
              <Box
                boxShadow={3}
                bgcolor="background.paper"
                px="auto"
                style={{
                  margin: "5px",
                  marginTop: "10%",
                  height: "90%",
                  borderRadius: "5px",
                  backgroundColor: "#FCC525",
                }}
                className={classes.p20}
              >
                <img alt="" src={database} className={classes.icon} />
                <h3 style={{ fontSize: "3vh" }} className={classes.text}>
                  Hire Developers
                </h3>
                <p className={classes.text} style={{ lineHeight: "20px" }}>
                  We outsource our competent developers to server you better.
                </p>
              </Box>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Cards;
