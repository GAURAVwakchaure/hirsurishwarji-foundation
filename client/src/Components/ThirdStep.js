import React, { useContext } from 'react'
// import { TextField } from '@material-ui/core';
import { multiStepContext } from '../StepContext';
import { FormControlLabel, FormControl, FormLabel, Radio, RadioGroup } from '@material-ui/core';

import { Card, } from 'react-bootstrap'
import { Button, Box } from '@material-ui/core';
import '../App.css'



export default function ThirdStep() {
    // const {setStep, userData, setUserData } = useContext(multiStepContext);


    const { setStep, userData, setUserData, } = useContext(multiStepContext);
    console.log(userData)

    // const handleRadio = () => {
    // let radioq1 = document.getElementsById("jainradioq1").checked
    // let radioq2 = document.getElementsById("jainradioq2").checked
    // let radioq3 = document.getElementsById("jainradioq3").checked
    // let radioq4 = document.getElementsById("jainradioq4").checked
    // let radioq5 = document.getElementsById("jainradioq5").checked
    // let radioq6 = document.getElementsById("jainradioq6").checked

    // alert("hello")
    // if (radioq1&&radioq2&&radioq3&&radioq4&&radioq5&&radioq6){
    //     alert("radioq1 checked")
    // }else{
    //     alert("radios not")
    // }


    // }


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
                <Card style={{ width: '60ch' }} className='mx-auto'>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '50ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >

                        <div className='boxborder'><br></br>
                        <h6 class="fs-title" > Miscellaneous Questions</h6><br></br>
                            <div>
                                <table>
                                    <tr>
                                        <td rowSpan={3}> <h6 id="jainism">Pathshala Children</h6></td>
                                        <td>
                                            <div className='jainradioq1'> <FormControl component="fieldset">
                                                <FormLabel component="legend"></FormLabel>
                                                <RadioGroup
                                                    aria-label="gender"
                                                    id="jainradioq1"
                                                    defaultValue="yes"
                                                    value={userData['pathshalachildren']}
                                                    onChange={(e) => setUserData({ ...userData, 'pathshalachildren': e.target.value })} row={true}

                                                    style={{ marginleft: '2rem', display: 'flex', alignItems: 'left' }}
                                                >
                                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                                </RadioGroup>
                                            </FormControl></div></td>
                                    </tr>
                                </table>
                            </div><br />
                            <div>
                                <table>
                                    <tr>
                                        <td rowSpan={3}> <h6 id="jainism">Religious Education Impart</h6></td>
                                        <td>
                                            <div className='jainradioq2'> <FormControl component="fieldset">
                                                <FormLabel component="legend"></FormLabel>
                                                <RadioGroup
                                                    aria-label="gender"
                                                    id="jainradioq2"
                                                    defaultValue="yes"
                                                    value={userData['religiouseducation']}
                                                    onChange={(e) => setUserData({ ...userData, 'religiouseducation': e.target.value })} row={true}

                                                    style={{ marginleft: '2rem', display: 'flex', alignItems: 'left' }}
                                                >
                                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                                </RadioGroup>
                                            </FormControl></div></td>
                                    </tr>

                                </table>


                            </div><br />
                            <div>

                                <table>
                                    <tr>
                                        <td rowSpan={3}> <h6 id="jainism">Temple Pooja</h6></td>
                                        <td>
                                            <div className='jainradioq3'> <FormControl component="fieldset">
                                                <FormLabel component="legend"></FormLabel>
                                                <RadioGroup
                                                    aria-label="gender"
                                                    id="jainradioq3"
                                                    defaultValue="yes"
                                                    value={userData['templepooja']}
                                                    onChange={(e) => setUserData({ ...userData, 'templepooja': e.target.value })} row={true}

                                                    style={{ marginleft: '2rem', display: 'flex', alignItems: 'left' }}
                                                >
                                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                                </RadioGroup>
                                            </FormControl></div></td>
                                    </tr>

                                </table>

                            </div><br />

                            <div>

                                <table>
                                    <tr>
                                        <td rowSpan={3}> <h6 id="jainism">Upashraya Visit
                                        </h6></td>
                                        <td>
                                            <div className='jainradioq4'> <FormControl component="fieldset">
                                                <FormLabel component="legend"></FormLabel>
                                                <RadioGroup
                                                    aria-label="gender"
                                                    id="jainradioq4"
                                                    defaultValue="yes"
                                                    value={userData['upashrayvisit']}
                                                    onChange={(e) => setUserData({ ...userData, 'upashrayvisit': e.target.value })}
                                                    row={true}

                                                    style={{ marginleft: '2rem', display: 'flex', alignItems: 'left' }}
                                                >
                                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                                </RadioGroup>
                                            </FormControl></div></td>
                                    </tr>

                                </table>


                            </div><br />
                            <div>

                                <table>
                                    <tr>
                                        <td rowSpan={3}> <h6 id="jainism">Usage of Kanmool</h6></td>
                                        <td>
                                            <div className='jainradioq5'> <FormControl component="fieldset">
                                                <FormLabel component="legend"></FormLabel>
                                                <RadioGroup
                                                    aria-label="gender"
                                                    id="jainradioq5"
                                                    defaultValue="yes"
                                                    value={userData['kanmoolusage']} onChange={(e) => setUserData({ ...userData, 'kanmoolusage': e.target.value })}
                                                    row={true}
                                                    style={{ marginleft: '2rem', display: 'flex', alignItems: 'left' }}
                                                >
                                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                                </RadioGroup>
                                            </FormControl></div></td>
                                    </tr>

                                </table>


                            </div><br />
                            <div>

                                <table>
                                    <tr>
                                        <td rowSpan={3}> <h6 id="jainism">Kanmool Usage Stopped</h6></td>
                                        <td>
                                            <div className='jainradioq6'> <FormControl component="fieldset">
                                                <FormLabel component="legend"></FormLabel>
                                                <RadioGroup
                                                    aria-label="gender"
                                                    id="jainradioq6"
                                                    defaultValue="yes"
                                                    value={userData['kanmoolusagestopped']}
                                                    onChange={(e) => setUserData({ ...userData, 'kanmoolusagestopped': e.target.value })} row={true}

                                                    style={{ marginleft: '2rem', display: 'flex', alignItems: 'left' }}
                                                >
                                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                                </RadioGroup>
                                            </FormControl></div></td>
                                    </tr>

                                </table>


                            </div><br />

                            <div>
                                <Button variant='contained' color='secondary' onClick={() => setStep(2)}>Back</Button><span> </span>
                                <Button variant='contained' color='primary' onClick={() => setStep(4)}>Next</Button><span> </span>
                                {/* <Button variant='contained' color='primary' onClick={handleRadio}>validate</Button><span> </span> */}

                            </div><br />
                        </div><br></br>

                        
                        </Box>
                </Card>
            </Box>
        </div>
    )
}
