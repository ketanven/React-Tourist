import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import axios from "axios";

function Home() {
  useEffect(()=>{
    fetch()
  })

  const [data,setdata] = useState()
  const [data1, setpackage] = useState()
  const[data2,setservices] = useState()
  const [data3,setguide] = useState()


  const fetch = async()=>{
    const res = await axios.get('http://localhost:3000/Addpackage')
    const res1 = await axios.get('http://localhost:3000/client')
    const res2 = await axios.get('http://localhost:3000/services')
    const res3 = await axios.get('http://localhost:3000/guide')



    console.log(res.data)
    setpackage(res.data)
    setdata(res1.data)
    setservices(res2.data)
    setguide(res3.data)


  }
  

  return (
    <div>
      <Header />

      <div>
        <div className="container-fluid bg-primary py-5 mb-5 hero-header">
          <div className="container py-5">
            <div className="row justify-content-center py-5">
              <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                <h1 className="display-3 text-white mb-3 animated slideInDown">
                  Enjoy Your Vacation With Us
                </h1>
                <p className="fs-4 text-white mb-4 animated slideInDown">
                "Discover Your Next Adventure: Unforgettable Journeys Await!"
                </p>
                <div className="position-relative w-75 mx-auto animated slideInDown">
                  <input
                    className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5"
                    type="text"
                    placeholder="Eg: Thailand"
                  />
                  <button
                    type="button"
                    className="btn btn-primary rounded-pill py-2 px-4 position-absolute top-0 end-0 me-2"
                    style={{ marginTop: 7 }}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-5">
              <div
                className="col-lg-6 wow fadeInUp"
                data-wow-delay="0.1s"
                style={{ minHeight: 400 }}
              >
                <div className="position-relative h-100">
                  <img
                    className="img-fluid position-absolute w-100 h-100"
                    src="img/about.jpg"
                    alt
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                <h6 className="section-title bg-white text-start text-primary pe-3">
                  About Us
                </h6>
                <h1 className="mb-4">
                  Welcome to <span className="text-primary">Tourist</span>
                </h1>
                <p className="mb-4">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.
                </p>
                <p className="mb-4">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo magna dolore erat amet
                </p>
                <div className="row gy-2 gx-4 mb-4">
                  <div className="col-sm-6">
                    <p className="mb-0">
                      <i className="fa fa-arrow-right text-primary me-2" />
                      First Class Flights
                    </p>
                  </div>
                  <div className="col-sm-6">
                    <p className="mb-0">
                      <i className="fa fa-arrow-right text-primary me-2" />
                      Handpicked Hotels
                    </p>
                  </div>
                  <div className="col-sm-6">
                    <p className="mb-0">
                      <i className="fa fa-arrow-right text-primary me-2" />5
                      Star Accommodations
                    </p>
                  </div>
                  <div className="col-sm-6">
                    <p className="mb-0">
                      <i className="fa fa-arrow-right text-primary me-2" />
                      Latest Model Vehicles
                    </p>
                  </div>
                  <div className="col-sm-6">
                    <p className="mb-0">
                      <i className="fa fa-arrow-right text-primary me-2" />
                      150 Premium City Tours
                    </p>
                  </div>
                  <div className="col-sm-6">
                    <p className="mb-0">
                      <i className="fa fa-arrow-right text-primary me-2" />
                      24/7 Service
                    </p>
                  </div>
                </div>
                <a className="btn btn-primary py-3 px-5 mt-2" href>
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* About End */}

        {/* Service Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="section-title bg-white text-center text-primary px-3">
                Services
              </h6>
              <h1 className="mb-5">Our Services</h1>
            </div>

            <div className="row g-4">
              <div
                className="col-lg-12 gap-5 d-flex wow fadeInUp"
                data-wow-delay="0.1s"
              >
                {data2 &&
                  data2.map((value, index) => {
                    return (
                      <div
                        className="col-lg-3 col-sm-6 wow fadeInUp"
                        data-wow-delay="0.3s"
                      >
                        <div
                          style={{ height: 450 }}
                          className="service-item team-item"
                        >
                          <div className="overflow-hidden">
                            <img
                              style={{ minHeight: 200, width: 300 }}
                              className="img-fluid"
                              src={value.images}
                              alt
                            />
                          </div>

                          <div className="text-center p-4">
                            <h5 className="mb-2">{value.heading}</h5>
                            <p>{value.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
        {/* Service End */}
        {/* Destination Start */}
        <div className="container-xxl pt-5  destination">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="section-title bg-white text-center text-primary px-3">
                Destination
              </h6>
              <h1 className="mb-5">Popular Destination</h1>
            </div>
            <div className="row g-3">
              <div className="col-lg-7 col-md-6">
                <div className="row g-3">
                  <div
                    className="col-lg-12 col-md-12 wow zoomIn"
                    data-wow-delay="0.1s"
                  >
                    <a
                      className="position-relative d-block overflow-hidden"
                      href
                    >
                      <img
                        className="img-fluid"
                        src="img/destination-1.jpg"
                        alt
                      />
                      <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                        30% OFF
                      </div>
                      <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                        Thailand
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-lg-6 col-md-12 wow zoomIn"
                    data-wow-delay="0.3s"
                  >
                    <a
                      className="position-relative d-block overflow-hidden"
                      href
                    >
                      <img
                        className="img-fluid"
                        src="img/destination-2.jpg"
                        alt
                      />
                      <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                        25% OFF
                      </div>
                      <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                        Malaysia
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-lg-6 col-md-12 wow zoomIn"
                    data-wow-delay="0.5s"
                  >
                    <a
                      className="position-relative d-block overflow-hidden"
                      href
                    >
                      <img
                        className="img-fluid"
                        src="img/destination-3.jpg"
                        alt
                      />
                      <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                        35% OFF
                      </div>
                      <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                        Australia
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-5 col-md-6 wow zoomIn"
                data-wow-delay="0.7s"
                style={{ minHeight: 350 }}
              >
                <a
                  className="position-relative d-block h-100 overflow-hidden"
                  href
                >
                  <img
                    className="img-fluid position-absolute w-100 h-100"
                    src="img/destination-4.jpg"
                    alt
                    style={{ objectFit: "cover" }}
                  />
                  <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                    20% OFF
                  </div>
                  <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                    Indonesia
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Destination Start */}

        {/* Package Start */}

        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="section-title bg-white text-center text-primary px-3">
                Packages
              </h6>
              <h1 className="mb-5">Awesome Packages</h1>
            </div>
            <div className="row g-4 justify-content-center">
              {data1 &&
                data1.map((value, index) => {
                  return (
                    <div
                      className="col-lg-4 col-md-6 wow fadeInUp"
                      data-wow-delay="0.1s"
                    >
                      <div style={{ height: 600 }} className="package-item">
                        <div className="overflow-hidden">
                          <img
                            style={{ height: 200, width: 400 }}
                            className="img-fluid"
                            src={value.img_url}
                            alt
                          />
                        </div>
                        <div className="d-flex border-bottom">
                          <small className="flex-fill text-center border-end py-2">
                            <i className="fa fa-map-marker-alt text-primary me-2" />
                            {value.location}
                          </small>
                          <small className="flex-fill text-center border-end py-2">
                            <i className="fa fa-calendar-alt text-primary me-2" />
                            {value.days}
                          </small>
                          <small className="flex-fill text-center py-2">
                            <i className="fa fa-user text-primary me-2" />
                            {value.person}
                          </small>
                        </div>
                        <div className="text-center p-4">
                          <h3 className="mb-0">${value.price}</h3>
                          <div className="mb-3">
                            <small className="fa fa-star text-primary" />
                            <small className="fa fa-star text-primary" />
                            <small className="fa fa-star text-primary" />
                            <small className="fa fa-star text-primary" />
                            <small className="fa fa-star text-primary" />
                          </div>
                          <p>{value.desc}</p>
                          <div className="d-flex justify-content-center mb-2">
                            <a
                              href="#"
                              className="btn btn-sm btn-primary px-3 border-end"
                              style={{ borderRadius: "30px 0 0 30px" }}
                            >
                              Read More
                            </a>
                            <a
                              href="#"
                              className="btn btn-sm btn-primary px-3"
                              style={{ borderRadius: "0 30px 30px 0" }}
                            >
                              Book Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        {/* Package End */}

        {/* Booking Start */}
        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="container">
            <div className="booking p-5">
              <div className="row g-5 align-items-center">
                <div className="col-md-6 text-white">
                  <h6 className="text-white text-uppercase">Booking</h6>
                  <h1 className="text-white mb-4">Online Booking</h1>
                  <p className="mb-4">
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                    Aliqu diam amet diam et eos. Clita erat ipsum et lorem et
                    sit.
                  </p>
                  <p className="mb-4">
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                    Aliqu diam amet diam et eos. Clita erat ipsum et lorem et
                    sit, sed stet lorem sit clita duo justo magna dolore erat
                    amet
                  </p>
                  <a className="btn btn-outline-light py-3 px-5 mt-2" href>
                    Read More
                  </a>
                </div>
                <div className="col-md-6">
                  <h1 className="text-white mb-4">Book A Tour</h1>
                  <form>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control bg-transparent"
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
                            className="form-control bg-transparent"
                            id="email"
                            placeholder="Your Email"
                          />
                          <label htmlFor="email">Your Email</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div
                          className="form-floating date"
                          id="date3"
                          data-target-input="nearest"
                        >
                          <input
                            type="text"
                            className="form-control bg-transparent datetimepicker-input"
                            id="datetime"
                            placeholder="Date & Time"
                            data-target="#date3"
                            data-toggle="datetimepicker"
                          />
                          <label htmlFor="datetime">Date &amp; Time</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <select
                            className="form-select bg-transparent"
                            id="select1"
                          >
                            <option value={1}>Destination 1</option>
                            <option value={2}>Destination 2</option>
                            <option value={3}>Destination 3</option>
                          </select>
                          <label htmlFor="select1">Destination</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <textarea
                            className="form-control bg-transparent"
                            placeholder="Special Request"
                            id="message"
                            style={{ height: 100 }}
                            defaultValue={""}
                          />
                          <label htmlFor="message">Special Request</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button
                          className="btn btn-outline-light w-100 py-3"
                          type="submit"
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Booking Start */}
        {/* Process Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div
              className="text-center pb-4 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <h6 className="section-title bg-white text-center text-primary px-3">
                Process
              </h6>
              <h1 className="mb-5">3 Easy Steps</h1>
            </div>
            <div className="row gy-5 gx-4 justify-content-center">
              <div
                className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="position-relative border border-primary pt-5 pb-4 px-4">
                  <div
                    className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                    style={{ width: 100, height: 100 }}
                  >
                    <i className="fa fa-globe fa-3x text-white" />
                  </div>
                  <h5 className="mt-4">Choose A Destination</h5>
                  <hr className="w-25 mx-auto bg-primary mb-1" />
                  <hr className="w-50 mx-auto bg-primary mt-0" />
                  <p className="mb-0">
                    Tempor erat elitr rebum clita dolor diam ipsum sit diam amet
                    diam eos erat ipsum et lorem et sit sed stet lorem sit
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="position-relative border border-primary pt-5 pb-4 px-4">
                  <div
                    className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                    style={{ width: 100, height: 100 }}
                  >
                    <i className="fa fa-dollar-sign fa-3x text-white" />
                  </div>
                  <h5 className="mt-4">Pay Online</h5>
                  <hr className="w-25 mx-auto bg-primary mb-1" />
                  <hr className="w-50 mx-auto bg-primary mt-0" />
                  <p className="mb-0">
                    Tempor erat elitr rebum clita dolor diam ipsum sit diam amet
                    diam eos erat ipsum et lorem et sit sed stet lorem sit
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="position-relative border border-primary pt-5 pb-4 px-4">
                  <div
                    className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                    style={{ width: 100, height: 100 }}
                  >
                    <i className="fa fa-plane fa-3x text-white" />
                  </div>
                  <h5 className="mt-4">Fly Today</h5>
                  <hr className="w-25 mx-auto bg-primary mb-1" />
                  <hr className="w-50 mx-auto bg-primary mt-0" />
                  <p className="mb-0">
                    Tempor erat elitr rebum clita dolor diam ipsum sit diam amet
                    diam eos erat ipsum et lorem et sit sed stet lorem sit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Process Start */}
        {/* Team Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="section-title bg-white text-center text-primary px-3">
                Travel Guide
              </h6>
              <h1 className="mb-5">Meet Our Guide</h1>
            </div>
            <div className="row g-4">
              {data3 &&
                data3.map((value, index) => {
                  return (
                    <div
                      className="col-lg-3 col-md-6 wow fadeInUp"
                      data-wow-delay="0.1s"
                    >
                      <div style={{ height: 350 }} className="team-item">
                        <div className="overflow-hidden">
                          <img
                            style={{ height: 200 }}
                            className="img-fluid"
                            src={value.images}
                            alt
                          />
                        </div>
                        <div
                          className="position-relative d-flex justify-content-center"
                          style={{ marginTop: "-19px" }}
                        >
                          <a className="btn btn-square mx-1" href>
                            <i className="fab fa-facebook-f" />
                          </a>
                          <a className="btn btn-square mx-1" href>
                            <i className="fab fa-twitter" />
                          </a>
                          <a className="btn btn-square mx-1" href>
                            <i className="fab fa-instagram" />
                          </a>
                        </div>
                        <div className="text-center p-4">
                          <h5 className="mb-0">{value.fullname}</h5>
                          <small>{value.designation}</small>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        {/* Team End */}
        {/* Testimonial Start */}
        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="container">
            <div className="text-center">
              <h6 className="section-title bg-white text-center text-primary px-3">
                Testimonial
              </h6>
              <h1 className="mb-5">Our Clients Say!!!</h1>
            </div>

            <div className="container-xxl wow fadeInUp" data-wow-delay="0.1s">
              <div className="container">
               {
                data && data.map((value,index)=>{
                  return(
                    <div>
                    <div style={{border:"1px green solid"}} className="active  rounded-3 mb-3 text-center wow fadeInUp" data-wow-delay="0.1s">
                      <img
                        src={value.images}
                        alt="avatar"
                        className="rounded-circle pt-3 shadow-1-strong mb-4"
                        style={{ height:"170px", width: "150px" }}
                      />
                      <div className="row d-flex justify-content-center">
                        <div class="col py-3" lg="8">
                          <h5 className="mb-3">{value.name}</h5>
                          <p>{value.location}</p>
                          <p className="text-muted">{value.description}</p>
                          
                        </div>
                      </div>
                      <ul className="list-unstyled d-flex justify-content-center text-warning mb-0"></ul>
                    </div>
                  </div>
                  )
                })
               }
              </div>
            </div>

            {/* <Carousel>
      <Carousel.Item>
            
            {
              data && data.map((value,index)=>{
                return(
                  <div style={{height: 250}}  className="owl-stage-outer bg-white text-center border p-4">
                  <img
                 
                    className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
                    src={value.images}
                    style={{ width: 80, height: 80 }}
                  />

            <Carousel.Caption>
          <h5 className="mb-0">{value.name}</h5>
          <p>{value.location}</p>
       
             
                  <p className="mb-0">
                    {value.description}
                  </p>
                  </Carousel.Caption>
                </div>
                )
              })
            }
            
            
           



          </Carousel.Item>
          </Carousel> */}
          </div>
        </div>
        {/* Testimonial End */}
      </div>

      <Footer />
    </div>
  );
}

export default Home;
