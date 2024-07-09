import React, { useEffect, useState } from "react";
import Afooter from "../Components/Afooter";
import Aheader from "../Components/Aheader";
import axios from "axios";

function Manage_Testimonial() {
  useEffect(() => {
    fetch();
  }, []);

  const [data, setdata] = useState([]);

  const fetch = async () => {
    try {
      const res = await axios.get("http://localhost:3000/client");
      console.log(res.data);
      setdata(res.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  const deletehandle = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:3000/client/${id}`);
      console.log(res.data);
      fetch(); // Refetch data after deletion
    } catch (error) {
      console.error("Error deleting data", error);
    }
  };

  const [fromvalue, setfromvalue] = useState({
    id: "",
    images: "",
    name: "",
    location: "",
    description: ""
  });

  const modelhandle = async (id) => {
    try {
      const res = await axios.get(`http://localhost:3000/client/${id}`);
      console.log(res.data);
      setfromvalue(res.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  const [editingclient, seteditingclient] = useState(null);
  const [editedclient, seteditedclient] = useState({
    id: "",
    images: "",
    name: "",
    location: "",
    description: ""
  });

  function savedit(service) {
    seteditedclient(service);
    seteditingclient(service);
  }

  const savesumbithandle = async (e) => {
    try {
      e.preventDefault();
      await axios.put(
        `http://localhost:3000/client/${editingclient.id}`,
        editedclient
      );
      fetch();
      seteditingclient(null);
      console.log("successfully");
    } catch (error) {
      console.error("Error updating data", error);
    }
  };

  return (
    <div>
      <Aheader />
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="section-title bg-white text-center text-primary px-3">
          Testimonial
        </h6>
        <h1 className="mb-5">Manage Testimonial</h1>
      </div>

      <div className="container-fluid">
        <table className="table table-responsive table-hover">
          <thead className="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Images</th>
              <th scope="col">Name</th>
              <th scope="col">Location</th>
              <th scope="col">Description</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((value, index) => (
                <tr key={index}>
                  <th scope="row">{value.id}</th>
                  <td className="w-5">{value.images}</td>
                  <td>{value.name}</td>
                  <td>{value.location}</td>
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
              ))}
          </tbody>
        </table>

        {editingclient && (
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
                              value={editedclient.images}
                              onChange={(e) =>
                                seteditedclient({
                                  ...editedclient,
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
                            <input
                              type="text"
                              name="name"
                              value={editedclient.name}
                              onChange={(e) =>
                                seteditedclient({
                                  ...editedclient,
                                  name: e.target.value,
                                })
                              }
                              className="form-control bg-transparent"
                              id="name"
                              placeholder="Add Name"
                            />
                            <label htmlFor="name">Add Name</label>
                          </div>
                        </div>

                        <div className="col-md-6 offset-3">
                          <div className="form-floating">
                            <select
                              value={editedclient.location}
                              onChange={(e) =>
                                seteditedclient({
                                  ...editedclient,
                                  location: e.target.value,
                                })
                              }
                              name="location"
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
                            <label htmlFor="location">Location</label>
                          </div>
                        </div>

                        <div className="col-12">
                          <div className="form-floating">
                            <textarea
                              name="description"
                              value={editedclient.description}
                              onChange={(e) =>
                                seteditedclient({
                                  ...editedclient,
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
                              >
                                Update
                              </button>
                            </div>
                            <div className="col-6">
                              <button
                                className="btn btn-outline-light w-100 py-3"
                                onClick={() => seteditingclient(null)}
                                type="button"
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

              <div className="modal-body">
                <h6>Image :</h6>
                <img className="img-fluid" src={fromvalue.images} alt="client" />

                <table className="table table-responsive table-hover">
                  <tbody>
                    <tr>
                      <th scope="col">ID</th>
                      <th>:</th>
                      <th scope="row">{fromvalue.id}</th>
                    </tr>
                    <tr>
                      <th scope="col">Name</th>
                      <th>:</th>
                      <td className="w-5">{fromvalue.name}</td>
                    </tr>
                    <tr>
                      <th scope="col">Location</th>
                      <th>:</th>
                      <td className="w-5">{fromvalue.location}</td>
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

      <Afooter />
    </div>
  );
}

export default Manage_Testimonial;
