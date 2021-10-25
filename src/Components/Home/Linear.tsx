import React from "react";
import  "./linear.css";
// import { Col, Row, Container } from "../Common/Grid";
import coding from "./clients-logo/coding.png";
import computer from "./clients-logo/computer.png";
import planning from "./clients-logo/planning.png";
import notes from "./clients-logo/notes.png";
import deployment from "./clients-logo/wifi-signal.png";
import { Link } from "react-router-dom";
import { isWhiteSpaceLike } from "typescript";
import webapp from './clients-logo/webapp.png';




const Linear = () => {
  return (
    <>
     {/* <div className="container-fluid" style={{marginTop:"100px",background: '#d9d9d9'}}>
       <h2 style={{textAlign:"center", paddingTop:"50px",
      fontSize:"60px",
      fontWeight:"bolder"}}>Our Project Process</h2>
      
       <div className="slide">
           <div className="slide-x">
             <img className="icons"  src={planning}/>
             
  
             <div className="para">
             <p>
             #1.PLANNING
             </p>
             </div>
          </div>
          <div className="slide-x">
          <img className="icons"  src={notes}/>
          <div className="para">
             <p>
             #2.WIREFRAMING
             </p>
         </div>
        
        </div>
        <div className="slide-x">
        <img className="icons" src={computer}/>
        <div className="para-3">
             <p>
               #3.DESIGN
             </p>
             </div>
        
        </div>
          <div className="slide-x">
              <img className="icons" src={coding}/>
              <div className="para-3">
             <p>
              #4.CODING
             </p>
             </div>
      </div>
        <div className="slide-x">
        <img className="icons" src={deployment}/>
        <div className="para">
             <p>
              #5.DEPLOYMENT
             </p>
             </div>
      </div>
          </div>
        
         <div className="container">
          <div className="row">
            <div className="col-xs-11 col-md-4">
              <div className="head1">
            <h5>We follow a 5 step process for every project
                   guiding our clients directly along the way.
               </h5>
               </div>
            </div>
            <div className="col-xs-11 col-md-8">
            <div className="head2">
            <p>Every project we work on follows a five-step software development process directly involving our clients.
                 We give final approval for all steps of the process to our clients,meaning befaut moving on to the next step we do a client review and get 
                 sign off to procedd to the following step.As we more through our process we are continually testing with our QA department 
                 to ensure all requirements abd functionality are working as planned.
                 </p>
                 </div>
            </div>
          </div>
        
       </div>
    </div>  */}
     
    <div className="container-top" style={{marginTop:"100px",background: '#d9d9d9'}}>
      <div className="row">
        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}} className="col-md-12">
        <div className="heading">
          <h3 style={{fontWeight:'bold'}}>Web Application Development Process</h3>
          </div>
          <div className="paragraph">
          <p>Our custom web development services are notable for our development methods, innovative 
            technologies and excellent team. Through our special approach to architecture planning,
             we achieve the right balance between front-end and back-end parts, making them both viable 
             and reliable.Nowadays web development solutions have lots of perspectives to serve business 
             needs.</p>
          </div>
          <div>
          <img src={webapp} className="webapp-img" alt="webapp" />
          </div>
         
        </div>
      </div>
    </div>
</>
  );
}

export default Linear;