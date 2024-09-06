import React, {useState, useEffect} from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from 'axios'

const UpdateUser = () => {
    const {id} = useParams()
    const [FirstName, setFirstName] = useState()
    const [LastName, setLastName] = useState()
    const [PhoneNo, setPhoneNo] = useState()
    const [Email, setEmail] = useState()
    const [Address, setAddress] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('https://qwipo-assignment-backend.onrender.com/getUser/' + id )
        .then(result => {
            setFirstName(result.data.FirstName)
            setLastName(result.data.LastName)
            setPhoneNo(result.data.PhoneNo)
            setEmail(result.data.Email)
            setAddress(result.data.Address)
        })
        .catch(err => console.log(err))
    }, [])

    const Update = (e) => {
        e.preventDefault();
        axios.put("https://qwipo-assignment-backend.onrender.com/updateUser/" + id, {FirstName, LastName, PhoneNo, Email, Address})
        .then(result => {
          console.log(result)
          navigate('/')
      })
        .catch(err => console.log(err))
    }

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={Update}>
                    <h2>Update User</h2>

                    <div className="mb-2">
                       <label htmlFor="">FirstName</label>
                       <input type="text" placeholder="Enter FirstName" className="form-control"
                            value={FirstName}  onChange={(e) => setFirstName(e.target.value)} />
                    </div>

                    <div className="mb-2">
                       <label htmlFor="">LastName</label>
                       <input type="text" placeholder="Enter LastName" className="form-control"
                            value={LastName}  onChange={(e) => setLastName(e.target.value)} />
                    </div>

                    <div className="mb-2">
                       <label htmlFor="">PhoneNo</label>
                       <input type="text" placeholder="Enter PhoneNo" className="form-control"
                            value={PhoneNo}  onChange={(e) => setPhoneNo(e.target.value)} />
                    </div>

                    <div className="mb-2">
                       <label htmlFor="">Email</label>
                       <input type="text" placeholder="Enter Email" className="form-control"
                            value={Email}  onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="mb-2">
                       <label htmlFor="">Address</label>
                       <input type="text" placeholder="Enter Address" className="form-control"
                            value={Address}  onChange={(e) => setAddress(e.target.value)} />
                    </div>


                    <button className="btn btn-success">Update</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateUser
