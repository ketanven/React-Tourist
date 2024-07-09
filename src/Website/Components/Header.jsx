import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Header() {
  const redirect = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem("Uloginid"); // Ensure the user ID is retrieved from localStorage
    if (userId) {
      fetchUser(userId);
    }
  }, []);

  const fetchUser = async (id) => {
    try {
      const res = await axios.get(`http://localhost:3000/user/${id}`);
      console.log(res.data);
      setData(res.data);
    } catch (error) {
      console.error("Error fetching user data", error);
    }
  };

  const logout = () => {
    localStorage.removeItem("Uloginid");
    localStorage.removeItem("Uname");
    toast.success("LOGOUT SUCCESSFULLY DONE");
    redirect("/login");
  };

  return (
    <div>
      <div className="container-fluid bg-dark px-5 d-none d-lg-block">
        <div className="row gx-0">
          <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
            <div
              className="d-inline-flex align-items-center"
              style={{ height: 45 }}
            >
              <small className="me-3 text-light">
                <i className="fa fa-map-marker-alt me-2" />
                123 Street, New York, USA
              </small>
              <small className="me-3 text-light">
                <i className="fa fa-phone-alt me-2" />
                +012 345 6789
              </small>
              <small className="text-light">
                <i className="fa fa-envelope-open me-2" />
                info@example.com
              </small>
            </div>
          </div>
          <div className="col-lg-4 text-center text-lg-end">
            <div
              className="d-inline-flex align-items-center"
              style={{ height: 45 }}
            >
              <a
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                href="#"
              >
                <i className="fab fa-twitter fw-normal" />
              </a>
              <a
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                href="#"
              >
                <i className="fab fa-facebook-f fw-normal" />
              </a>
              <a
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                href="#"
              >
                <i className="fab fa-linkedin-in fw-normal" />
              </a>
              <a
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                href="#"
              >
                <i className="fab fa-instagram fw-normal" />
              </a>
              <a
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle"
                href="#"
              >
                <i className="fab fa-youtube fw-normal" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
          <a href="#" className="navbar-brand p-0">
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
              <NavLink to="/" className="nav-item nav-link">
                Home
              </NavLink>
              <NavLink to="/about" className="nav-item nav-link">
                About
              </NavLink>
              <NavLink to="/service" className="nav-item nav-link">
                Services
              </NavLink>
              <NavLink to="/package" className="nav-item nav-link">
                Packages
              </NavLink>
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Pages
                </a>
                <div className="dropdown-menu m-0">
                  <NavLink to="/destination" className="dropdown-item">
                    Destination
                  </NavLink>
                  <NavLink to="/booking" className="dropdown-item">
                    Booking
                  </NavLink>
                  <NavLink to="/guide" className="dropdown-item">
                    Travel Guides
                  </NavLink>
                  <NavLink to="/testimonial" className="dropdown-item">
                    Testimonial
                  </NavLink>
                  <NavLink to="/404" className="dropdown-item">
                    404 Page
                  </NavLink>
                </div>
              </div>
              <NavLink to="/contact" className="nav-item nav-link">
                Contact
              </NavLink>
            </div>

            {!localStorage.getItem("Uloginid") && (
              <NavLink
                to="/register"
                className="btn btn-primary rounded-pill mx-2 py-2 px-4"
              >
                Register
              </NavLink>
            )}

            {localStorage.getItem("Uloginid") && data && (
              <NavLink
                to="/profile"
                className="nav-item nav-link d-flex align-items-center"
              >
                <img
                  src={data.profile}
                  alt="Profile"
                  className="rounded-circle"
                  style={{ width: 30, height: 30, marginRight: 10 }}
                />
                <span>{localStorage.getItem("Uname")}</span>
              </NavLink>
            )}

            {localStorage.getItem("Uloginid") ? (
              <Link className="nav-item nav-link" onClick={logout}>
                Logout
              </Link>
            ) : (
              <NavLink
                to="/login"
                className="btn btn-primary rounded-pill mx-2 py-2 px-4"
              >
                Login
              </NavLink>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
