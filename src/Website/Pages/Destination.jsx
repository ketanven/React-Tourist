import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

function Destination() {

  useEffect(()=>{
    fetch()
  })

  const [data,setdata] = useState()


  const fetch = async()=>{
    const res = await axios.get('http://localhost:3000/destination')
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
            <h1 className="display-3 text-white animated slideInDown">Destination</h1>
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
  <div className="container-xxl py-5 destination">
    <div className="container">
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="section-title bg-white text-center text-primary px-3">Destination</h6>
        <h1 className="mb-5">Popular Destination</h1>
      </div>
      
      <div className="row g-4 justify-content-center">

{
  data && data.map((value,index)=>{
    return(
  <div
  className="col-lg-4 col-md-6 wow fadeInUp"
  data-wow-delay="0.1s"
>
  <div className="package-item">
    <div className="overflow-hidden">
      <img className="img-fluid" src={value.images} alt />
    </div>
    <div className="d-flex border-bottom">
      <small className="flex-fill text-center border-end py-2">
        <i className="fa fa-map-marker-alt text-primary me-2" />
        {value.location}
      </small>
      <small className="flex-fill text-center border-end py-2">
        <i className="fa fa-gift text-primary me-2" />{value.offer} OFF
      </small>
      
    </div>
    <div className="text-center p-4"> 
      <div className="mb-3">
        <small className="fa fa-star text-primary" />
        <small className="fa fa-star text-primary" />
        <small className="fa fa-star text-primary" />
        <small className="fa fa-star text-primary" />
        <small className="fa fa-star text-primary" />
      </div>
      <p>
        {value.desc}
      </p>
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
    )
  })
}



</div>



    </div>
  </div>

  <Footer></Footer>
</div>

  )
}

export default Destination