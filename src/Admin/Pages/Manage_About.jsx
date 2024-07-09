import React, { useEffect, useState } from 'react';
import Afooter from '../Components/Afooter';
import Aheader from '../Components/Aheader';
import axios from 'axios';

function Manage_About() {
  const [data, setData] = useState(null);
  const [editingAbout, setEditingAbout] = useState(null);
  const [editedAbout, setEditedAbout] = useState({
    id:"",
    images: "",
    heading: "",
    desc1: "",
    desc2: "",
    feature1: "",
    feature2: "",
    feature3: "",
    feature4: "",
    feature5: "",
    feature6: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/detailsabout");
        setData(res.data[0]); 
      } catch (err) {
        console.error("Error fetching data", err);
      }
    };

    fetchData();
  }, []);

  const handleEdit = () => {
    setEditingAbout(data);
    setEditedAbout(data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedAbout((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/detailsabout/${editingAbout.id}`, editedAbout);
      setData(editedAbout);
      setEditingAbout(null);
      console.log("Successfully updated");
    } catch (error) {
      console.error("Error updating data", error);
    }
  };

  if (!data) {
    return <p>Loading...</p>; // Loading state
  }

  return (
    <div>
      <Aheader />
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="section-title bg-white text-center text-primary px-3">
          About US
        </h6>
        <h1 className="mb-5">Manage About Us</h1>
      </div>

      <div className="container">
        <table style={{ borderRadius: '15px', overflow: 'hidden' }} className="table table-info  border border-3 table-striped table-responsive table-hover">
        <tbody>
        <tr>
              <th className='text-center w-25' scope="col">ID</th>
              <th>:</th>
              <th className='text-center'>{data.id}</th>
            </tr>
            <tr>
              <th className='text-center w-25' scope="col">Images</th>
              <th>:</th>
              <th className='text-center'>{data.images}</th>
            </tr>
            <tr>
              <th className='text-center' scope="col">Heading</th>
              <th>:</th>
              <th className='text-center'>{data.heading}</th>
            </tr>
              <tr>
              <th className='text-center' scope="col">Description 1</th>
              <th>:</th>
              <th className='text-center'>{data.desc1}</th>
              </tr>
              
            <tr>
              <th className='text-center' scope="col">Description 2</th>
              <th>:</th>
              <th className='text-center'>{data.desc2}</th>
            </tr>

            <tr>
              <th  className='text-center' scope="col">Feature 1</th>
              <th>:</th>
              <th className='text-center'>{data.feature1}</th>
            </tr>
            <tr>
              <th className='text-center' scope="col">Feature 2</th>
              <th>:</th>
              <th className='text-center'>{data.feature2}</th>
            </tr>
            <tr>
              <th className='text-center' scope="col">Feature 3</th>
              <th>:</th>
              <th className='text-center'>{data.feature3}</th>
            </tr>
            <tr>
              <th className='text-center' scope="col">Feature 4</th>
              <th>:</th>
              <th className='text-center'>{data.feature4}</th>
            </tr>
            <tr>
              <th className='text-center' scope="col">Feature 5</th>
              <th>:</th>
              <th className='text-center'>{data.feature5}</th>
            </tr>
            <tr>
              <th className='text-center' scope="col">Feature 6</th>
              <th>:</th>
              <th className='text-center'>{data.feature6}</th>
            </tr>
            <tr>
                <th></th>
                <th></th>
                
                <th className='text-center'>
                <button style={{ width: 200,fontSize:25 }} className="btn btn-info m-1" onClick={() => handleEdit(data)}>
                  Edit
                </button>
              </th>
            </tr>
          </tbody>
        </table>

        {editingAbout && (
          <div className="container-xxl py-5">
            <div className="container">
              <div className="booking p-5">
                <div className="row g-5 align-items-center">
                  <div className="col-md-12">
                    <h1 className="text-white mb-4">Edit About Information</h1>
                    <form onSubmit={handleSubmit}>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <div className="form-floating">
                            <input
                              type="url"
                              name="images"
                              value={editedAbout.images}
                              onChange={handleChange}
                              className="form-control bg-transparent"
                              id="url"
                              placeholder="Add image"
                            />
                            <label htmlFor="url">Add Image URL</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-floating">
                            <input
                              type="text"
                              name="heading"
                              value={editedAbout.heading}
                              onChange={handleChange}
                              className="form-control bg-transparent"
                              id="heading"
                              placeholder="Heading"
                            />
                            <label htmlFor="heading">Heading</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-floating">
                            <input
                              type="text"
                              name="desc1"
                              value={editedAbout.desc1}
                              onChange={handleChange}
                              className="form-control bg-transparent"
                              id="desc1"
                              placeholder="Description 1"
                            />
                            <label htmlFor="desc1">Description 1</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-floating">
                            <input
                              type="text"
                              name="desc2"
                              value={editedAbout.desc2}
                              onChange={handleChange}
                              className="form-control bg-transparent"
                              id="desc2"
                              placeholder="Description 2"
                            />
                            <label htmlFor="desc2">Description 2</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-floating">
                            <input
                              type="text"
                              name="feature1"
                              value={editedAbout.feature1}
                              onChange={handleChange}
                              className="form-control bg-transparent"
                              id="feature1"
                              placeholder="Feature 1"
                            />
                            <label htmlFor="feature1">Feature 1</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-floating">
                            <input
                              type="text"
                              name="feature2"
                              value={editedAbout.feature2}
                              onChange={handleChange}
                              className="form-control bg-transparent"
                              id="feature2"
                              placeholder="Feature 2"
                            />
                            <label htmlFor="feature2">Feature 2</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-floating">
                            <input
                              type="text"
                              name="feature3"
                              value={editedAbout.feature3}
                              onChange={handleChange}
                              className="form-control bg-transparent"
                              id="feature3"
                              placeholder="Feature 3"
                            />
                            <label htmlFor="feature3">Feature 3</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-floating">
                            <input
                              type="text"
                              name="feature4"
                              value={editedAbout.feature4}
                              onChange={handleChange}
                              className="form-control bg-transparent"
                              id="feature4"
                              placeholder="Feature 4"
                            />
                            <label htmlFor="feature4">Feature 4</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-floating">
                            <input
                              type="text"
                              name="feature5"
                              value={editedAbout.feature5}
                              onChange={handleChange}
                              className="form-control bg-transparent"
                              id="feature5"
                              placeholder="Feature 5"
                            />
                            <label htmlFor="feature5">Feature 5</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-floating">
                            <input
                              type="text"
                              name="feature6"
                              value={editedAbout.feature6}
                              onChange={handleChange}
                              className="form-control bg-transparent"
                              id="feature6"
                              placeholder="Feature 6"
                            />
                            <label htmlFor="feature6">Feature 6</label>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="row">
                            <div className="col-6">
                              <button
                              onClick={handleSubmit}
                                className="btn btn-outline-light w-100 py-3"
                                type="submit"
                              >
                                Update
                              </button>
                            </div>
                            <div className="col-6">
                              <button
                                className="btn btn-outline-light w-100 py-3"
                                onClick={() => setEditingAbout(null)}
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
      </div>

      <Afooter />
    </div>
  );
}

export default Manage_About;
