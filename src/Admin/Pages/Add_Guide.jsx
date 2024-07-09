import React, { useState } from "react";
import Aheader from "../Components/Aheader";
import Afooter from "../Components/Afooter";
import axios from "axios";

function Add_Guide() {
  const [fromvalue, setfromvalue] = useState({
    id: "",
    images: "",
    fullname: "",
    designation: "",
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

    const res = await axios.post("http://localhost:3000/guide", fromvalue);
    console.log(res.data);
    setfromvalue({
      id: "",
      images: "",
      fullname: "",
      designation: "",
    });
  };

  return (
    <div>
      <Aheader></Aheader>

      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="section-title bg-white text-center text-primary px-3">
          Services
        </h6>
        <h1 className="mb-5">Add Guide</h1>
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
                        <input
                          type="text"
                          onChange={changehanlde}
                          name="fullname"
                          value={fromvalue.fullname}
                          className="form-control bg-transparent"
                          id=""
                          placeholder="Add image"
                        />
                        <label>Full Name</label>
                      </div>
                    </div>

                    <div className="col-md-6 offset-3">
                      <div className="form-floating">
                        <select
                          onChange={changehanlde}
                          name="designation"
                          value={fromvalue.designation}
                          className="form-select bg-transparent"
                          id="select1"
                        >
                          <option value="Tour Guide">Tour Guide</option>
                          <option value="Travel Consultant">
                            Travel Consultant
                          </option>
                          <option value="Travel Specialist">
                            Travel Specialist
                          </option>
                          <option value="Adventure Guide">
                            Adventure Guide
                          </option>
                          <option value="Destination Expert">
                            Destination Expert
                          </option>
                          <option value="Travel Coordinator">
                            Travel Coordinator
                          </option>
                          <option value="Tour Director">Tour Director</option>
                          <option value="Nature Guide">Nature Guide</option>
                        </select>
                        <label htmlFor="select1">Designation</label>
                      </div>
                    </div>

                    <div className="col-6 offset-3">
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

export default Add_Guide;
