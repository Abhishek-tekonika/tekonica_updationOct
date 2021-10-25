import React from "react";
import { Col, Row } from "../../Common/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

import "./Slider.css";

const useStyles = makeStyles((theme) => ({
  p20: {
    padding: "10px",
  },
  background: {
    backgroundColor: "#5f61ab;",
    marginTop: '6%'

  },
  text: {
    color: "white",
    fontSize: "30px",
  },
  content: {
    color: "white",
    fontSize: "18px",
    lineHeight: "28px",
  },
  listItem: {
    fontSize: '20px',
  }
}));

const Slider = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <Row
        style={{ padding: "20px", marginTop: "20px" }}
        justify="space-evenly"
      >
        <Col
          className="MarginTop MarginBottom"
          xs={12}
          sm={12}
          md={5}
          lg={5}
        >
          <span className={classes.text}>
            Whether you need a coder, programmer,
              <br /> developer or designer
              <br /> – we can help.
            </span>
          <br />
          <p className={classes.content}>
            Tekonika is famous for its intelligent software and mobile
            application solutions within the short time of its operation, with
              an expensive set of competencies to meet the enterprise <br />
              need(s).
              <br />
              <br />
            <span>At Tekonika we breath solutions.</span>
          </p>
        </Col>
        <Col
          className="MarginTop MarginBottom"
          xs={12}
          sm={12}
          md={5}
          lg={5}
        >

          <Box
            boxShadow={3}
            bgcolor="background.paper"
            px="auto"
            mx="auto"
            style={{

              borderRadius: "10px",
            }}
            className={classes.p20}
          >
            <ul style={{ listStyle: 'none', padding: '10px' }}>
              <li className={classes.listItem}> 
                <div style={{display:'flex', justifyContent: 'space-between'}}>
                  <span>Mobile App Developement</span>
                  <span>85%</span>
                </div>
                <div className="progress-bar">
                  <span style={{ width: "85%" }} ></span>
                </div>
              </li>
              <li className={classes.listItem}> 
                <div style={{display:'flex', justifyContent: 'space-between'}}>
                  <span>Web App Developement</span>
                  <span>98%</span>
                </div>
                <div className="progress-bar">
                  <span style={{ width: "98%" }} ></span>
                </div>
              </li>
              <li className={classes.listItem}> 
                <div style={{display:'flex', justifyContent: 'space-between'}}>
                  <span>UI & UX Design</span>
                  <span>92%</span>
                </div>
                <div className="progress-bar">
                  <span style={{ width: "92%" }} ></span>
                </div>
              </li>
              <li className={classes.listItem}> 
                <div style={{display:'flex', justifyContent: 'space-between'}}>
                  <span>IT Outsourcing</span>
                  <span>90%</span>
                </div>
                <div className="progress-bar">
                  <span style={{ width: "90%" }} ></span>
                </div>
              </li>              
            </ul>

          </Box>

        </Col>
      </Row>

    </div>
  );
};

export default Slider;
