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

        <Container className="carousel">
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
         
          {/* <Col xs={4} sm={6} md={4} lg={4} >
            <img src={wiziq} width="45%" alt="" className="slider"/>
          </Col>
          <Col xs={4} sm={6} md={4} lg={4} >
            <img src={yuno} width="45%" alt="" className="slider"/>
          </Col> */}

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
      </Container>
      </>
    </React.Fragment>
  );
};
export default Clients;


// <div className="row">
// <div className="col-md-4 col-sm-6 col-xs-6">
//   <img
//     className="image-logo"
//     style={{ width: "42%", height: "90%" }}
//     src={wheelsemi}
//     alt="wheelsemi"
//   />
// </div>
// <div className="col-md-4 col-sm-6 col-xs-6">
//   <img
//     className="image-logo img-2"
//     src={Sourcefuse}
//     alt="sourcefuse"
//     style={{ width: "50%"  }}
//   />
// </div>
// <div className="col-md-4 col-sm-6 col-xs-6">
//   <img
//     className="image-logo img-bike"
//     style={{ width: "50%" }}
//     src={bikebazaar}
//     alt="bikebazaar"
//   />
// </div>
// </div>
// <div className="row img-space">
// <div className="col-md-4 col-sm-6 col-xs-6 col-sm-12">
//   <img
//     className="image-logo img-wiz"
//     style={{ width: "35%", paddingTop: "7%", height: "60px" }}
//     src={wiziq}
//     alt="wiziq"
//   />
// </div>
// <div className="col-md-4 col-sm-6 col-xs-6 col-sm-12">
//   <img
//     className="image-logo"
//     src={yuno}
//     alt="yuno"
//     style={{ width: "40%", height: "70%" ,marginTop:"10px"}}
//   />
// </div>
// <div className="col-md-4 col-sm-6 col-xs-6 col-sm-12">
//   <img
//     className="image-logo-1 img-2"
//     style={{ width: "45%", height: "100px", }}
//     src={whitehilllogo}
//     alt="yuno"
//   />
// </div>
// </div>
// <div className="row img-space1">
// <div className="col-md-4 col-sm-6 col-xs-6 col-sm-12">
//   <img
//     className="image-logo hi-yatri"
//     src={hiyatri}
//     alt="hiyatri"
//     style={{ width: "70%", height: "140px", marginLeft: "25px" }}
//   />
// </div>
// <div className="col-md-4 col-sm-6 col-xs-6 col-sm-12">
//   <img
//     className="image-logo"
//     src={Stigasoft}
//     alt="stigasoft"
//     style={{ height: "100%", width: "140px", paddingTop: "6%" }}
//   />
// </div>
// <div className="col-md-4 col-sm-6 col-xs-6 col-sm-12">
//   <img
//     className="image-logo img-aggio"
//     src={aggio}
//     alt="aggio"
//     style={{ height: "auto", width: "140px", marginTop:"15px" }}
//   />
// </div>
// </div>