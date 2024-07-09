import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Aheader from '../Components/Aheader'
import Afooter from '../Components/Afooter'



function Manage_user() {
 

        const [data,setdata] = useState()
    
        useEffect(()=>{
            fetch()
        },[])
    
        const fetch=async()=>{
            const res = await axios.get(`http://localhost:3000/user`)
            console.log(res.data)
            setdata(res.data)
        }
    
        // delete user 
        const deletehadle=async(id)=>{
            const res = await axios.delete(`http://localhost:3000/user/${id}`)
            console.log(res.data)
            fetch()
        }
    
        const statuhandle=async(id)=>{
            const res =await axios.get(`http://localhost:3000/user/${id}`)
            const currentstatus = res.data.status
    
            try {
                if(currentstatus === "block")
                    {
                        const res =await axios.patch(`http://localhost:3000/user/${id}`,{status:"unblock"})
                        console.log(res.data)
                        {
                            if(res.status === 200)
                                {
                                    toast.success("unblock successfully")
                                    fetch()
                                }
           
                            }
                    }
                    else if(currentstatus === "unblock")
                        {
                            const res =await axios.patch(`http://localhost:3000/user/${id}`,{status:"block"})
                            
                            {
                                if(res.status === 200)
                                    {
                                        toast.success("block successfully")
                                        fetch()
                                    }
                            }
                        }
            } catch (error) {
                toast.error("errorr msg",error)
            }
    
        }
    
     
  return (
    <div>
      <Aheader/>
        <div className="container">
            <h1>User manage</h1>
            <table className="table table-striped table-info">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Mobile</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data && data.map((value,index)=>{
                                    return(
                                        <tr key={index}>
                                            <td>{value.id}</td>
                                            <td>{value.fname}</td>
                                            <td>{value.email}</td>
                                            <td>{value.mobile}</td>
                                            <td><button type="button" className='btn btn-success' onClick={()=>statuhandle(value.id)}>{value.status}</button></td>
                                            <td><button  className='btn btn-info mx-3'>View</button>
                                                <button className='btn btn-danger' onClick={()=>{deletehadle(value.id)}}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
        </table>
        </div>
      <Afooter/>
    </div>
  )
}

export default Manage_user









