import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import { Button, TextField, Box } from '@material-ui/core';
import { Card, } from 'react-bootstrap'
import InputAdornment from '@material-ui/core/InputAdornment'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';

export default function Grant() {
    const { id } = useParams()
    return<div>
        <div class="form-title">
            <h2 class="fs-title">Grant for Application ID: {id}</h2>
        </div><br></br>

        <div>
            <h3 className='hml'>History⬇</h3>
        </div>
        <br></br><br></br>

        <Card style={{ width: '56ch' }} className='mx-auto'>
                
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '38ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div className='boxborder'><br></br>
                    <h6 class="fs-title">Bank Details</h6><br></br>
                        <div>
                            <span id='invalid' class="text-danger size font-weight-bold"></span>
                        </div>
                        <div>
                            <TextField className ="required" label="Bank Name" id = "bankname" margin='normal' variant='standard' color="primary" /><br></br> <span id='etv' className='text-danger' >  </span>
                        </div>
                        <div>
                            <TextField type="number" className ="required" label="Bank Account Number" id = "bankaccno" margin='normal' variant='standard' color="primary" /><br></br> <span id='etv' className='text-danger' >  </span>
                        </div>
                        <div>
                            <TextField type="number" className ="required" label="Amount" id = "gamount" margin='normal' variant='standard' color="primary" /><br></br> <span id='etv' className='text-danger' >  </span>
                        </div>
                        <div>
                            <TextField className ="required" label="Cheque/NEFT Number" id = "chequeneft no" margin='normal' variant='standard' color="primary" /><br></br> <span id='etv' className='text-danger' >  </span>
                        </div>
                        
                        <br></br>
                        <div>
                            <Button variant='contained' color='secondary'>Reject</Button><span> </span>
                            <Button variant='contained' color='primary'>Apprrove</Button><span> </span>

                           
                        </div><br />
                    </div><br></br></Box>
            </Card>

        </div>
}