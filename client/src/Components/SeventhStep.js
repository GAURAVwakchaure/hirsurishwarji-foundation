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

                            <TextField label="Name" value={userData['egscname']} onChange={(e) => setUserData({ ...userData, "egscname": e.target.value })} margin='normal' variant='standard' color="primary" /><span>  </span>
                            <TextField label="Address" value={userData['egscaddress']} onChange={(e) => setUserData({ ...userData, "egscaddress": e.target.value })} margin='normal' variant='standard' color="primary" />
                            <TextField label="Course/Degree Name" value={userData['egcoursename']} onChange={(e) => setUserData({ ...userData, "egcoursename": e.target.value })} margin='normal' variant='standard' color="primary" />
                            <TextField label="Annual Fees" value={userData['egannualfees']} onChange={(e) => setUserData({ ...userData, "egannualfees": e.target.value })} margin='normal' variant='standard' color="primary" />
                            <TextField label="Details of Course" value={userData['egdetailsofcourse']} onChange={(e) => setUserData({ ...userData, "egdetailsofcourse": e.target.value })} margin='normal' variant='standard' color="primary" />
                        </div><br />
                        <div>
                            <div>
                                <h6 id="edgl1" >3. Independent : </h6></div>

                            <TextField label="" id="outlined-sized-small" value={userData['egindependent']} onChange={(e) => setUserData({ ...userData, "egindependent": e.target.value })} margin='normal' variant='standard' color="primary" /><span>  </span>
                        </div><br />
                        <div>
                            <h6 id="edgl1" >4. Money Needed : </h6>
                            <TextField label="" value={userData['egmoneyneeded']} onChange={(e) => setUserData({ ...userData, "egmoneyneeded": e.target.value })} margin='normal' variant='standard' color="primary" /><span>  </span>
                        </div><br />
                        <div>
                            <h6 id="edgl1" >5. Self Manage Contribution: </h6>

                            <TextField label="" value={userData['egselfmanagecontribution']} onChange={(e) => setUserData({ ...userData, "egselfmanagecontribution": e.target.value })} margin='normal' variant='standard' color="primary" /><span>  </span>
                        </div><br />
                        <div>
                            <Button variant='contained' color='secondary' onClick={() => setStep(6)}>Back</Button><span> </span>
                            <Button variant='contained' color='primary' onClick={() => setStep(9)}>Next</Button>
                        </div><br />
                    </div></Box>
            </Card>


        </div>
    )
}
