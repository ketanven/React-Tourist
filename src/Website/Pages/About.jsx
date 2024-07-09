import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import axios from "axios";
import { NavLink } from "react-router-dom";

function About() {
  const [data, setData] = useState(null); // Initialize state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/detailsabout");
        setData(res.data[0]); // Assuming the API returns an array with one object
      } catch (err) {
        console.error("Error fetching data", err);
      }
    };

    fetchData();
  }, []); // Fetch data on component mount

  if (!data) {
    return <p>Loading...</p>; // Loading state
  }

  return (
    <div>
      <Header />
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white animated slideInDown">
                About Us
              </h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <NavLink
                    to="/"
                    className="btn border btn-primary rounded-pill mx-2 py-2 px-4 border-1 text-white nav-link"
                  >
                    Home
                  </NavLink>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6" style={{ minHeight: 400 }}>
              <div className="position-relative h-100">
                <img
                  className="img-fluid position-absolute w-100 h-100"
                  src={data.images}
                  alt="About us"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <h6 className="section-title bg-white text-start text-primary pe-3">
                About Us
              </h6>
              <h1 className="mb-4">
                <span className="text-primary">{data.heading}</span>
              </h1>
              <p className="mb-4">{data.desc1}</p>
              <p className="mb-4">{data.desc2}</p>
              <div className="row gy-2 gx-4 mb-4">
                {[data.feature1, data.feature2, data.feature3, data.feature4, data.feature5, data.feature6].map((feature, index) => (
                  <div className="col-sm-6" key={index}>
                    <p className="mb-0">
                      <i className="fa fa-arrow-right text-primary me-2" />
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
              <a className="btn btn-primary py-3 px-5 mt-2" href="#">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container pt-4">
      <div className="row g-4">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <h5>Get In Touch</h5>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos
              </p>
              <div className="d-flex align-items-center mb-4">
                <div
                  className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
                  style={{ width: 50, height: 50 }}
                >
                  <i className="fa fa-map-marker-alt text-white" />
                </div>
                <div className="ms-3">
                  <h5 className="text-primary">Office</h5>
                  <p className="mb-0">123 Street, New York, USA</p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-4">
                <div
                  className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
                  style={{ width: 50, height: 50 }}
                >
                  <i className="fa fa-phone-alt text-white" />
                </div>
                <div className="ms-3">
                  <h5 className="text-primary">Mobile</h5>
                  <p className="mb-0">+012 345 67890</p>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div
                  className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
                  style={{ width: 50, height: 50 }}
                >
                  <i className="fa fa-envelope-open text-white" />
                </div>
                <div className="ms-3">
                  <h5 className="text-primary">Email</h5>
                  <p className="mb-0">info@example.com</p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <iframe
                className="position-relative rounded w-100 h-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                frameBorder={0}
                style={{ minHeight: 300, border: 0 }}
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
              />
            </div>
            <div
              className="col-lg-4 col-md-12 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                      />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Your Email"
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        placeholder="Subject"
                      />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Leave a message here"
                        id="message"
                        style={{ height: 100 }}
                        defaultValue={""}
                      />
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-primary w-100 py-3"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
