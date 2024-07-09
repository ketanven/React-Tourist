import React, { useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

function Register() {
  const redirect = useNavigate()
  const [fromvalue,setfromvalue] = useState({
    id:"",
    fname:"",
    email:"",
    password:"",
    mobile:"",
    profile:"",
    status:""
  })

  const handlechange=(e)=>{
    setfromvalue({
    ...fromvalue,
    id:new Date().getTime().toString(),
    status:"unblock",
    [e.target.name]:e.target.value
  })

  console.log(fromvalue)
}

const handlesubmit = async(e)=>{
   
   
    e.preventDefault()


    if(
      
      fromvalue.fname.trim() === "" || fromvalue.email.trim() === "" || fromvalue.password.trim() === ""
      ||fromvalue.mobile.trim() === ""
      || fromvalue.profile.trim() === ""
    )
    {
      toast .error("ALL FIELDS ARE REQUIRED !! ")
     
    }
    
    const res  = await axios.post('http://localhost:3000/user',fromvalue)
    console.log(res.data)
    setfromvalue({
    id:"",
    fname:"",
    email:"",
    password:"",
    mobile:"",
    profile:"",
    status:""

    })
    redirect("/login")

  }

  return (
    <div>
        <Header></Header>

        
      <div className="background2 pt-5 container-fluid text-white">
        <div className="row pt-5 g-0  d-flex justify-content-center">
          <div className="centerform col-sm-5 p-4">
            <div className="container-fluid">
              <h2 className="text-center text-white" style={{ fontWeight: 700 }}>
                Signup
              </h2>
              <form onSubmit={handlesubmit} >
                <div
                  style={{
                    marginTop: "0.25rem",
                    fontSize: "0.875rem",
                    lineHeight: "1.25rem",
                  }}
                >
                  <h6 className="text-white">Full Name</h6>
                  <input className="namenpassword" type="text" onChange={handlechange} value={fromvalue.fname} name="fname" id />
                </div>
                <div
                  style={{
                    marginTop: "0.25rem",
                    fontSize: "0.875rem",
                    lineHeight: "1.25rem",
                  }}
                >
                  <h6 className="text-white">Email Address</h6>
                  <input onChange={handlechange} value={fromvalue.email} className="namenpassword text-white" type="email" name="email" id />
                </div>
                <div
                  style={{
                    marginTop: "0.25rem",
                    fontSize: "0.875rem",
                    lineHeight: "1.25rem",
                  }}
                >
                  <h6 className="text-white">Password</h6>
                  <input onChange={handlechange} value={fromvalue.password} className="namenpassword text-white" type="password" name="password" id />
                </div>
              
                <div
                  style={{
                    marginTop: "0.25rem",
                    fontSize: "0.875rem",
                    lineHeight: "1.25rem",
                  }}
                >
                  <h6 className="text-white">Mobile</h6>
                  <input onChange={handlechange} value={fromvalue.mobile} className="namenpassword text-white" type="tel" name="mobile" id />
                </div>
                
                <div
                  style={{
                    marginTop: "0.25rem",
                    fontSize: "0.875rem",
                    lineHeight: "1.25rem",
                  }}
                  className="pt-2"
                >
                  <h6 className="text-white">Profile Photo</h6>
                  <input
                    onChange={handlechange} value={fromvalue.profile}
                    className="namenpassword text-white"
                    type="url"
                    name="profile"
                    id=""
                  />
                </div>
                <div
                  style={{
                    marginTop: "0.25rem",
                    fontSize: "0.875rem",
                    lineHeight: "1.25rem",
                  }}
                  className="pt-2 d-flex justify-content-center"
                >
                  <input type="checkbox" name="Checkbox" id />
                  &nbsp; I agree to the Terms and Conditions
                </div>
                <div className="forgot pt-4 mb-4">
                  <a className="forpassword" href="#">
                    Forgot Password ?
                  </a>
                </div>
                <button className="sign">Sign in</button>
              </form>
              <div className="social-message">
                <div className="line" />
                <p className="message">Signin with social accounts</p>
                <div className="line" />
              </div>
              <div className="social-icons">
                <button className="icon">
                <i class="fa-brands fa-google fa-2xl"></i>  
                </button>
                <button className="icon">
                  <i className="fa-brands fa-facebook fa-2xl" />
                </button>
                <button className="icon">
                  <i className="fa-brands fa-twitter fa-2xl" />
                </button>
                <button className="icon">
                <i className="fa-brands fa-youtube fa-2xl" />
                </button>
              </div>
              <p className="signup">
                Already have an account?
                <a href="loginpage.html" className="forsignup h3">
                  Login
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Register;
