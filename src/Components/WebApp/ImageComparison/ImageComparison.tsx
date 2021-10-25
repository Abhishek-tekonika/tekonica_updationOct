import React from "react";
import { Col, Row, Container } from "../../Common/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ImageSlider from "react-image-comparison-slider";
import FrontEnd from "../../../assets/tekonika-frontend-pic.png";
import BackEnd from "../../../assets/tekonika-backend-pic.png";

const useStyles = makeStyles((theme) => ({

  text: {
    fontSize: '30px',
    fontWeight: 'bold'
  },
  bodyText: {
    lineHeight: '25px'
  }
}))

const ImageComparison = (): JSX.Element => {

  const classes = useStyles();
  return (
    <div style={{marginBottom: '50px'}}>
      <Container>
        <Row style={{ marginTop: "5%" }} justify="space-between">
          <Col md={3} lg={3} sm={12} xs={12}>
            <span className={classes.text}>Front End Developement</span>
            <br />
            <span className={classes.bodyText}>
              We are among the best front end development company 
              We develop an interactive and attractive
              looking web application front end for you using React a framework by Facebook
              Not only React we also work with Angular 6+ a framework by Google.
              </span>
          </Col>
          <Col md={6} lg={6} sm={12} xs={12}>
            <div style={{ width: "90%", height: "120%", marginLeft:'3%' }}>
              <ImageSlider
                image1={BackEnd}
                image2={FrontEnd}
                sliderWidth={3}
                sliderColor="#5f61ab"
                handleColor="#5f61ab"
                handleBackgroundColor="white"
              />
            </div>
          </Col>
          <Col md={3} lg={3} sm={12} xs={12}>

            <span className={classes.text}> Back End Development</span>
            <br />
            <span className={classes.bodyText}>

              Users may not see your back-end code,
              but they experience the power of those snippets through the product’s functionality.
              We develop back end APIs that will communicate with your front-end.
            </span>
          </Col>
        </Row>
        <br/>
      </Container>
    </div>
  );
}
export default ImageComparison;