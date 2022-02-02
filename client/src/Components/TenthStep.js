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
        // let referredby = document.getElementById('referredby').value
        // let referraladdress = document.getElementById('referraladdress').value
        let surveydoneby = document.getElementById('surveydoneby').value
        // let surveydetails = document.getElementById('surveydetails').value
        // let specialnotes = document.getElementById('specialnotes').value

        // if (referredby == null || referredby === "") {
        //     document.getElementById('ereferredby').innerHTML="Please Enter Referred By !"
        // } 
        // else if(!isNaN(referredby)){
        //     document.getElementById('ereferredby').innerHTML="Numbers are not allowed !"
        // }
        // else if(referredby.length < 2  || referredby.length > 50){
        //     document.getElementById('ereferredby').innerHTML="Minimum 2 and Maximum 50 characters are allowed !"
        // }
        // else{
        //     document.getElementById('ereferredby').innerHTML=" "
        // }
        // if (referraladdress == null || referraladdress === "") {
        //     document.getElementById('ereferraladdress').innerHTML="Please Enter Referral Address !"
        // } 
        // else if(referraladdress.length < 2  || referraladdress.length > 50){
        //     document.getElementById('ereferraladdress').innerHTML="Minimum 2 and Maximum 50 characters are allowed !"
        // }
        // else{
        //     document.getElementById('ereferraladdress').innerHTML=" "
        // }
        if (surveydoneby == null || surveydoneby === "") {
            document.getElementById('esurveydoneby').innerHTML="Please Enter survey done by !"
        }
        else if(!isNaN(surveydoneby)){
            document.getElementById('esurveydoneby').innerHTML="Numbers are not allowed !"
        }
        else if(surveydoneby.length < 2  || surveydoneby.length > 50){
            document.getElementById('esurveydoneby').innerHTML="Minimum 2 and Maximum 50 characters are allowed !"
        } 
        else{
            document.getElementById('esurveydoneby').innerHTML=" "
        }
        // if(referredby == null || referredby === "" || referredby.length < 2  || referredby.length > 50 || referraladdress == null || referraladdress === "" || referraladdress.length < 2  || referraladdress.length > 50 || surveydoneby == null || surveydoneby === "" || surveydoneby.length < 2  || surveydoneby.length > 50){
        //     document.getElementById('invalid').innerHTML="Invalid Input !!"
        // }
        //  else {
        //     document.getElementById('invalid').innerHTML=" "
        //     setStep(11)
        // }

    }
    console.log(userData)
    return (
        <div>
            <Card style={{ width: '56ch' }} className='mx-auto'>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '50ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div className='boxborder'><br></br>
                    {/* <h6 class="fs-title">Administrative Details</h6><br></br> */}
                        {/* <div>
                            <span id='invalid' class="text-danger size font-weight-bold"></span>
                        </div> */}
                        {/* <div>
                            <TextField label="Referred By: " className ="required" id="referredby" value={userData['referredby']} onChange={(e) => setUserData({ ...userData, "referredby": e.target.value })} margin='normal' variant='standard' color="primary" /><br></br> <span id='ereferredby' className='text-danger' >  </span>
                        </div>
                        <div>
                            <TextField label="Address of Referral: " className ="required" id="referraladdress" value={userData['referraladdress']} onChange={(e) => setUserData({ ...userData, "referraladdress": e.target.value })} margin='normal' variant='standard' color="primary" /><br></br> <span id='ereferraladdress' className='text-danger' >  </span>
                        </div> */}
                        <div>
                            <TextField label="Survey Done By:" className ="required" id="surveydoneby" value={userData['surveydoneby']} onChange={(e) => setUserData({ ...userData, "surveydoneby": e.target.value })} margin='normal' variant='standard' color="primary" /><br></br> <span id='esurveydoneby' className='text-danger' >  </span>
                            <TextField label="Survey Details:" id="surveydetails" value={userData['surveydetails']} onChange={(e) => setUserData({ ...userData, "surveydetails": e.target.value })} margin='normal' variant='standard' color="primary" /><span>  </span>
                            <TextField label="Special Notes:" id="specialnotes" value={userData['specialnotes']} onChange={(e) => setUserData({ ...userData, "specialnotes": e.target.value })} margin='normal' variant='standard' color="primary" />
                        </div><br />
                        <div>
                            <Button variant='contained' color='secondary' onClick={() => setStep(9)}>Back</Button><span> </span>
                            {/* <Button variant='contained' color='primary' onClick={() => setStep(11)}>Next</Button> */}
                            <Button variant='contained' color='primary' onClick={handleAdmin}>Next</Button>
                        </div><br />
                    </div><br></br></Box>
            </Card>
        </div>
    )
}
