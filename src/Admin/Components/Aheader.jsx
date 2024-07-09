import React, { useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Aheader() {

  const redirect = useNavigate()

  useEffect(()=>{
    if(!localStorage.getItem("adminid"))
    {
        redirect("/adminlogin")
    }
})

  const logout = ()=>{
    localStorage.removeItem("adminid")
    localStorage.removeItem("aname")
    toast.success("LOGOUT SUCCESS")
    redirect("/adminlogin")
  }
  return (
    <div>
     <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
          <a href className="navbar-brand p-0">
            <h1 className="text-primary m-0">
              <i className="fa fa-map-marker-alt me-3" />
              Tourist
            </h1>
            {/* <img src="img/logo.png" alt="Logo"> */}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
            <NavLink to="/Adashboard" className="nav-item nav-link">
              Home
            </NavLink>
              
            </div>


            {(
              ()=>{
                if(localStorage.getItem("adminid"))
                  {
                  return(
                    <>
                    <Link className='nav-item nav-link'>Welcome : {localStorage.getItem('aname')}</Link>

                    </>
                  )
                }

              }
            )()}


            {(
              ()=>{
              if(localStorage.getItem("adminid")){
                return(
                  <>
                  <Link className="nav-item nav-link" onClick={logout}>Logout</Link>

                  </>
                )
              }
              else{
                return(
                  <>
                  <NavLink to="/adminlogin" className="btn btn-primary rounded-pill mx-2 py-2 px-4">
                    Login
                  </NavLink>
                  </>
                )
              }


            }
            )()}
          </div>
        </nav>
      </div>

      <div>
        <div className="container-fluid bg-primary py-5 mb-5 hero-header">
          <div className="container py-5">
            <div className="row justify-content-center py-5">
              <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                <h1 className="display-3 text-white animated slideInDown">
                  Welcome Admin
                </h1>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aheader;
