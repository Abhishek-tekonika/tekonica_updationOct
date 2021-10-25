import React from "react";
import { Row, Col, Container } from "../Common/Grid";
import "./Slider/Slider.css";
import { makeStyles } from "@material-ui/core/styles";
import design from "../../assets/design.svg";
import code from "../../assets/code.svg";
import ux from "../../assets/ux.svg";
import database from "../../assets/database.svg";
import { Link } from "react-router-dom";
import "./cards.css";

const useStyles = makeStyles((theme) => ({
  text: {
    color: "black",
  },
  icon: {
    height: "50px",
    marginTop: "60px",
    marginLeft: "30px",
  },
}));
const Card = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Container>
      <Row>
        <Col style={{ textAlign: "center", marginTop: "100px" }}>
          <span
            style={{
              fontSize: "5vh",
              fontWeight: "bold",
            }}
          >
            Striving to make digital technology a more beautiful tool for every
            business and individuals
          </span>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={3} lg={3}>
          <Link className="linkname" to="/mobile-app-dev">
            <div className="box-1">
              <img className={classes.icon} src={design} alt="" />
              <h3 className="text1" style={{}}>
                Mobile Apps Dev
              </h3>
              <p
                className="text2"
                style={{
                  lineHeight: "20px",
                  marginLeft: "30px",
                  marginRight: "30px",
                  marginTop: "20px",
                  textAlign: "justify",
                }}
              >
                Mobile Apps now controls users engagement over the internet.
              </p>
            </div>
          </Link>
        </Col>
        <Col xs={12} sm={12} md={3} lg={3}>
          <Link className="linkname" to="/web-app-dev">
            <div className="box-1">
              <img className={classes.icon} src={code} alt="" />
              <h3 className="text1">Web Design</h3>
              <p
                className="text2"
                style={{
                  lineHeight: "20px",
                  marginLeft: "30px",
                  marginRight: "30px",
                  marginTop: "20px",
                  textAlign: "justify",
                }}
              >
                Let us get you a converting office in the cloud.
              </p>
            </div>
          </Link>
        </Col>

        <Col xs={12} sm={12} md={3} lg={3}>
          <Link className="linkname" to="/ui-ux-design">
            <div className="box-1">
              <img className={classes.icon} alt="" src={ux} />
              <h3 className="text1">UI/UX Design</h3>
              <p
                className="text2"
                style={{
                  lineHeight: "20px",
                  marginLeft: "30px",
                  marginRight: "30px",
                  marginTop: "20px",
                  textAlign: "justify",
                }}
              >
                How your users interacts with your application matters.
              </p>
            </div>
          </Link>
        </Col>
        <Col xs={12} sm={12} md={3} lg={3}>
          <div className="box-1">
            <img alt="" src={database} className={classes.icon} />
            <h3 className="text1">Hire Developers</h3>
            <p
              className="text2"
              style={{
                lineHeight: "20px",
                marginLeft: "30px",
                marginRight: "30px",
                marginTop: "20px",
                textAlign: "justify",
              }}
            >
              We outsource our competent developers to serve you better.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Card;
