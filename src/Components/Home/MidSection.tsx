import React from "react";
import { Col, Row, Container } from "../Common/Grid";
import Chart from "../../assets/sketch.png";
import Node from "../../assets/node.svg";
import Javascript from "../../assets/javascript.svg";
import { makeStyles } from "@material-ui/core/styles";
import Clients from "./Clients";
import Card from "./Card";
import EndSection from "./EndSection";
import Linear from "./Linear";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  img: {
    marginTop: "-15px",
    [theme.breakpoints.up(320)]: {
      width: "25px",
      height: "25px",
    },
    [theme.breakpoints.up(700)]: {
      width: "50px",
      height: "50px",
    },
  },
  circle: {
    borderRadius: "60px",
    backgroundColor: "#e4e4e4",
    width: "350px",
    height: "80px",
    textAlign: "center",
    [theme.breakpoints.down(680)]: {
      width: "250px",
      height: "40px",
    },
    [theme.breakpoints.up(700)]: {
      width: "350px",
      height: "70px",
    },
    margin: "0 auto",
  },
  innerdiv: {
    textAlign: "center",
  },
  text: {
    textAlign: "center",
    lineHeight: "28px",
    fontWeight: 300,
    margin: 0,
    marginBottom: "3rem",
    [theme.breakpoints.down(620)]: {
      fontSize: "15px",
      padding: "25px",
    },
    [theme.breakpoints.up(700)]: {
      marginLeft: "60px",
      fontSize: "20px",
    },
  },
  head: {
    marginLeft: "10px",
    [theme.breakpoints.up(320)]: {
      fontSize: "25px",
    },
    [theme.breakpoints.up(700)]: {
      fontSize: "40px",
    },
  },
}));
const MidSection = (): JSX.Element => {
  const classes = useStyles();
  return (
    <div style={{ overflowX: "hidden" }}>
      <Container>
        <Row
          style={{ padding: "20px", marginTop: "10%" }}
          justify="space-between"
        >
          <Col xs={11} sm={11} md={3} lg={3}>
            <div className={classes.innerdiv}>
              <div className={classes.circle}>
                <img className={classes.img} alt="" src={Chart} />
                <span className={classes.head}>Research</span>
              </div>
            </div>

            <br />
            <p className={classes.text}>
              You have an amazing idea that needs adequate evaluation. Tekonika
              will help you explore your idea potential can providing a
              professional service for you in prototyping the idea through user
              interface and user experience design
            </p>
          </Col>
          <Col xs={11} sm={11} md={3} lg={3}>
            <div className={classes.innerdiv}>
              <div className={classes.circle}>
                <img className={classes.img} src={Javascript} alt="" />

                <span className={classes.head}>Design</span>
              </div>
            </div>

            <br />
            <p className={classes.text}>
              Front-end development of your product using creative
              tools/programming language to achieve a responsive and attractive
              design for your product. We render the best service in the area of
              front-end web and mobile development.
            </p>
          </Col>
          <Col xs={11} sm={11} md={3} lg={3}>
            <div className={classes.innerdiv}>
              <div className={classes.circle}>
                <img className={classes.img} alt="" src={Node} />
                <span className={classes.head}>Develop</span>
              </div>
            </div>

            <br />
            <p className={classes.text}>
              After prototyping and front-end design, we proceed to the
              development of the product internal structure and control features
              which include the database. We use the most powerful back-end
              framework to achieve this.
            </p>
          </Col>
        </Row>
      </Container>

      {/* <Slider /> */}
      <Clients />
      <Linear />
      <Card />
      <EndSection />
    </div>
  );
};
export default MidSection;
