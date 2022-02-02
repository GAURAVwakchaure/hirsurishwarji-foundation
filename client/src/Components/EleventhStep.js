import React, { useContext, useState } from 'react'
import { Card, } from 'react-bootstrap'
import { Button, TextField, Box } from '@material-ui/core';
import { multiStepContext } from '../StepContext';
// import { Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '..'


export default function EleventhStep() {
    const { setStep, setUserData, userData, submitData, skilltableData,setskilltableData} = useContext(multiStepContext);
    //use of hook for couting
    const [noOfRows, setNoOfRows] = useState(1);
        // let referredby = document.getElementById('referredby').value
        // let referraladdress = document.getElementById('referraladdress').value
        // // let surveydetails = document.getElementById('surveydetails').value
        // // let specialnotes = document.getElementById('specialnotes').value

        // if (referredby == null || referredby === "") {
        //     document.getElementById('ereferredby').innerHTML="Please Enter Referred By !"
        // } 
        // else if(!isNaN(referredby)){
        //     document.getElementById('ereferredby').innerHTML="Numbers are not allowed !"
        // }
        // else if(referredby.length < 2  || referredby.length > 50){
        //     document.getElementById('ereferredby').innerHTML="Minimum 2 and Maximum 50 characters are allowed !"
        // }
        // else{
        //     document.getElementById('ereferredby').innerHTML=" "
        // }
        // if (referraladdress == null || referraladdress === "") {
        //     document.getElementById('ereferraladdress').innerHTML="Please Enter Referral Address !"
        // } 
        // else if(referraladdress.length < 2  || referraladdress.length > 50){
        //     document.getElementById('ereferraladdress').innerHTML="Minimum 2 and Maximum 50 characters are allowed !"
        // }
        // else{
        //     document.getElementById('ereferraladdress').innerHTML=" "
        // }
        // if(referredby == null || referredby === "" || referredby.length < 2  || referredby.length > 50 || referraladdress == null || referraladdress === "" || referraladdress.length < 2  || referraladdress.length > 50 ){
        //     document.getElementById('invalid').innerHTML="Invalid Input !!"
        // }
        //  else {
        //     document.getElementById('invalid').innerHTML=" "
        // }

    const deleteRow = () => {
        delete skilltableData["skill" + noOfRows + "name"]
        delete skilltableData["skill" + noOfRows + "work"]
        delete skilltableData["skill" + noOfRows + "education"]
        delete skilltableData["skill" + noOfRows + "phonenumber"]
        setNoOfRows(noOfRows - 1)
    }

    console.log(skilltableData)
    return (
        <div className="table1">

            <Card style={{ width: '120ch' }} className='mx-auto'>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '40ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >

                    <div className='boxborder'><br></br>
                    <h6 class="fs-title">Skill Details</h6><br></br>
                        <div>
                            <div className="app container mx-8 my-0">
                                <table class="table table-striped table-hover table-bordered p-5">
                                    <thead>
                                        <tr>
                                            <th scope="col">No</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Work</th>
                                            <th scope="col">Education</th>
                                            <th scope="col">Phone Number</th>

                                        </tr>

                                    </thead>
                                    <tbody>
                                        {[...Array(noOfRows)].map((elementInArray, index) => {

                                            var newVal = index + 1

                                            return (
                                                <tr>


                                                    <th scope="row">{index + 1}</th>
                                                    <td ><input type="text" style={{ width: "15rem", border: "0" }}
                                                        value={skilltableData["skill" + newVal + "name"]}
                                                        onChange={(e) => setskilltableData({ ...skilltableData, ["skill" + newVal + "name"]: e.target.value })}
                                                    /></td>
                                                    <td><input type="text" style={{ width: "15rem", border: "0" }}
                                                        value={skilltableData["skill" + newVal + "work"]}
                                                        onChange={(e) => setskilltableData({ ...skilltableData, ["skill" + newVal + "work"]: e.target.value })}
                                                    /></td>
                                                    <td ><input type="text" style={{ width: "15rem", border: "0" }}
                                                        value={skilltableData["skill" + newVal + "education"]}
                                                        onChange={(e) => setskilltableData({ ...skilltableData, ["skill" + newVal + "education"]: e.target.value })}
                                                    /></td>

                                                    <td ><input type="number" style={{ width: "15rem", border: "0" }}
                                                        value={skilltableData["skill" + newVal + "phonenumber"]}
                                                        onChange={(e) => setskilltableData({ ...skilltableData, ["skill" + newVal + "phonenumber"]: e.target.value })}
                                                    /></td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>

                                <div className='float-left adpad'>
                                    <button type="button" class="btn btn-outline-primary " onClick={() => setNoOfRows(noOfRows + 1)}>Add</button><span></span>
                                </div>
                                <div className='float-left'>
                                    <button type="button" class="btn btn-outline-danger " onClick={deleteRow}>Delete</button><span></span>
                                </div>

                            </div><br></br><br></br>
                            {/* <hr class="solid"></hr><br></br> */}

                            <div className='dadminbox'><br></br>
                            <h6 class="fs-title">Administrative Details</h6><br></br>

                            <div>
                                <span id='invalid' class="text-danger size font-weight-bold"></span>
                            </div>
                            <div>
                                <TextField label="Referred By: " className ="" id="referredby" value={userData['referredby']} onChange={(e) => setUserData({ ...userData, "referredby": e.target.value })} margin='normal' variant='standard' color="primary" /><br></br> 
                                {/* <span id='ereferredby' className='text-danger' >  </span> */}
                            </div>
                            <div>
                                <TextField label="Address of Referral: " className ="" id="referraladdress" value={userData['referraladdress']} onChange={(e) => setUserData({ ...userData, "referraladdress": e.target.value })} margin='normal' variant='standard' color="primary" /><br></br> 
                                {/* <span id='ereferraladdress' className='text-danger' >  </span> */}
                            </div>
                            </div>

                            <div>

                                {/* <Button variant='contained' color='success' onClick={saveData}>Save</Button><span> </span> */}

                                <Button variant='contained' color='secondary' onClick={() => setStep(9)}>Back</Button><span> </span>

                                <Button variant='contained' color='primary' onClick={submitData}>Submit</Button><span> </span>
                                


                            </div><br />
                        </div>                      

                        <div>
                        </div><br />
                    </div><br></br></Box>
            </Card>
        </div>
    )
}
