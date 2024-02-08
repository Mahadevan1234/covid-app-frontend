import React, { useState } from 'react'
import Navbarpatient from './Navbarpatient'
import axios from 'axios'

const Addpatient = () => {
    const [input,setInput]=new useState(
        {
            "patientName":"",
            "patientAddress":"",
            "patientMobile":"",
            "patientSymptom":"",
            "patientStatus":""
        }
    )
    const inputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }
    const readvalues=()=>{
        console.log(input)
        axios.post("http://localhost:3000/api/patient/add",input).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("Successfully added")
                    setInput(
                        {
                            "patientName":"",
                            "patientAddress":"",
                            "patientMobile":"",
                            "patientSymptom":"",
                            "patientStatus":""
                        }
                    )
                    
                } else {
                    alert("Something went wrong")
                }

            }
        )
    }
  return (
    <div>
        <Navbarpatient/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Patient Name</label>
                            <input type="text" className="form-control" name='patientName' value={input.patientName} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Patient Address</label>
                            <input type="text" className="form-control" name='patientAddress' value={input.patientAddress} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Patient Mobile</label>
                            <input type="text" className="form-control" name='patientMobile' value={input.patientMobile} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Patient Symptom</label>
                            <input type="text" className="form-control" name='patientSymptom' value={input.patientSymptom} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Patient Status</label>
                            <input type="text" className="form-control" name='patientStatus' value={input.patientStatus} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readvalues}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Addpatient