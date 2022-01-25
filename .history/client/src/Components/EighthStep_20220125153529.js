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
        // if (mgeducation == null || mgeducation === '' || mgeducation.length < 2  || mgeducation.length > 50) {
        //     alert("Please Enter the MG Education !  Length of atleast of 2 characters and less than 50 characters")
        //     setStep(8)
        // } else if (mgexperience == null || mgexperience === '' || mgexperience.length < 2  || mgexperience.length > 50) {
        //     alert("Enter MG Experience !  Length of atleast of 2 characters and less than 50 characters")
        //     setStep(8)

        // } 
        // else if (mgloanamount == null || mgloanamount === '' || mgloanamount.length < 1  || mgloanamount.length > 8) {
        //     alert("Enter MG Loan Amount !  Length of atleast of 2 digit and less than 8 digit")
        //     setStep(8)

        // } 
        if (mghospitalname == null || mghospitalname === '' || mghospitalname.length < 2  || mghospitalname.length > 50) {
            alert("Enter Hopital Name !  Length of atleast of 2 characters and less than 50 characters")
            setStep(8)

        } 
        else if (mghospitaladdress == null || mghospitaladdress === '' || mghospitaladdress.length < 2  || mghospitaladdress.length > 50) {
            alert("Enter Hospitaal Address !  Length of atleast of 2 characters and less than 50 characters")
            setStep(8)

        } 
        else if (mgdiseasedetails == null || mgdiseasedetails === '' || mgdiseasedetails.length < 2  || mgdiseasedetails.length > 50) {
            alert("Enter Disease Details !  Length of atleast of 2 characters and less than 50 characters")
            setStep(8)

        } 
        else if (mgaprxexpenses == null || mgaprxexpenses === '' || mgaprxexpenses.length < 2  || mgaprxexpenses.length > 8) {
            alert("Enter Approx Expenses !  Length of atleast of 2 digit and less than 8 digit")
            setStep(8)

        } 
        else if (mgamountneeded == null || mgamountneeded === '' || mgamountneeded.length < 2  || mgamountneeded.length > 8) {
            alert("Enter Amount Needed !  Length of atleast of 2 digit and less than 8 digit")
            setStep(8)

        } 
        // else if (mgamtcontri == null || mgamtcontri === '' || mgamtcontri.length < 2  || mgamtcontri.length > 8) {
        //     alert("Enter MG Amount Contribution Self !  Length of atleast of 2 digit and less than 8 digit")
        //     setStep(8)

        // } 
        // else if (mgexistingmedaid == null || mgexistingmedaid === '' || mgexistingmedaid.length < 2  || mgexistingmedaid.length > 50) {
        //     alert("Enter MG Existing Medical Aid !  Length of atleast of 2 characters and less than 50 characters")
        //     setStep(8)

        // } 
        else if (mgmedicalamount == null || mgmedicalamount === '' || mgmedicalamount.length < 2  || mgmedicalamount.length > 8) {
            alert("Enter Medical Amount !  Length of atleast of 2 digit and less than 8 digit")
            setStep(8)

        } 
        // else if (mgmedinsurance == null || mgmedinsurance === '' || mgmedinsurance.length < 2  || mgmedinsurance.length > 50) {
        //     alert("Enter MG Medical Insurance !  Length of atleast of 2 characters and less than 50 characters")
        //     setStep(8)

        // } 
        else {
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

                            <TextField label="Hospital Name" id='mghospitalname' className ="required" value={userData['mghname']} onChange={(e) => setUserData({ ...userData, "mghname": e.target.value })} margin='normal' variant='standard' color="primary" /><span>  </span>
                            <TextField label="Hospital Address" id='mghospitaladdress' className ="required" value={userData['mghaddress']} onChange={(e) => setUserData({ ...userData, "mghaddress": e.target.value })} margin='normal' variant='standard' color="primary" />
                            <TextField label="Disease Details" id='mgdiseasedetails' className ="required" value={userData['mgdiseasedetails']} onChange={(e) => setUserData({ ...userData, "mgdiseasedetails": e.target.value })} margin='normal' variant='standard' color="primary" />
                            <TextField label="Approx. Expenses" id='mgaprxexpenses' className ="required" type="number" value={userData['mgaprxexpenses']} onChange={(e) => setUserData({ ...userData, "mgaprxexpenses": e.target.value })} margin='normal' variant='standard' color="primary" />
                            <TextField label="Amount Needed" id='mgamountneeded' className ="required" type="number" value={userData['mgamountneeded']} onChange={(e) => setUserData({ ...userData, "mgamountneeded": e.target.value })} margin='normal' variant='standard' color="primary" /><span>  </span>
                            <TextField label="Amount Contributed(self)" type="number" id='mgamtcontri' value={userData['mgamtcont']} onChange={(e) => setUserData({ ...userData, "mgamtcont": e.target.value })} margin='normal' variant='standard' color="primary" />
                            <TextField label="Any existing medical aid" id='mgexistingmedaid' value={userData['mgmedicalaid']} onChange={(e) => setUserData({ ...userData, "mgmedicalaid": e.target.value })} margin='normal' variant='standard' color="primary" />
                            <TextField label="Medical Amount" className ="required" type="number" id='mgmedicalamount' value={userData['mgmedamt']} onChange={(e) => setUserData({ ...userData, "mgmedamt": e.target.value })} margin='normal' variant='standard' color="primary" />
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
