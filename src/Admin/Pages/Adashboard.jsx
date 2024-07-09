import React, { useEffect, useState } from 'react'
import Aheader from '../Components/Aheader'
import Afooter from '../Components/Afooter'
import { Link, NavLink } from 'react-router-dom'
import axios from 'axios'

function Adashboard() {
  const [requests, setRequests] = useState([])

  useEffect(() => {
    fetchRequests()
}, [])

const fetchRequests = async () => {
  try {
      const res = await axios.get('http://localhost:3000/requests')
      setRequests(res.data)
  } catch (error) {
      console.error("Error fetching requests", error)
  }
}

  return (
    <div>
        
        <Aheader></Aheader>

        <div className="container">
        <div className="row">
          <div className="col-12">
          <table className='table border border-3 table-responsive table-hover'>
          <thead className="thead-dark">
          <tr>
        <th className='text-center w-50 border'>
          <h4>

          User
          </h4>
          
          </th>
          <th className='text-center  w-50'>
          <h4 className='text-center offset-3'>

          <NavLink style={{backgroundColor:"lightgreen",width:"200px"}} to="/manageuser" className="dropdown-item btn-primary rounded-pill mx-5 py-2 px-4">
                    Manage User
                  </NavLink>
          </h4>
          
          </th>
        </tr>
            </thead>
          </table>
          </div>
        <div className="col-6">
          
        <table className='table border border-3 table-responsive table-hover'>
        <thead className="thead-dark">
        <tr>
        <th className='text-center'>
          <h4>

          Add Items
          </h4>
          
          </th>
        </tr>
        
          </thead>

          <tbody className='text-center h5'>
            <tr>
              <td>
              <NavLink to="/addservices" className="dropdown-item">
                    Add Services
                  </NavLink>
              </td>
            </tr>
            <tr>
              <td>
              <Link to="/addpackages" className="dropdown-item">
                Add Package
              </Link>
              </td>
            </tr>
            <tr>
              <td>
              <Link to="/addguide" className="dropdown-item">
                Add Guide
              </Link>
              </td>
            </tr>
            <tr>
              <td>
              <Link to="/adddestination" className="dropdown-item">
                Add Destination
              </Link>
              </td>
            </tr>
            <tr>
              <td>
              <Link to="/addtesti" className="dropdown-item">
                Add Testimonial
              </Link>
              </td>
            </tr>
          </tbody>

        </table>
        </div>


        <div className="col-6">
        <table className='table border border-3 table-responsive table-hover'>
        <thead className="thead-dark">
        <tr>
        <th className='text-center'>
          <h4>

          Manage Items
          </h4>
          </th>
        </tr>
        
          </thead>

          <tbody className='text-center h5'>
            <tr>
              <td>
              <Link to="/manageservices" className="dropdown-item">
                    Manage Services
                  </Link>
              </td>
            </tr>
            <tr>
              <td>
              <Link to="/managepackages" className="dropdown-item">
                    Manage Package
                  </Link>
              </td>
            </tr>
            <tr>
              <td>
              <Link to="/manageguide" className="dropdown-item">
                    Manage Guide
                  </Link>
              </td>
            </tr>
            <tr>
              <td>
              <Link to="/managedestination" className="dropdown-item">
                    Manage Destination
                  </Link>
              </td>
            </tr>
            <tr>
              <td>
              <Link to="/managetesti" className="dropdown-item">
                    Manage Testimonial
                  </Link>
              </td>
            </tr>
            <tr>
              <td>
              <Link to="/manageabout" className="dropdown-item">
                    Manage About Us
                  </Link>
              </td>
            </tr>
          </tbody>

        </table>
        </div>
        </div>

        <div className="row mt-5">
                    <div className="col-12">
                        <h4 className='text-center'>User Requests</h4>
                        <table className='table  border border-3 table-responsive table-hover'>
                                <thead className="thead-dark h4">
                                <tr>
                                    <th className='text-center'>Email</th>
                                    <th className='text-center'>Request</th>
                                </tr>

                                </thead>
                           
                            <tbody className='text-center h5'>
                                {requests.map((request, index) => (
                                    <tr className='bg-danger' key={index}>
                                        <td>{request.email}</td>
                                        <td>{request.request}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
        </div>
        <Afooter></Afooter>
    </div>
  )
}

export default Adashboard