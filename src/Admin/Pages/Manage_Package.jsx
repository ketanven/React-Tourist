import React, { useEffect, useState } from "react";
import Aheader from "../Components/Aheader";
import Afooter from "../Components/Afooter";
import axios from "axios";

function Manage_Package() {
  useEffect(() => {
    fetch();
  }, []);

  const [data, setdata] = useState();

  const fetch = async () => {
    const res = await axios.get("http://localhost:3000/Addpackage");
    console.log(res.data);
    setdata(res.data);
  };

  const deletehandle = async (id) => {
    const res = await axios.delete(`http://localhost:3000/Addpackage/${id}`);
    console.log(res.data);
  };

  const [fromvalue, setfromvalue] = useState({
    id: "",
    img_url: "",
    location: "",
    days: "",
    person: "",
    price: "",
    desc: "",
  });

  const modelhandle = async (id) => {
    const res = await axios.get(`http://localhost:3000/Addpackage/${id}`);
    console.log(res.data);
    setfromvalue(res.data);
  };


  const[editingService,seteditingService]=useState(null)
  const [editedService,seteditedService]= useState({
    id: "",
    img_url: "",
    location: "",
    days: "",
    person: "",
    price: "",
    desc: "",
  })

  function savedit(service){
    seteditedService(service)
    seteditingService(service)
  }
  const savesumbithandle=async(e)=>{
    try {
      e.preventDefault()
      await axios.put(`http://localhost:3000/Addpackage/${editingService.id}`,editedService)
      fetch()
      seteditingService(null)
      console.log("successfully")
    } catch (error) {
      console.error("error",error)
    }
  }
  

return (
    <div>
      <Aheader></Aheader>
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="section-title bg-white text-center text-primary px-3">
          Packages
        </h6>
        <h1 className="mb-5">Manage Packages</h1>
      </div>

      <div className="container-fluid ">
        <table className="table table-responsive table-hover">
          <thead className="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Location</th>
              <th scope="col">Days</th>
              <th scope="col">Person</th>
              <th scope="col">Price</th>
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
                    <td className="w-5">{value.location}</td>
                    <td>{value.days}</td>
                    <td>{value.person}</td>
                    <td>{value.price}</td>
                    <td className="w-25">{value.desc}</td>
                    <td>
                      <button
                        data-bs-toggle="modal"
                        data-bs-target="#myModal"
                        className="btn btn-info mx-2"
                        onClick={() => modelhandle(value.id)}
                      >
                        View
                      </button>
                      <button  onClick={()=>savedit(value)} className="btn btn-success mx-2">Edit</button>
                      <button
                        onClick={() => deletehandle(value.id)}
                        className="btn btn-danger mx-2"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>

        {
          editingService &&(
            <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container">
      <div className="booking p-5">
        <div className="row g-5 align-items-center">
          
          <div className="col-md-12">
            <h1 className="text-white mb-4">Add Here</h1>
            <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input type="url" name='img_url' value={editedService.img_url} onChange={(e)=>seteditedService({...editedService,img_url:e.target.value})} className="form-control bg-transparent" id="url" placeholder="Add image" />
                    <label htmlFor="url">Add Url</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <select  name='location' value={editedService.location} onChange={(e)=>seteditedService({...editedService,location:e.target.value})} className="form-select bg-transparent" id="select1">
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

                <div className="col-md-6">
                  <div className="form-floating">
                    <select  name='days' value={editedService.days} onChange={(e)=>seteditedService({...editedService,days:e.target.value})} className="form-select bg-transparent" id="select1">
                      <option value="3 Days">3 Days</option>
                      <option value="5 Days">5 Days</option>
                      <option value="8 Days">8 Days</option>
                      <option value="10 Days">10 Days</option>
                      <option value="12 Days">12 Days</option>
                      <option value="20 Days">20 Days</option>
                      <option value="25 Days">25 Days</option>
                    </select>
                    <label htmlFor="select1">Days</label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-floating">
                    <select  name='person' value={editedService.person} onChange={(e)=>seteditedService({...editedService,person:e.target.value})} className="form-select bg-transparent" id="select1">
                      <option value="2 Person">2 Person</option>
                      <option value="4 Person">4 Person</option>
                      <option value="6 Person">6 Person</option>
                      <option value="8 Person">8 Person</option>
                      <option value="10 Person">10 Person</option>
                      <option value="20 Person">20 Person</option>
                    </select>
                    <label htmlFor="select1">Person</label>
                  </div>
                </div>
                <div className="col-md-6 offset-3">
                  <div className="form-floating">
                    <input  name='price' value={editedService.price} onChange={(e)=>seteditedService({...seteditedService,price:e.target.value})} type="number" className="form-control bg-transparent" id="price" placeholder="Total Price " />
                    <label htmlFor="price">Price</label>
                  </div>
                </div>
                
                <div className="col-12">
                  <div className="form-floating">
                    <textarea  name='desc' value={editedService.desc} onChange={(e)=>seteditedService({...editedService,desc:e.target.value})} className="form-control bg-transparent" placeholder="Add Description" id="message" style={{height: 100}} defaultValue={""} />
                    <label htmlFor="message">Description</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="row">
                    <div className="col-6">
                    <button className="btn btn-outline-light w-100 py-3" onClick={savesumbithandle} type="submit">Update</button>
                    </div>
                    <div className="col-6">
                    <button className="btn btn-outline-light w-100 py-3" onClick={()=>seteditingService(null)} type="submit">Cancel</button>

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
          )
        }




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
                <img className="img-fluid" src={fromvalue.img_url} alt />

                <table className="table table-responsive table-hover">
                  <tbody>
                    <tr>
                      <th scope="col">ID</th>
                      <th>:</th>
                      <th scope="row">{fromvalue.id}</th>
                    </tr>
                    <tr>
                      <th scope="col">Location</th>
                      <th>:</th>

                      <td className="w-5">{fromvalue.location}</td>
                    </tr>
                    <tr>
                      <th scope="col">Days</th>
                      <th>:</th>

                      <td>{fromvalue.days}</td>
                    </tr>
                    <tr>
                      <th scope="col">Person</th>
                      <th>:</th>

                      <td>{fromvalue.person}</td>
                    </tr>
                    <tr>
                      <th scope="col">Price</th>
                      <th>:</th>

                      <td>{fromvalue.price}</td>
                    </tr>
                    <tr>
                      <th scope="col">Description</th>
                      <th>:</th>

                      <th>{fromvalue.desc}</th>
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

export default Manage_Package;
