import React, { useContext, useState } from 'react'
import { Card, } from 'react-bootstrap'
// import { Box, Button } from '@material-ui/core';
// import { multiStepContext } from '../StepContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import '..'
import InputAdornment from '@material-ui/core/InputAdornment'
// import React, { useContext, } from 'react'
// import { Card, } from 'react-bootstrap'
import { Button, TextField, Box, FormControlLabel, FormControl, FormLabel, Radio, RadioGroup } from '@material-ui/core';
import { multiStepContext } from '../StepContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

export default function SixthStep() {

    const { setStep, userData, dependenttableData, setdependenttableData, setUserData } = useContext(multiStepContext);

    //use of hook for couting
    const [noOfRows, setNoOfRows] = useState(1);

    // const { setStep, userData, setUserData, } = useContext(multiStepContext);
    console.log(userData)
    const loanStatus = (e) => {
        setUserData({ ...userData, 'mgloanstatus': e.target.value })
        if (e.target.value === 'yes') {
            document.getElementById('loanamount').style.visibility = 'visible'
        } else {
            document.getElementById('loanamount').style.visibility = 'hidden'
        }


    }

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
        // console.log("totalincome function called")
        let total = 0
        for (let i = 1; i <= noOfRows; i++) {
            console.log(i)
            console.log(parseInt(dependenttableData["dependent" + i + "income"]))
            total += (parseFloat(dependenttableData["dependent" + i + "income"]))
        }
        console.log(total)
        setdependenttableData({ ...dependenttableData, ["totalincomedependent"]: total })
        document.getElementById("totalincomevalue").innerHTML = "Total Income : Rs. "+total
    }
    console.log(dependenttableData)

    // function to decide to go on which page depending on the category selected

    const nextPage = () => {
        // var dtname = document.getElementById('dtname').value
        // var dtage = document.getElementById('dtage').value
        // var dtincome = document.getElementById('dtincome').value

        if (userData['category'] === 'education') {
            setStep(7)
        } else if (userData['category'] === 'medical') {
            setStep(8)
        }
        // else if (dtname == null || dtname === "" || dtname.length < 2  || dtname.length > 50){
        //     alert("Enter Dependent Name ! Length of Name, atleast of 2 characters and less than 50 characters")
        // }else if(dtage == null || dtage === "" || dtage.length < 1  || dtage.length > 3){
        //     alert("Enter Dependent Age ! At least 1 Digit and not more than 3 digit")
        // }
        // else if(dtincome == null || dtincome === "" || dtincome.length < 1  || dtincome.length > 7){
        //     alert("Enter Dependent Income ! At least 1 Digit and not more than 7 digit")
        // }
        else {
            setStep(9)

        }
    }

    // const setIncome = (newVal,e) => {
    //     console.log("income is :" + e.target.value)
    //     console.log(newVal)
    //     totalIncome()
        // console.log(newVal)
        // setdependenttableData({ ...dependenttableData, ["dependent" + newVal + "income"]: e.target.value })
        // {totalIncome}

    // }
    // console.log(userData)
    return (
        <div className="table1">

            <Card style={{ width: '130ch' }} className='mx-auto'>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '35ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >

                    <div className='boxborder'><br></br>
                        <h6 class="fs-title">Dependent Details</h6>
                        <div>
                        <p class="right">*Enter 'NA' or '0' Wheraver Required</p>
                        </div>
                        <div className="app container mx-0 my-0 ">
                            

                            <table className="table table-hover table-striped table-bordered p-5 mx-0 my-0">
                                <thead className='tablehead'>
                                    <tr>
                                    <th scope="col"><p>Sr.no</p></th>
                                        <th scope="col"><p>Name</p></th>
                                        <th scope="col" ><p>Age</p></th>
                                        <th scope="col" ><p>Aadhaar No.</p></th>
                                        <th scope="col"><p>Education</p></th>
                                        <th scope="col"><p>Profession</p></th>
                                        <th scope="col" ><p>Income</p></th>
                                        <th scope="col" >Religious Education</th>
                                        <th scope="col" colSpan={4}>
                                            <p>Religious Activities</p>
                                            {/* <th scope="col" colSpan={7}></th> */}
                                        <th scope="col" >Kanmool</th>
                                        <th scope="col" >Navkarshi</th>
                                        <th scope="col" >Pooja</th>
                                        <th scope="col" >Night Dinner</th>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[...Array(noOfRows)].map((elementInArray, index) => {

                                        var newVal = index + 1

                                        return (
                                            <tr>
                                                <th scope="row">{index + 1}</th>
                                                <td ><input id='dtname' type="text" className='input' style={{width: "6.5rem", border: "0" }}
                                                    value={dependenttableData["dependent" + newVal + "name"]}
                                                    onChange={(e) => setdependenttableData({ ...dependenttableData, ["dependent" + newVal + "name"]: e.target.value })}
                                                /></td>
                                                <td><input id='dtage' className='input' type="number" style={{ width: "3rem", border: "0" }}
                                                    value={dependenttableData["dependent" + newVal + "age"]}

                                                    onChange={(e) => setdependenttableData({ ...dependenttableData, ["dependent" + newVal + "age"]: e.target.value })}
                                                /></td>
                                                <td ><input type="number" className='input' style={{ width: "7rem", border: "0" }}
                                                    value={dependenttableData["dependent" + newVal + "aadhaar_number"]}

                                                    onChange={(e) => setdependenttableData({ ...dependenttableData, ["dependent" + newVal + "aadhaar_number"]: e.target.value })}


                                                /></td>
                                                <td ><input type="text" className='input' style={{ width: "6.5rem", border: "0" }}
                                                    value={dependenttableData["dependent" + newVal + "education"]}

                                                    onChange={(e) => setdependenttableData({ ...dependenttableData, ["dependent" + newVal + "education"]: e.target.value })}


                                                /></td>
                                                <td><input type="text" className='input' style={{ width: "6rem", border: "0" }}
                                                    value={dependenttableData["dependent" + newVal + "profession"]}

                                                    onChange={(e) => setdependenttableData({ ...dependenttableData, ["dependent" + newVal + "profession"]: e.target.value })}
                                                /></td>
                                                <td><input id='dtincome' className='input' type="number" style={{ width: "5.5rem", border: "0" }}
                                                    value={dependenttableData["dependent" + newVal + "income"]}
                                                    onChange = {(e) => setdependenttableData({ ...dependenttableData, ["dependent" + newVal + "income"]: e.target.value })}
                                                    onBlur = {totalIncome}
                                                    // onChange={(e) => setdependenttableData({ ...dependenttableData, ["dependent" + newVal + "income"]: e.target.value }),
                                                
                                                    // onChange={totalIncome}
                                                /></td>
                                                <td><input type="text" className='input' style={{ width: "7rem", border: "0" }}
                                                    value={dependenttableData["dependent" + newVal + "religiouseducation"]}

                                                    onChange={(e) => setdependenttableData({ ...dependenttableData, ["dependent" + newVal + "religiouseducation"]: e.target.value })}


                                                /></td>
                                                <td><input type="text" className='input' style={{ width: "5rem", border: "0" }}
                                                    value={dependenttableData["dependent" + newVal + "kanmool"]}

                                                    onChange={(e) => setdependenttableData({ ...dependenttableData, ["dependent" + newVal + "kanmool"]: e.target.value })}


                                                /></td>
                                                <td><input type="text" className='input' style={{ width: "5rem", border: "0" }}
                                                    value={dependenttableData["dependent" + newVal + "nakarshi"]}

                                                    onChange={(e) => setdependenttableData({ ...dependenttableData, ["dependent" + newVal + "nakarshi"]: e.target.value })}



                                                /></td>
                                                <td><input type="text" className='input' style={{ width: "5rem", border: "0" }}

                                                    onChange={(e) => setdependenttableData({ ...dependenttableData, ["dependent" + newVal + "pooja"]: e.target.value })}
                                                /></td>
                                                <td><input type="text" className='input' style={{ width: "5rem", border: "0" }}

                                                    onChange={(e) => setdependenttableData({ ...dependenttableData, ["dependent" + newVal + "nighdinner"]: e.target.value })}
                                                /></td>
                                            </tr>

                                        );
                                    })}
                                </tbody>
                            </table>
                            <br></br> 
                            <div className='float-left adpad'>
                                <button type="button" class="btn btn-outline-primary " onClick={() => setNoOfRows(noOfRows + 1)}>Add</button><span></span>
                            </div>
                            <div className='float-left'>

                                {/* <button type="button" class="btn btn-outline-danger " onClick={() => setNoOfRows(noOfRows - 1)}>Delete</button><span></span> */}
                                <button type="button" class="btn btn-outline-danger " onClick={deleteRow}>Delete</button><span></span>
                            </div>
                            {/* onClick={totalIncome} */}
                            {/* <table class="table table-hover table-bordered p-5 mx-0 my-0">
                                <thead>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                    <th scope="col" id='totin'><span><p id = "totalincomevalue"></p></span> */}
                                    {/* <input type="text" value={dependenttableData['totalincomedependent']}  style={{ width: "17rem" }}  /> */}
                                    {/* </th>
                                    
                                </thead>
                                <tbody>
                                </tbody>
                            </table><br /> */}

                            <div id='totin'>
                            <span><p id = "totalincomevalue">Total Income : Rs.</p></span>
                            </div> 

                        </div><br /><hr class="solid"></hr>
                        <div className='drentbox'><br></br>
                        <div><h6 id="dtdetail" >1. Unemployed Person : </h6></div>
                        <div>
                            <TextField label="Education" id='mgeducation' value={userData['mgunemployedpersoneducation']} onChange={(e) => setUserData({ ...userData, "mgunemployedpersoneducation": e.target.value })} margin='normal' variant='standard' color="primary" /><span>  </span>
                        </div>
                        <div>
                            <TextField label="Experience" id='mgexperience' value={userData['mgunemployedpersonexperience']} onChange={(e) => setUserData({ ...userData, "mgunemployedpersonexperience": e.target.value })} margin='normal' variant='standard' color="primary" />
                        </div><br />
                        {/* <div><h6 id="edgl1" >2. Any Loan ? : </h6></div> */}
                        <div>
                        <table>
                                <tr>
                                    <td rowSpan={3}> <h6 id="dtdetail">2. Any Previous Loan?</h6></td>
                                    <td>
                                        <div className='jainradio'> <FormControl component="fieldset">
                                            <FormLabel component="legend"></FormLabel>
                                            <RadioGroup
                                                aria-label="gender"
                                                name="controlled-radio-buttons-group"
                                                defaultValue="no"
                                                value={userData['mgloanstatus']}
                                                onChange={loanStatus}
                                                row={true}

                                                style={{ marginleft: '2rem', display: 'flex', alignItems: 'left' }}

                                            >
                                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="no" control={<Radio />} label="No" />
                                            </RadioGroup>
                                        </FormControl></div></td>
                                </tr>

                            </table>
                            {/* <FormControl component="fieldset">
                                <FormLabel component="legend"></FormLabel>
                                <RadioGroup
                                    aria-label="gender"
                                    name="controlled-radio-buttons-group"
                                    // value={value}
                                    onChange={loanStatus}
                                    row={true}

                                    style={{ display: 'flex', alignItems: 'left' }}

                                >
                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl> */}
                            <span id='loanamount' style={{ visibility: 'hidden' }}>
                                <TextField InputProps={{ startAdornment: <InputAdornment position="start">Rs.</InputAdornment>}} label="Enter Loan Amount" type="number" id='mgloanamount' value={userData['mgloanamount']} onChange={(e) => setUserData({ ...userData, "mgloanamount": e.target.value })} margin='normal' variant='standard' color="primary" /><span>  </span>
                            </span><br/>

                        </div></div>


                        <div className='float-center'>

                            {/* <Button variant='contained' color='success' onClick={saveData}>Save</Button><span> </span> */}

                            <Button variant='contained' color='secondary' onClick={() => setStep(5)}>Back</Button><span> </span>

                            {/* <Button variant='contained' color='primary' onClick={() => setStep(9)}>Next</Button><span> </span> */}
                            <Button variant='contained' color='primary' onClick={nextPage}>Next</Button><span> </span>


                        </div><br />
                    </div><br></br>
                </Box>
            </Card>
        </div>
    )
}
