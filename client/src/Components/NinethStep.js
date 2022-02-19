import React, { useContext, useState } from 'react'
import { Card, } from 'react-bootstrap'
import { Button, Box } from '@material-ui/core';
import { multiStepContext } from '../StepContext';
// import { Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '..'


export default function NinethStep() {


    //use of hook for couting
    const [noOfRows, setNoOfRows] = useState(1);


    const { setStep, userData, setUserData, earningmembertableData, setearningmembertableData ,earningmembertablearray} = useContext(multiStepContext);

   
    console.log(earningmembertableData)

    const deleteRow = () => {
        delete earningmembertableData["earning" + noOfRows + "name"]
        delete earningmembertableData["earning" + noOfRows + "work"]
        delete earningmembertableData["earning" + noOfRows + "phonenumber"]
        setNoOfRows(noOfRows - 1)
    }

    const backPage = () => {
        if (userData['category'] === 'education') {
            setStep(7)
        } else if (userData['category'] === 'medical') {
            setStep(8)
        }
        else {
            setStep(6)

        }
    }

    const emArray = () => {

        // for(let i = 0; i<noOfRows; i++){
        //     let val = i+1
        //     earningmembertablearray.push(val + '.Earning Member Name,'+document.getElementById('emname'+i).value+","+val+". Earning Member Work,"+document.getElementById('emwork'+i).value+","+val+". Earning Member Phone Number,"+document.getElementById("emphnum"+i).value)
        // }
        

        // console.log("Earning member array is :", earningmembertablearray)
        // setUserData({ ...userData, "earningmembertable": earningmembertablearray })
        setearningmembertableData({ ...earningmembertableData, ["noOfRows2"]: noOfRows })

        setStep(11)


    }


    return (
        <div className="table1">

            <Card style={{ width: '100ch' }} className='mx-auto'>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '50ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >

                    <div className='boxborder'><br></br>
                    <h6 class="fs-title">Earning Member Details</h6><br></br>
                        <div>
                            <div className="app container mx-10 my-0">
                                <table className="table table-striped table-hover table-bordered p-5">
                                    <thead>
                                        <tr>
                                            <th scope="col">No</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Work</th>
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
                                                        value={earningmembertableData["earning" + newVal + "name"]}
                                                        id={"emname" + index}
                                                        onChange={(e) => setearningmembertableData({ ...earningmembertableData, ["earning" + newVal + "name"]: e.target.value })}
                                                    /></td>
                                                    <td><input type="text" style={{ width: "15rem", border: "0" }}
                                                        value={earningmembertableData["earning" + newVal + "work"]}
                                                        id={"emwork" + index}

                                                        onChange={(e) => setearningmembertableData({ ...earningmembertableData, ["earning" + newVal + "work"]: e.target.value })}
                                                    /></td>
                                                    <td ><input type="number" style={{ width: "15rem", border: "0" }}
                                                        value={earningmembertableData["earning" + newVal + "phonenumber"]}
                                                        id={"emphnum" + index}
                                                        onChange={(e) => setearningmembertableData({ ...earningmembertableData, ["earning" + newVal + "phonenumber"]: e.target.value })}
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

                            </div><br/><br></br>
                            <div>
                                {/* <Button variant='contained' color='success' onClick={saveData}>Save</Button><span> </span> */}

                                <Button variant='contained' color='secondary' onClick={backPage}>Back</Button><span> </span>

                                <Button variant='contained' color='primary' onClick={emArray}>Next</Button><span> </span>

                                {/* <Button onClick={emArray}>Save</Button> */}


                            </div><br />
                        </div>                        
                    </div><br></br></Box>
            </Card>            
        </div>
    )
}
