import React, { useContext, } from 'react'
import { Card, } from 'react-bootstrap'
import { Button, TextField, Box } from '@material-ui/core';
import { multiStepContext } from '../StepContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

export default function TenthStep() {
    // const {setStep, userData, setUserData } = useContext(multiStepContext);
    const { setStep, userData, setUserData, } = useContext(multiStepContext);
    const handleAdmin = () => {
        let referredby = document.getElementById('referredby').value
        let referraladdress = document.getElementById('referraladdress').value
        let surveydoneby = document.getElementById('surveydoneby').value
        let surveydetails = document.getElementById('surveydetails').value
        let specialnotes = document.getElementById('specialnotes').value

        if (referredby == null || referredby === "" || referredby.length < 2  || referredby.length > 50) {
            alert("Enter Referred By ! Length of atleast of 2 characters and less than 50 characters")
        } else if (referraladdress == null || referraladdress === "" || referraladdress.length < 2  || referraladdress.length > 50) {
            alert("Enter Referral Address ! Length of atleast of 2 characters and less than 50 characters")
        } else if (surveydoneby == null || surveydoneby === "" || surveydoneby.length < 2  || surveydoneby.length > 50) {
            alert("Enter survey done by ! Length of atleast of 2 characters and less than 50 characters")
        } else if (surveydetails == null || surveydetails === "" || surveydetails.length < 2  || surveydetails.length > 50) {
            alert("Enter Survey Details ! Length of atleast of 2 characters and less than 50 characters")
        } else if (specialnotes == null || specialnotes === "" || specialnotes.length < 2  || specialnotes.length > 50) {
            alert("Enter special notes ! Length of atleast of 2 characters and less than 50 characters")
        } else {
            setStep(11)
        }

    }
    console.log(userData)
    return (
        <div>
            <Card style={{ width: '56ch' }} className='mx-auto'>
                <span>
                </span><br></br>
                <h6 class="fs-title">Administrative Details</h6><br></br>
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
                            <TextField label="Referred By: " id="referredby" value={userData['referredby']} onChange={(e) => setUserData({ ...userData, "referredby": e.target.value })} margin='normal' variant='standard' color="primary" /><span>  </span>
                        </div>
                        <div>
                            <TextField label="Address of Referral: " id="referraladdress" value={userData['referraladdress']} onChange={(e) => setUserData({ ...userData, "referraladdress": e.target.value })} margin='normal' variant='standard' color="primary" />
                        </div>
                        <div>
                            <TextField label="Survey Done By:" id="surveydoneby" value={userData['surveydoneby']} onChange={(e) => setUserData({ ...userData, "surveydoneby": e.target.value })} margin='normal' variant='standard' color="primary" /><span>  </span>
                            <TextField label="Survey Details:" id="surveydetails" value={userData['surveydetails']} onChange={(e) => setUserData({ ...userData, "surveydetails": e.target.value })} margin='normal' variant='standard' color="primary" /><span>  </span>
                            <TextField label="Special Notes:" id="specialnotes" value={userData['specialnotes']} onChange={(e) => setUserData({ ...userData, "specialnotes": e.target.value })} margin='normal' variant='standard' color="primary" />
                        </div><br />
                        <div>
                            <Button variant='contained' color='secondary' onClick={() => setStep(9)}>Back</Button><span> </span>
                            {/* <Button variant='contained' color='primary' onClick={() => setStep(11)}>Next</Button> */}
                            <Button variant='contained' color='primary' onClick={handleAdmin}>Next</Button>
                        </div><br />
                    </div></Box>
            </Card>
        </div>
    )
}
