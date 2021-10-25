import React, { useEffect } from "react";
import "./request.css";
import { Container, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";

interface formData {
  first_name: string;
  last_name: string;
  phone: number;
  email: string;
  service_type: string;
  Budget: number;
  description: string;
}

const Request = (): JSX.Element => {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data: formData) => {
    console.log(data);
  };

  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <Row>
          <Col>
            <span className="txt">Quality Over Quantity</span>
          </Col>
        </Row>
        <Row>
          <Col xs lg="6">
            <h3 className="txt1">
              Start a project with Tekonika today, it’s easier than ever before.
            </h3>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <div className="timeline">
              <ul>
                <li>
                  <div className="timeline-content">
                    <h2>Project Introduction</h2>
                    <p className="p-intro">
                      Complete the application form below to tell us about your
                      project. Ensure you signed the NDA and upload necessary
                      documents.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="timeline-content">
                    <h2 style={{ marginTop: "50px" }}>Meeting Schedule</h2>
                    <p className="p-intro" >
                      You will receive an email with details on how you can
                      schedule a virtual meeting with our team to discuss your
                      project requirement.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="timeline-content">
                    <h2 style={{ marginTop: "50px" }}>Receive a Quotation</h2>
                    <p className="p-intro">
                      After the meeting, we will send you your project
                      development quotation. You need to approve our quotation
                      for us to proceed.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </Col>

          <Col className="box" xs={12} md={8}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex-row">
                <div className="flex-column">
                  <div className="form-group">
                    <label htmlFor="first_Name">First Name*</label>
                    <input
                      type="first_name"
                      className="form-control"
                      placeholder="Enter firstname"
                      name="first_name"
                      ref={register({
                        required: "Required",
                      })}
                    />
                  </div>
                  <span className="error">
                    {errors.first_name && errors.first_name.message}
                  </span>
                </div>
                <div className="flex-column">
                  <div className="form-group">
                    <label htmlFor="last_name">Last Name*</label>
                    <input
                      type="last_name"
                      className="form-control"
                      placeholder="Enter lastname"
                      name="last_name"
                      ref={register({
                        required: "Required",
                      })}
                    />
                    <span className="error">
                      {errors.last_name && errors.last_name.message}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex-row">
                <div className="flex-column">
                  <div className="form-group">
                    <label htmlFor="phone">Phone*</label>
                    <input
                      type="phone"
                      className="form-control"
                      placeholder="Enter phone no."
                      name="phone"
                      ref={register({
                        required: "Required",
                        pattern: {
                          value: /^[1-9]{1}[0-9]{9}$/,
                          message: "invalid phone number",
                        },
                      })}
                    />
                    <span className="error">
                      {errors.phone && errors.phone.message}
                    </span>
                  </div>
                </div>
                <div className="flex-column">
                  <div className="form-group">
                    <label htmlFor="email">Email*</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email"
                      name="email"
                      ref={register({
                        required: "Required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "invalid email address",
                        },
                      })}
                    />
                    <span className="error">
                      {errors.email && errors.email.message}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex-row">
                <div className="flex-column">
                  <div className="form-group">
                    <label htmlFor="service_type">Service Type*</label>
                    <input
                      type="service"
                      className="form-control"
                      name="service_type"
                      ref={register({
                        required: "Required",
                      })}
                    />
                    <span className="error">
                      {errors.service_type && errors.service_type.message}
                    </span>
                  </div>
                </div>
                <div className="flex-column">
                  <div className="form-group">
                    <label htmlFor="budget">Budget*</label>
                    <select
                      className="form-control"
                      id="exampleFormControlSelect1"
                      name="budget"
                      ref={register({
                        required: "Required",
                      })}
                    >
                      <option>$1000 to $25,000</option>
                      <option>$25000 to $50,000</option>
                      <option>$50,000 to upwards</option>
                    </select>
                    <span className="error">
                      {errors.budget && errors.budget.message}
                    </span>
                  </div>
                </div>
              </div>
              <div className="lower-form">
                <div className="form-group">
                  <label htmlFor="description">
                    Elaborate on your request*
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    style={{ height: "100px" }}
                    name="description"
                    ref={register({
                      required: "Required",
                    })}
                  ></textarea>
                  <span className="error">
                    {errors.description && errors.description.message}
                  </span>
                </div>
              </div>
              <div className="lower-form">
                <button type="submit" className="btn btn-primary">
                  Submit Request
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Request;
