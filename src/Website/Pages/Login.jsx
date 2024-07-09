import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'

function Login() {

  const redirect = useNavigate()

  const [fromvalue,setfromvalue] = useState({
    email:"",
    password:""
  })

  const getchange=(e)=>{
    setfromvalue({...fromvalue,[e.target.name]:e.target.value})
    console.log(fromvalue)
  }

  const submithandle = async(e)=>{
    e.preventDefault()

    const {email,password}= fromvalue

    if(!email.trim() || !password.trim()){
      toast.error("EMAIL AND PASSWORD IS REQUIRED")
      return false
    }


    try {
        const res = await axios.get(`http://localhost:3000/user?email=${email}`)
    
        console.log(res.data)

        if(res.data.length === 0){
          toast.error("EMAIL IS REQUIRED")
        }

        const user = res.data[0]

        if(user.password !== password){
          toast.error("PASSWORD IS REQUIRED")
          return false
        }

        if(user.status !=="unblock")
          {

            toast.error("ACCOUNT HAS BEEN BLOCKED! KINDLY CONACT")
            return false
          }

        localStorage.setItem('Uloginid',user.id)
        localStorage.setItem('Uname',user.fname)
        

        toast.success("LOGIN SUCCESSFULLY DONE :)")
        redirect("/")
    
      } catch (error) {
      console.error("ERROR OCCURED",error)
    }
  }
  return (
    <div>
        
        <div className="background2 pt-5 container-fluid">
    <div className="row pt-5 g-0 d-flex py-5 justify-content-center pt-3">
    <div className="rightsideloginform col-sm-4 p-3">
      <div className="container-fluid w-100 h-100">
        <h1 className="text-center mt-5 text-white  pt-5">Welcome to Tourist</h1>
        <div style={{overflow: 'hidden', borderRadius: 10}}>
        </div>
        <h2 className="text-center text-white  pt-5">Your Travel, Your Happiness</h2>
        <div className="container text-center">
        <h5 className="text-center text-white  pt-5">Facing Issues in Login/Contact us for support</h5>

        <NavLink to="/request" className="btn btn-primary rounded-pill mx-2  mt-3 py-2 px-4 btn-link" >Contact US</NavLink>

        </div>
      </div>
    </div>
    <div className="leftform col-sm-4 p-4">
      <div className="container-fluid">
        <h2 className="text-center text-white " style={{fontWeight: 700}}>Login</h2>
        <form onSubmit={submithandle}>
          <div style={{marginTop: '0.25rem', fontSize: '0.875rem', lineHeight: '1.25rem'}}>
            <h6 className='text-white'>Email</h6>
            <input name="email" value={fromvalue.value} onChange={getchange} className="namenpassword" type="text"  />
          </div>
          <div style={{marginTop: '0.25rem', fontSize: '0.875rem', lineHeight: '1.25rem'}}>
            <h6 className='text-white'>Password</h6>
            <input name="password" value={fromvalue.value} onChange={getchange} className="namenpassword" type="text" />
          </div>
          <div className="forgot pt-4 mb-4">
            <a className="forpassword" href="#">Forgot Password ?</a>
          </div>
          <button className="sign">Sign in</button>
        </form>
        <div className="social-message">
          <div className="line" />
          <p className="message">Login with social accounts</p>
          <div className="line" />
        </div>
        <div className="social-icons">
          <button className="icon">
          <i class="fa-brands fa-google fa-2xl"></i>  
        </button>
          <button className="icon">
          <i class="fa-brands fa-twitter fa-2xl"></i>  
          </button>
          <button className="icon">
          <i class="fa-brands fa-instagram fa-2xl"></i>  
          </button>
          <button className="icon">
          <i class="fa-brands fa-youtube fa-2xl"></i>  
          </button>
        </div>
        <p className="signup mt-4">
          Don't have an account?
          <NavLink to="/register" className="btn btn-primary rounded-pill mx-2 py-2 px-4 btn-link" >Sign Up</NavLink>
  
        </p>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Login