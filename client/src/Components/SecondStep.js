import React, { useContext } from 'react'
import { multiStepContext } from '../StepContext';
import { Card, } from 'react-bootstrap'

import { Button, Box } from '@material-ui/core';


export default function SecondStep() {
    // const {setStep, userData, setUserData } = useContext(multiStepContext);
    const { setStep, userData, setUserData } = useContext(multiStepContext);
    console.log(userData)

    const handleuploadNext = () =>{
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
        console.log(file1,file2,file3,file4,file5,file6,file7,file8,file9,file10,file11,file12)
        if (file1 == null || file1 === '') {
            alert("Please upload Ration Card")
            setStep(2)
        }
        else if (file2 == null || file2 === '') {
            alert("Please upload Rent Reciept / Maintenance")
            setStep(2)
        }
        else if (file3 == null || file3 === '') {
            alert("Please upload Electricity Bill")
            setStep(2)
        }
        else if (file4 == null || file4 === '') {
            alert("Please upload Medical Insurance")
            setStep(2)
        }
        else if (file5 == null || file5 === '') {
            alert("Please upload Salary Certificate")
            setStep(2)
        }
        else if (file6 == null || file6 === '') {
            alert("Please upload Bank Passbook")
            setStep(2)
        }
        else if (file7 == null || file7 === '') {
            alert("Please upload jain Minority Certificate")
            setStep(2)
        }
        else if (file8 == null || file8 === '') {
            alert("Please upload Telephone Bill")
            setStep(2)
        }
        else if (file9 == null || file9 === '') {
            alert("Please upload Referral Letter")
            setStep(2)
        }
        else if (file10 == null || file10 === '') {
            alert("Please upload Aadhar Card")
            setStep(2)
        }
        else if (file11 == null || file11 === '') {
            alert("Please upload School/College Fees")
            setStep(2)
        }
        else if (file12 == null || file12 === '') {
            alert("Please upload Others")
            setStep(2)
        }
        else {
            setStep(3)
        }
    }

    return (
        <div>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <Card style={{ width: '56ch' }} className='mx-auto'>
                    <span>

                    </span><br></br>
                    <h6 class="fs-title"> Upload Documents</h6><br></br>
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
                                <h6 id="fileLabel">Ration Card</h6>
                                <input required type="file"  id="file1" className="form-control form-control-sm auto " name="rationcard" onChange={(e) => setUserData({ ...userData, "rationcard": e.target.files[0] })} />
                            </div><br></br>
                            
                            <div>
                                <h6 id="fileLabel">Rent Reciept / Maintenance </h6>
                                <input required type="file" id="file2" className="form-control form-control-sm auto " name="rentreciept" onChange={(e) => setUserData({ ...userData, "rentreciept": e.target.files[0] })} />
                            </div><br></br>
                            <div>
                                <h6 id="fileLabel"> Electricity Bill</h6>
                                <input required type="file" id="file3" className="form-control form-control-sm auto " name="electricitybill" onChange={(e) => setUserData({ ...userData, "electricitybill": e.target.files[0] })} />
                            </div><br></br>
                            <div>
                                <h6 id="fileLabel">Medical Insurance</h6>
                                <input required type="file" id="file4" className="form-control form-control-sm auto " name="medicalinsurance" onChange={(e) => setUserData({ ...userData, "medicalinsurance": e.target.files[0] })} />
                            </div><br></br>
                            <div>
                                <h6 id="fileLabel">Salary Certificate</h6>
                                <input required type="file" id="file5" className="form-control form-control-sm auto " name="salarycertificate" onChange={(e) => setUserData({ ...userData, "salarycertificate": e.target.files[0] })} />
                            </div><br></br>
                            <div>
                                <h6 id="fileLabel">Bank Passbook </h6>
                                <input required type="file" id="file6" className="form-control form-control-sm auto " name="bankpassbook" onChange={(e) => setUserData({ ...userData, "bankpassbook": e.target.files[0] })} />
                            </div><br></br>
                            <div>
                                <h6 id="fileLabel">Jain Minority Certificate </h6>
                                <input required type="file" id="file7" className="form-control form-control-sm auto " name="jainminoritycertificate" onChange={(e) => setUserData({ ...userData, "jainminoritycertificate": e.target.files[0] })} />
                            </div><br></br>
                            <div>
                                <h6 id="fileLabel">Telephone Bill </h6>
                                <input required type="file" id="file8" className="form-control form-control-sm auto " name="telephonebill" onChange={(e) => setUserData({ ...userData, "telephonebill": e.target.files[0] })} />
                            </div><br></br>
                            <div>
                                <h6 id="fileLabel">Referral Letter </h6>
                                <input required type="file" id="file9" className="form-control form-control-sm auto " name="referralletter" onChange={(e) => setUserData({ ...userData, "referralletter": e.target.files[0] })} />
                            </div><br></br>
                            <div>
                                <h6 id="fileLabel">Aadhar Card  </h6>
                                <input required type="file" id="file10" className="form-control form-control-sm auto " name="aadharcard" onChange={(e) => setUserData({ ...userData, "aadharcard": e.target.files[0] })} />
                            </div><br></br>
                            <div>
                                <h6 id="fileLabel">School/College Fees</h6>
                                <input required type="file" id="file11" className="form-control form-control-sm auto " name="schoolcollegefees" onChange={(e) => setUserData({ ...userData, "schoolcollegefees": e.target.files[0] })} />
                            </div><br></br>
                            <div>
                                <h6 id="fileLabel">Others</h6>
                                <input required type="file" id="file12" className="form-control form-control-sm auto " name="others" onChange={(e) => setUserData({ ...userData, "others": e.target.files[0] })} />
                            </div><br></br>
                            <div>
                                <Button variant='contained' color='secondary' onClick={() => setStep(1)}>Back</Button><span> </span>
                                <Button variant='contained' color='primary' onClick={handleuploadNext}>Next</Button>
                                {/* <Button variant='contained' color='primary' onClick={() => setStep(3)}>Next</Button> */}
                            </div><br/>
                        </div></Box>
                </Card>
            </Box>
        </div>
    )
}
