import axios from 'axios'
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Request() {
    const redirect = useNavigate()

    const [formValue, setFormValue] = useState({
        email: "",
        request: "For Unblock"  // default value for the select input
    })

    const getChange = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value })
        console.log(formValue)
    }

    const submitHandle = async (e) => {
        e.preventDefault()

        const { email, request } = formValue

        if (!email.trim()) {
            toast.error("EMAIL IS REQUIRED")
            return false
        }

        try {
            const res = await axios.get(`http://localhost:3000/user?email=${email}`)
            console.log(res.data)

            if (res.data.length === 0) {
                toast.error("EMAIL NOT EXIST, KINDLY REGISTER")
                return
            }
            await axios.post('http://localhost:3000/requests', { email, request })

            toast.success(`${request} request sent successfully :)`)
            redirect("/login")

            // Clear the form fields
            setFormValue({
                email: "",
                request: "For Unblock"
            })

        } catch (error) {
            console.error("ERROR OCCURRED", error)
        }
    }

    return (
        <div>
            <div className="background2 pt-5 py-5 px-5 container-fluid">
                <div className="row pt-5 g-0 d-flex mt-5 mb-5 py-5 justify-content-center pt-3">
                    <div className="leftform col-sm-5 p-4">
                        <div className="container-fluid">
                            <h2 className="text-center text-white" style={{ fontWeight: 700 }}>Contact Us</h2>
                            <form onSubmit={submitHandle}>
                                <div style={{ marginTop: '0.25rem', fontSize: '0.875rem', lineHeight: '1.25rem' }}>
                                    <h6 className='text-white'>Email</h6>
                                    <input name="email" value={formValue.email} onChange={getChange} className="namenpassword" type="text" />
                                </div>
                                <div style={{ marginTop: '0.25rem', fontSize: '0.875rem', lineHeight: '1.25rem' }}>
                                    <h6 className='text-white'>Request</h6>
                                    <select name='request' value={formValue.request} onChange={getChange} className="form-select bg-transparent" id="select1">
                                        <option value="For Unblock">For Unblock</option>
                                        <option value="For Order">For Order</option>
                                        <option value="For Login Problem">For Login Problem</option>
                                        <option value="For Call and Inquiry">For Call and Inquiry</option>
                                        <option value="For Feedback">For Feedback</option>
                                    </select>
                                </div>
                                <div className='pt-4'>
                                    <button className="sign">Send Request</button>
                                </div>
                            </form>
                            <p className="signup mt-4">
                                Already Sent request?
                                <NavLink to="" className="btn btn-primary rounded-pill mx-2 py-2 px-4 btn-link">Check Status</NavLink>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Request
