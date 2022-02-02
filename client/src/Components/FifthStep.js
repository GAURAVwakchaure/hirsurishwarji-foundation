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
        if (tv == null || tv === ""){
            document.getElementById('etv').innerHTML="Please Enter TV (in quantity) !"
        }
        else if(tv.length < 1  || tv.length > 2){
            document.getElementById('etv').innerHTML="Minimum 1 and Maximum 2 digits are allowed !"
        }
        else{
            document.getElementById('etv').innerHTML=" "
        }
        if(cable == null || cable === ""){
            document.getElementById('ecable').innerHTML="Please Enter Cable (in quantity) !"
        }
        else if(cable.length < 1  || cable.length > 2){
            document.getElementById('ecable').innerHTML="Minimum 1 and Maximum 2 digits are allowed !"
        }
        else{
            document.getElementById('ecable').innerHTML=" "
        }
        if(fridge == null || fridge === ""){
            document.getElementById('efridge').innerHTML="Please Enter Fridge (in quantity) !"
        }
        else if(fridge.length < 1  || fridge.length > 2){
            document.getElementById('efridge').innerHTML="Minimum 1 and Maximum 2 digits are allowed !"
        }
        else{
            document.getElementById('efridge').innerHTML=" "
        }
        if(washingmachine == null || washingmachine === ""){
            document.getElementById('ewashingmachine').innerHTML="Please Enter Washingmachine (in quantity) !"
        }
        else if(washingmachine.length < 1  || washingmachine.length > 2){
            document.getElementById('ewashingmachine').innerHTML="Minimum 1 and Maximum 2 digits are allowed !"
        }
        else{
            document.getElementById('ewashingmachine').innerHTML=" "
        }
        if(vehicle == null || vehicle === ""){
            document.getElementById('evehicle').innerHTML="Please Enter Vehicle (in quantity) !"
        }
        else if(vehicle.length < 1  || vehicle.length > 2){
            document.getElementById('evehicle').innerHTML="Minimum 1 and Maximum 2 digits are allowed !"
        }
        else{
            document.getElementById('evehicle').innerHTML=" "
        }
        if(bike == null || bike === ""){
            document.getElementById('ebike').innerHTML="Please Enter Bike (in quantity) !"
        }
        else if(bike.length < 1  || bike.length > 2){
            document.getElementById('ebike').innerHTML="Minimum 1 and Maximum 2 digits are allowed !"
        }
        else{
            document.getElementById('ebike').innerHTML=" "
        }
        if(phones == null || phones === ""){
            document.getElementById('ephones').innerHTML="Please Enter Phones (in quantity) !"
        }
        else if(phones.length < 1  || phones.length > 2){
            document.getElementById('ephones').innerHTML="Minimum 1 and Maximum 2 digits are allowed !"
        }
        else{
            document.getElementById('ephones').innerHTML=" "
        }
        if(tv == null || tv === "" || tv.length < 1  || tv.length > 2 || cable == null || cable === "" || cable.length < 1  || cable.length > 2 || fridge == null || fridge === "" || fridge.length < 1  || fridge.length > 2 || washingmachine == null || washingmachine === "" || washingmachine.length < 1  || washingmachine.length > 2 || vehicle == null || vehicle === "" || vehicle.length < 1  || vehicle.length > 2 || bike == null || bike === "" || bike.length < 1  || bike.length > 2 || phones == null || phones === "" || phones.length < 1  || phones.length > 2){
            document.getElementById('invalid').innerHTML="Invalid Input !!"
        }
        else {
            document.getElementById('invalid').innerHTML=" "
            setStep(6)
        }
    }
    return (
        <div>

            <Card style={{ width: '56ch' }} className='mx-auto'>
                
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '38ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div className='boxborder'><br></br>
                    <h6 class="fs-title">Home Furniture Details</h6><br></br>
                        <div>
                        <p class="right">*Enter 0 Wheraver Required</p>
                        </div>
                        <div>
                            <span id='invalid' class="text-danger size font-weight-bold"></span>
                        </div>
                        <div>
                            <TextField type="number" className ="required" label="T.V. (in quantity)" id = "tv" value={userData['tv']} onChange={(e) => setUserData({ ...userData, "tv": e.target.value })} margin='normal' variant='standard' color="primary" /><br></br> <span id='etv' className='text-danger' >  </span>
                        </div>
                        <div>
                            <TextField type="number" className ="required" label="Cable (in quantity)" id = "cable" value={userData['cable']} onChange={(e) => setUserData({ ...userData, "cable": e.target.value })} margin='normal' variant='standard' color="primary" /><br></br> <span id='ecable' className='text-danger' >  </span>
                        </div>
                        <div>
                            <TextField type="number" className ="required" label="Fridge (in quantity)" id = "fridge" value={userData['fridge']} onChange={(e) => setUserData({ ...userData, "fridge": e.target.value })} margin='normal' variant='standard' color="primary" /><br></br> <span id='efridge' className='text-danger' >  </span>
                            <div>
                                <TextField type="number" className ="required" label="Washing Machine (in quantity)" id = "washingmachine" value={userData['wahingmachine']} onChange={(e) => setUserData({ ...userData, "washingmachine": e.target.value })} margin='normal' variant='standard' color="primary" /><br></br> <span id='ewashingmachine' className='text-danger' >  </span>

                            </div>
                            <TextField type="number" className ="required" label="Vehicle (in quantity)" id = "vehicle" value={userData['vehicle']} onChange={(e) => setUserData({ ...userData, "vehicle": e.target.value })} margin='normal' variant='standard' color="primary" /><br></br> <span id='evehicle' className='text-danger' >  </span>
                        </div>
                        <div>
                            <TextField type="number" className ="required" label="Bike (in quantity)" id="bike" value={userData['bike']} onChange={(e) => setUserData({ ...userData, "bike": e.target.value })} margin='normal' variant='standard' color="primary" /><br></br> <span id='ebike' className='text-danger' >  </span>
                            <TextField type="number" className ="required" label="Phones (in quantity) " id = "phones" value={userData['phones']} onChange={(e) => setUserData({ ...userData, "phones": e.target.value })} margin='normal' variant='standard' color="primary" /><br></br> <span id='ephones' className='text-danger' >  </span>
                        </div>
                        <br></br>
                        <div>
                            <Button variant='contained' color='secondary' onClick={() => setStep(4)}>Back</Button><span> </span>

                            <Button variant='contained' color='primary' onClick={() => setStep(6)}>Next</Button><span> </span>
                            {/* <Button variant='contained' color='primary' onClick={handleFurniture}>Next</Button><span> </span> */}

                           
                        </div><br />
                    </div><br></br></Box>
            </Card>
            
        </div>
    )
}
