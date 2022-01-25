import React, { useContext, } from 'react'
import { Card, } from 'react-bootstrap'
import { Button, TextField, Box } from '@material-ui/core';
import { multiStepContext } from '../StepContext';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function FifthStep() {
    const { setStep, userData, setUserData, } = useContext(multiStepContext);
    console.log(userData)
    const handleFurniture = () =>{
        let tv = document.getElementById('tv').value
        let cable = document.getElementById('cable').value
        let fridge = document.getElementById('fridge').value
        let washingmachine = document.getElementById('washingmachine').value
        let vehicle = document.getElementById('vehicle').value
        let bike = document.getElementById('bike').value
        let phones = document.getElementById('phones').value
        if (tv == null || tv === "" || tv.length < 1  || tv.length > 2){
            alert("Enter TV Qantity ! At least 1 Digit and not more than 2 digit")
        }else if(cable == null || cable === "" || cable.length < 1  || cable.length > 2){
            alert("Enter Cable ! At least 1 Digit and not more than 2 digit")
        }else if(fridge == null || fridge === "" || fridge.length < 1  || fridge.length > 2){
            alert("Enter Fridge ! At least 1 Digit and not more than 2 digit")
        }else if(washingmachine == null || washingmachine === "" || washingmachine.length < 1  || washingmachine.length > 2){
            alert("Enter Washingmachine ! At least 1 Digit and not more than 2 digit")
        }else if(vehicle == null || vehicle === "" || vehicle.length < 1  || vehicle.length > 2){
            alert("Enter Vehicle ! At least 1 Digit and not more than 2 digit")
        }else if(bike == null || bike === "" || bike.length < 1  || bike.length > 2){
            alert("Enter Bike ! At least 1 Digit and not more than 2 digit")
        }else if(phones == null || phones === "" || phones.length < 1  || phones.length > 2){
            alert("Enter Phones ! At least 1 Digit and not more than 2 digit")
        }else{
            setStep(6)
        }
    }
    return (
        <div>

            <Card style={{ width: '56ch' }} className='mx-auto'>
                <span>

                </span><br></br>
                <h6 class="fs-title">Home Furniture Details</h6><br></br>
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
                        <p class="right">*Enter 0 Wheraver Required</p>
                        </div>
                        <div>
                            <TextField type="number" className ="required" label="T.V. (in quantity)" id = "tv" value={userData['tv']} onChange={(e) => setUserData({ ...userData, "tv": e.target.value })} margin='normal' variant='standard' color="primary" /><span>  </span>
                        </div>
                        <div>
                            <TextField type="number" className ="required" label="Cable (in quantity)" id = "cable" value={userData['cable']} onChange={(e) => setUserData({ ...userData, "cable": e.target.value })} margin='normal' variant='standard' color="primary" />
                        </div>
                        <div>
                            <TextField type="number" className ="required" label="Fridge (in quantity)" id = "fridge" value={userData['fridge']} onChange={(e) => setUserData({ ...userData, "fridge": e.target.value })} margin='normal' variant='standard' color="primary" /><span>  </span>
                            <div>
                                <TextField type="number" className ="required" label="Washing Machine (in quantity)" id = "washingmachine" value={userData['wahingmachine']} onChange={(e) => setUserData({ ...userData, "washingmachine": e.target.value })} margin='normal' variant='standard' color="primary" /><span>  </span>

                            </div>
                            <TextField type="number" className ="required" label="Vehicle (in quantity)" id = "vehicle" value={userData['vehicle']} onChange={(e) => setUserData({ ...userData, "vehicle": e.target.value })} margin='normal' variant='standard' color="primary" />
                        </div>
                        <div>
                            <TextField type="number" className ="required" label="Bike (in quantity)" id="bike" value={userData['bike']} onChange={(e) => setUserData({ ...userData, "bike": e.target.value })} margin='normal' variant='standard' color="primary" /><span>  </span>
                            <TextField type="number" className ="required" label="Phones (in quantity) " id = "phones" value={userData['phones']} onChange={(e) => setUserData({ ...userData, "phones": e.target.value })} margin='normal' variant='standard' color="primary" />
                        </div>
                        <br></br>
                        <div>
                            <Button variant='contained' color='secondary' onClick={() => setStep(4)}>Back</Button><span> </span>

                            {/* <Button variant='contained' color='primary' onClick={() => setStep(6)}>Next</Button><span> </span> */}
                            <Button variant='contained' color='primary' onClick={handleFurniture}>Next</Button><span> </span>

                            {/* <Button variant='contained' color='primary' onClick={submitData}>submit</Button><span></span>

                            <Button variant='contained' color='primary' onClick={showData}>showdata</Button> */}

                        </div><br />
                    </div></Box>
            </Card>
            
        </div>
    )
}
