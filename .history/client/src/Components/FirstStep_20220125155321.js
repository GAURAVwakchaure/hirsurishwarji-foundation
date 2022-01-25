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
        var aadharnumber = document.getElementById('aadharnumber').value
        var creed = document.getElementById('creed').value
        var categoryselect = document.getElementById('categoryselect').value
        var jainism = document.getElementById('jainismslect').checked
        console.log(name, fhname, add1, add2, state, city, pincode, nativetown, phonenumber, mobilenumber, creed, jainism, categoryselect)
        if (name == null || name === '' || name.length < 2  || name.length > 50) {
            alert("Please Enter the Name !  Length of Name, atleast of 2 characters and less than 50 characters")
            setStep(1)
        } else if (fhname == null || fhname === '' || fhname.length < 2  || fhname.length > 50) {
            alert("Enter Father or Husband's name !  Length of Name, atleast of 2 characters and less than 50 characters")
            setStep(1)

        } 
        else if (add1 == null || add1 === '' || add1.length < 2  || add1.length > 50) {
            alert("Enter address line 1 !  Length of Address line1, atleast of 2 characters and less than 50 characters")
            setStep(1)

        }
        // else if (add2 == null || add2 === '' || add2.length < 2  || add2.length > 50) {
        //     alert("Enter address line 2 !  Length of Address line2, atleast of 2 characters and less than 50 characters")
        //     setStep(1)

        // }
        else if (city == null || city === '' || city.length < 2  || city.length > 20) {
            alert("Enter City ! Length of City, atleast of 2 characters and less than 20 characters");
            setStep(1)

        }
        else if (state == null || state === '' || state.length < 2  || state.length > 20) {
            alert("Enter State !  Length of State, atleast of 2 characters and less than 20 characters")
            setStep(1)

        }
        else if (pincode == null || pincode === '' || pincode.length !== 6) {
            alert("Please Enter Pincode! Pincode should be of 6 digit")
            setStep(1)

        }
        // else if (nativetown == null || nativetown === '' || nativetown.length < 2  || nativetown.length > 20) {
        //     alert("Enter Native town !  Length of Native Town, atleast of 2 characters and less than 20 characters")
        //     setStep(1)

        // }
        //  
        else if (mobilenumber == null || mobilenumber === '' || mobilenumber.length > 12 || mobilenumber.length < 10) {
            alert("Please Enter Mobile number! Mobile number should be of at least 10 digit and not more than 12 digit")
            setStep(1)
        } 
        else if (aadharnumber == null || aadharnumber === '' || aadharnumber.length !== 12) {
            alert("Please Enter Aadhar Number! Aadhar Number Should be of 12 digit")
            setStep(1)


        }
        // else if (creed == null || creed === '' || creed.length < 2  || creed.length > 20) {
        //     alert("Enter Creed !  Length of Creed, atleast of 2 characters and less than 20 characters")
        //     setStep(1)

        // }
        else if (categoryselect == null || categoryselect === '') {
            alert("Select category")
            setStep(1)

        }
        // else if (jainismslect == null) {
        //     alert("select radio")
        //     setStep(1)

        // }
        else {
            setStep(2)
        }

    }

    console.log(userData)


    return (
        <main>
            <div>
            <Card style={{ width: '56ch' }} className='mx-auto'>
                <span>
                </span><br></br>
                <h6 class="fs-title">Personal Details</h6><br></br>
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
                            <TextField id="name" className ="required" label="Name " value={userData['name']} onChange={(e) => setUserData({ ...userData, "name": e.target.value })} margin='normal' variant='standard' color="primary" placeholder='First_Name     Middle_Name     Last_Name' /><span>  </span>
                        </div>
                        <div>
                            <TextField id="fhname" className ="required" label="Father's / Husband's Name " value={userData['fhname']} onChange={(e) => setUserData({ ...userData, "fhname": e.target.value })} margin='normal' variant='standard' color="primary" placeholder='First_Name     Middle_Name     Last_Name' />
                        </div>
                        <div>
                            <TextField id="add1" className ="required" label="Address 1 " value={userData['add1']} onChange={(e) => setUserData({ ...userData, "add1": e.target.value })} margin='normal' variant='standard' color="primary" placeholder="Room no, Building/Flate/Housing Name" /><span>  </span>
                            <TextField id="add2" label="Address 2 " value={userData['add2']} onChange={(e) => setUserData({ ...userData, "add2": e.target.value })} margin='normal' variant='standard' color="primary" placeholder="Near by Place, Road Name, Town" />
                        </div>
                        <div>
                            <TextField id="city" className ="required" label="City " value={userData['city']} onChange={(e) => setUserData({ ...userData, "city": e.target.value })} margin='normal' variant='standard' color="primary" placeholder="Please Enter your City" /><span>  </span>
                            <TextField id="state" className ="required" label="State" value={userData['state']} onChange={(e) => setUserData({ ...userData, "state": e.target.value })} margin='normal' variant='standard' color="primary" placeholder="Please Enter your State" />
                            
                        </div>
                        <div>
                            <TextField id="pincode" className ="required" type="number" label="Pincode " value={userData['pincode']} onChange={(e) => setUserData({ ...userData, "pincode": e.target.value })} margin='normal' variant='standard' color="primary" placeholder="Please Enter 6 Digit PIN Code" /><span>  </span>
                            <TextField id="nativetown" label="Native Town " value={userData['nativetown']} onChange={(e) => setUserData({ ...userData, "nativetown": e.target.value })} margin='normal' variant='standard' color="primary"  placeholder="Please Enter Native Town" />
                        </div>
                        <div>
                            <TextField id="phonenumber" type="number" label="Phone Number " value={userData['phonenumber']} onChange={(e) => setUserData({ ...userData, "phonenumber": e.target.value })} margin='normal' variant='standard' color="primary" placeholder="Please Enter Phone Number" /><span>  </span>
                            <TextField id="mobilenumber" className ="required" type="number" label="Mobile Number" value={userData['mobilenumber']} onChange={(e) => setUserData({ ...userData, "mobilenumber": e.target.value })} margin='normal' variant='standard' color="primary" placeholder="Please Enter 10 Digit Mobile Number" />
                            <TextField id="aadharnumber" className ="required" type="number" label="Aadhar Number" value={userData['aadharnumber']} onChange={(e) => setUserData({ ...userData, "aadharnumber": e.target.value })} margin='normal' variant='standard' color="primary" placeholder="Please Enter 12 Digit Aadhar Number" />
                        </div>
                        <div>

                            <TextField id="creed" label="Creed " value={userData['creed']} onChange={(e) => setUserData({ ...userData, "creed": e.target.value })} margin='normal' variant='standard' color="primary" placeholder="Please Enter Your Creed" />
                        </div><br />

                        <div>
                        <h6 id="category" className='requireds'><p>Category</p>
                            </h6>

                            <select class="form-select" aria-label="Default select example" id="categoryselect" value={userData['category']} onChange={(e) => setUserData({ ...userData, 'category': e.target.value })}>
                                <option value="">----Select----</option>
                                <option value="grocery">Grocery</option>
                                <option value="medical">Medical</option>
                                <option value="education">Education</option>

                            </select>
                        </div><br />
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
                    </div></Box>
            </Card>
            
        </div>
        </main>
        
    )
}
