import React, { useState } from 'react'
import Aheader from '../Components/Aheader'
import Afooter from '../Components/Afooter'
import axios from 'axios'

function Add_Packages() {

  const [fromvalue,setfromvalue]=useState({

      "id":"",
      "img_url":"",
      "location":"",
      "days":"",
      "person":"",
      "price":"",
      "desc":""
  })

  const changehanlde=(e)=>{
    setfromvalue({
      ...fromvalue,
      id:new Date().getTime().toString(),
      [e.target.name]:e.target.value,
    })
    console.log(fromvalue)
  }

  const submithandle = async(e)=>{
    e.preventDefault()

    const res = await axios.post('http://localhost:3000/Addpackage',fromvalue)
    console.log(res.data)
    setfromvalue({
      "id":"",
      "img_url":"",
      "location":"",
      "days":"",
      "person":"",
      "price":"",
      "desc":""
    })


  }
  return (
    <div>
        <Aheader></Aheader>

        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="section-title bg-white text-center text-primary px-3">Packages</h6>
        <h1 className="mb-5">Add Packages</h1>
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
                    <input type="url" onChange={changehanlde} name='img_url' value={fromvalue.img_url} className="form-control bg-transparent" id="url" placeholder="Add image" />
                    <label htmlFor="url">Add Url</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <select onChange={changehanlde} name='location' value={fromvalue.location} className="form-select bg-transparent" id="select1">
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
                    <select onChange={changehanlde} name='days' value={fromvalue.days} className="form-select bg-transparent" id="select1">
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
                    <select onChange={changehanlde} name='person' value={fromvalue.person} className="form-select bg-transparent" id="select1">
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
                    <input onChange={changehanlde} name='price' value={fromvalue.price} type="number" className="form-control bg-transparent" id="price" placeholder="Total Price " />
                    <label htmlFor="email">Price</label>
                  </div>
                </div>
                
                <div className="col-12">
                  <div className="form-floating">
                    <textarea onChange={changehanlde} name='desc' value={fromvalue.desc} className="form-control bg-transparent" placeholder="Add Description" id="message" style={{height: 100}} defaultValue={""} />
                    <label htmlFor="message">Description</label>
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-outline-light w-100 py-3" type="submit">Submit</button>
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

export default Add_Packages