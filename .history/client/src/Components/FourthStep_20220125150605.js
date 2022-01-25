import React, { useContext, } from 'react'
import { Card, } from 'react-bootstrap'
import { Button, TextField, Box, RadioGroup, FormControl, FormControlLabel, FormLabel, Radio } from '@material-ui/core';
import { multiStepContext } from '../StepContext';
import 'bootstrap/dist/css/bootstrap.min.css';
// import NumberInput from 'material-ui-number-input';
export default function FourthStep() {
    // const {setStep, userData, setUserData } = useContext(multiStepContext);
    const { setStep, userData, setUserData, } = useContext(multiStepContext);

 

    const totalexpenses = () => {
        const total = (parseFloat(document.getElementById('maintenance').value))+ 
         (parseFloat(document.getElementById('electricbill').value)) +
            (parseFloat(document.getElementById('telephone').value))+ 
          (parseFloat(document.getElementById('education').value))+ 

            (parseFloat(document.getElementById('tuition').value))+
            parseFloat(document.getElementById('medical').value)+ 
            (parseFloat(document.getElementById('groceries').value))+ 
             (parseFloat(document.getElementById('other').value))

        console.log(total)
        setUserData({ ...userData, "totalexpenses": "Total Expenses : "+total })
    }

    const handleexpenses = () => {
        let maintenance = document.getElementById('maintenance').value
        let electricbill = document.getElementById('electricbill').value
        // let telephone = document.getElementById('telephone').value
        // let education = document.getElementById('education').value
        // let tuition = document.getElementById('tuition').value
        let medical = document.getElementById('medical').value
        let groceries = document.getElementById('groceries').value
        // let other = document.getElementById('other').value
        let areaofflat = document.getElementById('totalareaofflat').value
        if(maintenance == null || maintenance === '' || maintenance.length < 1  || maintenance.length > 7){
            alert("Enter Maintenance Expense! At least 1 Digit and not more than 7 digit")
        }else if(electricbill == null || electricbill === '' || electricbill.length < 1  || electricbill.length > 7){
            alert("Enter Electric Expense ! At least 1 Digit and not more than 7 digit")
        }
        // else if(telephone == null || telephone === '' || telephone.length < 1  || telephone.length > 7){
        //     alert("Enter telephone bill ! At least 1 Digit and not more than 7 digit")
        // }
        // else if(education == null || education === '' || education.length < 1  || education.length > 7){
        //     alert("Enter education fees ! At least 1 Digit and not more than 7 digit")
        // }else if(tuition == null || tuition === '' || tuition.length < 1  || tuition.length > 7){
        //     alert("Enter tuition fees ! At least 1 Digit and not more than 7 digit")
        // }
        else if(medical == null || medical === '' || medical.length < 1  || medical.length > 7){
            alert("Enter Medical Expense ! At least 1 Digit and not more than 7 digit")
        }else if(groceries == null || groceries === '' || groceries.length < 1  || groceries.length > 7){
            alert("Enter Groceries Expense ! At least 1 Digit and not more than 7 digit")
        }
        // else if(other == null || other === '' || other.length < 1  || other.length > 7){
        //     alert("Enter other bill ! At least 1 Digit and not more than 7 digit")
        // }
        else if(areaofflat == null || areaofflat === '' || areaofflat.length < 1  || areaofflat.length > 7){
            alert("Enter area of flat ! At least 1 Digit and not more than 7 digit")
        }
        else{
            setStep(5)
        }
    }


    // }
    // console.log(formData.get('rationcard'))
    console.log(userData)


    return (
        <div>

            <Card style={{ width: '56ch' }} className='mx-auto'>
                <span>

                </span><br></br>
                <h6 class="fs-title">Monthly Expenses Details</h6><br></br>
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
                        <p class="right">*Enter '0' Wheraver Required</p>
                        </div>
                        <div>
                            
                            <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} id = 'maintenance' type="number" label="Maintenance Expense (in Rupess)" className ="required" value={userData['maintenance']} onChange={(e) => setUserData({ ...userData, "maintenance": e.target.value })} margin='normal' variant='standard' color="primary" /><span>  </span>
                        </div>
                        <div>
                            <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} id='electricbill' type="number" label="Electric Expense (in Rupess)" className ="required" value={userData['electricbillexpense']} onChange={(e) => setUserData({ ...userData, "electricbillexpense": e.target.value })} margin='normal' variant='standard' color="primary" />
                        </div>
                        <div>
                            <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} id='telephone' type="number" label="Telephone Expense (in Rupess)" value={userData['telephoneexpense']} onChange={(e) => setUserData({ ...userData, "telephoneexpense": e.target.value })} margin='normal' variant='standard' color="primary" /><span>  </span>
                            <div>
                                <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} id='education' type="number" label="Education Expense (in Rupess)" value={userData['educationexpense']} onChange={(e) => setUserData({ ...userData, "educationexpense": e.target.value })} margin='normal' variant='standard' color="primary" /><span>  </span>

                            </div>
                            <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} type="number" label="Tuition Expense (in Rupess)" id='tuition' value={userData['tuitionexpense']} onChange={(e) => setUserData({ ...userData, "tuitionexpense": e.target.value })} margin='normal' variant='standard' color="primary" />
                        </div>
                        <div>
                            <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} type="number" label="Medical Expense (in Rupess)" className ="required" id="medical" value={userData['medicalexpense']} onChange={(e) => setUserData({ ...userData, "medicalexpense": e.target.value })} margin='normal' variant='standard' color="primary" /><span>  </span>
                            <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} type="number" label="Groceries Expense (in Rupess)" className ="required" id="groceries" value={userData['groceriesexpense']} onChange={(e) => setUserData({ ...userData, "groceriesexpense": e.target.value })} margin='normal' variant='standard' color="primary" />
                        </div>
                        <div>
                            <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} id='other' type="number" label="Other Expense (in Rupess) " value={userData['otherexpense']} onChange={(e) => setUserData({ ...userData, "otherexpense": e.target.value })} margin='normal' variant='standard' color="primary" /><span>  </span>
                            <TextField inputProps={{ readOnly: true }} label="" value={userData['totalexpenses']} onClick={totalexpenses} margin='normal' variant='standard' color="primary" placeholder='Click Here To View Total Expense' />
                        </div>

                        <div>
                            <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} id = "totalareaofflat" type="number" label="Total Area of Flat (in sqft) " className ="required" value={userData['areaofflat']} onChange={(e) => setUserData({ ...userData, "areaofflat": e.target.value })} margin='normal' variant='standard' color="primary" /><br />

                            < br />

                            <table>
                                <tr>
                                    <td rowSpan={3}> <h6 id="jainism">Rent or Ownership ?</h6></td>
                                    <td>
                                        <div className='jainradio'> <FormControl component="fieldset">
                                            <FormLabel component="legend"></FormLabel>
                                            <RadioGroup
                                                aria-label="gender"
                                                name="controlled-radio-buttons-group"

                                                value={userData['rentownershipstatus']}
                                                onChange={(e) => setUserData({ ...userData, "rentownershipstatus": e.target.value })} row={true}

                                                style={{ marginleft: '2rem', display: 'flex', alignItems: 'left' }}

                                            >
                                                <FormControlLabel value="rent" control={<Radio />} label="Rent" />
                                                <FormControlLabel value="ownership" control={<Radio />} label="Ownership" />
                                            </RadioGroup>
                                        </FormControl></div></td>
                                </tr>

                            </table>                   
                        </div>
                        <br></br>
                        <div>
                            <Button variant='contained' color='secondary' onClick={() => setStep(3)}>Back</Button><span> </span>

                            {/* <Button variant='contained' color='primary' onClick={() => setStep(5)}>Next</Button> */}
                            <Button variant='contained' color='primary' onClick={handleexpenses}>Next</Button>

                            {/* <Button variant='contained' color='primary' onClick={submitData}>submit</Button> */}

                        </div><br />
                    </div></Box>
            </Card>         

        </div>
    )
}
