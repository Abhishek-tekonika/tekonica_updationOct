import React from "react";
import { Row, Col } from "../../Common/Grid";
import { makeStyles } from "@material-ui/core/styles";
import testimonyImg from "../../../assets/project-testimony.jpg";
import ImageComparison from "../ImageComparison/ImageComparison";
import useMediaQuery from "@material-ui/core/useMediaQuery";


const useStyle = makeStyles((theme) => ({
  text: {
    color: "#0085F2",
  },
  bodyText: {
    lineHeight: "30px",
  },
  testimonyTextDiv :{
    background: '#5f61ab', 
    height: '100%', 
    color: 'white', 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent:'space-around', 
    padding: '0 20% 0 20%',
  }
}));
const MidSectiontion = (): JSX.Element => {
  const classes = useStyle();
  return (
    <React.Fragment>
        <div style={{width: '100%'}}>
          <Row justify="space-between" >
            <Col xs={12} sm={12} md={6} lg={6} >
              <div style={{background:'#d9d9d9', display: 'flex', justifyContent:'center'}}>
                <img src={testimonyImg} alt="" width="90%" style={{padding: "5% 0 5% 0"}} />
              </div>
            </Col>
            <Col lg={6} xs={12} md={6} sm={12}>
              <div className={classes.testimonyTextDiv}>
                <span style={{ fontSize: "8vh", fontWeight: "bold", paddingTop: '50px'}}>
                  We build best apps!
                </span>
                <br />
                <span className={classes.bodyText}>
                  Being the best website and web App development company we strive
                  to deliver world-class solutions and a better user experience to
                  our customers. Our high-quality service is the reason why our
                  clients keep coming back to us.</span>
                  <br />
                  <br />
                  <span className={classes.bodyText}>
                  We use high-end technologies to create customized web services to
                  get your brand online. Focusing on process-driven development, our
                  highly dedicated and skilled developers deliver solutions that
                  will help you in catering your customers’ unique requirements
                  effectively.</span>
                  <br /> <br />
                  <br />
                  <span className={classes.bodyText}>
                  We follow the same strategy for every start-up, be it a medium or
                  a large scale organization, to understand how the user interacts
                  and focus on implementing the best tactics to ensure maximum
                  engagement and satisfaction to the user. With years of experience
                  in providing customized web development services, we have
                  successfully managed to deliver tons of projects in multiple
                  industries.</span>
                  <br /> <br />
                  <br />
                  <span className={classes.bodyText} style={{paddingBottom: '150px'}}>
                  Our qualified developers are expert professionals in HTML5, CSS3,
                  ,JavaScript,TypeScript. We ensure you get a top-quality
                  website and web apps in the shortest time possible.
                  </span>
              </div>
            </Col>
          </Row>
        </div>
      <ImageComparison />
    </React.Fragment>
  );
};

export default MidSectiontion;
