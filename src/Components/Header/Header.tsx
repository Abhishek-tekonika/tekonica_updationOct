import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../Common/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import tekonikaLogo from "../../assets/final-Tekonika.png";
import faceBookIcon from "../../assets/facebook-icon.svg";
import linkedinIcon from "../../assets/linkedin-icon.svg";
import closeIcon from "../../assets/close-icon.png";
import "./Header.css";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles({
  list: {
    width: 300,
    height: "100vh",
    background: "#5f61ab",
    color: "white",
    fontWeight: "bold",
  },
  menuIcon: {
    cursor: "pointer",
  },
  divider: {
    backgroundColor: "transparent",
    opacity: "0.5",
    borderBottom: "1px solid white",
    margin: "20px 10px 20px 10px",
  },
  images: {
    marginRight: "20px",
    cursor: "pointer",
  },
  closeIcon: {
    textAlign: "right",
    padding: "10px",
    cursor: "pointer",
  },
  link: {
    color: "black",
    textDecoration: "none !important",
  },
  drawerLink: {
    color: "white",
    textDecoration: "none",
  },

  pointer: {
    cursor: "pointer",
  },
});

const Header = (): JSX.Element => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const [servicesOpen, setServicesOpen] = useState<boolean>(false);

  const [active, setActive] = useState<number>(1);
  const path = useLocation().pathname;

  useEffect(() => {
    if (path === "/") setActive(1);
    else if (path === "/ui-ux-design") setActive(2);
    else if (path === "/mobile-app-dev") setActive(3);
    else if (path === "/web-app-dev") setActive(4);
    else if (path === "/case-studies") setActive(5);
    else setActive(0);
  }, [path]);

  const mobileDraweOptions = (
    <>
      <List>
        <Link className={classes.drawerLink} to="/">
          <ListItemText style={{ padding: "10px 0 0 10px" }} primary={"Home"} />
        </Link>
      </List>
      <List>
        <Link className={classes.drawerLink} to="/ui-ux-design">
          <ListItemText
            style={{ padding: "10px 0 0 10px" }}
            primary={"UI/UX Design"}
          />
        </Link>
      </List>
      <List>
        <Link className={classes.drawerLink} to="/mobile-app-dev">
          <ListItemText
            style={{ padding: "10px 0 0 10px" }}
            primary={"Mobile App Development"}
          />
        </Link>
      </List>
      <List>
        <Link className={classes.drawerLink} to="/web-app-dev">
          <ListItemText
            style={{ padding: "10px 0 0 10px" }}
            primary={"Web App Development"}
          />
        </Link>
      </List>
      {/* <List>
        <Link className={classes.drawerLink} to="/case-studies">
          <ListItemText
            style={{ padding: "10px 0 0 10px" }}
            primary={"Case Studies"}
          />
        </Link>
      </List> */}
      {/* <List>
        <Link className={classes.drawerLink} to="/request-a-quote">
          <ListItemText
            style={{ padding: "10px 0 0 10px" }}
            primary={"Start A Project"}
          />
        </Link>
      </List> */}
      <Divider className={classes.divider} />
    </>
  );

  const handleServicesItemClick = () => {
    setDrawerOpen(false);
    setServicesOpen(false);
  };

  const servicesList = (
    <>
      <List>
        <Link
          className="servicesLink"
          to="/mobile-app-dev"
          onClick={handleServicesItemClick}
        >
          <ListItemText
            style={{ padding: "5px 0 5px 25px" }}
            primary={"Mobile App Dev"}
          />
        </Link>
        <Link
          className="servicesLink"
          to="/web-app-dev"
          onClick={handleServicesItemClick}
        >
          <ListItemText
            style={{ padding: "5px 0 5px 25px" }}
            primary={"Web App Dev"}
          />
        </Link>
        <Link
          className="servicesLink"
          to="/ui-ux-design"
          onClick={handleServicesItemClick}
        >
          <ListItemText
            style={{ padding: "5px 0 5px 25px" }}
            primary={"UI/UX Design"}
          />
        </Link>
        <Link
          className="servicesLink"
          to="/contact-us"
          onClick={handleServicesItemClick}
        >
          <ListItemText
            style={{ padding: "5px 0 5px 25px" }}
            primary={"IT outsourcing"}
          />
        </Link>
      </List>
      <Divider className={classes.divider} />
    </>
  );

  const list = (
    <div
      className={classes.list}
      role="presentation"
      onKeyDown={(): void => setDrawerOpen(false)}
    >
      <List>
        <div
          className={classes.closeIcon}
          onClick={(): void => setDrawerOpen(false)}
        >
          <img src={closeIcon} alt="" height="18" />
        </div>
      </List>
      {!matches && mobileDraweOptions}
      <List>
        <ListItemText
          className={classes.pointer}
          style={{ padding: "10px 0 0 10px" }}
          primary={"Our Services"}
          onClick={() => setServicesOpen(!servicesOpen)}
        />
        {servicesOpen && servicesList}
        <Link to="/contact-us" className="servicesLink">
          <ListItemText
            className={classes.pointer}
            style={{ padding: "10px 0 0 10px" }}
            primary={"Our Company"}
            onClick={() => setDrawerOpen(false)}
          />
        </Link>
      </List>
      <Divider className={classes.divider} />
      <List>
        <ListItem>
          <img src={faceBookIcon} alt="" className={classes.images} />
          <img src={linkedinIcon} alt="" className={classes.images} />
        </ListItem>
      </List>
    </div>
  );

  return (
    <Box boxShadow={3} pl={0} pr={0}>
      <Container>
        <Row
          style={{ background: "white" }}
          justify="space-between"
          alignItems="center"
        >
          <Col xs={2} sm={2} md={2} lg={2}>
            <Box bgcolor="white" color="black">
              <Link className={classes.link} to="/">
                <div style={{ padding: "5px" }}>
                  <img
                    src={tekonikaLogo}
                    height="50px"
                    width="150px"
                    alt=""
                    // style={{ marginLeft: "10px" }}
                  />
                </div>
              </Link>
            </Box>
          </Col>
          {matches ? (
            <>
              <Col xs={7} sm={7} md={8} lg={8}>
                <Row justify="space-around">
                  <Col xs={1} sm={1} md={1} lg={1}>
                    <Link className={classes.link} to="/">
                      <span
                        className={
                          active === 1
                            ? "nav-items-active nav-items"
                            : "nav-items"
                        }
                      >
                        HOME
                      </span>
                    </Link>
                  </Col>
                  <Col xs={2} sm={2} md={2} lg={2}>
                    <Link className={classes.link} to="/ui-ux-design">
                      <span
                        className={
                          active === 2
                            ? "nav-items-active nav-items"
                            : "nav-items"
                        }
                      >
                        UI/UX DESIGN
                      </span>
                    </Link>
                  </Col>
                  <Col xs={3} sm={3} md={3} lg={3}>
                    <Link className={classes.link} to="/mobile-app-dev">
                      <span
                        className={
                          active === 3
                            ? "nav-items-active nav-items"
                            : "nav-items"
                        }
                      >
                        MOBILE APP DEVELOPMENT
                      </span>
                    </Link>
                  </Col>
                  <Col xs={3} sm={3} md={3} lg={3}>
                    <Link className={classes.link} to="/web-app-dev">
                      <span
                        className={
                          active === 4
                            ? "nav-items-active nav-items"
                            : "nav-items"
                        }
                      >
                        WEB APP DEVELOPEMENT
                      </span>
                    </Link>
                  </Col>
                  {/* <Col xs={3} sm={3} md={2} lg={2}>
              <Link className={classes.link} to="/case-studies">
                <span className={active === 5 ? "nav-items-active nav-items" : "nav-items"}>CASE STUDIES</span>
              </Link>
            </Col> */}
                </Row>
              </Col>
              <Col xs={2} sm={2} md={2} lg={2}>
                <Row alignItems="center" justify="space-evenly">
                  <Link
                    style={{ textDecoration: "none" }}
                    to="/request-a-quote"
                  >
                    <Button variant="contained" className="blue-btn">
                      START A PROJECT
                    </Button>
                  </Link>
                  <React.Fragment key={"right"}>
                    <MenuIcon
                      className={classes.menuIcon}
                      onClick={() => setDrawerOpen(true)}
                    />
                    <Drawer
                      transitionDuration={800}
                      anchor={"right"}
                      open={drawerOpen}
                      onClose={(): void => setDrawerOpen(false)}
                    >
                      {list}
                    </Drawer>
                  </React.Fragment>
                </Row>
              </Col>
            </>
          ) : (
            <React.Fragment key={"right"}>
              <MenuIcon
                className={classes.menuIcon}
                onClick={() => setDrawerOpen(true)}
                // style={{ paddingRight: "25px" }}
              />
              <Drawer
                transitionDuration={800}
                anchor={"right"}
                open={drawerOpen}
                onClose={(): void => setDrawerOpen(false)}
              >
                {list}
              </Drawer>
            </React.Fragment>
          )}
        </Row>
      </Container>
    </Box>
  );
};

export default Header;
