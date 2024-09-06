
import React, {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import axios from "axios"

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3002')
        .then(result => setUsers(result.data))
        .catch(err => console.log(err))
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:3002/deleteUser/' + id)
        .then(res => {console.log(res)
            window.location.reload()
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <Link to="/create" className="btn btn-success">Add +</Link>
                <table className="table">
                      <thead>
                        <tr>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>PhoneNo</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                         {
                            users.map((user) => {
                             return   <tr>
                                    <td>{user.FirstName}</td>
                                    <td>{user.LastName}</td>
                                    <td>{user.PhoneNo}</td>
                                    <td>{user.Email}</td>
                                    <td>{user.Address}</td>
                                    <td>
                                    <Link to={`/update/${user._id}`} className="btn btn-success">Update</Link>
                                    <button className="btn btn-danger" onClick={(e) => handleDelete(user._id)}>Delete</button>
                                    </td>
                                </tr>
                            })
                         }
                      </tbody>
                </table>
               
            </div>
        
        </div>
    )
}

export default Users