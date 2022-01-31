import React, { useContext } from 'react'
import { multiStepContext } from '../StepContext';
import { Card, } from 'react-bootstrap'

import { Button, Box, TextField } from '@material-ui/core';


export default function SecondStep() {
    // const {setStep, userData, setUserData } = useContext(multiStepContext);
    const { setStep, userData, setUserData } = useContext(multiStepContext);
    console.log(userData)

    const handleuploadNext = () => {
        var file1 = document.getElementById('file1').value
        var file2 = document.getElementById('file2').value
        var file3 = document.getElementById('file3').value
        var file4 = document.getElementById('file4').value
        var file5 = document.getElementById('file5').value
        var file6 = document.getElementById('file6').value
        var file7 = document.getElementById('file7').value
        var file8 = document.getElementById('file8').value
        var file9 = document.getElementById('file9').value
        var file10 = document.getElementById('file10').value
        var file11 = document.getElementById('file11').value
        var file12 = document.getElementById('file12').value
        var rationcardnumber = document.getElementById('rationcardnumber').value
        var bankaccountdetails = document.getElementById('bankaccountdetails').value
        var aadharnumber = document.getElementById('aadharnumber').value
        console.log(file1, file2, file3, file4, file5, file6, file7, file8, file9, file10, file11, file12)
        if (file1 == null || file1 === '') {
            document.getElementById('efile1').innerHTML="Please upload Ration Card !"
            setStep(2)
        }
        else {
            document.getElementById('efile1').innerHTML=" "
            setStep(2)
        }
        if (rationcardnumber == null || rationcardnumber === '') {
            document.getElementById('erationcardnumber').innerHTML="Please Enter Ration card number !"
            setStep(2)
        }
        else if (rationcardnumber.length > 12 || rationcardnumber.length < 4){
            document.getElementById('erationcardnumber').innerHTML="Minimum 4 and Maximum 12 digits are allowed !"
            setStep(2)
        }
        else{
            document.getElementById('erationcardnumber').innerHTML=" "
            setStep(2)
        }
        if (file6 == null || file6 === '') {
            document.getElementById('efile6').innerHTML="Please upload Bank Passbook !"
            setStep(2)
        }
        else {
            document.getElementById('efile6').innerHTML=" "
            setStep(2)
        }
        if (bankaccountdetails == null || bankaccountdetails === '') {
            document.getElementById('ebankaccountdetails').innerHTML="Please upload Bank Account Number !"
            setStep(2)
        }
        else if (bankaccountdetails.length > 12 || bankaccountdetails.length < 4 ) {
            document.getElementById('ebankaccountdetails').innerHTML="Minimum 4 and Maximum 12 digits are allowed !"
            setStep(2)
        }
        else{
            document.getElementById('ebankaccountdetails').innerHTML=" "
        }
        if (file10 == null || file10 === '') {
            document.getElementById('efile10').innerHTML="Please upload Aadhar Card !"
            setStep(2)
        }
        else{
            document.getElementById('efile10').innerHTML=" "
        }
        if (aadharnumber == null || aadharnumber === ''){
            document.getElementById('eaadharnumber').innerHTML="Please Enter Aadhar Number !"
             setStep(2)
        }    
        else if (aadharnumber.length !== 12) {
            document.getElementById('eaadharnumber').innerHTML="Aadhar Number Should be of 12 digit only !"
            setStep(2)
        } 
        else{
            document.getElementById('eaadharnumber').innerHTML=" "
        }   
        if (file1 == null || file1 === '' || rationcardnumber == null || rationcardnumber === '' || rationcardnumber.length > 12 || rationcardnumber.length < 4 || file6 == null || file6 === '' || bankaccountdetails == null || bankaccountdetails === '' || bankaccountdetails.length > 12 || bankaccountdetails.length < 4 || file10 == null || file10 === '' || aadharnumber == null || aadharnumber === '' || aadharnumber.length !== 12){
            document.getElementById('invalid').innerHTML="Invalid Input !!"
        }
        else {
            document.getElementById('invalid').innerHTML=" "
            setStep(3)
        }
    }

    return (
        <div>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '55ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <Card style={{ width: '85ch' }} className='mx-auto'>
                    
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '33ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >

                        <div className='secondpad boxborder'><br></br>
                        <h6 class="fs-title"> Upload Documents</h6><br></br>
                        <div>
                            <span id='invalid' class="text-danger size font-weight-bold"></span>
                        </div>
                        
                        <br></br>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <TextField id="aadharnumber" type="number" className ="required" label="Aadhaar Number" value={userData['aadharnumber']} onChange={(e) => setUserData({ ...userData, "aadharnumber": e.target.value })} margin='normal' variant='standard' color="primary" placeholder="Aadhaar Number" /><br></br> <span id='eaadharnumber' className='text-danger' >  </span>
                                </div>
                                <div className='col-md-6'>
                                <h6 id="fileLabel" className='requireds'><p>Aadhar Card </p></h6>
                                    <input required type="file" id="file10" className="form-control form-control-sm auto " name="aadharcard" onChange={(e) => setUserData({ ...userData, "aadharcard": e.target.files[0] })} /> <span id='efile10' className='text-danger' >  </span>
                                </div>

                            </div><br></br> 

                            <div className='row'>
                                <div className="col-md-6">
                                    <TextField id="rationcardnumber" type="number" className ="required" label="Ration Card Number" value={userData['rationcardnumber']} onChange={(e) => setUserData({ ...userData, "rationcardnumber": e.target.value })} margin='normal' variant='standard' color="primary" placeholder="Ration Card Number" /><br></br> <span id='erationcardnumber' className='text-danger' >  </span>
                                </div>
                                <div className="col-md-6">
                                <h6 id="fileLabel" className='requireds'><p>Ration Card</p></h6>
                                    <input required type="file" id="file1" className="form-control form-control-sm auto " name="rationcard" onChange={(e) => setUserData({ ...userData, "rationcard": e.target.files[0] })} /> <span id='efile1' className='text-danger' >  </span>
                                </div> 
                            </div><br></br>

                            <div className="row">
                                <div className='col-md-6'>
                                    <TextField id="bankaccountdetails" className ="required" label="Bank Account Number" value={userData['bankaccountdetails']} onChange={(e) => setUserData({ ...userData, "bankaccountdetails": e.target.value })} margin='normal' variant='standard' color="primary" placeholder="XXXXXXX1234 / ABCD0XXXXXX" /><br></br> <span id='ebankaccountdetails' className='text-danger' >  </span>
                                </div>
                                <div className = "col-md-6">
                                <h6 id="fileLabel" className='requireds'><p>Bank Passbook</p></h6>
                                    <input required type="file" id="file6" className="form-control form-control-sm auto " name="bankpassbook" onChange={(e) => setUserData({ ...userData, "bankpassbook": e.target.files[0] })} /> <span id='efile6' className='text-danger' >  </span>
                                </div>
                            </div><br></br>

                            <div className='row'>
                                <div className="col-md-6">
                                    <TextField id="rentrecieptormaintenanceserialnumber" label="Rent / Maintenance Reciept Number" value={userData['rentrecieptormaintenanceserialnumber']} onChange={(e) => setUserData({ ...userData, "rentrecieptormaintenanceserialnumber": e.target.value })} margin='normal' variant='standard' color="primary" placeholder="Rent / Maintenance Reciept Serial Number" />
                                </div>
                                <div className='col-md-6'>
                                    <h6 id="fileLabel">Rent Reciept / Maintenance </h6>
                                    <input required type="file" id="file2" className="form-control form-control-sm auto " name="rentreciept" onChange={(e) => setUserData({ ...userData, "rentreciept": e.target.files[0] })} />
                                </div>
                            </div><br></br>

                            <div className="row">
                                 <div className="col-md-6">
                                    <TextField id="electricconsumernumber" label="Electricity Consumer Number" value={userData['electricconsumernumber']} onChange={(e) => setUserData({ ...userData, "electricconsumernumber": e.target.value })} margin='normal' variant='standard' color="primary" placeholder="Electricity Consumer Number" />
                                </div>
                                <div className='col-md-6'>
                                    <h6 id="fileLabel"> Electricity Bill</h6>
                                    <input required type="file" id="file3" className="form-control form-control-sm auto " name="electricitybill" onChange={(e) => setUserData({ ...userData, "electricitybill": e.target.files[0] })} />
                                </div>
                            </div><br></br>
                            <div className="row">
                                <div className='col-md-6'>
                                    <TextField id="insuranceid" label="Insurance ID Number" value={userData['insuranceid']} onChange={(e) => setUserData({ ...userData, "insuranceid": e.target.value })} margin='normal' variant='standard' color="primary" placeholder="Ration Card Number" />
                                </div>
                                <div className='col-md-6'>
                                    <h6 id="fileLabel">Medical Insurance</h6>
                                    <input required type="file" id="file4" className="form-control form-control-sm auto " name="medicalinsurance" onChange={(e) => setUserData({ ...userData, "medicalinsurance": e.target.files[0] })} />
                                </div>
                            </div><br></br>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <TextField id="salarycertificateid" label="Salary Certificate ID" value={userData['salarycertificateid']} onChange={(e) => setUserData({ ...userData, "salarycertificateid": e.target.value })} margin='normal' variant='standard' color="primary" placeholder="Salary Certificate ID" />
                                </div>
                                <div className="col-md-6">
                                    <h6 id="fileLabel">Salary Certificate</h6>
                                    <input required type="file" id="file5" className="form-control form-control-sm auto " name="salarycertificate" onChange={(e) => setUserData({ ...userData, "salarycertificate": e.target.files[0] })} />
                                </div>
                            </div><br></br>

                            <div className="row">
                                <div className='col-md-6'>
                                    <TextField id="jaincertificateid" label="Jain Miority Certificate ID" value={userData['jaincertificateid']} onChange={(e) => setUserData({ ...userData, "jaincertificateid": e.target.value })} margin='normal' variant='standard' color="primary" placeholder="Jain Miority Certificate ID" />
                                </div>
                                <div className='col-md-6'>
                                    <h6 id="fileLabel">Jain Minority Certificate </h6>
                                    <input required type="file" id="file7" className="form-control form-control-sm auto " name="jainminoritycertificate" onChange={(e) => setUserData({ ...userData, "jainminoritycertificate": e.target.files[0] })} />
                                </div>
                            </div><br></br>

                            <div className='row'>
                                <div className='col-md-6'>
                                    <TextField id="telephoneaccountnumber" label="Telephone Account Number" value={userData['telephoneaccountnumber']} onChange={(e) => setUserData({ ...userData, "telephoneaccountnumber": e.target.value })} margin='normal' variant='standard' color="primary" placeholder="Telephone Account Number" />
                                </div>
                                <div className="col-md-6">
                                    <h6 id="fileLabel">Telephone Bill </h6>
                                    <input required type="file" id="file8" className="form-control form-control-sm auto " name="telephonebill" onChange={(e) => setUserData({ ...userData, "telephonebill": e.target.files[0] })} />
                                </div>
                            </div><br></br>

                            <div className='row'>
                                <div className='col-md-6'>
                                    <TextField id="referralletterserialnumber" label="Referral Letter Serial Number" value={userData['referralletterserialnumber']} onChange={(e) => setUserData({ ...userData, "referralletterserialnumber": e.target.value })} margin='normal' variant='standard' color="primary" placeholder="Referral Letter Serial Number" />
                                </div>
                                <div className='col-md-6'>
                                    <h6 id="fileLabel">Referral Letter </h6>
                                    <input required type="file" id="file9" className="form-control form-control-sm auto " name="referralletter" onChange={(e) => setUserData({ ...userData, "referralletter": e.target.files[0] })} />
                                </div>
                            </div><br></br>
                            
                            <div className='row'>
                                <div className='col-md-6'>
                                    <TextField id="schoolorcollegefeesserialnumber" label="School/College Fees Reciept Number" value={userData['schoolorcollegefeesserialnumber']} onChange={(e) => setUserData({ ...userData, "schoolorcollegefeesserialnumber": e.target.value })} margin='normal' variant='standard' color="primary" placeholder=" School or College Fees Reciept Serial Number" />
                                </div>
                                <div className="col-md-6">
                                    <h6 id="fileLabel">School/College Fees</h6>
                                    <input required type="file" id="file11" className="form-control form-control-sm auto " name="schoolcollegefees" onChange={(e) => setUserData({ ...userData, "schoolcollegefees": e.target.files[0] })} />
                                </div>
                            </div><br></br>
                            <div className='row'>
                                <div className='col-md-6'>
                                    
                                </div>
                                <div className="col-md-6">
                                <h6 id="fileLabel">Others</h6>
                                <input required type="file" id="file12" className="form-control form-control-sm auto " name="others" onChange={(e) => setUserData({ ...userData, "others": e.target.files[0] })} />
                                </div>
                            </div><br></br>
                            <div>
                                <Button variant='contained' color='secondary' onClick={() => setStep(1)}>Back</Button><span> </span>
                                <Button variant='contained' color='primary' onClick={handleuploadNext}>Next</Button>
                                {/* <Button variant='contained' color='primary' onClick={() => setStep(3)}>Next</Button> */}
                            </div><br />
                        </div></Box>
                </Card>
            </Box>
        </div>
    )
}
