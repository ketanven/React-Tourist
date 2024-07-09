import React, { useEffect, useState } from 'react'
import Afooter from '../Components/Afooter';
import Aheader from '../Components/Aheader';
import axios from 'axios';

function Manage_destination() {

    useEffect(() => {
        fetch();
      }, []);
    
      const [data, setdata] = useState();
    
      const fetch = async () => {
        const res = await axios.get("http://localhost:3000/destination");
        console.log(res.data);
        setdata(res.data);
      };
    
      const deletehandle = async (id) => {
        const res = await axios.delete(`http://localhost:3000/destination/${id}`);
        console.log(res.data);
      };
    
      const [fromvalue, setfromvalue] = useState({
        id: "",
        images: "",
        offer: "",
        location: "",
      });
    
      const modelhandle = async (id) => {
        const res = await axios.get(`http://localhost:3000/destination/${id}`);
        console.log(res.data);
        setfromvalue(res.data);
      };
    
    
      const[editingdestination,seteditingdestination]=useState(null)
      const [editeddestination,setediteddestination]= useState({
        id: "",
        images: "",
        offer: "",
        location: "",
      })
    
      function savedit(service){
        setediteddestination(service)
        seteditingdestination(service)
      }
      const savesumbithandle=async(e)=>{
        try {
          e.preventDefault()
          await axios.put(`http://localhost:3000/destination/${editingdestination.id}`,editeddestination)
          fetch()
          seteditingdestination(null)
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
          Destination
        </h6>
        <h1 className="mb-5">Manage Destination</h1>
      </div>

<div className="container-fluid ">
  <table className="table table-responsive table-hover">
    <thead className="thead-dark">
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Imgaes</th>
        <th scope="col">Offer</th>
        <th scope="col">Location</th>
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
              <td>{value.offer}</td>
              <td>{value.location}</td>
             
              <td>
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#myModal"
                  className="btn btn-info m-1"
                  onClick={() => modelhandle(value.id)}
                >
                  View
                </button>
                <button  onClick={()=>savedit(value)} className="btn btn-success m-1">Edit</button>
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

  {
    editingdestination &&(
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
              <input type="url" name='images' value={editeddestination.images} onChange={(e)=>setediteddestination({...editeddestination,images:e.target.value})} className="form-control bg-transparent" id="url" placeholder="Add image" />
              <label htmlFor="url">Add Url</label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-floating">
            <select value={editeddestination.offer} onChange={(e)=>setediteddestination({...editeddestination,offer:e.target.value})}  name='offer' className="form-select bg-transparent" id="select1">
                      <option value="20%">20%</option>
                      <option value="30%">30%</option>
                      <option value="40%">40%</option>
                      <option value="50%">50%</option>
                      <option value="60%">60%</option>
                      
                    </select>
                    <label htmlFor="select1">Offer</label>
            </div>
          </div>

        
          
          <div className="col-md-6 offset-3">
                      <div className="form-floating">
                      <select name='location' value={editeddestination.location} onChange={(e)=>setediteddestination({...editeddestination,location:e.target.value})}  className="form-select bg-transparent" id="select1">
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
            <div className="row">
              <div className="col-6">
              <button className="btn btn-outline-light w-100 py-3" onClick={savesumbithandle} type="submit">Update</button>
              </div>
              <div className="col-6">
              <button className="btn btn-outline-light w-100 py-3" onClick={()=>seteditingdestination(null)} type="submit">Cancel</button>

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
          <h4 className="modal-title">View Guide Details</h4>
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
                <th scope="col">Offer</th>
                <th>:</th>

                <td className="w-5">{fromvalue.offer}</td>
              </tr>
              
              <tr>
                <th scope="col">Location</th>
                <th>:</th>

                <th>{fromvalue.location}</th>
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
  )
}

export default Manage_destination