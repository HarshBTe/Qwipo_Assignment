import React, { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

const CreateUser = () => {
    const [FirstName, setFirstName] = useState()
    const [LastName, setLastName] = useState()
    const [PhoneNo, setPhoneNo] = useState()
    const [Email, setEmail] = useState()
    const [Address, setAddress] = useState()

    const navigate = useNavigate()

    const Submit = (e) => {
          e.preventDefault();
          axios.post("https://qwipo-assignment-backend.onrender.com/createUser", {FirstName, LastName, PhoneNo, Email, Address})
          .then(result => {
            console.log(result)
            navigate('/')
        })
          .catch(err => console.log(err))
    }

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={Submit}>
                    <h2>Add User</h2>

                    <div className="mb-2">
                       <label htmlFor="">FirstName</label>
                       <input type="text" placeholder="Enter FirstName" className="form-control"
                              onChange={(e) => setFirstName(e.target.value)} />
                    </div>

                    <div className="mb-2">
                       <label htmlFor="">LastName</label>
                       <input type="text" placeholder="Enter LastName" className="form-control"
                              onChange={(e) => setLastName(e.target.value)} />
                    </div>

                    <div className="mb-2">
                       <label htmlFor="">PhoneNo</label>
                       <input type="text" placeholder="Enter PhoneNo" className="form-control"
                              onChange={(e) => setPhoneNo(e.target.value)} />
                    </div>

                    <div className="mb-2">
                       <label htmlFor="">Email</label>
                       <input type="text" placeholder="Enter Email" className="form-control"
                              onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="mb-2">
                       <label htmlFor="">Address</label>
                       <input type="text" placeholder="Enter Address" className="form-control"
                              onChange={(e) => setAddress(e.target.value)} />
                    </div>

                    <button className="btn btn-success">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreateUser
