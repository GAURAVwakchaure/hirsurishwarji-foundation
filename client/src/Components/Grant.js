import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import { Button, TextField, Box } from '@material-ui/core';
import { Card, } from 'react-bootstrap'
import InputAdornment from '@material-ui/core/InputAdornment'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { post } from 'jquery';

export default function Grant(props) {
    const { id } = useParams()
    const [userData, setuserData,] = useState([])

    //  const state={
    //   Name:'',
    //   Category:'',
    //   status:'',
    //   approvedammount:'',
    //   posts:[]
    // };

    // const componentDidMount = () => {
    //   this.rationhistory();
    // };
    

    useEffect(() => {
        loadUser();
      }, []);
    
    
      const loadUser = async () => {
        const result = await axios.get(`https://hirsurishwarji-foundation.herokuapp.com/user/${id}`)
        setuserData(result.data);
      }

    const grant = () => {
        axios.put(`https://hirsurishwarji-foundation.herokuapp.com/user/updateGrant/${id}`, userData)
        .then(res => {
          window.alert(res.data)
        })
        .catch(err => {
          console.log(err)
        })
      }
    
    //   const grantreject = () => {
    //     axios.put(`https://hirsurishwarji-foundation.herokuapp.com/user/updateGrantreject/${id}`)
    //     .then(res => {
    //       window.alert(res.data)
    //     })
    //     .catch(err => {
    //       console.log(err)
    //     })
    //   }

      const approve = () => {
        axios.put(`https://hirsurishwarji-foundation.herokuapp.com/user/updateApprove/${id}`, userData)
        .then(res => {
          window.alert(res.data)
        })
        .catch(err => {
          console.log(err)
        })
      }
    
      const reject = () => {
        axios.put(`https://hirsurishwarji-foundation.herokuapp.com/user/updateReject/${id}`)
        .then(res => {
          window.alert(res.data)
        })
        .catch(err => {
          console.log(err)
        })
      }
      
      // const rationhistory = () => {
      //   axios.get(`http://localhost:8000/user/history/rationnumber`)
      //   .then((res) => {
      //     const data = res.data;
      //     this.setState({posts: data});
      //     console.log('ration data recived');
      //   })
      //   .catch(err => {
      //     console.log(err)
      //   })
      // }

      // const displayBlogPost = (posts) => {
      //   if (!posts.length) return null;

      //   return posts.map((post, index) => (
      //     <div key ={index}>
      //       <h3>{post.Name}</h3>
      //       <p>{post.body}</p>
      //     </div>
      //   ));
      // };
      

    return<div>
        <div class="form-title ghboxborder">
            <h2 class="fs-titleg">Grant for Application ID: {id}</h2>
        </div>
        <div><br></br>
            <table className='center'>
                <tr>
                    <td className='thpadn'>
                    Applicant Name :
                    </td>
                    <td>
                    <TextField inputProps={{ readOnly: true }} className='appname' value={userData['Name']} onChange={(e) => setuserData({ ...userData, "Name": e.target.value })} id="ex2"  ></TextField>
                    </td>
                    <td className='thpadn'>
                      Catagory :
                    </td>
            <td>
                <TextField inputProps={{ readOnly: true }} className='gration' value={userData['Category']} onChange={(e) => setuserData({ ...userData, "Category": e.target.value })} id="ex2" type="text" />
              
            </td>
                    <td className='thpadn'>
                        Ration Card Number :
                        </td>
                        <td>
                        <TextField className='gration' inputProps={{ readOnly: true }} value={userData['Ration_Card_Number']} onChange={(e) => setuserData({ ...userData, "Ration_Card_Number": e.target.value })} id="ex2" type="text" />
                        </td>

                </tr>
            </table>
              </div>
              <div>
                <table className='center'>
                    <tr>
                    <td className='thpadn'>
                       Application Status :
                        </td>
                        <td>
                        <TextField className='gration' inputProps={{ readOnly: true }} value={userData['status']} onChange={(e) => setuserData({ ...userData, "status": e.target.value })} id="ex2" type="text" />
                        </td>
                        <td>
                        <label className=' thpadn'>Survey Date :</label>
                        </td>
                        <td className='thpadnd'>
                        {/* <TextField className='gration' inputProps={{ readOnly: true }} value={userData['surveydate']} onChange={(e) => setuserData({ ...userData, "surveydate": e.target.value })} id="ex2" type="text" /> */}
                        <DatePickerComponent  inputProps={{ readOnly: true }} placeholder='Enter Date' format="dd-MMM-yyyy" width='105' value={userData['surveydate']} onChange={(e) => setuserData({ ...userData, "surveydate": e.target.value })}></DatePickerComponent>
                        </td>
                        <td >
                        <label className='thpadn'>Applied Date :</label>
                        </td>
                        <td className='thpadnd'>
                        <DatePickerComponent inputProps={{ readOnly: true }} placeholder='Enter Date' format="dd-MMM-yyyy" width='105' value={userData['createdAt']} onChange={(e) => setuserData({ ...userData, "createdAt": e.target.value })}></DatePickerComponent>
                        </td>
                    </tr>
                </table>
            </div><br></br>
        
        <div className='gboxborder'><br></br>
        <div>
            <h3 className='hml'>History⬇</h3>
        </div>
            
            
            <h5 className='hrdminlable'>
              Applications With Similar Ration Card Number 
            </h5>

            {/* <div className='blog-'>
              {this.displayBlogPost(this.state.posts)}
            </div> */}

            <br></br><br></br><br></br><br></br>
            </div>


        <hr class="solid"></hr><br></br>
        <Card style={{ width: '150ch' }} className='mx-auto'>
                
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '30ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
       
        
        <div className='boxborder'><br></br>
        <div>
          <h6 class="fs-title">Approval Details</h6>
        </div>
        <br></br>
          <table className='center'>
            <tr>
              <td >
              <label className='gadminlable'>Approved By:</label> 
                <input type='text' className="form-control" id="ex2" value={userData['approvedby']} onChange={(e) => setuserData({ ...userData, "approvedby": e.target.value })} /><br></br> <span id='eapprovedby' className='text-danger' >  </span>
              </td>
              <td >
              <label className='gadminlable2'>Amount Needed:</label> 
              <input type='text' className="form-control" id="ex2" value={userData['loanamountneeded']} onChange={(e) => setuserData({ ...userData, "loanamountneeded": e.target.value })} readonly="readonly" /><br></br>
              </td>
              <td >
              <label className='gadminlable3'>Approved Amount:</label>
              <input type='text' className="form-control" id="ex2" value={userData['approvedammount']} onChange={(e) => setuserData({ ...userData, "approvedammount": e.target.value })} /><br></br>
              </td>
              <td >
              <label className='gadminlable4'>Comments:</label>
              <input type='text' className="form-control" id="ex2" value={userData['comments']} onChange={(e) => setuserData({ ...userData, "comments": e.target.value })} /><br></br>
              </td>
            </tr>
          </table>
          <div className='adatepick'>
                    <tr>
                      <td>
                        <p className='date'>Date : <DatePickerComponent placeholder='Enter Date' format="dd-MMM-yy" width='105' value={userData['approvaldate']} onChange={(e) => setuserData({ ...userData, "approvaldate": e.target.value })}></DatePickerComponent></p>
                      </td>
                    </tr>
                  </div>

          <div>
            <input type='checkbox' style={{ width: '30px' }} /><span>  Above details for Application ID {id} are correct and ready for Approve.</span>
          </div><br></br>
          <Button variant='contained' color='secondary' onClick={reject}>Reject</Button><span> </span>
          <Button variant='contained' color='primary' onClick={approve} >Approve</Button><br></br><br></br>
        </div><br></br><br></br>
        

        
                    <div className='boxborder'><br></br>
                    <h6 class="fs-title">Bank Details</h6><br></br>
                        <div>
                            <span id='invalid' class="text-danger size font-weight-bold"></span>
                        </div>
                        <table className='center'>
                            <tr>
                                <td>
                                <label className='fgadminlable1 thpad'>Bank Name :</label>
                            <input type='text' className ="form-control" id="ex2" value={userData['bankname']} onChange={(e) => setuserData({ ...userData, "bankname": e.target.value })} /><br></br> <span id='etv' className='text-danger' >  </span>
                                </td>
                                <td>
                                <label className='fgadminlable thpad'>Bank Account Number :</label>
                            <input type='text' className ="form-control" id="ex2" value={userData['bankaccountno']} onChange={(e) => setuserData({ ...userData, "bankaccountno": e.target.value })}/><br></br> <span id='etv' className='text-danger' >  </span>
                                </td>
                                <td >
                                <label className='fgadminlable3 '>Amount Aprroved :</label>
                            <input readonly="readonly" type='text' className ="form-control" label="Amount" id="ex2" value={userData['approvedammount']} onChange={(e) => setuserData({ ...userData, "approvedammount": e.target.value })}/><br></br> <span id='etv' className='text-danger' >  </span>
                                </td>
                                <td>
                                    <label className='fgadminlable11 '>Cheque/NEFT Number:</label>
                            <input type='text' className ="form-control" id="ex2" value={userData['chequeneft']} onChange={(e) => setuserData({ ...userData, "chequeneft": e.target.value })} /><br></br> <span id='etv' className='text-danger' >  </span>
                                </td>
                            </tr>
                            <tr>
                            <td>
                              <label className='fgadminlable12 '>Grant Amount:</label>
                              <input type='text' className ="form-control" id="ex2" value={userData['grantamount']} onChange={(e) => setuserData({ ...userData, "grantamount": e.target.value })} /><br></br> <span id='etv' className='text-danger' >  </span>
                              </td>
                            </tr>
                        </table>
                        <div className='gdatepick'>
                    <tr>
                      <td>
                        <p className='date'>Date : <DatePickerComponent format="dd-MMM-yy" width='105' value={userData['grantdate']} onChange={(e) => setuserData({ ...userData, "grantdate": e.target.value })}></DatePickerComponent></p>
                      </td>
                    </tr>
                  </div>
                        <div>
            <input type='checkbox' style={{ width: '30px' }} /><span>  Above details for Application ID {id} are correct and ready for Grant.</span>
          </div><br></br>
                        
                        
                        
                        
                        <div>
                            {/* <Button variant='contained' color='secondary' onClick={grantreject} >Reject</Button><span> </span> */}
                            <Button variant='contained' color='primary' onClick={grant}>Grant</Button><span> </span>

                           
                        </div><br />
                    </div><br></br></Box>
            </Card>

        </div>
}