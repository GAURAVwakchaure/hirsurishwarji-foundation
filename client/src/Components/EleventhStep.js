import React, { useContext, useState } from 'react'
import { Card, } from 'react-bootstrap'
import { Button, Box } from '@material-ui/core';
import { multiStepContext } from '../StepContext';
// import { Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '..'


export default function EleventhStep() {
    const { setStep, userData, submitData, skilltableData,setskilltableData} = useContext(multiStepContext);
    //use of hook for couting
    const [noOfRows, setNoOfRows] = useState(1);


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
                <span>

                </span><br></br>
                <h6 class="fs-title">Skill Details</h6><br></br>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '50ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >

                    <div>
                        <div>
                            <div className="app container mx-8 my-0">
                                <table class="table table-hover table-bordered p-5">
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

                                                    <td ><input type="text" style={{ width: "15rem", border: "0" }}
                                                        value={skilltableData["skill" + newVal + "phonenumber"]}
                                                        onChange={(e) => setskilltableData({ ...skilltableData, ["skill" + newVal + "phonenumber"]: e.target.value })}
                                                    /></td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>

                                <div className='float-left'>
                                    <button type="button" class="btn btn-outline-primary " onClick={() => setNoOfRows(noOfRows + 1)}>Add</button><span></span>
                                </div>
                                <div className='float-right'>
                                    <button type="button" class="btn btn-outline-danger " onClick={deleteRow}>Delete</button><span></span>
                                </div>

                            </div>
                            <div>

                                {/* <Button variant='contained' color='success' onClick={saveData}>Save</Button><span> </span> */}

                                <Button variant='contained' color='secondary' onClick={() => setStep(10)}>Back</Button><span> </span>

                                <Button variant='contained' color='primary' onClick={submitData}>Submit</Button><span> </span>


                            </div><br />
                        </div>                      

                        <div>
                        </div><br />
                    </div></Box>
            </Card>
        </div>
    )
}
