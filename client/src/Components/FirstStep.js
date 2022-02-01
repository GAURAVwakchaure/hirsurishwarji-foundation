import React, { useContext, } from 'react'
import { Card, } from 'react-bootstrap'
import { Button, TextField, Box, FormControlLabel, FormControl, FormLabel, Radio, RadioGroup } from '@material-ui/core';
import { multiStepContext } from '../StepContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

export default function FirstStep() {
    // const {setStep, userData, setUserData } = useContext(multiStepContext);
    const { setStep, userData, setUserData, } = useContext(multiStepContext);

    const handleNext = () => {
        var name = document.getElementById('name').value
        var fhname = document.getElementById('fhname').value
        var add1 = document.getElementById('add1').value
        var add2 = document.getElementById('add2').value
        var state = document.getElementById('state').value
        var city = document.getElementById('city').value
        var pincode = document.getElementById('pincode').value
        var nativetown = document.getElementById('nativetown').value
        var phonenumber = document.getElementById('phonenumber').value
        var mobilenumber = document.getElementById('mobilenumber').value
        // var aadharnumber = document.getElementById('aadharnumber').value
        var creed = document.getElementById('creed').value
        var categoryselect = document.getElementById('categoryselect').value
        var jainism = document.getElementById('jainismslect').checked
        console.log(name, fhname, add1, add2, state, city, pincode, nativetown, phonenumber, mobilenumber, creed, jainism, categoryselect)
        if (name == null || name === '') {
            document.getElementById('ename').innerHTML="Please Enter the Name !"
        }
        else if(!isNaN(name)){
            document.getElementById('ename').innerHTML="Numbers are not allowed !"
            setStep(1)
        }
        else if (name.length < 2  || name.length > 50) {
            document.getElementById('ename').innerHTML="Minimum 2 and Maximum 50 characters are allowed !"
            setStep(1)
        }
        else{
            document.getElementById('ename').innerHTML=" "
            setStep(1)
        }
        if (fhname == null || fhname === ''){
            document.getElementById('efhname').innerHTML="Please Enter Father or Husband's name !"
            setStep(1)
        }
        else if(!isNaN(fhname)){
            document.getElementById('efhname').innerHTML="Numbers are not allowed !"
            setStep(1)
        }
        else if (fhname.length < 2  || fhname.length > 50) {
            document.getElementById('efhname').innerHTML="Minimum 2 and Maximum 50 characters are allowed !"
            setStep(1)
        }
        else{
            document.getElementById('efhname').innerHTML=" "
            setStep(1)
        }
        if (add1 == null || add1 === ''){
            document.getElementById('eadd1').innerHTML="Please Enter Address Line 1 !"
            setStep(1)
        }
        else if (add1.length < 2  || add1.length > 50) {
            document.getElementById('eadd1').innerHTML="Minimum 2 and Maximum 50 characters are allowed !"
            setStep(1)
        }
        else{
            document.getElementById('eadd1').innerHTML=" "
            setStep(1)
        }
        if (city == null || city === ''){
            document.getElementById('ecity').innerHTML="Please Enter City !"
            setStep(1)
        }
        else if(!isNaN(city)){
            document.getElementById('ecity').innerHTML="Numbers are not allowed !"
            setStep(1)
        }
        else if (city.length < 2  || city.length > 20) {
            document.getElementById('ecity').innerHTML="Minimum 2 and Maximum 20 characters are allowed !"
            setStep(1)
        }
        else{
            document.getElementById('ecity').innerHTML=" "
            setStep(1)
        }
        if (state == null || state === ''){
            document.getElementById('estate').innerHTML="Please Enter State!"
            setStep(1)
        }
        else if(!isNaN(state)){
            document.getElementById('estate').innerHTML="Numbers are not allowed !"
            setStep(1)
        }
        else if (state.length < 2  || state.length > 20) {
            document.getElementById('estate').innerHTML="Minimum 2 and Maximum 20 characters are allowed !"
            setStep(1)
        }
        else{
            document.getElementById('estate').innerHTML=" "
            setStep(1)
        }
        if (pincode == null || pincode === ''){
            document.getElementById('epincode').innerHTML="Please Enter Pin Code!"
            setStep(1)
        }
        else if (pincode.length !== 6) {
            document.getElementById('epincode').innerHTML="Pin code should be of 6 digit only !"
            setStep(1)
        }
        else{
            document.getElementById('epincode').innerHTML=" "
            setStep(1)
        }
        if (mobilenumber == null || mobilenumber === ''){
            document.getElementById('emobilenumber').innerHTML="Please Enter Mobile Number!"
            setStep(1)
        }
        else if (mobilenumber.length !== 10) {
            document.getElementById('emobilenumber').innerHTML="Mobile Number should be of 10 digit only !"
            setStep(1)
        }
        else{
            document.getElementById('emobilenumber').innerHTML=" "
            setStep(1)
        }
        if (categoryselect == null || categoryselect === ''){
            document.getElementById('ecategoryselect').innerHTML="Please Select Catagory!"
            setStep(1)
        }
        else{
            document.getElementById('ecategoryselect').innerHTML=" "
            setStep(1)
        }
        if(name == null || name === '' || !isNaN(name) || name.length < 2  || name.length > 50 || fhname == null || fhname === '' || !isNaN(fhname) || fhname.length < 2  || fhname.length > 50 || add1 == null || add1 === '' || add1.length < 2  || add1.length > 50 || city == null || city === '' || !isNaN(city) || city.length < 2  || city.length > 20 || state == null || state === '' || !isNaN(state) || state.length < 2  || state.length > 20 || pincode == null || pincode === '' || pincode.length !== 6 || mobilenumber == null || mobilenumber === '' || mobilenumber.length !== 10 || categoryselect == null || categoryselect === ''){
            document.getElementById('invalid').innerHTML="Invalid Input !!"
        }
        else {
            document.getElementById('invalid').innerHTML=" "
            setStep(2)
        }

    }

    console.log(userData)


    return (
        <main>
            <div>
            <Card style={{ width: '56ch' }} className='mx-auto'>
                
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '45ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div className='boxborder'><br></br>
                    <h6 class="fs-title">Personal Details</h6><br></br>
                        <div>
                            <span id='invalid' class="text-danger size font-weight-bold"></span>
                        </div>
                        <div>
                            <TextField id="name" className ="required" label="Name " value={userData['name']} onChange={(e) => setUserData({ ...userData, "name": e.target.value })} margin='normal' variant='standard' color="primary" placeholder='First_Name     Middle_Name     Last_Name' /><br></br> <span id='ename' className='text-danger' >  </span>
                        </div>
                        <div>
                            <TextField id="fhname" className ="required" label="Father's / Husband's Name " value={userData['fhname']} onChange={(e) => setUserData({ ...userData, "fhname": e.target.value })} margin='normal' variant='standard' color="primary" placeholder='First_Name     Middle_Name     Last_Name' /><br></br> <span id='efhname' className='text-danger'>  </span>
                        </div>
                        <div>
                            <TextField id="add1" className ="required" label="Address 1 " value={userData['add1']} onChange={(e) => setUserData({ ...userData, "add1": e.target.value })} margin='normal' variant='standard' color="primary" placeholder="Room no, Building/Flate/Housing Name" /><br></br><span id='eadd1' className='text-danger'>  </span>
                            <TextField id="add2" label="Address 2 " value={userData['add2']} onChange={(e) => setUserData({ ...userData, "add2": e.target.value })} margin='normal' variant='standard' color="primary" placeholder="Near by Place, Road Name, Town" />
                        </div>
                        <div>
                            <TextField id="city" className ="required" label="City " value={userData['city']} onChange={(e) => setUserData({ ...userData, "city": e.target.value })} margin='normal' variant='standard' color="primary" placeholder="Please Enter your City" /><br></br><span id='ecity' className='text-danger'>  </span>
                            <TextField id="state" className ="required" label="State" value={userData['state']} onChange={(e) => setUserData({ ...userData, "state": e.target.value })} margin='normal' variant='standard' color="primary" placeholder="Please Enter your State" /><br></br><span id='estate' className='text-danger'>  </span>
                            
                        </div>
                        <div>
                            <TextField id="pincode" className ="required" type="number" label="Pincode " value={userData['pincode']} onChange={(e) => setUserData({ ...userData, "pincode": e.target.value })} margin='normal' variant='standard' color="primary" placeholder="Please Enter 6 Digit PIN Code" /><br></br><span id='epincode' className='text-danger'>  </span>
                            <TextField id="nativetown" label="Native Town " value={userData['nativetown']} onChange={(e) => setUserData({ ...userData, "nativetown": e.target.value })} margin='normal' variant='standard' color="primary"  placeholder="Please Enter Native Town" />
                        </div>
                        <div>
                        <TextField id="mobilenumber" className ="required" type="number" label="Mobile Number" value={userData['mobilenumber']} onChange={(e) => setUserData({ ...userData, "mobilenumber": e.target.value })} margin='normal' variant='standard' color="primary" placeholder="Please Enter 10 Digit Mobile Number" /><br></br><span id='emobilenumber' className='text-danger'>  </span>
                            <TextField id="phonenumber" type="number" label="Phone Number " value={userData['phonenumber']} onChange={(e) => setUserData({ ...userData, "phonenumber": e.target.value })} margin='normal' variant='standard' color="primary" placeholder="Please Enter Phone Number" /><span>  </span>
                            {/* <TextField id="aadharnumber" className ="required" type="number" label="Aadhar Number" value={userData['aadharnumber']} onChange={(e) => setUserData({ ...userData, "aadharnumber": e.target.value })} margin='normal' variant='standard' color="primary" placeholder="Please Enter 12 Digit Aadhar Number" /> */}
                        </div>
                        <div>

                            <TextField id="creed" label="Creed " value={userData['creed']} onChange={(e) => setUserData({ ...userData, "creed": e.target.value })} margin='normal' variant='standard' color="primary" placeholder="Please Enter Your Creed" />
                        </div><br />

                        <div>
                        <h6 id="category" className='requireds'><p>Category</p>
                            </h6>

                            <select class="form-select" aria-label="Default select example" id="categoryselect" value={userData['category']} onChange={(e) => setUserData({ ...userData, 'category': e.target.value })}>
                                {/* <option value="">----Select----</option> */}
                                <option value="grocery">Financial</option>
                                <option value="medical">Medical</option>
                                <option value="education">Education</option>

                            </select>
                        </div><br></br><span id='ecategoryselect' className='text-danger'>  </span>
                        <table>
                            <tr>
                                <td rowSpan={3}> <h6 id="jainism">Are You Jain?</h6></td>
                                <td>
                                    <div className='jainradio'> <FormControl component="fieldset">
                                        <FormLabel component="legend"></FormLabel>
                                        <RadioGroup


                                            aria-label="gender"
                                            id="jainismslect"
                                            name="controlled-radio-buttons-group"
                                            value={userData['jainism']}
                                            defaultValue="yes"
                                            onChange={(e) => setUserData({ ...userData, 'jainism': e.target.value })}
                                            row={true}

                                            style={{ marginleft: '2rem', display: 'flex', alignItems: 'left' }}

                                        >
                                            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                            <FormControlLabel value="no" control={<Radio />} label="No" />
                                        </RadioGroup>
                                    </FormControl></div></td>
                            </tr>

                        </table>

                        <br></br>
                        <div>
                        <Button variant='contained' color='primary' onClick={handleNext}>Next</Button>
                        {/* <Button variant='contained' color='primary' onClick={() => setStep(2)}>Next</Button> */}
                        </div><br />
                    </div> <br></br></Box>
            </Card>
            
        </div>
        </main>
        
    )
}
