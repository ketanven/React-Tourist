import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Alogin() {
  const redirect = useNavigate();
    useEffect(()=>{

        const  res = localStorage.getItem("adminid")
        if(res == null)
            {
                redirect('/adminlogin') 
            }
            else{
                redirect('/Adashboard')
            }
    },[])

  const [fromvalue,setfromvalue] = useState({
    email:"",
    password:"",
  })

  const getfrom = (e) =>{
    setfromvalue({...fromvalue,[e.target.name]:e.target.value})
    console.log(fromvalue)

  }

const submithandle = async(e)=>{
  e.preventDefault()
  
  const {email,password} = fromvalue;
  if(!email.trim() || !password.trim()){
    toast.error("EMAIL AND PASSWORD IS REQUIRED")
    return false
  }
  try{
    const res = await axios.get(`http://localhost:3000/admin?email=${email}`)
    console.log(res.data)
    if(res.data.length === 0){
      toast.error("Email is required")
      return false
    }

  const user = res.data[0]
  if(user.password !== password){
    toast.error("INCORRECT PASSWORD !")
    return false
  }
  
  localStorage.setItem('adminid',user.id);
  localStorage.setItem('aname',user.name);
  toast.success("LOGIN SUCCESSFULLY DONE :) ")

  setfromvalue(
    {
      email:"",
      password:""
    }
  )
  redirect("/Adashboard")
  }

  
  catch (error){
    toast.dark("ERROR DURING LOGIN")

  }
}
  return (
    <div>
  <div className="background2 pt-5 container-fluid">
  <div className="row pt-5 g-0 d-flex justify-content-center pt-3">
    <div className="rightsideloginform col-sm-4 p-3">
      <div className="container-fluid w-100 h-100">
        <h1 className="text-center mt-5 text-white  pt-5">Welcome Admin</h1>
        <div style={{overflow: 'hidden', borderRadius: 10}}>
        </div>
        <h2 className="text-center text-white  pt-5"> Tourist  Your Travel, Your Happiness</h2>
      </div>
    </div>
    <div className="leftform col-sm-4 p-4">
      <div className="container-fluid">
        <h2 className="text-center text-white " style={{fontWeight: 700}}>Login</h2>


        <form onSubmit={submithandle}>
          <div style={{marginTop: '0.25rem', fontSize: '0.875rem', lineHeight: '1.25rem'}}>
            <h6 className='text-white'>Email</h6>
            <input name='email' value={fromvalue.email} onChange={getfrom} className="namenpassword" type="text" />
          </div>
          <div style={{marginTop: '0.25rem', fontSize: '0.875rem', lineHeight: '1.25rem'}}>
            <h6 className='text-white'>Password</h6>
            <input name='password' value={fromvalue.password} onChange={getfrom} className="namenpassword" type="text" />
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
        <p className="signup">
          Don't have an account?
          <a href="signuppage.html" className="forsignup h3">Sign up</a>
        </p>
      </div>
    </div>
  </div>
</div>
      
    </div>
  )
}

export default Alogin