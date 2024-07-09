import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ReactOwlCarousel from "react-owl-carousel";
import axios from "axios";
import { NavLink } from "react-router-dom";

function Testimonial() {
  useEffect(()=>{
    fetch()
  })

  const [data,setdata] = useState()


  const fetch = async()=>{
    const res = await axios.get('http://localhost:3000/client')
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
                  Testimonial
                </h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <NavLink to="/" className="btn border btn-primary rounded-pill mx-2 py-2 px-4 border-1 text-white nav-link">
                   Home
                   </NavLink>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
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
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Testimonial;
