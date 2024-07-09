import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import axios from "axios";
import { NavLink } from "react-router-dom";

function Service() {
    useEffect(()=>{
      fetch()
    })
  
    const [data,setdata] = useState()

    const fetch = async()=>{
      const res = await axios.get('http://localhost:3000/services')
      console.log(res.data)
      setdata(res.data)
    }


  return (
    <div>
        <Header></Header>
      <div>
        <div className="container-fluid bg-primary py-5 mb-5 hero-header">
          <div className="container py-5">
            <div className="row justify-content-center py-5">
              <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                <h1 className="display-3 text-white animated slideInDown">
                  Services
                </h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                    <NavLink to="/" className="btn border btn-primary rounded-pill mx-2 py-2 px-4 border-1 text-white nav-link">
                   Home
                   </NavLink>
                    </li>
                    <h1>/</h1>
                    <li className="breadcrumb-item">
                    <NavLink to="/about" className="btn border btn-primary rounded-pill mx-2 py-2 px-4 border-1 text-white nav-link">
                   About
                   </NavLink>
                    </li>
                    
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Services
            </h6>
            <h1 className="mb-5">Our Services</h1>
          </div>
          <div className="row g-4">
    

            {
              data && data.map((value,index)=>{
                return(
                  <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div style={{height: 450}}  className="service-item team-item">
                <div className="overflow-hidden">
                  <img className="img-fluid" src={value.images} alt />
                </div>
                
                <div className="text-center p-4">
                  <h5 className="mb-2">{value.heading}</h5>
                  <p>
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
                )
              })
            }
            
            
          </div>
        </div>
      </div>

      <div className="container-xxl py-5 wow fadeInUp">
        <div className="container">
          <div className="text-center">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Testimonial
            </h6>
            <h1 className="mb-5">Our Clients Say!!!</h1>
          </div>
          <div className="position-relative">
            <div className="testimonial-item bg-white text-center border p-4">
              <img
                className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
                src="img/testimonial-1.jpg"
                style={{ width: 80, height: 80 }}
              />
              <h5 className="mb-0">John Doe</h5>
              <p>New York, USA</p>
              <p className="mb-0">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
                amet diam et eos. Clita erat ipsum et lorem et sit.
              </p>
            </div>
            <div className="testimonial-item bg-white text-center border p-4">
              <img
                className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
                src="img/testimonial-2.jpg"
                style={{ width: 80, height: 80 }}
              />
              <h5 className="mb-0">John Doe</h5>
              <p>New York, USA</p>
              <p className="mt-2 mb-0">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
                amet diam et eos. Clita erat ipsum et lorem et sit.
              </p>
            </div>
            <div className="testimonial-item bg-white text-center border p-4">
              <img
                className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
                src="img/testimonial-3.jpg"
                style={{ width: 80, height: 80 }}
              />
              <h5 className="mb-0">John Doe</h5>
              <p>New York, USA</p>
              <p className="mt-2 mb-0">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
                amet diam et eos. Clita erat ipsum et lorem et sit.
              </p>
            </div>
            <div className="testimonial-item bg-white text-center border p-4">
              <img
                className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
                src="img/testimonial-4.jpg"
                style={{ width: 80, height: 80 }}
              />
              <h5 className="mb-0">John Doe</h5>
              <p>New York, USA</p>
              <p className="mt-2 mb-0">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
                amet diam et eos. Clita erat ipsum et lorem et sit.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>

  );
}

export default Service;
