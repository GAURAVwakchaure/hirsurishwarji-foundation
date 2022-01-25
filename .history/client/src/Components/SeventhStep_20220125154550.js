import React, { useContext, } from 'react'
import { Card, } from 'react-bootstrap'
import { Button, TextField, Box, FormControlLabel, FormControl, FormLabel, Radio, RadioGroup } from '@material-ui/core';
import { multiStepContext } from '../StepContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

export default function SeventhStep() {
    // const {setStep, userData, setUserData } = useContext(multiStepContext);
    const { setStep, userData, setUserData, } = useContext(multiStepContext);
    console.log(userData)
    const loanStatus = (e) => {
        setUserData({ ...userData, 'egloanstatus': e.target.value })
        if (e.target.value === 'yes') {
            document.getElementById('loanamount').style.visibility = 'visible'
        } else {
            document.getElementById('loanamount').style.visibility = 'hidden'
        }


    }
    const handleeducationgrantNext = () =>{
        var egname = document.getElementById('egname').value
        var egadd = document.getElementById('egadd').value
        var egcdname = document.getElementById('egcdname').value
        var egafee = document.getElementById('egafee').value
        var egmoneyneed = document.getElementById('egmoneyneed').value
        if (egname == null || egname === '' || egname.length < 2  || egname.length > 50) {
            alert("Enter Name !  Length of atleast of 2 characters and less than 50 characters")
        } 
        else if (egadd == null || egadd === '' || egadd.length < 2  || egadd.length > 50) {
            alert("Enter Address !  Length of atleast of 2 characters and less than 50 characters")
        }
        else if (egcdname == null || egcdname === '' || egcdname.length < 2  || egcdname.length > 20) {
            alert("Enter Course/Degree Name !  Length of atleast of 2 characters and less than 20 characters")
        }
        else if (egafee == null || egafee === '' || egafee.length < 1  || egafee.length > 8) {
            alert("Enter Annual Fees !  Length of atleast of 1 digit and less than 8 digit")
        }
        else if (egmoneyneed == null || egmoneyneed=== '' || egmoneyneed.length < 1  || egmoneyneed.length > 8) {
            alert("Enter Money Needed !  Length of atleast of 1 digit and less than 8 digit")
        }
        else {
            setStep(9)
        }
    }
    return (
        <div>
            <Card style={{ width: '56ch' }} className='mx-auto'>
                <span>
                </span><br></br>
                <h6 class="fs-title">Education Grant</h6>
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
                            <TextField label="Education" value={userData['egunemployedpersoneducation']} onChange={(e) => setUserData({ ...userData, "egunemployedpersoneducation": e.target.value })} margin='normal' variant='standard' color="primary" /><span>  </span>
                        </div>
                        <div>
                            <TextField label="Experience" value={userData['egunemployedpersonexperience']} onChange={(e) => setUserData({ ...userData, "egunemployedpersonexperience": e.target.value })} margin='normal' variant='standard' color="primary" />
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
                                                value={userData['egloanstatus']}
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
                            
                            <div id='loanamount' className="loanamount" style={{ visibility: 'hidden' }}>
                                <TextField label="Enter Loan Amount" value={userData['loanamount']} onChange={(e) => setUserData({ ...userData, "loanamount": e.target.value })} margin='normal' variant='standard' color="primary" /><span>  </span>
                            </div><br />

                        </div>

                        <div>
                            <div><h6 id="edgl1" >3. School/College : </h6></div>

                            <TextField id='egname' label="Name" className ="required" value={userData['egscname']} onChange={(e) => setUserData({ ...userData, "egscname": e.target.value })} margin='normal' variant='standard' color="primary" /><span>  </span>
                            <TextField id='egadd' label="Address" className ="required" value={userData['egscaddress']} onChange={(e) => setUserData({ ...userData, "egscaddress": e.target.value })} margin='normal' variant='standard' color="primary" />
                            <TextField id='egcdname' label="Course/Degree Name" className ="required" value={userData['egcoursename']} onChange={(e) => setUserData({ ...userData, "egcoursename": e.target.value })} margin='normal' variant='standard' color="primary" />
                            <TextField id='egafee' label="Annual Fees" type="number" className ="required" value={userData['egannualfees']} onChange={(e) => setUserData({ ...userData, "egannualfees": e.target.value })} margin='normal' variant='standard' color="primary" />
                            <TextField label="Details of Course" value={userData['egdetailsofcourse']} onChange={(e) => setUserData({ ...userData, "egdetailsofcourse": e.target.value })} margin='normal' variant='standard' color="primary" />
                        </div><br />
                        <div>
                            <div>
                                <h6 id="edgl1" >3. Independent : </h6></div>

                            <TextField label="" id="outlined-sized-small" value={userData['egindependent']} onChange={(e) => setUserData({ ...userData, "egindependent": e.target.value })} margin='normal' variant='standard' color="primary" /><span>  </span>
                        </div><br />
                        <div>
                          <h6 id="edgl1" className ="requireds" ><p>4. Money Needed :</p></h6>
                            <TextField id='egmoneyneed' type="number" label="" value={userData['egmoneyneeded']} onChange={(e) => setUserData({ ...userData, "egmoneyneeded": e.target.value })} margin='normal' variant='standard' color="primary" /><span>  </span>
                        </div><br />
                        <div>
                            <h6 id="edgl1" >5. Self Manage Contribution: </h6>

                            <TextField label="" type="number" value={userData['egselfmanagecontribution']} onChange={(e) => setUserData({ ...userData, "egselfmanagecontribution": e.target.value })} margin='normal' variant='standard' color="primary" /><span>  </span>
                        </div><br />
                        <div>
                            <Button variant='contained' color='secondary' onClick={() => setStep(6)}>Back</Button><span> </span>
                            {/* <Button variant='contained' color='primary' onClick={() => setStep(9)}>Next</Button> */}
                            <Button variant='contained' color='primary' onClick={handleeducationgrantNext}>Next</Button>
                        </div><br />
                    </div></Box>
            </Card>


        </div>
    )
}
