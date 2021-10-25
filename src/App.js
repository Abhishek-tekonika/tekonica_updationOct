import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './Components/Home/Home';
import Request from './Components/RequestForm/Request';
import MobileAppDev from './Components/MobileAppDev/MobileAppDev';
import Navbar from './Components/Navbar/Navbar';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import ContactUs from "./Components/ContactUs/ContactUs";
// import UiDesign from './Components/UI_upperSection/UIUpperSection';
import UiDesign from "./Components/UI_upperSection/UiUxpage";
import WebApp from "./Components/WebApp/WebApp";
import CaseStudies from "./Components/CaseStudies/CaseStudies";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Header />
      <Switch>
        <Route exact path="/web-app-dev" component ={WebApp}/>
        <Route exact path="/" component={Home} />
        <Route exact path="/request-a-quote" component={Request} />
        <Route exact path="/mobile-app-dev" component={MobileAppDev} />
        <Route exact path="/contact-us" component={ContactUs} />
        <Route exact path="/ui-ux-design" component={UiDesign} />
        <Route exact path="/case-studies" component={CaseStudies} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
