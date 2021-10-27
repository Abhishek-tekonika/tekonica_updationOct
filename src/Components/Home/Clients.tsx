import React from "react";
import { Col, Row, Container } from "../Common/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Stigasoft from "./clients-logo/stigasoft.png";
import Sourcefuse from "./clients-logo/sourcefuse.png";
import bikebazaar from "./clients-logo/bikebazaar.svg";
import wheelsemi from "./clients-logo/wheelsemi.png";
import wiziq from "./clients-logo/wiziq-logo.png";
import yuno from "./clients-logo/yuno_logo.png";
import whitehilllogo from "./clients-logo/whitehilllogo.png";
import hiyatri from "./clients-logo/HiYatriLogo.png";
import aggio from "./clients-logo/aggio.png";
import "./Clients.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));
const Clients = (): JSX.Element => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <>
        <div
          className="card-head"
          style={{
            backgroundColor: "#5f61ab",
            padding: "1% 0% 1% 0%",
            margin: "6% 0% 6% 0%",
          }}
        >
          <h2 className="head-journey">Our Journey so far</h2>
          <h3 className="headline">
            Since 2018, we have helped a number of companies convert their
            digital ideas into engaging, feature rich apps
          </h3>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6 col-xs-6">
              <img
                className="image-logo img-wheel"
                src={wheelsemi}
                alt="wheelsemi"
              />
            </div>
            <div className="col-md-4 col-sm-6 col-xs-6">
              <img
                className="image-logo img-2 imgfuse"
                src={Sourcefuse}
                alt="sourcefuse"
              />
            </div>
            <div className="col-md-4 col-sm-6 col-xs-6">
              <img
                className="image-logo img-bike"
                src={bikebazaar}
                alt="bikebazaar"
              />
            </div>
          </div>
          <div className="row img-space"></div>
          <div className="row img-space1">
            <div className="col-md-4 col-sm-6 col-xs-6 col-sm-12">
              <img
                className="image-logo img-aggio img-2"
                src={aggio}
                alt="aggio"
              />
            </div>
            <div className="col-md-4 col-sm-6 col-xs-6 col-sm-12">
              <img
                className="image-logo stiga"
                src={Stigasoft}
                alt="stigasoft"
                style={{}}
              />
            </div>

            <div className="col-md-4 col-sm-6 col-xs-6 col-sm-12">
              <img
                className="image-logo-1 img-2 imgwhite img-3"
                style={{}}
                src={whitehilllogo}
                alt="yuno"
              />
            </div>
          </div>
        </div>

        {/* <Container className="carousel">
        <Row className="tech" justify="center">
          <Col xs={4} sm={6} md={4} lg={4} >
            <img src={Stigasoft} width="35%" alt="" className="slider"/>
          </Col>
          <Col xs={4} sm={6} md={4} lg={4} >
            <img src={Sourcefuse} width="45%" alt="" className="slider"/>
          </Col>
          <Col xs={4} sm={6} md={4} lg={4} >
            <img src={bikebazaar} width="45%" alt="" className="slider"/>
          </Col>

          <Col xs={4} sm={6} md={4} lg={4} >
            <img src={whitehilllogo} width="35%" alt="" className="slider"/>
          </Col>

          <Col xs={4} sm={6} md={4} lg={4} >
            <img src={hiyatri} width="65%" alt="" className=" imgyatri" />
          </Col>
          <Col xs={4} sm={6} md={4} lg={4} >
            <img src={aggio} width="45%" alt="" className=" imgagg"  />
          </Col>
          <Col xs={4} sm={6} md={4} lg={4} >
            <img src={wheelsemi} width="45%" alt="" className="slider"/>
          </Col>
        </Row>
      </Container> */}
      </>
    </React.Fragment>
  );
};
export default Clients;
