import React, { useContext, } from 'react'
import { Card, } from 'react-bootstrap'
import { Button, TextField, Box, RadioGroup, FormControl, FormControlLabel, FormLabel, Radio } from '@material-ui/core';
import { multiStepContext } from '../StepContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputAdornment from '@material-ui/core/InputAdornment'
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
        document.getElementById("totalexpenses").innerHTML = "Total Expenses : "+total+" ₹ "
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
        if(maintenance == null || maintenance === ''){
            document.getElementById('emaintenance').innerHTML="Please Enter Maintenance Expense !"
        }
        else if( maintenance.length < 1  || maintenance.length > 7){
            document.getElementById('emaintenance').innerHTML="Minimum 1 and Maximum 7 digits are allowed !"
        }
        else{
            document.getElementById('emaintenance').innerHTML=" "
        }
        if(electricbill == null || electricbill === ''){
            document.getElementById('eelectricbill').innerHTML="Please Enter Electric Expense !"
        }
        else if(electricbill.length < 1  || electricbill.length > 7){
            document.getElementById('eelectricbill').innerHTML="Minimum 1 and Maximum 7 digits are allowed !"
        }
        else{
            document.getElementById('eelectricbill').innerHTML=" "
        }
        if(medical == null || medical === ''){
            document.getElementById('emedical').innerHTML="Please Enter Medical Expense !"
        }
        else if(medical.length < 1  || medical.length > 7){
            document.getElementById('emedical').innerHTML="Minimum 1 and Maximum 7 digits are allowed !"
        }
        else{
            document.getElementById('emedical').innerHTML=" "
        }
        if(groceries == null || groceries === ''){
            document.getElementById('egroceries').innerHTML="Please Enter Groceries Expense !"
        }
        else if(groceries.length < 1  || groceries.length > 7){
            document.getElementById('egroceries').innerHTML="Minimum 1 and Maximum 7 digits are allowed !"
        }
        else{
            document.getElementById('egroceries').innerHTML=" "
        }
        if(areaofflat == null || areaofflat === ''){
            document.getElementById('eareaofflat').innerHTML="Please Enter Area of Flat !"
        }
        else if(areaofflat.length < 1  || areaofflat.length > 7){
            document.getElementById('eareaofflat').innerHTML="Minimum 1 and Maximum 7 digits are allowed !"
        }
        else{
            document.getElementById('eareaofflat').innerHTML=" "
        }

        if(maintenance == null || maintenance === '' || maintenance.length < 1  || maintenance.length > 7 || electricbill == null || electricbill === '' || electricbill.length < 1  || electricbill.length > 7 || medical == null || medical === '' || medical.length < 1  || medical.length > 7 || groceries == null || groceries === '' || groceries.length < 1  || groceries.length > 7 || areaofflat == null || areaofflat === '' || areaofflat.length < 1  || areaofflat.length > 7){
            document.getElementById('invalid').innerHTML="Invalid Input !!"
        }
        else{
            document.getElementById('invalid').innerHTML=" "
            setStep(5)
        }
    }


    // }
    // console.log(formData.get('rationcard'))
    console.log(userData)


    return (
        <div>

            <Card style={{ width: '80ch' }} className='mx-auto'>
                
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '30ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >

                    <div className='boxborder'>
                        <br></br>
                    <h6 class="fs-title">Monthly Expenses Details</h6><br></br>
                        <div>
                        <p class="right">*Enter '0' Wheraver Required</p>
                        </div>
                        <div>
                            <span id='invalid' class="text-danger size font-weight-bold"></span>
                        </div>
                        <div className='thirddpad'>
                        <table>
                            <tr>
                                <td>
                                  <div>
                                     <TextField InputProps={{ startAdornment: <InputAdornment position="start">Rs.</InputAdornment>, inputMode: 'numeric', pattern: '[0-9]*' }} id = 'maintenance' type="number" label="Maintenance Expense " className ="required" value={userData['maintenance']} onChange={(e) => setUserData({ ...userData, "maintenance": e.target.value })} margin='normal' variant='standard' color="primary" /><br></br> <span id='emaintenance' className='text-danger' >  </span>
                                  </div>
                                </td>
                                <td>
                                  <div>
                                     <TextField InputProps={{ startAdornment: <InputAdornment position="start">Rs.</InputAdornment>, inputMode: 'numeric', pattern: '[0-9]*' }} id='electricbill' type="number" label="Electric Expense " className ="required" value={userData['electricbillexpense']} onChange={(e) => setUserData({ ...userData, "electricbillexpense": e.target.value })} margin='normal' variant='standard' color="primary" /><br></br> <span id='eelectricbill' className='text-danger' >  </span>
                                  </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                  <div>
                                      <TextField InputProps={{ startAdornment: <InputAdornment position="start">Rs.</InputAdornment>, inputMode: 'numeric', pattern: '[0-9]*' }} type="number" label="Medical Expense " className ="required" id="medical" value={userData['medicalexpense']} onChange={(e) => setUserData({ ...userData, "medicalexpense": e.target.value })} margin='normal' variant='standard' color="primary" /><br></br> <span id='emedical' className='text-danger' >  </span>
                                  </div>
                                </td>
                                <td>
                                    <div>
                                        <TextField InputProps={{ startAdornment: <InputAdornment position="start">Rs.</InputAdornment>, inputMode: 'numeric', pattern: '[0-9]*' }} type="number" onBlur = {totalexpenses} label="Groceries Expense " className ="required" id="groceries" value={userData['groceriesexpense']} onChange={(e) => setUserData({ ...userData, "groceriesexpense": e.target.value })} margin='normal' variant='standard' color="primary" /><br></br> <span id='egroceries' className='text-danger' >  </span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <TextField InputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} defaultValue={0} id='telephone' type="number" onBlur = {totalexpenses} label="Telephone Expense " value={userData['telephoneexpense']} onChange={(e) => setUserData({ ...userData, "telephoneexpense": e.target.value })} margin='normal' variant='standard' color="primary" /><span>  </span>
                                </td>
                                <td>
                                    <TextField InputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} defaultValue={0}  id='education' type="number" onBlur = {totalexpenses} label="Education Expense " value={userData['educationexpense']} onChange={(e) => setUserData({ ...userData, "educationexpense": e.target.value })} margin='normal' variant='standard' color="primary" /><span>  </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <TextField InputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} defaultValue={0}  type="number" label="Tuition Expense " onBlur = {totalexpenses} id='tuition' value={userData['tuitionexpense']} onChange={(e) => setUserData({ ...userData, "tuitionexpense": e.target.value })} margin='normal' variant='standard' color="primary" />
                                </td>
                                <td className='col-md-7'>
                                    <TextField InputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} defaultValue={0}  id='other' type="number" onBlur = {totalexpenses} label="Other Expense  " value={userData['otherexpense']} onChange={(e) => setUserData({ ...userData, "otherexpense": e.target.value })} margin='normal' variant='standard' color="primary" /><span>  </span>
                                </td>
                            </tr>
                        </table>
                        <br></br>
                        
                        <div>
                            <p id = "totalexpenses"></p>
                            {/* <TextField InputProps={{ readOnly: true }} label="" id = "totalexpenses" value={userData['totalexpenses']}  margin='normal' variant='standard' color="primary" placeholder='Click Here To View Total Expense' /> */}
                        </div>
                        </div>
                        <br></br>
                        <div className='thirddpad rentbox'>
                            <table>
                                <tr>
                                    <td>
                                        <TextField InputProps={{ startAdornment: <InputAdornment position="start">sqft</InputAdornment>, inputMode: 'numeric', pattern: '[0-9]*' }} id = "totalareaofflat" type="number" label="Total Area of Flat (in sqft) " className ="required" value={userData['areaofflat']} onChange={(e) => setUserData({ ...userData, "areaofflat": e.target.value })} margin='normal' variant='standard' color="primary" /><br></br> <span id='eareaofflat' className='text-danger' >  </span>
                                    </td>
                                    <td className='rent  col-md-7'> <h6 id="jainismfourth">Rent or Ownership ?</h6></td>
                                        <div className='rent'> <FormControl component="fieldset">
                                            <FormLabel component="legend"></FormLabel>
                                            <RadioGroup
                                                aria-label="gender"
                                                name="controlled-radio-buttons-group"
                                                defaultValue="ownership"
                                                value={userData['rentownershipstatus']}
                                                onChange={(e) => setUserData({ ...userData, "rentownershipstatus": e.target.value })} row={true}

                                                // style={{ marginleft: '2rem', display: 'flex', alignItems: 'left' }}

                                            >
                                                <FormControlLabel value="rent" control={<Radio />} label="Rent" />
                                                <FormControlLabel value="ownership" control={<Radio />} label="Ownership" />
                                            </RadioGroup>
                                        </FormControl></div>
                                </tr>

                            </table>                   
                        </div>
                        <br></br>
                        <div>
                            <Button variant='contained' color='secondary' onClick={() => setStep(3)}>Back</Button><span> </span>

                            {/* <Button variant='contained' color='primary' onClick={() => setStep(5)}>Next</Button> */}
                            <Button variant='contained' color='primary' onClick={handleexpenses}>Next</Button>


                        </div><br />
                    </div><br></br></Box>
            </Card>         

        </div>
    )
}
