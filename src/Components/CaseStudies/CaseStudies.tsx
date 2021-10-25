import React, { useState } from "react";
import { Row } from "../Common/Grid";
import { Col } from "../Common/Grid";
import { Container } from "../Common/Grid";
import section1 from "./casestudies-images/Hero-image.png";
import section2 from "./casestudies-images/android-wallpaper.jpg";
import section3 from "./casestudies-images/business-computer-device.jpg";
import section4 from "./casestudies-images/cars-city-cross-walk.jpg";
import section5 from "./casestudies-images/firehouse.jpg";
import section6 from "./casestudies-images/LyftDrive.jpg";
import "./casestudies.css";

const CaseStudies = (): JSX.Element => {
  const [gridState, setgridState] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
    fifth: false,
    sixth: false,
  });

  return (
    <React.Fragment>
      <Container>
        <Row style={{ marginTop: "70px" }}>
          <Col md={6}>
            <h4 style={{ color: "grey", fontStyle: "italic" }}>
              We are a globally-blended team.
            </h4>
            <span
              style={{
                paddingTop: "100px",
                fontSize: "28px",
                fontWeight: "bold",
              }}
            >
              Building digital ideas,
            </span>
            <span
              style={{
                paddingTop: "100px",
                fontSize: "28px",
                color: "grey",
                fontWeight: "bold",
              }}
            >
              processes, & products.
            </span>
            <p>
              We create technology for clients doing amazing things. Here's how
              we've helped our clients achieve success through digital
              transformation.
            </p>
          </Col>
        </Row>
      </Container>
      {/* <Container> */}
      <div>
        <Row style={{ marginTop: "50px", marginBottom: "100px" }}>
          <Col
            className="cursor"
            onMouseEnter={() =>
              setgridState({
                first: true,
                second: false,
                third: false,
                fourth: false,
                fifth: false,
                sixth: false,
              })
            }
            onMouseLeave={() =>
              setgridState({
                first: false,
                second: false,
                third: false,
                fourth: false,
                fifth: false,
                sixth: false,
              })
            }
            md={4}
            sm={12}
            lg={4}
            xl={4}
          >
            <div className="dark-image">
              <img src={section1} height="500px" width="100%" />
              <div className={gridState.first ? "" : "content"}>
                {gridState.first ? (
                  ""
                ) : (
                  <div>
                    <h1 className="image-heading">Heading</h1>
                    <p className="image-para">
                      Lorem ipsum dolor sit amet, an his etiam torquatos. pri
                      ponderum tractatos ei.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </Col>
          <Col
            className="cursor"
            onMouseEnter={() =>
              setgridState({
                first: false,
                second: true,
                third: false,
                fourth: false,
                fifth: false,
                sixth: false,
              })
            }
            onMouseLeave={() =>
              setgridState({
                first: false,
                second: false,
                third: false,
                fourth: false,
                fifth: false,
                sixth: false,
              })
            }
            md={4}
            sm={12}
            lg={4}
            xl={4}
          >
            <div className="dark-image">
              <img src={section2} height="500px" width="100%" />
              <div className={gridState.second ? "" : "content"}>
                {gridState.second ? (
                  ""
                ) : (
                  <div>
                    <h1 className="image-heading">Heading</h1>
                    <p className="image-para">
                      Lorem ipsum dolor sit amet, an his etiam torquatos. pri
                      ponderum tractatos ei.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </Col>
          <Col
            className="cursor"
            onMouseEnter={() =>
              setgridState({
                first: false,
                second: false,
                third: true,
                fourth: false,
                fifth: false,
                sixth: false,
              })
            }
            onMouseLeave={() =>
              setgridState({
                first: false,
                second: false,
                third: false,
                fourth: false,
                fifth: false,
                sixth: false,
              })
            }
            md={4}
            sm={12}
            lg={4}
            xl={4}
          >
            <div className="dark-image">
              <img src={section3} height="500px" width="100%" />
              <div className={gridState.third ? "" : "content"}>
                {gridState.third ? (
                  ""
                ) : (
                  <div>
                    <h1 className="image-heading">Heading</h1>
                    <p className="image-para">
                      Lorem ipsum dolor sit amet, an his etiam torquatos. pri
                      ponderum tractatos ei.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </Col>

          <Col
            className="cursor"
            onMouseEnter={() =>
              setgridState({
                first: false,
                second: false,
                third: false,
                fourth: true,
                fifth: false,
                sixth: false,
              })
            }
            onMouseLeave={() =>
              setgridState({
                first: false,
                second: false,
                third: false,
                fourth: false,
                fifth: false,
                sixth: false,
              })
            }
            md={4}
            sm={12}
            lg={4}
            xl={4}
          >
            <div className="dark-image">
              <img src={section4} height="500px" width="100%" />
              <div className={gridState.fourth ? "" : "content"}>
                {gridState.fourth ? (
                  ""
                ) : (
                  <div>
                    <h1 className="image-heading">Heading</h1>
                    <p className="image-para">
                      Lorem ipsum dolor sit amet, an his etiam torquatos. pri
                      ponderum tractatos ei.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </Col>

          <Col
            className="cursor"
            onMouseEnter={() =>
              setgridState({
                first: false,
                second: false,
                third: false,
                fourth: false,
                fifth: true,
                sixth: false,
              })
            }
            onMouseLeave={() =>
              setgridState({
                first: false,
                second: false,
                third: false,
                fourth: false,
                fifth: false,
                sixth: false,
              })
            }
            md={4}
            sm={12}
            lg={4}
            xl={4}
          >
            <div className="dark-image">
              <img src={section5} height="500px" width="100%" />
              <div className={gridState.fifth ? "" : "content"}>
                {gridState.fifth ? (
                  ""
                ) : (
                  <div>
                    <h1 className="image-heading">Heading</h1>
                    <p className="image-para">
                      Lorem ipsum dolor sit amet, an his etiam torquatos. pri
                      ponderum tractatos ei.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </Col>
          <Col
            className="cursor"
            onMouseEnter={() =>
              setgridState({
                first: false,
                second: false,
                third: false,
                fourth: false,
                fifth: false,
                sixth: true,
              })
            }
            onMouseLeave={() =>
              setgridState({
                first: false,
                second: false,
                third: false,
                fourth: false,
                fifth: false,
                sixth: false,
              })
            }
            md={4}
            sm={12}
            lg={4}
            xl={4}
          >
            <div className="dark-image">
              <img src={section6} height="500px" width="100%" />
              <div className={gridState.sixth ? "" : "content"}>
                {gridState.sixth ? (
                  ""
                ) : (
                  <div>
                    <h1 className="image-heading">Heading</h1>
                    <p className="image-para">
                      Lorem ipsum dolor sit amet, an his etiam torquatos. pri
                      ponderum tractatos ei.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default CaseStudies;
