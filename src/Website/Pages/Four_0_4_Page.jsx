import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { NavLink } from "react-router-dom";

function Four_0_4_Page() {
  return (
    <div>
        <Header></Header>
      <div>
        <div className="container-fluid bg-primary py-5 mb-5 hero-header">
          <div className="container py-5">
            <div className="row justify-content-center py-5">
              <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                <h1 className="display-3 text-white animated slideInDown">
                  Not Found
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
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <i className="bi bi-exclamation-triangle display-1 text-primary" />
              <h1 className="display-1">404</h1>
              <h1 className="mb-4">Page Not Found</h1>
              <p className="mb-4">
                We’re sorry, the page you have looked for does not exist in our
                website! Maybe go to our home page or try to use a search?
              </p>
              <a className="btn btn-primary rounded-pill py-3 px-5" href>
                Go Back To Home
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer
      ></Footer>
    </div>
  );
}

export default Four_0_4_Page;
