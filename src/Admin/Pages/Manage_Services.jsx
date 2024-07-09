import React, { useEffect, useState } from "react";
import Aheader from "../Components/Aheader";
import Afooter from "../Components/Afooter";
import axios from "axios";

function Manage_Services() {
  useEffect(() => {
    fetch();
  }, []);

  const [data, setdata] = useState();

  const fetch = async () => {
    const res = await axios.get("http://localhost:3000/services");
    console.log(res.data);
    setdata(res.data);
  };

  const deletehandle = async (id) => {
    const res = await axios.delete(`http://localhost:3000/services/${id}`);
    console.log(res.data);
  };

  const [fromvalue, setfromvalue] = useState({
    id: "",
    images: "",
    heading: "",
    description: "",
  });

  const modelhandle = async (id) => {
    const res = await axios.get(`http://localhost:3000/services/${id}`);
    console.log(res.data);
    setfromvalue(res.data);
  };

  const [editingService, seteditingService] = useState(null);
  const [editedService, seteditedService] = useState({
    id: "",
    images: "",
    heading: "",
    description: "",
  });

  function savedit(service) {
    seteditedService(service);
    seteditingService(service);
  }

  const savesumbithandle = async (e) => {
    try {
      e.preventDefault();
      await axios.put(
        `http://localhost:3000/services/${editingService.id}`,
        editedService
      );
      fetch();
      seteditingService(null);
      console.log("successfully");
    } catch (error) {
      console.error("error", error);
    }
  };

  return (
    <div>
      <Aheader></Aheader>
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="section-title bg-white text-center text-primary px-3">
          Services
        </h6>
        <h1 className="mb-5">Manage Services</h1>
      </div>

      <div className="container-fluid ">
        <table className="table table-responsive table-hover">
          <thead className="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Images</th>
              <th scope="col">Heading</th>
              <th scope="col">Description</th>

              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((value, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{value.id}</th>
                    <td className="w-5">{value.images}</td>
                    <td>{value.heading}</td>
                    <td>{value.description}</td>

                    <td>
                      <button
                        data-bs-toggle="modal"
                        data-bs-target="#myModal"
                        className="btn btn-info m-1"
                        onClick={() => modelhandle(value.id)}
                      >
                        View
                      </button>
                      <button
                        onClick={() => savedit(value)}
                        className="btn btn-success m-1"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deletehandle(value.id)}
                        className="btn btn-danger m-1"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>

        {editingService && (
          <div
            className="container-xxl py-5 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="container">
              <div className="booking p-5">
                <div className="row g-5 align-items-center">
                  <div className="col-md-12">
                    <h1 className="text-white mb-4">Add Here</h1>
                    <form>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <div className="form-floating">
                            <input
                              type="url"
                              name="images"
                              value={editedService.images}
                              onChange={(e) =>
                                seteditedService({
                                  ...editedService,
                                  images: e.target.value,
                                })
                              }
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
                              name="heading"
                              value={editedService.heading}
                              onChange={(e) =>
                                seteditedService({
                                  ...editedService,
                                  heading: e.target.value,
                                })
                              }
                              className="form-select bg-transparent"
                              id="select1"
                            >
                              <option value="Explore Destinations">
                                Explore Destinations
                              </option>
                              <option value="Top Attractions">
                                Top Attractions
                              </option>
                              <option value="Travel Guides">
                                Travel Guides
                              </option>
                              <option value="Tour Packages">
                                Tour Packages
                              </option>
                              <option value="Adventure Tours">
                                Adventure Tours
                              </option>
                              <option value="Cultural Experiences">
                                Cultural Experiences
                              </option>
                              <option value="Food & Dining">
                                Food & Dining
                              </option>
                              <option value="Accommodation Options">
                                Accommodation Options
                              </option>
                              <option value="Transportation Services">
                                Transportation Services
                              </option>
                              <option value="Special Offers">
                                Special Offers
                              </option>
                              <option value="Travel Blog">Travel Blog</option>
                              <option value="Customer Reviews">
                                Customer Reviews
                              </option>
                              <option value="Plan Your Trip">
                                Plan Your Trip
                              </option>
                              <option value="Travel Insurance">
                                Travel Insurance
                              </option>
                            </select>
                            <label htmlFor="select1">Heading</label>
                          </div>
                        </div>

                        <div className="col-12">
                          <div className="form-floating">
                            <textarea
                              name="description"
                              value={editedService.description}
                              onChange={(e) =>
                                seteditedService({
                                  ...editedService,
                                  description: e.target.value,
                                })
                              }
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
                          <div className="row">
                            <div className="col-6">
                              <button
                                className="btn btn-outline-light w-100 py-3"
                                onClick={savesumbithandle}
                                type="submit"
                              >
                                Update
                              </button>
                            </div>
                            <div className="col-6">
                              <button
                                className="btn btn-outline-light w-100 py-3"
                                onClick={() => seteditingService(null)}
                                type="submit"
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="modal" id="myModal">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">View Package Details</h4>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                />
              </div>

              <div className="modal-body ">
                <h6>Image :</h6>
                <img className="img-fluid" src={fromvalue.images} alt />

                <table className="table table-responsive table-hover">
                  <tbody>
                    <tr>
                      <th scope="col">ID</th>
                      <th>:</th>
                      <th scope="row">{fromvalue.id}</th>
                    </tr>
                    <tr>
                      <th scope="col">Heading</th>
                      <th>:</th>

                      <td className="w-5">{fromvalue.heading}</td>
                    </tr>
                    <tr>
                      <th scope="col">Description</th>
                      <th>:</th>

                      <td>{fromvalue.description}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Afooter></Afooter>
    </div>
  );
}

export default Manage_Services;
