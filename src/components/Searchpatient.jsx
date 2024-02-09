import React, { useState } from 'react'
import Navbarpatient from './Navbarpatient'
import axios from 'axios'

const Searchpatient = () => {
    const [input, setInput] = new useState(
        {

            "patientMobile": ""
        }
    )
    const [data, setData] = new useState([])
    const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    }
    const readvalues = () => {
        axios.post("http://localhost:3000/api/patient/search", input).then(
            (response) => {
                setData(response.data)
            }
        )
    }
    return (
        <div>
            <Navbarpatient />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Patient Mobile</label>
                                <input type="text" className="form-control" name='patientMobile' value={input.patientMobile} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readvalues}>Search</button>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Patient Name</th>
                                            <th scope="col">Patient Address</th>
                                            <th scope="col">Patient Mobile</th>
                                            <th scope="col">Patient Symptom</th>
                                            <th scope="col">Patient Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data.map(
                                                (value, index) => {
                                                    return <tr>
                                                        <td>{value.patientName}</td>
                                                        <td>{value.patientAddress}</td>
                                                        <td>{value.patientMobile}</td>
                                                        <td>{value.patientSymptom}</td>
                                                        <td>{value.patientStatus}</td>
                                                    </tr>
                                                }
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Searchpatient