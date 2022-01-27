import React, { useContext, } from 'react'
import { Card, } from 'react-bootstrap'
import { Button, TextField, Box, FormControlLabel, FormControl, FormLabel, Radio, RadioGroup } from '@material-ui/core';
import { multiStepContext } from '../StepContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

export default function EighthStep() {
    // const {setStep, userData, setUserData } = useContext(multiStepContext);
    const { setStep, userData, setUserData, } = useContext(multiStepContext);
    console.log(userData)
    const loanStatus = (e) => {
        setUserData({ ...userData, 'mgloanstatus': e.target.value })
        if (e.target.value === 'yes') {
            document.getElementById('loanamount').style.visibility = 'visible'
        } else {
            document.getElementById('loanamount').style.visibility = 'hidden'
        }


    }
    const handlemedicalgrantNext = () =>{
        var mgeducation = document.getElementById('mgeducation').value
        var mgexperience = document.getElementById('mgexperience').value
        var mgloanamount = document.getElementById('mgloanamount').value
        var mghospitalname = document.getElementById('mghospitalname').value
        var mghospitaladdress = document.getElementById('mghospitaladdress').value
        var mgdiseasedetails = document.getElementById('mgdiseasedetails').value
        var mgaprxexpenses = document.getElementById('mgaprxexpenses').value
        var mgamountneeded = document.getElementById('mgamountneeded').value
        var mgamtcontri = document.getElementById('mgamtcontri').value
        var mgexistingmedaid = document.getElementById('mgexistingmedaid').value
        var mgmedicalamount = document.getElementById('mgmedicalamount').value
        var mgmedinsurance = document.getElementById('mgmedinsurance').value
        console.log(mgeducation, mgexperience, mgloanamount, mghospitalname, mghospitaladdress, mgdiseasedetails, mgaprxexpenses, mgamountneeded, mgamtcontri, mgexistingmedaid, mgmedicalamount, mgmedinsurance)

        // else if (mgloanamount == null || mgloanamount === '' || mgloanamount.length < 1  || mgloanamount.length > 8) {
        //     alert("Enter MG Loan Amount !  Length of atleast of 2 digit and less than 8 digit")
        //     setStep(8)

        // } 
        if (mghospitalname == null || mghospitalname === '') {
            document.getElementById('emghospitalname').innerHTML="Please Enter Hopital Name !"
            setStep(8)
        }
        else if(!isNaN(mghospitalname)){
            document.getElementById('emghospitalname').innerHTML="Numbers are not allowed !"
            setStep(8)
        }
        else if(mghospitalname.length < 2  || mghospitalname.length > 50){
            document.getElementById('emghospitalname').innerHTML="Minimum 2 and Maximum 50 characters are allowed !"
            setStep(8)
        } 
        else{
            document.getElementById('emghospitalname').innerHTML=" "
            setStep(8)
        }
        if (mghospitaladdress == null || mghospitaladdress === '') {
            document.getElementById('emghospitaladdress').innerHTML="Please Enter Hopital Address !"
            setStep(8)

        } 
        else if(mghospitaladdress.length < 2  || mghospitaladdress.length > 50){
            document.getElementById('emghospitaladdress').innerHTML="Minimum 2 and Maximum 50 characters are allowed !"
            setStep(8)
        }
        else{
            document.getElementById('emghospitaladdress').innerHTML=" "
            setStep(8)
        }
        if (mgdiseasedetails == null || mgdiseasedetails === '') {
            document.getElementById('emgdiseasedetails').innerHTML="Please Enter Disease Details !"
            setStep(8)
        } 
        else if(mgdiseasedetails.length < 2  || mgdiseasedetails.length > 50){
            document.getElementById('emgdiseasedetails').innerHTML="Minimum 2 and Maximum 50 characters are allowed !"
            setStep(8)
        }
        else{
            document.getElementById('emgdiseasedetails').innerHTML=" "
            setStep(8)
        }
        if(mgaprxexpenses == null || mgaprxexpenses === '') {
            document.getElementById('emgaprxexpenses').innerHTML="Please Enter Approx Expenses !"
            setStep(8)
        }
        else if(mgaprxexpenses.length < 1  || mgaprxexpenses.length > 8){
            document.getElementById('emgaprxexpenses').innerHTML="Minimum 1 and Maximum 8 digits are allowed !"
            setStep(8)
        } 
        else{
            document.getElementById('emgaprxexpenses').innerHTML=" "
            setStep(8)
        }
        if (mgamountneeded == null || mgamountneeded === '') {
            document.getElementById('emgamountneeded').innerHTML="Please Enter Amount Needed !"
            setStep(8)

        } 
        else if(mgamountneeded.length < 1  || mgamountneeded.length > 8){
            document.getElementById('emgamountneeded').innerHTML="Minimum 1 and Maximum 8 digits are allowed !"
            setStep(8)
        }
        else{
            document.getElementById('emgamountneeded').innerHTML=" "
            setStep(8)
        }
        if (mgmedicalamount == null || mgmedicalamount === '') {
            document.getElementById('emgmedicalamount').innerHTML="Please Enter Medical Amount !"
            setStep(8)
        }
        else if(mgmedicalamount.length < 1  || mgmedicalamount.length > 8){
            document.getElementById('emgmedicalamount').innerHTML="Minimum 1 and Maximum 8 digits are allowed !"
            setStep(8)
        }
        else{
            document.getElementById('emgmedicalamount').innerHTML=" "
            setStep(8)
        } 
        if( mghospitalname == null || mghospitalname === '' || mghospitalname.length < 2  || mghospitalname.length > 50 || mghospitaladdress == null || mghospitaladdress === '' || mghospitaladdress.length < 2  || mghospitaladdress.length > 50 || mgdiseasedetails == null || mgdiseasedetails === '' || mgdiseasedetails.length < 2  || mgdiseasedetails.length > 50 || mgaprxexpenses == null || mgaprxexpenses === '' || mgaprxexpenses.length < 1  || mgaprxexpenses.length > 8 || mgamountneeded == null || mgamountneeded === '' || mgamountneeded.length < 1  || mgamountneeded.length > 8 || mgmedicalamount == null || mgmedicalamount === '' || mgmedicalamount.length < 1  || mgmedicalamount.length > 8){
            document.getElementById('invalid').innerHTML="Invalid Input !!"
            setStep(8)
        } 
        else {
            document.getElementById('invalid').innerHTML=" "
            setStep(9)
        }
    }
    return (
        <div>
            <Card style={{ width: '56ch' }} className='mx-auto'>
                <span>
                </span><br></br>
                <h6 class="fs-title">Medical Grant</h6>
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
                            <span id='invalid' class="text-danger size font-weight-bold"></span>
                        </div>
                        <br></br>
                        <div><h6 id="edgl1" >1. Unemployed Person : </h6></div>
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
                                    <td rowSpan={3}> <h6 id="edgl1">2.Any Loan?</h6></td>
                                    <td>
                                        <div className='jainradio'> <FormControl component="fieldset">
                                            <FormLabel component="legend"></FormLabel>
                                            <RadioGroup
                                                aria-label="gender"
                                                name="controlled-radio-buttons-group"
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
                            <div id='loanamount' style={{ visibility: 'hidden' }}>
                                <TextField label="Enter Loan Amount" type="number" id='mgloanamount' value={userData['mgloanamount']} onChange={(e) => setUserData({ ...userData, "mgloanamount": e.target.value })} margin='normal' variant='standard' color="primary" /><span>  </span>
                            </div><br/>

                        </div>

                        <div>
                            <div><h6 id="edgl1" >3. Patient Details : </h6></div>

                            <TextField label="Hospital Name" id='mghospitalname' className ="required" value={userData['mghname']} onChange={(e) => setUserData({ ...userData, "mghname": e.target.value })} margin='normal' variant='standard' color="primary" /><br></br> <span id='emghospitalname' className='text-danger' >  </span>
                            <TextField label="Hospital Address" id='mghospitaladdress' className ="required" value={userData['mghaddress']} onChange={(e) => setUserData({ ...userData, "mghaddress": e.target.value })} margin='normal' variant='standard' color="primary" /><br></br> <span id='emghospitaladdress' className='text-danger' >  </span>
                            <TextField label="Disease Details" id='mgdiseasedetails' className ="required" value={userData['mgdiseasedetails']} onChange={(e) => setUserData({ ...userData, "mgdiseasedetails": e.target.value })} margin='normal' variant='standard' color="primary" /><br></br> <span id='emgdiseasedetails' className='text-danger' >  </span>
                            <TextField label="Approx. Expenses" id='mgaprxexpenses' className ="required" type="number" value={userData['mgaprxexpenses']} onChange={(e) => setUserData({ ...userData, "mgaprxexpenses": e.target.value })} margin='normal' variant='standard' color="primary" /><br></br> <span id='emgaprxexpenses' className='text-danger' >  </span>
                            <TextField label="Amount Needed" id='mgamountneeded' className ="required" type="number" value={userData['mgamountneeded']} onChange={(e) => setUserData({ ...userData, "mgamountneeded": e.target.value })} margin='normal' variant='standard' color="primary" /><br></br> <span id='emgamountneeded' className='text-danger' >  </span>
                            <TextField label="Amount Contributed(self)" type="number" id='mgamtcontri' value={userData['mgamtcont']} onChange={(e) => setUserData({ ...userData, "mgamtcont": e.target.value })} margin='normal' variant='standard' color="primary" />
                            <TextField label="Any existing medical aid" id='mgexistingmedaid' value={userData['mgmedicalaid']} onChange={(e) => setUserData({ ...userData, "mgmedicalaid": e.target.value })} margin='normal' variant='standard' color="primary" />
                            <TextField label="Medical Amount" className ="required" type="number" id='mgmedicalamount' value={userData['mgmedamt']} onChange={(e) => setUserData({ ...userData, "mgmedamt": e.target.value })} margin='normal' variant='standard' color="primary" /><br></br> <span id='emgmedicalamount' className='text-danger' >  </span>
                            <TextField label="Medical Insurance Details" id='mgmedinsurance' value={userData['mginsurancedetails']} onChange={(e) => setUserData({ ...userData, "mginsurancedetails": e.target.value })} margin='normal' variant='standard' color="primary" />
                        </div><br/>
                            
                        
                        
                        <div>
                        <Button variant='contained' color='secondary' onClick={() => setStep(6)}>Back</Button><span> </span>
                        <Button variant='contained' color='primary' onClick={handlemedicalgrantNext}>Next</Button>
                        {/* <Button variant='contained' color='primary' onClick={() => setStep(9)}>Next</Button> */}
                        </div><br />
                    </div></Box>
            </Card>
            {/* 
            <Box

                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '50ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div>



                    {/* <TextField label="Name " value={formData.get('name')} onChange={ (e) => formData.append('name', e.target.value)} margin='normal' variant='outlined' color="secondary" /><span>  </span> */}

            {/* <div>

                        <labe>Name:</labe><br />
                        <TextField label="Name " value={userData['name']} onChange={(e) => setUserData({ ...userData, "name": e.target.value })} margin='normal' variant='outlined' color="secondary" /><span>  </span>
                    </div>
                    <TextField label="Father's / Husband's Name " value={userData['fhname']} onChange={(e) => setUserData({ ...userData, "fhname": e.target.value })} margin='normal' variant='outlined' color="secondary" />
                </div> */}

            {/* </Box> */}


            {/* <div>
                <TextField label="Name" value={userData['Names']} onChange={(e) => setUserData({ ...userData, "Names": e.target.value })} margin='normal' variant='outlined' color="secondary" />
            </div>
            <div>
                <TextField label="last name " margin='normal' variant='outlined' color="secondary" />
            </div>
            <div>
                <TextField label="contact number " margin='normal' variant='outlined' color="secondary" />
            </div> */}

        </div>
    )
}
