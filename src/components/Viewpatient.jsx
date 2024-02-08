import React, { useEffect, useState } from 'react'
import Navbarpatient from './Navbarpatient'
import axios from 'axios'

const Viewpatient = () => {
    const [data, setData] = new useState([])
    const getData = () => {
        axios.get("http://localhost:3000/api/patient/viewall").then(
            (response) => {
                setData(response.data)
            }
        )
    }
    useEffect(() => { getData() }, [])
    return (
        <div>
            <Navbarpatient />
            <div className="container">
                <div className="row">
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
    )
}

export default Viewpatient