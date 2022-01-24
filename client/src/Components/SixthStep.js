import React, { useContext, useState } from 'react'
import { Card, } from 'react-bootstrap'
import { Box, Button } from '@material-ui/core';
import { multiStepContext } from '../StepContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import '..'

export default function SixthStep() {

    const { setStep, userData, dependenttableData, setdependenttableData } = useContext(multiStepContext);

    //use of hook for couting
    const [noOfRows, setNoOfRows] = useState(1);

    const deleteRow = () => {
        // console.log(noOfRows)
        delete dependenttableData["dependent" + noOfRows + "name"]
        delete dependenttableData["dependent" + noOfRows + "age"]
        delete dependenttableData["dependent" + noOfRows + "education"]
        delete dependenttableData["dependent" + noOfRows + "profession"]
        delete dependenttableData["dependent" + noOfRows + "income"]
        delete dependenttableData["dependent" + noOfRows + "religiouseducation"]
        delete dependenttableData["dependent" + noOfRows + "kanmool"]
        delete dependenttableData["dependent" + noOfRows + "nakarshi"]
        delete dependenttableData["dependent" + noOfRows + "pooja"]
        delete dependenttableData["dependent" + noOfRows + "nighdinner"]
        delete dependenttableData["totalincomedependent"]
        setNoOfRows(noOfRows - 1)
    }
    // function to calculate total income
    const totalIncome = () => {
        let total = 0
        for (let i = 1; i <= noOfRows; i++) {
            console.log(i)
            console.log(parseInt(dependenttableData["dependent" + i + "income"]))
            total += (parseFloat(dependenttableData["dependent" + i + "income"]))
        }
        console.log(total)
        setdependenttableData({ ...dependenttableData, ["totalincomedependent"]: total })
    }
    console.log(dependenttableData)

    // function to decide to go on which page depending on the category selected

    const nextPage = () => {
        if (userData['category'] === 'education') {
            setStep(7)
        } else if (userData['category'] === 'medical') {
            setStep(8)
        }
        else {
            setStep(9)

        }
    }
    // console.log(userData)
    return (
        <div className="table1">

            <Card style={{ width: '130ch' }} className='mx-auto'>
                <span>

                </span><br></br>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '50ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >

                    <div>
                        <h6 class="fs-title">Dependent Details</h6>
                        <div className="app container mx-0 my-0">

                            <table class="table table-hover table-bordered p-5 mx-0 my-0">
                                <thead>
                                    <tr>
                                        <th scope="col">No</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Age</th>
                                        <th scope="col">Education</th>
                                        <th scope="col">Profession</th>
                                        <th scope="col">Income</th>
                                        <th scope="col">Religious Education</th>
                                        <th scope="col" colSpan={4}>Religious Activities</th>
                                    </tr>
                                    <tr>
                                        <th scope="col" colSpan={7}></th>
                                        <th scope="col" >Kanmool</th>
                                        <th scope="col" >Navkarshi</th>
                                        <th scope="col" >Pooja</th>
                                        <th scope="col" >Night Dinner</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[...Array(noOfRows)].map((elementInArray, index) => {

                                        var newVal = index + 1

                                        return (
                                            <tr>
                                                <th scope="row">{index + 1}</th>
                                                <td ><input type="text" style={{ width: "7rem", border: "0" }}
                                                    value={dependenttableData["dependent" + newVal + "name"]}
                                                    onChange={(e) => setdependenttableData({ ...dependenttableData, ["dependent" + newVal + "name"]: e.target.value })}
                                                /></td>
                                                <td><input type="text" style={{ width: "4rem", border: "0" }}
                                                    value={dependenttableData["dependent" + newVal + "age"]}

                                                    onChange={(e) => setdependenttableData({ ...dependenttableData, ["dependent" + newVal + "age"]: e.target.value })}
                                                /></td>
                                                <td ><input type="text" style={{ width: "7rem", border: "0" }}
                                                    value={dependenttableData["dependent" + newVal + "education"]}

                                                    onChange={(e) => setdependenttableData({ ...dependenttableData, ["dependent" + newVal + "education"]: e.target.value })}


                                                /></td>
                                                <td><input type="text" style={{ width: "7rem", border: "0" }}
                                                    value={dependenttableData["dependent" + newVal + "profession"]}

                                                    onChange={(e) => setdependenttableData({ ...dependenttableData, ["dependent" + newVal + "profession"]: e.target.value })}
                                                /></td>
                                                <td><input type="number" style={{ width: "7rem", border: "0" }}
                                                    value={dependenttableData["dependent" + newVal + "income"]}
                                                    onChange={(e) => setdependenttableData({ ...dependenttableData, ["dependent" + newVal + "income"]: e.target.value })}
                                                /></td>
                                                <td><input type="text" style={{ width: "7rem", border: "0" }}
                                                    value={dependenttableData["dependent" + newVal + "religiouseducation"]}

                                                    onChange={(e) => setdependenttableData({ ...dependenttableData, ["dependent" + newVal + "religiouseducation"]: e.target.value })}


                                                /></td>
                                                <td><input type="text" style={{ width: "7rem", border: "0" }}
                                                    value={dependenttableData["dependent" + newVal + "kanmool"]}

                                                    onChange={(e) => setdependenttableData({ ...dependenttableData, ["dependent" + newVal + "kanmool"]: e.target.value })}


                                                /></td>
                                                <td><input type="text" style={{ width: "7rem", border: "0" }}
                                                    value={dependenttableData["dependent" + newVal + "nakarshi"]}

                                                    onChange={(e) => setdependenttableData({ ...dependenttableData, ["dependent" + newVal + "nakarshi"]: e.target.value })}



                                                /></td>
                                                <td><input type="text" style={{ width: "7rem", border: "0" }}

                                                    onChange={(e) => setdependenttableData({ ...dependenttableData, ["dependent" + newVal + "pooja"]: e.target.value })}
                                                /></td>
                                                <td><input type="text" style={{ width: "7rem", border: "0" }}

                                                    onChange={(e) => setdependenttableData({ ...dependenttableData, ["dependent" + newVal + "nighdinner"]: e.target.value })}
                                                /></td>
                                            </tr>

                                        );
                                    })}
                                </tbody>
                            </table>
                            <table class="table table-hover table-bordered p-5 mx-0 my-0">
                                <thead>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                    <th scope="col" id='totin'>Total Income <input type="text" value={dependenttableData['totalincomedependent']} onClick={totalIncome} style={{ width: "17rem" }} placeholder='Click Here To View Total Income' /></th>
                                    
                                </thead>
                                <tbody>
                                </tbody>
                            </table><br />

                            <div className='float-left'>
                                <button type="button" class="btn btn-outline-primary " onClick={() => setNoOfRows(noOfRows + 1)}>Add</button><span></span>
                            </div>
                            <div className='float-right'>

                                {/* <button type="button" class="btn btn-outline-danger " onClick={() => setNoOfRows(noOfRows - 1)}>Delete</button><span></span> */}
                                <button type="button" class="btn btn-outline-danger " onClick={deleteRow}>Delete</button><span></span>
                            </div>

                        </div><br />
                        <div className='float-center'>

                            {/* <Button variant='contained' color='success' onClick={saveData}>Save</Button><span> </span> */}

                            <Button variant='contained' color='secondary' onClick={() => setStep(5)}>Back</Button><span> </span>

                            {/* <Button variant='contained' color='primary' onClick={() => setStep(7)}>Next</Button><span> </span> */}
                            <Button variant='contained' color='primary' onClick={nextPage}>Next</Button><span> </span>


                        </div><br />
                    </div>
                </Box>
            </Card>
        </div>
    )
}
