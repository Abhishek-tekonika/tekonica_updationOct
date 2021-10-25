import React, { useEffect } from 'react';
import Button from "@material-ui/core/Button";
import { Container, Row, Col } from '../Common/Grid';
import { useForm } from 'react-hook-form';
import {DropzoneArea} from 'material-ui-dropzone'

import "./RequestForm.css";

interface formData {
  first_name: string;
  last_name: string;
  phone: number;
  email: string;
  service_type: string;
  Budget: number;
  description: string;
}

const RequestForm = (): JSX.Element => {

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  },[])

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data: formData) => {
    console.log(data);
  };

  return (
    <Container className="request-container">
      <Row justify="center">
        <Col xs={12} md={11} lg={10} xl={10}>
          <Row className="mt-150" justify="center" alignItems="center">
            <h5 className="request-container-heading1">Available booking space</h5>
          </Row>
          <Row className="mb-50" justify="center" alignItems="center">
            <h2 className="request-container-heading2">Have a project in mind?</h2>
          </Row>
          <Row className="mb-150" justify="center">
            <Col xs={12} md={11} lg={9} xl={9}>
              <Container className="request-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Row justify="space-around" >
                    <Col xs={12} md={12} lg={6} xl={6}>
                      <label htmlFor="first_Name">First Name*</label> <br />
                      <input 
                        name="first_name" 
                        ref={register({
                          required: "Required",
                        })} 
                      />
                      <br />
                      <span className="error">{errors.first_name && errors.first_name.message}</span>
                    </Col>
                    <Col xs={12} md={12} lg={6} xl={6}>
                      <label htmlFor="last_name">Last Name*</label> <br />
                      <input 
                        name="last_name" 
                        ref={register({
                          required: "Required",
                        })} 
                      />
                      <br />
                      <span className="error">{errors.last_name && errors.last_name.message}</span>
                    </Col>
                  </Row>
                  <Row justify="space-around" className="mt-30">
                    <Col xs={12} md={12} lg={6} xl={6}>
                      <label htmlFor="phone">Phone*</label> <br />
                      <input 
                        name="phone" 
                        ref={register({
                          required: "Required",
                          pattern:{
                            value: /^[1-9]{1}[0-9]{9}$/,
                            message: "invalid phone number"
                          }
                        })} 
                      />
                      <br />
                      <span className="error">{errors.phone && errors.phone.message}</span>
                    </Col>
                    <Col xs={12} md={12} lg={6} xl={6}>
                      <label htmlFor="email">Email*</label> <br />
                      <input
                        name="email"
                        ref={register({
                          required: "Required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "invalid email address"
                          }
                        })}
                      />
                      <br />
                      <span className="error">{errors.email && errors.email.message}</span>
                    </Col>
                  </Row>
                  <Row justify="space-around" className="mt-30">
                    <Col xs={12} md={12} lg={6} xl={6}>
                      <label htmlFor="service_type">Service Type*</label> <br />
                      <input 
                        name="service_type" 
                        ref={register({
                          required: "Required",
                        })} 
                      />
                      <br />
                      <span className="error">{errors.service_type && errors.service_type.message}</span>
                    </Col>
                    <Col xs={12} md={12} lg={6} xl={6}>
                      <label htmlFor="budget">Budget*</label> <br />
                      <input 
                        name="budget" 
                        ref={register({
                          required: "Required",
                        })} 
                      />
                      <br />
                      <span className="error">{errors.budget && errors.budget.message}</span>
                    </Col>
                  </Row>
                  <Row justify="space-around" className="mt-30">
                    <Col xs={12} md={12} lg={12} xl={12}>
                      <label htmlFor="description">Elaborate on your request*</label> <br />
                      <textarea
                        name="description"
                        ref={register({
                          required: "Required",
                        })}
                      />
                      <br />
                      <span className="error">{errors.description && errors.description.message}</span>
                    </Col>
                  </Row>
                  <Row justify="space-around" className="mt-30">
                    <Col xs={12} md={12} lg={12} xl={12}>
                      <label htmlFor="attach">File</label> <br />
                      <div style={{width:'95%'}}>
                        <DropzoneArea 
                          acceptedFiles={['.png', '.jpeg', '.jpg', '.pdf', 'xlsx', '.doc', '.xls', '.docx']}
                        />
                        <p className="dropzone-text">Accepted file types: jpg, doc, docx, xls, xlsx, png, pdf.</p>
                      </div>
                    </Col>
                  </Row>
                  <Row justify="space-around" className="mt-30">
                    <Button variant="contained" className="blue-btn" type="submit">Submit Request</Button>
                  </Row>
                </form>
              </Container>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default RequestForm;