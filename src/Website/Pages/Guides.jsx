import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import axios from "axios";
import { NavLink } from "react-router-dom";

function Guides() {


  useEffect(()=>{
    fetch()
  })

  const [data,setdata] = useState()


  const fetch = async()=>{
    const res = await axios.get('http://localhost:3000/guide')
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
                  Guides
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
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Travel Guide
            </h6>
            <h1 className="mb-5">Meet Our Guide</h1>
          </div>
          <div className="row g-4">


            {
              data && data.map((value,index)=>{
                return(
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="team-item">
                <div className="overflow-hidden">
                  <img className="img-fluid" src={value.images} alt />
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
                )
              })
            }
            

            
            

          </div>
        </div>
      </div>




      <Footer></Footer>
    </div>
  );
}

export default Guides;
