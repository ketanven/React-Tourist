import React, { useState } from 'react'
import Afooter from '../Components/Afooter'
import Aheader from '../Components/Aheader'
import axios from 'axios';

function Add_Testimonial() {

    const [fromvalue, setfromvalue] = useState({
        id: "",
        images: "",
        name: "",
        location: "",
        description:""
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
    
        const res = await axios.post(
          "http://localhost:3000/client",
          fromvalue
        );
        console.log(res.data);
        setfromvalue({
            id: "",
            images: "",
            name: "",
            location: "",
            description:""
        });
      };
  return (
    <div>
    
    <Aheader></Aheader>

      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="section-title bg-white text-center text-primary px-3">
          Testimonial
        </h6>
        <h1 className="mb-5">Add Testimonial</h1>
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
                          name="name"
                          value={fromvalue.name}
                          className="form-control bg-transparent"
                          id="name"
                          placeholder="Add name"
                        />
                        <label htmlFor="url">Add Name</label>
                      </div>
                    </div>

                    <div className="col-md-6 offset-3">
                      <div className="form-floating">
                        <select
                          onChange={changehanlde}
                          name="location"
                          value={fromvalue.location}
                          className="form-select bg-transparent"
                          id="select1"
                        >
                          <option value="Thailand">Thailand</option>
                          <option value="Indonesia">Indonesia</option>
                          <option value="Malaysia">Malaysia</option>
                          <option value="India">India</option>
                          <option value="Hongkong">Hongkong</option>
                          <option value="China">China</option>
                          <option value="USA">USA</option>
                          <option value="Australia">Australia</option>
                          <option value="Russia">Russia</option>
                          <option value="Dubai">Dubai</option>
                        </select>
                        <label htmlFor="select1">Location</label>
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
  )
}

export default Add_Testimonial