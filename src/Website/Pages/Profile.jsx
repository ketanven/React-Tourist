import React, { useEffect, useState } from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

function Profile() {
    const redirect = useNavigate()
    const [data, setData] = useState({
        id: "",
        fname: "",
        email: "",
        password: "",
        mobile: "",
        profile: "",
        status: "",
      });


      useEffect(() => {
        fetchData();
      }, []);



      const fetchData = async () => {
        try {
          const res = await axios.get(
            `http://localhost:3000/user/${localStorage.getItem("Uloginid")}`
          );
          console.log(res.data);
          setData(res.data);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };

      const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
      };


      const handleSubmit = async (e) => {
        e.preventDefault();
        if (
          data.fname.trim() === "" ||
          data.email.trim() === "" ||
          data.password.trim() === "" ||
          data.mobile.trim() === "" ||
          data.profile.trim() === ""
        ) {
          toast.error("All fields are required!");
          return;
        }
        try {
          const res = await axios.patch(
            `http://localhost:3000/user/${data.id}`,
            data
          );
          console.log(res);
          if (res.status === 200) {
            setData({
              name: "",
              email: "",
              password: "",
              mobile: "",
              image: "",
            });
            toast.success("User updated successfully");
            redirect("/")
          }
        } catch (error) {
          console.error("Error updating user:", error);
          toast.error("Error updating user");
        }
      };





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
        <form onSubmit={handleSubmit} >
        
          <div
            style={{
              marginTop: "0.25rem",
              fontSize: "0.875rem",
              lineHeight: "1.25rem",
            }}
          >
            <h6 className="text-white">Full Name</h6>
            <input className="namenpassword" type="text" onChange={handleChange} value={data.fname} name="fname" id />
          </div>
          <div
            style={{
              marginTop: "0.25rem",
              fontSize: "0.875rem",
              lineHeight: "1.25rem",
            }}
          >
            <h6 className="text-white">Email Address</h6>
            <input onChange={handleChange} value={data.email} className="namenpassword text-white" type="email" name="email" id />
          </div>
          <div
            style={{
              marginTop: "0.25rem",
              fontSize: "0.875rem",
              lineHeight: "1.25rem",
            }}
          >
            <h6 className="text-white">Password</h6>
            <input onChange={handleChange} value={data.password} className="namenpassword text-white" type="password" name="password" id />
          </div>
        
          <div
            style={{
              marginTop: "0.25rem",
              fontSize: "0.875rem",
              lineHeight: "1.25rem",
            }}
          >
            <h6 className="text-white">Mobile</h6>
            <input onChange={handleChange} value={data.mobile} className="namenpassword text-white" type="tel" name="mobile" id />
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
              onChange={handleChange} value={data.profile}
              className="namenpassword text-white"
              type="url"
              name="profile"
              id=""
            />
          </div>
          
         
          <button className="sign mt-4">Update Profile</button>
        </form>
        
        
      </div>
    </div>
  </div>
</div>
<Footer></Footer>
</div>
    
  )
}

export default Profile