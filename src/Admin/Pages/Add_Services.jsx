import React, { useState } from "react";
import Aheader from "../Components/Aheader";
import Afooter from "../Components/Afooter";
import axios from "axios";

function Add_Services() {
  const [fromvalue, setfromvalue] = useState({
    id: "",
    images: "",
    heading: "",
    description: "",
  });

  const changehanlde = (e) => {
    setfromvalue({
      ...fromvalue,
      id: new Date().getTime().toString(),
      [e.target.name]: e.target.value,
    });
    console.log(fromvalue);
  };

  const submithandle = async (e) => {
    e.preventDefault();

    const res = await axios.post("http://localhost:3000/services", fromvalue);
    console.log(res.data);
    setfromvalue({
      id: "",
      images: "",
      heading: "",
      description: "",
    });
  };

  return (
    <div>
        
      <Aheader></Aheader>

      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="section-title bg-white text-center text-primary px-3">
          Services
        </h6>
        <h1 className="mb-5">Add Services</h1>
      </div>

      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="booking p-5">
            <div className="row g-5 align-items-center">
              <div className="col-md-12">
                <h1 className="text-white mb-4">Add Here</h1>
                <form onSubmit={submithandle}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="url"
                          onChange={changehanlde}
                          name="images"
                          value={fromvalue.images}
                          className="form-control bg-transparent"
                          id="url"
                          placeholder="Add image"
                        />
                        <label htmlFor="url">Add Url</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <select
                          onChange={changehanlde}
                          name="heading"
                          value={fromvalue.heading}
                          className="form-select bg-transparent"
                          id="select1"
                        >
                          <option value="Explore Destinations">
                            Explore Destinations
                          </option>
                          <option value="Top Attractions">
                            Top Attractions
                          </option>
                          <option value="Travel Guides">Travel Guides</option>
                          <option value="Tour Packages">Tour Packages</option>
                          <option value="Adventure Tours">
                            Adventure Tours
                          </option>
                          <option value="Cultural Experiences">
                            Cultural Experiences
                          </option>
                          <option value="Food & Dining">Food & Dining</option>
                          <option value="Accommodation Options">
                            Accommodation Options
                          </option>
                          <option value="Transportation Services">
                            Transportation Services
                          </option>
                          <option value="Special Offers">Special Offers</option>
                          <option value="Travel Blog">Travel Blog</option>
                          <option value="Customer Reviews">
                            Customer Reviews
                          </option>
                          <option value="Plan Your Trip">Plan Your Trip</option>
                          <option value="Travel Insurance">
                            Travel Insurance
                          </option>
                        </select>
                        <label>Heading</label>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          onChange={changehanlde}
                          name="description"
                          value={fromvalue.description}
                          className="form-control bg-transparent"
                          placeholder="Add Description"
                          id="message"
                          style={{ height: 100 }}
                          defaultValue={""}
                        />
                        <label htmlFor="message">Description</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-outline-light w-100 py-3"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Afooter></Afooter>
    </div>
  );
}

export default Add_Services;
