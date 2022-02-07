import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


import { Button, TextField, Box } from '@material-ui/core';
import { Card, } from 'react-bootstrap'
import InputAdornment from '@material-ui/core/InputAdornment'
// import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';

export default function View(props) {
  const { id } = useParams()
  const [userData, setuserData,] = useState([])
  console.log('user data in view file', userData)

  // const submit = () => {
  //   let surveydoneby = document.getElementById('surveydoneby').value

  //   if (surveydoneby == null || surveydoneby === "") {
  //     document.getElementById('esurveydoneby').innerHTML = "Please Enter survey done by !"
  //   }
  //   else if (!isNaN(surveydoneby)) {
  //     document.getElementById('esurveydoneby').innerHTML = "Numbers are not allowed !"
  //   }
  //   else if (surveydoneby.length < 2 || surveydoneby.length > 50) {
  //     document.getElementById('esurveydoneby').innerHTML = "Minimum 2 and Maximum 50 characters are allowed !"
  //   }
  //   else {
  //     document.getElementById('esurveydoneby').innerHTML = " "
  //     alert('Survey Details Submited Sucessfully.')
  //   }
  // }

  // let surveydoneby = document.getElementById('surveydoneby').value

  // if (surveydoneby == null || surveydoneby === "") {
  //     document.getElementById('esurveydoneby').innerHTML="Please Enter survey done by !"
  // }
  // else if(!isNaN(surveydoneby)){
  //     document.getElementById('esurveydoneby').innerHTML="Numbers are not allowed !"
  // }
  // else if(surveydoneby.length < 2  || surveydoneby.length > 50){
  //     document.getElementById('esurveydoneby').innerHTML="Minimum 2 and Maximum 50 characters are allowed !"
  // } 
  // else{
  //     document.getElementById('esurveydoneby').innerHTML=" "
  //     document.getElementsByName('status').value='submit'
  //     alert('Survey Details Submited Sucessfully.')
  // }

  //   useEffect(() => {
  //     const url = `https://hirsurishwarji-foundation.herokuapp.com/user/${id}`;

  //     const fetchData = async () => {
  //         try {
  //             const response = await fetch(url);
  //             const json = await response.json();
  //             setuserData(json)

  //             // console.log(json);            
  //         } catch (error) {
  //             console.log("error", error);
  //         }
  //     };
  //     fetchData();
  // }, []);


  // console.log(userData['dependenttable'].length)




  useEffect(() => {
    loadUser();
  }, []);


  const loadUser = async () => {
    const result = await axios.get(`https://hirsurishwarji-foundation.herokuapp.com/user/${id}`)
    setuserData(result.data);
  }


  console.log("userData of given id", userData)


  const update = () => {
    axios.put(`https://hirsurishwarji-foundation.herokuapp.com/user/${id}`, userData)
      .then(res => {
        window.alert(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const submit = () => {
    axios.put(`https://hirsurishwarji-foundation.herokuapp.com/user/updateSurvey/${id}`, userData)
      .then(res => {
        window.alert(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  // const approve = () => {
  //   axios.put(`https://hirsurishwarji-foundation.herokuapp.com/user/updateApprove/${id}`)
  //     .then(res => {
  //       window.alert(res.data)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }

  // const reject = () => {
  //   axios.put(`https://hirsurishwarji-foundation.herokuapp.com/user/updateReject/${id}`)
  //     .then(res => {
  //       window.alert(res.data)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }




  // console.log(Object.entries(userData))


  // for (const [key, value] of Object.entries(userData['dependenttable'])) {
  //   console.log(`${value}`);
  // }




  // userData.map(items => {
  //   console.log(items.Name)
  // })

  // for (let [key, value] of Object.entries(userData)) {
  //   console.log(`${key},${value}`)
  // }

  // const viewFile = (id, imageName) => {
  //   alert("viewfile clicked", id, imageName)
  //   // href = {'https://hirsurishwarji-foundation.herokuapp.com/user/file/'+userData.Image[1] }

  // }
  // const dependenttable = (
  //   userData.dependenttable ?

  //   Object.entries(userData.dependenttable).forEach(([key, value]) => {
  //     console.log(`${key} ${value}`); 
  //     <td>{`${val}`}</td>
  //     // "a 5", "b 7", "c 9"
  //   })


  // : <li></li>
  // )

  // const [dependenttableData, setdependenttableData,] = useState([])

  // var data = ''
  // userData.dependenttable?
  //    Object.entries(userData.dependenttable).forEach(([key, value]) => {
  //     data.append(<td>{value}</td>)
  //     // "a 5", "b 7", "c 9"
  //   })

  // :<li></li>


// logic for displaying skill table data

const handleupdate = (key) => {

  // console.log("after removing cursor ", key, "value" ,document.getElementById("skillinput").value)

  console.log(document.getElementById(`${key}`).value)


  userData.skilltableData[`${key}`] =document.getElementById(`${key}`).value
  setuserData(...userData)


}

  let arr1 = ''
  if (userData.skilltableData) {
    arr1 = Object.entries(userData.skilltableData).map(([key, val]) => {
      return (

        <div style = {{display:'inline-block'}}>         
            
              <p key = {key}  >
              {key}:
              <input type = "text" class = "form-control" id = {key} defaultValue={userData.skilltableData[`${key}`]}
            onBlur={()=>handleupdate(key)}
            />  <span>  </span>    
              
             </p> 
            
          </div>
         
        // <p key={key} style={{display:'inline-block'}}>{key}: <input type = "text" id = "skillinput" defaultValue={userData.skilltableData[`${key}`]}
        //     onBlur={()=>handleupdate(key)}
        //     /></p>


            
            
        // <div class = "col">
        //   <div class = "col">
        // <div class= " card inline-block" >         
        //   <div class= "card-body">
        //   <p key={key} >{key}: <input type = "text" id = "skillinput" defaultValue={userData.skilltableData[`${key}`]}
        //     onBlur={()=>handleupdate(key)}
        //     /></p>
         
        //   </div>
        // </div>
        // </div>
        // </div>
      )
    
    })
  }
  else {
    return (
      <td>{"No data found"}</td>
    )
  }

  // onChange={(e) => setuserData({...userData, [userData.skilltableData[`${key}`]]:e.target.value})}>
// logic for displaying skill table ends here



  return <div>

    {/* <input type={"text"} readOnly value={userData['Image']}></input> */}

    <div class="form-title">
      <h2 class="fs-title">Details for Application ID: {id}</h2>
    </div><br></br>
    <div className='viewpad viewborder' id='view'><br></br>
    <h5 className='viewdth viewhp'>Personal Details</h5>
      <table class="table">
        <thead class="thead-secondary">
          <tr>
            {/* <th>Personal Details</th> */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name:</td>
            <td>
              <div class="w-75 d-inline-block">
                <input class="form-control" value={userData['Name']} onChange={(e) => setuserData({ ...userData, "Name": e.target.value })} id="ex2" type="text" />
              </div>
            </td>
            <td>Father/Husband Name:</td>
            <td>
              <div class="w-75 d-inline-block">
                <input class="form-control" id="ex2" value={userData['Father_or_Husband_Name']} onChange={(e) => setuserData({ ...userData, "Father_or_Husband_Name": e.target.value })} type="text" />
              </div>
            </td>
          </tr>
          <tr>
            <td>Address Line 1:</td>
            <td>
              <div class="w-75 d-inline-block">
                <input class="form-control" value={userData['Address_Line1']} onChange={(e) => setuserData({ ...userData, "Address_Line1": e.target.value })} id="ex2" type="text" />
              </div>
            </td>
            <td>Address Line 2:</td>
            <td>
              <div class="w-75 d-inline-block">
                <input class="form-control" value={userData['Address_Line2']} onChange={(e) => setuserData({ ...userData, "Address_Line2": e.target.value })} id="ex2" type="text" />
              </div>
            </td>
          </tr>
          <tr>
            <td>City:</td>
            <td>
              <div class="w-75 d-inline-block">
                <input class="form-control" value={userData['City']} onChange={(e) => setuserData({ ...userData, "City": e.target.value })} id="ex2" type="text" />
              </div>
            </td>
            <td>State:</td>
            <td>
              <div class="w-75 d-inline-block">
                <input class="form-control" value={userData['State']} onChange={(e) => setuserData({ ...userData, "State": e.target.value })} id="ex2" type="text" />
              </div>
            </td>
          </tr>
          <tr>
            <td>PIN Code:</td>
            <td>
              <div class="w-75 d-inline-block">
                <input class="form-control" value={userData['Pincode']} onChange={(e) => setuserData({ ...userData, "Pincode": e.target.value })} id="ex2" type="text" />
              </div>
            </td>
            <td>Native Town:</td>
            <td>
              <div class="w-75 d-inline-block">
                <input class="form-control" value={userData['Native_Town']} onChange={(e) => setuserData({ ...userData, "Native_Town": e.target.value })} id="ex2" type="text" />
              </div>
            </td>
          </tr>
          <tr>
            <td>Phone No.:</td>
            <td>
              <div class="w-75 d-inline-block">
                <input class="form-control" value={userData['Phone_Number']} onChange={(e) => setuserData({ ...userData, "Phone_Number": e.target.value })} id="ex2" type="Number" />
              </div>
            </td>
            <td>Mobile No.:</td>
            <td>
              <div class="w-75 d-inline-block">
                <input class="form-control" value={userData['Mobile_Number']} onChange={(e) => setuserData({ ...userData, "Mobile_Number": e.target.value })} id="ex2" type="Number" />
              </div>
            </td>
          </tr>
          <tr>
            <td>Creed:</td>
            <td>
              <div class="w-75 d-inline-block">
                <input class="form-control" value={userData['Creed']} onChange={(e) => setuserData({ ...userData, "Creed": e.target.value })} id="ex2" type="text" />
              </div>
            </td>
            <td>Category:</td>
            <td>
              <div class="w-75 d-inline-block">
                <input class="form-control" value={userData['Category']} onChange={(e) => setuserData({ ...userData, "Category": e.target.value })} id="ex2" type="text" />
              </div>
            </td>
          </tr>
          <tr>
            <td>Jain:</td>
            <td>
              <div class="w-75 d-inline-block">
                <input class="form-control" value={userData['Jain']} onChange={(e) => setuserData({ ...userData, "Jain": e.target.value })} id="ex2" type="text" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <br></br>
      <h5 className='viewdth viewhp'>Documents Uploaded</h5>
      <table class="table">
        <thead class="thead-secondary">
          <tr>
            {/* <th>Documents Uploaded</th> */}
          </tr>
        </thead>
        <tbody>  
        <tr>
            <td>Ration Card Number:</td>
            <td>
              <div class="w-75 d-inline-block">
                <input class="form-control" value={userData['Ration_Card_Number']} onChange={(e) => setuserData({ ...userData, "Ration_Card_Number": e.target.value })} id="ex2" type="text" />
              </div>
            </td>
            <td>Rent/Maintenance Receipt Number:</td>
            <td>
              <div class="w-75 d-inline-block">
                <input class="form-control" value={userData['Rent_Reciept_Number']} onChange={(e) => setuserData({ ...userData, "Rent_Reciept_Number": e.target.value })} id="ex2" type="text" />
              </div>
            </td>
          </tr>
          <tr>            
            <td>Electric Bill Number:</td>
            <td>
              <div class="w-75 d-inline-block">
                <input class="form-control" value={userData['Electricity_Consumer_Number']} onChange={(e) => setuserData({ ...userData, "Jain": e.target.value })} id="ex2" type="text" />
              </div>
            </td>
          
            
            <td>Medical Insurance Number:</td>
            <td>
              <div class="w-75 d-inline-block">
                <input class="form-control" value={userData['Insurance_ID_Number']} onChange={(e) => setuserData({ ...userData, "Insurance_ID_Number": e.target.value })} id="ex2" type="text" />
              </div>
            </td>
          </tr>
          <tr>
            
            <td>Salary Certificate Number:</td>
            <td>
              <div class="w-75 d-inline-block">
                <input class="form-control" value={userData['Salary_Certificate_ID']} onChange={(e) => setuserData({ ...userData, "Salary_Certificate_ID": e.target.value })} id="ex2" type="text" />
              </div>
            </td>
          
           
            <td>Bank Passbook Number:</td>
            <td>
              <div class="w-75 d-inline-block">
                <input class="form-control" value={userData['Bank_Account_Details']} onChange={(e) => setuserData({ ...userData, "Bank_Account_Details": e.target.value })} id="ex2" type="text" />
              </div>
            </td>
          </tr>
          <tr>
           
            <td>Jain Minority Certificate Number:</td>
            <td>
              <div class="w-75 d-inline-block">
                <input class="form-control" value={userData['Jain_Minority_Certificate_ID']} onChange={(e) => setuserData({ ...userData, "Jain_Minority_Certificate_ID": e.target.value })} id="ex2" type="text" />
              </div>
            </td>
          
            
            <td>Telephone Bill Number:</td>
            <td>
              <div class="w-75 d-inline-block">
                <input class="form-control" value={userData['Telephone_Account_Number']} onChange={(e) => setuserData({ ...userData, "Telephone_Account_Number": e.target.value })} id="ex2" type="text" />
              </div>
            </td>
          </tr>
          <tr>
           
            <td>Referral Letter Number:</td>
            <td>
              <div class="w-75 d-inline-block">
                <input class="form-control" value={userData['Referral_Letter_Serial_Number']} onChange={(e) => setuserData({ ...userData, "Referral_Letter_Serial_Number": e.target.value })} id="ex2" type="text" />
              </div>
            </td>
          
            
            <td>Aadhar Card Number:</td>
            <td>
              <div class="w-75 d-inline-block">
                <input class="form-control" value={userData['Aadhaar_Card_Number']} onChange={(e) => setuserData({ ...userData, "Aadhaar_Card_Number": e.target.value })} id="ex2" type="text" />
              </div>
            </td>
          </tr>
          <tr>            
            <td>School/College Fees Receipt:</td>
            <td>
              <div class="w-75 d-inline-block">
                <input class="form-control" value={userData['School_College_Fees_Receipt_Number']} onChange={(e) => setuserData({ ...userData, "School_College_Fees_Receipt_Number": e.target.value })} id="ex2" type="text" />
              </div>
            </td>
          
            <td>Others:</td>
            <td>
              <div class="w-75 d-inline-block">
                <input class="form-control"  id="ex2" type="text" />
              </div>
            </td>          
            </tr>        
          <tr>
            {/* <td>Ration Card:</td> */}
            <td>
              {
                userData.Image
                  ? userData.Image[0] ? <p>{userData.Image[0]}</p>
                    : <span />
                  : <span />
              }
            </td>
            <td>
              {
                userData.Image
                  ? userData.Image[1] ?
                    <a href={'https://hirsurishwarji-foundation.herokuapp.com/user/file/' + userData.Image[1]}>
                      {userData.Image[1]}</a>
                    : <span />
                  : <span />
              }
            </td>
            <td>
              {
                userData.Image
                  ? userData.Image[2] ?
                    <p>{userData.Image[2]}</p>
                    : <span />
                  : <span />
              }
            </td>
            <td>
              {
                userData.Image
                  ? userData.Image[3] ?
                    <a href={'https://hirsurishwarji-foundation.herokuapp.com/user/file/' + userData.Image[3]}>
                      {userData.Image[3]}</a> : <span />
                  : <span />
              }
            </td></tr><tr>
            <td>
              {
                userData.Image
                  ? userData.Image[4] ? <p>{userData.Image[4]}</p>
                    : <span />
                  : <span />
              }
            </td>
            <td>
              {
                userData.Image
                  ? userData.Image[5] ?
                    <a href={'https://hirsurishwarji-foundation.herokuapp.com/user/file/' + userData.Image[5]}>
                      {userData.Image[5]}</a> : <span />
                  : <span />
              }
            </td>
            <td>
              {
                userData.Image
                  ? userData.Image[6] ? <p>{userData.Image[6]}</p>
                    : <span />
                  : <span />
              }
            </td>
            <td>
              {
                userData.Image
                  ? userData.Image[7] ?
                    <a href={'https://hirsurishwarji-foundation.herokuapp.com/user/file/' + userData.Image[7]}>
                      {userData.Image[7]}</a> : <span />
                  : <span />
              }
            </td></tr><tr>
            <td>
              {
                userData.Image
                  ? userData.Image[8] ? <p>{userData.Image[8]}</p>
                    : <span />
                  : <span />
              }
            </td>
            <td>
              {
                userData.Image
                  ? userData.Image[9] ?
                    <a href={'https://hirsurishwarji-foundation.herokuapp.com/user/file/' + userData.Image[9]}>
                      {userData.Image[9]}</a> : <span />
                  : <span />
              }
            </td>
            <td>
              {
                userData.Image
                  ? userData.Image[10] ? <p>{userData.Image[10]}</p>
                    : <span />
                  : <span />
              }
            </td>
            <td>
              {
                userData.Image
                  ? userData.Image[11] ?
                    <a href={'https://hirsurishwarji-foundation.herokuapp.com/user/file/' + userData.Image[11]}>
                      {userData.Image[11]}</a> : <span />
                  : <span />
              }
            </td></tr><tr>
            <td>
              {
                userData.Image
                  ? userData.Image[12] ? <p>{userData.Image[12]}</p>
                    : <span />
                  : <span />
              }
            </td>
            <td>
              {
                userData.Image
                  ? userData.Image[13] ?
                    <a href={'https://hirsurishwarji-foundation.herokuapp.com/user/file/' + userData.Image[13]}>
                      {userData.Image[13]}</a> : <span />
                  : <span />
              }
            </td>
            <td>
              {
                userData.Image
                  ? userData.Image[14] ? <p>{userData.Image[14]}</p>
                    : <span />
                  : <span />
              }
            </td>
            <td>
              {
                userData.Image
                  ? userData.Image[15] ?
                    <a href={'https://hirsurishwarji-foundation.herokuapp.com/user/file/' + userData.Image[15]}>
                      {userData.Image[15]}</a> : <span />
                  : <span />
              }
            </td></tr><tr>
            <td>
              {
                userData.Image
                  ? userData.Image[16] ? <p>{userData.Image[16]}</p>
                    : <span />
                  : <span />
              }
            </td>
            <td>
              {
                userData.Image
                  ? userData.Image[17] ?
                    <a href={'https://hirsurishwarji-foundation.herokuapp.com/user/file/' + userData.Image[17]}>
                      {userData.Image[17]}</a> : <span />
                  : <span />
              }
            </td>
            <td>
              {
                userData.Image
                  ? userData.Image[18] ? <p>{userData.Image[18]}</p>
                    : <span />
                  : <span />
              }
            </td>
            <td>
              {
                userData.Image
                  ? userData.Image[19] ?
                    <a href={'https://hirsurishwarji-foundation.herokuapp.com/user/file/' + userData.Image[19]}>
                      {userData.Image[19]}</a> : <span />
                  : <span />
              }
            </td></tr><tr>
            <td>
              {
                userData.Image
                  ? userData.Image[20] ? <p>{userData.Image[20]}</p>
                    : <span />
                  : <span />
              }
            </td>
            <td>
              {
                userData.Image
                  ? userData.Image[21] ?
                    <a href={'https://hirsurishwarji-foundation.herokuapp.com/user/file/' + userData.Image[21]}>
                      {userData.Image[21]}</a> : <span />
                  : <span />
              }
            </td>
            <td>
              {
                userData.Image
                  ? userData.Image[21] ? <p>{userData.Image[21]}</p>
                    : <span />
                  : <span />
              }
            </td>
            <td>
              {
                userData.Image
                  ? userData.Image[21] ? <p>{userData.Image[21]}</p>
                    : <span />
                  : <span />
              }
            </td>
            </tr>             
          
        </tbody>
      </table>
      <br></br>
      <h5 className='viewdth viewhp'>Miscellaneous Question</h5>
      <table class="table">
        <thead class="thead-secondary">
          <tr>
            {/* <th>Miscellaneous Question</th> */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Pathshala Children:</td>
            <td>
              <div class="w-75 d-inline-block">
                <input class="form-control" value={userData['Q1']} onChange={(e) => setuserData({ ...userData, "Q1": e.target.value })} id="ex2" type="text" />
              </div></td>
            <td>Religious Education Impart:</td>
            <td>
              <div class="w-75 d-inline-block">
                <input class="form-control" value={userData['Q2']} onChange={(e) => setuserData({ ...userData, "Q2": e.target.value })} id="ex2" type="text" />
              </div>
            </td>
            <td>Temple Pooja:</td>
            <td>
              <div class="w-75 d-inline-block">
                <input class="form-control" value={userData['Q3']} onChange={(e) => setuserData({ ...userData, "Q3": e.target.value })} id="ex2" type="text" />
              </div>
            </td>
          </tr>
          <tr>
            <td>Upashray Visit:</td>
            <td>
              <div class="w-75 d-inline-block">
                <input class="form-control" value={userData['Q4']} onChange={(e) => setuserData({ ...userData, "Q4": e.target.value })} id="ex2" type="text" />
              </div>
            </td>
            <td>Usage of Kanmool:</td>
            <td>
              <div class="w-75 d-inline-block">
                <input class="form-control" value={userData['Q5']} onChange={(e) => setuserData({ ...userData, "Q5": e.target.value })} id="ex2" type="text" />
              </div>
            </td>
            <td>Kanmool Usage Stooped:</td>
            <td>
              <div class="w-75 d-inline-block">
                <input class="form-control" value={userData['Q6']} onChange={(e) => setuserData({ ...userData, "Q6": e.target.value })} id="ex2" type="text" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <br></br>
      <h5 className='viewdth viewhp'>Monthly Expenses Details</h5>
      <table class="table">
        <thead class="thead-secondary">
          <tr>
            {/* <th>Monthly Expenses Details</th> */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Maintenance Expense:</td>
            <td>
              <div class="w-75 d-inline-block">
                <input class="form-control" value={userData['MaintenanceExpense']} onChange={(e) => setuserData({ ...userData, "MaintenanceExpense": e.target.value })} id="ex2" type="text" />
              </div>
            </td>
            <td>Electric Expense:</td>
            <td>

              <div class="w-75 d-inline-block">
                <input class="form-control" value={userData['ElectricBillExpense']} onChange={(e) => setuserData({ ...userData, "ElectricBillExpense": e.target.value })} id="ex2" type="text" />
              </div>
            </td>
            <td>Telephone Expense:</td>
            <td>
              <div class="w-75 d-inline-block">
                <input class="form-control" value={userData['TelephoneExpense']} onChange={(e) => setuserData({ ...userData, "TelephoneExpense": e.target.value })} id="ex2" type="text" />
              </div>
            </td>
          </tr>
          <tr>
            <td>Education Expense:</td>
            <td>
              <div class="w-75 d-inline-block">
                <input class="form-control" value={userData['EducationExpense']} onChange={(e) => setuserData({ ...userData, "EducationExpense": e.target.value })} id="ex2" type="text" />
              </div>
            </td>
            <td>Tuition Expense:</td>
            <td>
              <div class="w-75 d-inline-block">
                <input class="form-control" value={userData['TuitionExpense']} onChange={(e) => setuserData({ ...userData, "TuitionExpense": e.target.value })} id="ex2" type="text" />
              </div>
            </td>
            <td>Medical Expense:</td>
            <td>
              <div class="w-75 d-inline-block">
                <input class="form-control" value={userData['MedicalExpense']} onChange={(e) => setuserData({ ...userData, "MedicalExpense": e.target.value })} id="ex2" type="text" />
              </div>
            </td>
          </tr>
          <tr>
            <td>Groceries Expense:</td>
            <td>
              <div class="w-75 d-inline-block">
                <input class="form-control" value={userData['GroceriesExpense']} onChange={(e) => setuserData({ ...userData, "GroceriesExpense": e.target.value })} id="ex2" type="text" />
              </div>
            </td>
            <td>Other Expense:</td>
            <td>
              <div class="w-75 d-inline-block">
                <input class="form-control" value={userData['OtherExpense']} onChange={(e) => setuserData({ ...userData, "OtherExpense": e.target.value })} id="ex2" type="text" />
              </div>
            </td>
            <td></td>

            <td>
              <div class="w-75 d-inline-block">
                <input class="form-control" value={userData['TotalExpense']} onChange={(e) => setuserData({ ...userData, "TotalExpense": e.target.value })} id="ex2" type="text" />
              </div></td>
          </tr>
          <tr>
            <td>Total Area of Flat:</td>
            <td>
              <div class="w-75 d-inline-block">
                <input class="form-control" value={userData['AreaOfFlat']} onChange={(e) => setuserData({ ...userData, "AreaOfFlat": e.target.value })} id="ex2" type="text" />
              </div>
            </td>
            <td>Rent or Ownership:</td>
            <td>

              <div class="w-75 d-inline-block">
                <input class="form-control" value={userData['RentOrOwnershipStatus']} onChange={(e) => setuserData({ ...userData, "RentOrOwnershipStatus": e.target.value })} id="ex2" type="text" />
              </div>

            </td>
          </tr>
        </tbody>
      </table>
      <br></br>
      <h5 className='viewdth viewhp'>Home Furniture Details</h5>
      <table class="table">
        <thead class="thead-secondary">
          <tr>
            {/* <th>Home Furniture Details</th> */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>T.V:</td>
            <td>
              <div class="w-75 d-inline-block">
                <input class="form-control" value={userData['TV']} onChange={(e) => setuserData({ ...userData, "TV": e.target.value })} id="ex2" type="text" />
              </div>
            </td>
            <td>Cable:</td>
            <td>
              <div class="w-75 d-inline-block">
                <input class="form-control" value={userData['Cable']} onChange={(e) => setuserData({ ...userData, "Cable": e.target.value })} id="ex2" type="text" />
              </div>
            </td>
            <td>Fridge:</td>
            <td>
              <div class="w-75 d-inline-block">
                <input class="form-control" value={userData['Fridge']} onChange={(e) => setuserData({ ...userData, "Fridge": e.target.value })} id="ex2" type="text" />
              </div>
            </td>
            <td>Washing Machine:</td>
            <td>
              <div class="w-75 d-inline-block">
                <input class="form-control" value={userData['WashingMachine']} onChange={(e) => setuserData({ ...userData, "WashingMachine": e.target.value })} id="ex2" type="text" />
              </div>
            </td>
          </tr>
          <tr>
            <td>Vehicle:</td>
            <td>
              <div class="w-75 d-inline-block">
                <input class="form-control" value={userData['Vehicle']} onChange={(e) => setuserData({ ...userData, "Vehicle": e.target.value })} id="ex2" type="text" />
              </div>
            </td>
            <td>Bike</td>
            <td>
              <div class="w-75 d-inline-block">
                <input class="form-control" value={userData['Bike']} onChange={(e) => setuserData({ ...userData, "Bike": e.target.value })} id="ex2" type="text" />
              </div>
            </td>
            <td>Phones:</td>
            <td>
              <div class="w-75 d-inline-block">
                <input class="form-control" value={userData['Phones']} onChange={(e) => setuserData({ ...userData, "Phones": e.target.value })} id="ex2" type="text" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <br></br>
      <h5 className='viewdth viewhp'>Dependent Details</h5>
      <table class="table">
        <thead class="thead-secondary">
          <tr className='viewdth'>
            {/* <th>Dependent Details</th> */}
          </tr>
        </thead>
        <tbody>

          {/* {data}
             */}
          <tr>

            {userData.dependenttable ?
              //  ? userData.dependenttable[0]?
              //  <p>{userData.dependenttable[0]}</p>
              //  :<li>{"not available"}</li>







              // Object.entries(userData.dependenttable).forEach(([key, value]) => {
              //   let var1 = "hello";
              //   let var2 = "world"
              //   console.log(`${key} ${value}`);
              //   <tr>
              //   <td>{var1}</td></tr>
              //   // "a 5", "b 7", "c 9"
              // })
              // userData.dependenttable.forEach()
              userData.dependenttable.map(function (d) {
                const myArray = d.split(",")

                console.log("array after splitting", myArray)
                return (
                  <tr>
                    {myArray[0]?<td>{myArray[0]}</td>:<td></td>}
                    {myArray[1]
                    ?
                    <td>
                    {myArray[1] === 'undefined'? "No"
                      :
                      <div class="w-75 d-inline-block">
                        <input class="form-control" value={myArray[1]} id="ex2" type="text" />
                      </div>
                      
                      }
                      
                    </td>
                    :<td></td>}
                    
                   
                    {myArray[2]?<td>{myArray[2]}</td>:<td></td>}

                    {myArray[3]
                    ?
                    <td>
                    {myArray[3] === 'undefined'? "No"
                      :
                      <div class="w-75 d-inline-block">
                        <input class="form-control" value={myArray[3]} id="ex2" type="text" />
                      </div>
                      
                      }
                      
                      {/* <div class="w-75 d-inline-block">
                        <input class="form-control" value={myArray[3]} id="ex2" type="text" />
                      </div> */}
                    </td>
                    :<td></td>}
                    {myArray[4]?<td>{myArray[4]}</td>:<td></td>}
                    {/* <td>
                      {myArray[4]?<td></td>
                      :<td></td>
                      }
                    
                    </td> */}

                    {myArray[5]?
                    
                    <td>
                      {myArray[5] === 'undefined'|| "" ? "No"
                      :
                      <div class="w-75 d-inline-block">
                        <input class="form-control" value={myArray[5]} id="ex2" type="text" />
                      </div>
                      
                      }

                      {/* <div class="w-75 d-inline-block">
                        <input class="form-control" value={myArray[5]} id="ex2" type="text" />
                      </div> */}
                    </td>
                    :<td></td>}

                  </tr>
                )
              })

              : <tr></tr>
            }
          </tr>
        </tbody>
      </table>
      <br></br>
      {/* <h5 className='viewdth viewhp'>Financial Grant Details</h5> */}
      <table>
        {userData['Category'] === "Financial"?
        <div>
        <table>  
        <thead class="thead-secondary">
        {/* <h5 className='viewdth viewhp padd'>Financial Grant Details</h5> */}
        
        </thead>  
        <tbody>    
        <tr>

          <td>Financial Loan <h12 className='smalltext'> (Amount Needed)</h12>:</td>
          <td>
              <div class="w-75 d-inline-block">
                <input class="form-control" value={userData['loanamountneeded']} onChange={(e) => setuserData({ ...userData, "loanamountneeded": e.target.value })} id="ex2" type="text" />
              </div>
            </td>
        </tr>
        </tbody>
        </table></div>
        
        :userData['Category'] === "education" ?
        // <tr><td>Education grant needed</td></tr>
        <table class="table">
        <thead class="thead-secondary">
        <h5 className='viewdth viewhp padd'>Education Grant Details</h5>
          {/* <tr>
            <th>Education Grant Details</th>
          </tr> */}
        </thead>
        <tbody>
          <tr>
            <td>School/College Name:</td>
            <td>
              <div class="w-75 d-inline-block">
                <input class="form-control" value={userData['egscname']} onChange={(e) => setuserData({ ...userData, "egscname": e.target.value })} id="ex2" type="text" />
              </div>
            </td>
            <td>School/College Address:</td>
            <td>
              <div class="w-75 d-inline-block">
                <input class="form-control" id="ex2" value={userData['egscaddress']} onChange={(e) => setuserData({ ...userData, "egscaddress": e.target.value })} type="text" />
              </div>
            </td>
          
            <td>Course/Degree Name:</td>
            <td>
              <div class="w-75 d-inline-block">
                <input class="form-control" value={userData['egcoursename']} onChange={(e) => setuserData({ ...userData, "egcoursename": e.target.value })} id="ex2" type="text" />
              </div>
            </td>
            </tr>
          <tr>
            <td>Annual Fees:</td>
            <td>
              <div class="w-75 d-inline-block">
                <input class="form-control" value={userData['egannualfees']} onChange={(e) => setuserData({ ...userData, "egannualfees": e.target.value })} id="ex2" type="text" />
              </div>
            </td>
         
            <td>Detail Of Course:</td>
            <td>
              <div class="w-75 d-inline-block">
                <input class="form-control" value={userData['egdetailsofcourse']} onChange={(e) => setuserData({ ...userData, "egdetailsofcourse": e.target.value })} id="ex2" type="text" />
              </div>
            </td>
            <td>Independent:</td>
            <td>
              <div class="w-75 d-inline-block">
                <input class="form-control" value={userData['egindependent']} onChange={(e) => setuserData({ ...userData, "egindependent": e.target.value })} id="ex2" type="text" />
              </div>
            </td>
          </tr>
          <tr>
            <td>Education Loan <h12 className='smalltext'> (Amount Needed)</h12>:</td>
            <td>
              <div class="w-75 d-inline-block">
                <input class="form-control" value={userData['loanamountneeded']} onChange={(e) => setuserData({ ...userData, "loanamountneeded": e.target.value })} id="ex2" type="text" />
              </div>
            </td>
            <td>Self Manage Contribution:</td>
            <td>
              <div class="w-75 d-inline-block">
                <input class="form-control" value={userData['egselfmanagecontribution']} onChange={(e) => setuserData({ ...userData, "egselfmanagecontribution": e.target.value })} id="ex2" type="text" />
              </div>
            </td>
          </tr>

        </tbody>
      </table>


        :
        <table class="table">
        <thead class="thead-secondary">
        <h5 className='viewdth viewhp padd'>Medical Grant Details</h5>
          {/* <tr>
            <th>Medical Grant Details</th>
          </tr> */}
        </thead>
        <tbody>
          <tr>
            <td>Hospital Name:</td>
            <td>
              <div class="w-75 d-inline-block">
                <input class="form-control" value={userData['mghname']} onChange={(e) => setuserData({ ...userData, "mghname": e.target.value })} id="ex2" type="text" />
              </div>
            </td>
            <td>Hospital Address:</td>
            <td>
              <div class="w-75 d-inline-block">
                <input class="form-control" id="ex2" value={userData['mghaddress']} onChange={(e) => setuserData({ ...userData, "mghaddress": e.target.value })} type="text" />
              </div>
            </td>
          
            <td>Disease Name:</td>
            <td>
              <div class="w-75 d-inline-block">
                <input class="form-control" value={userData['mgdiseasedetails']} onChange={(e) => setuserData({ ...userData, "mgdiseasedetails": e.target.value })} id="ex2" type="text" />
              </div>
            </td>
            </tr>
          <tr>
            <td>Approximate Expenses:</td>
            <td>
              <div class="w-75 d-inline-block">
                <input class="form-control" value={userData['mgaprxexpenses']} onChange={(e) => setuserData({ ...userData, "mgaprxexpenses": e.target.value })} id="ex2" type="text" />
              </div>
            </td>
          
            <td>Medical Loan   <h12 className='smalltext'>  (Amount Needed)</h12>:</td>
            <td>
              <div class="w-75 d-inline-block">
                <input class="form-control" value={userData['loanamountneeded']} onChange={(e) => setuserData({ ...userData, "loanamountneeded": e.target.value })} id="ex2" type="text" />
              </div>
            </td>
            <td>Amount Contributed(Self):</td>
            <td>
              <div class="w-75 d-inline-block">
                <input class="form-control" value={userData['State']} onChange={(e) => setuserData({ ...userData, "State": e.target.value })} id="ex2" type="text" />
              </div>
            </td>
          </tr>
          <tr>
            <td>Existing Medical Aid:</td>
            <td>
              <div class="w-75 d-inline-block">
                <input class="form-control" value={userData['mgmedicalaid']} onChange={(e) => setuserData({ ...userData, "mgmedicalaid": e.target.value })} id="ex2" type="text" />
              </div>
            </td>
            <td>Medical Insurance Details:</td>
            <td>
              <div class="w-75 d-inline-block">
                <input class="form-control" value={userData['mginsurancedetails']} onChange={(e) => setuserData({ ...userData, "mginsurancedetails": e.target.value })} id="ex2" type="text" />
              </div>
            </td>
         
            <td>Medical Insurance Amount :</td>
            <td>
              <div class="w-75 d-inline-block">
                <input class="form-control" value={userData['mgmedamt']} onChange={(e) => setuserData({ ...userData, "mgmedamt": e.target.value })} id="ex2" type="Number" />
              </div>
            </td>            
          </tr>
        </tbody>
      </table>
              }
      </table>

<br></br>
<h5 className='viewdth viewhp'>Earning Member Details</h5>
      <table class="table">
        <thead class="thead-secondary">
          <tr className='viewdth'>
            {/* <th>Earning Member Details</th> */}
          </tr>
        </thead>
        <tbody>

        <tr>

{userData.earningmembertable ?
  //  ? userData.dependenttable[0]?
  //  <p>{userData.dependenttable[0]}</p>
  //  :<li>{"not available"}</li>







  // Object.entries(userData.dependenttable).forEach(([key, value]) => {
  //   let var1 = "hello";
  //   let var2 = "world"
  //   console.log(`${key} ${value}`);
  //   <tr>
  //   <td>{var1}</td></tr>
  //   // "a 5", "b 7", "c 9"
  // })
  // userData.dependenttable.forEach()
  userData.earningmembertable.map(function (d) {
    const myArray = d.split(",")

    console.log("array after splitting", myArray)
    return (
      <tr>
        {myArray[0]?<td>{myArray[0]}</td>:<td></td>}
        {myArray[1]
        ?
        <td>
        {myArray[1] === "undefined"? "No"
          :
          <div class="w-75 d-inline-block">
            <input  class="form-control" value={myArray[1]} id="ex2" type="text" />
          </div>
          
          }
          
        </td>
        :<td></td>}
        
       
        {myArray[2]?<td>{myArray[2]}</td>:<td></td>}

        {myArray[3]
        ?
        <td>
        {myArray[3] === 'undefined'? "No"
          :
          <div class="w-75 d-inline-block">
            <input  class="form-control" value={myArray[3]} id="ex2" type="text" />
          </div>
          
          }
          
          {/* <div class="w-75 d-inline-block">
            <input class="form-control" value={myArray[3]} id="ex2" type="text" />
          </div> */}
        </td>
        :<td></td>}
        {myArray[4]?<td>{myArray[4]}</td>:<td></td>}
        {/* <td>
          {myArray[4]?<td></td>
          :<td></td>
          }
        
        </td> */}

        {myArray[5]?
        
        <td>
          {myArray[5] === 'undefined'|| "" ? "No"
          :
          <div class="w-75 d-inline-block">
            <input  class="form-control" value={myArray[5]} id="ex2" type="text" />
          </div>
          
          }

          {/* <div class="w-75 d-inline-block">
            <input class="form-control" value={myArray[5]} id="ex2" type="text" />
          </div> */}
        </td>
        :<td></td>}

      </tr>
    )
  })

  : <li></li>
}
</tr>

        </tbody>
      </table>
      <br></br>
      {/* <h5 className='viewdth viewhp'>Skill Details</h5>
      {/* <table class="table"> */}
        {/* <thead class="thead-secondary"> */}
          <tr className='viewdth'>
            {/* <th>Skill Details</th> */}
          {/* </tr>
        </thead>
        <tbody>
        <tr> */}

{/* {userData.skilltableData ? */}
  {/* //  ? userData.dependenttable[0]?
  //  <p>{userData.dependenttable[0]}</p>
  //  :<li>{"not available"}</li> */}







  {/* // Object.entries(userData.dependenttable).forEach(([key, value]) => { */}
  {/* //   let var1 = "hello";
  //   let var2 = "world"
  //   console.log(`${key} ${value}`);
  //   <tr>
  //   <td>{var1}</td></tr>
  //   // "a 5", "b 7", "c 9"
  // })
  // userData.dependenttable.forEach()
  userData.skilltableData.map(function (d) {
    const myArray = d.split(",")

    console.log("array after splitting", myArray)
    return (
      <tr>
        {myArray[0]?<td>{myArray[0]}</td>:<td></td>}
        {myArray[1]
        ?
        <td>
        {myArray[1] === "undefined"? "No"
          :
          <div class="w-75 d-inline-block">
            <input  class="form-control" value={myArray[1]} id="ex2" type="text" />
          </div>
          
          }
          
        </td>
        :<td></td>}
        
       
        {myArray[2]?<td>{myArray[2]}</td>:<td></td>}

        {myArray[3]
        ?
        <td>
        {myArray[3] === 'undefined'? "No"
          :
          <div class="w-75 d-inline-block">
            <input  class="form-control" value={myArray[3]} id="ex2" type="text" />
          </div>
          
          }
           */}
          {/* <div class="w-75 d-inline-block">
            <input class="form-control" value={myArray[3]} id="ex2" type="text" />
          </div> */}
        {/* </td>
        :<td></td>}
        {myArray[4]?<td>{myArray[4]}</td>:<td></td>} */}
        {/* <td>
          {myArray[4]?<td></td>
          :<td></td>
          }
        
        </td> */}

        {/* {myArray[5]?
        
        <td>
          {myArray[5] === 'undefined'|| "" ? "No"
          :
          <div class="w-75 d-inline-block">
            <input  class="form-control" value={myArray[5]} id="ex2" type="text" />
          </div>
          
          } */}

          {/* <div class="w-75 d-inline-block">
            <input class="form-control" value={myArray[5]} id="ex2" type="text" />
          </div> */}
        {/* </td>
        :<td></td>} */}

{/* {myArray[6]?<td>{myArray[6]}</td>:<td></td>}

{myArray[7]?
        
        <td>
          {myArray[7] === 'undefined'|| "" ? "No"
          :
          <div class="w-75 d-inline-block">
            <input  class="form-control" value={myArray[7]} id="ex2" type="text" />
          </div>
          
          } */}

          {/* <div class="w-75 d-inline-block">
            <input class="form-control" value={myArray[5]} id="ex2" type="text" />
          </div> */}
        {/* </td>
        :<td></td>} */}

      </tr>
    {/* ) */}
  {/* }) */}

  {/* : <li></li> */}
{/* } */}
{/* </tr> */}
          {/* <tr>
            <td>Name:</td>
            <td>uname</td>
            <td>Work:</td>
            <td>uwork</td>
            <td>Education:</td>
            <td>uph no</td>
            <td>Phone Number:</td>
            <td>uph no</td>
          </tr> */}
        {/* </tbody> */}
      {/* </table> */}
      <br></br>
      <h5 className='viewdth viewhp'>Skill  Details</h5>

      <table className='table'>
        <thead>
        {/* <h6>Skill table New one</h6> */}
        </thead>
        <tr>
        {arr1}

        </tr>
      
         
        

      </table>

      <h5 className='viewdth viewhp'>Administrative Details</h5>
      <table class="table">
          <tr>
          </tr>
        <tbody>
          <tr>
            <td>Referred By:</td>
            <td>{userData['referredby']}</td>
            <td>Address of Referral:</td>
            <td>{userData['referraladdress']}</td>
           
          </tr>
        </tbody>
      </table>


      <button className='btn btn-secondary' onClick={update}>
        Update
      </button>

    </div><br></br><br></br><hr class="solid"></hr><br></br>
    <div>
      <h6 class="fs-title">Survey Details</h6>
    </div>
    <br></br>
    <Card style={{ width: '147ch' }} className='mx-auto'>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '40ch' },
        }}
        noValidate
        autoComplete="off">
        <div className='viewadminborder'><br></br>

          <div>
            <table className='center'>
              <tr>
                <td>
                  <label className='vadminlable1 required'>Survey Done By:</label>
                  <input type='text' className="form-control" id="ex2" value={userData['surveydoneby']} onChange={(e) => setuserData({ ...userData, "surveydoneby": e.target.value })} /><br></br> <span id='esurveydoneby' className='text-danger' >  </span>
                </td>
                <td>
                  <label className='vadminlable'>Survey Details:</label>
                  <input type='text' className="form-control" id="ex2" value={userData['surveydetails']} onChange={(e) => setuserData({ ...userData, "surveydetails": e.target.value })} /> <br></br><span>  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <label className='vadminlable'>Special Notes:</label>
                  <input type='text' className="form-control" id="ex2" value={userData['specialnotes']} onChange={(e) => setuserData({ ...userData, "specialnotes": e.target.value })} /><br></br>
                </td>
                <td>
                  <div className='datepick'>
                    <tr>
                      <td>
                        <p className='date'>Date : <DatePickerComponent placeholder='Enter Date' format="dd-MMM-yy" width='105' value={userData['surveydate']} onChange={(e) => setuserData({ ...userData, "surveydate": e.target.value })}></DatePickerComponent></p>
                      </td>
                    </tr>
                  </div>
                </td>
              </tr>
            </table><br></br>

            {/* <div>
        <p>Above details for Application ID {id} are correct and ready for Approve.</p>
      </div> */}

          </div>
        </div><br></br>
        <Button variant='contained' color='primary' onClick={submit} >Submit</Button><br></br><br></br>
        <br></br><br></br>


        {/* <hr class="solid"></hr><br></br>
        <div>
          <h6 class="fs-title">Approval Details</h6>
        </div>
        <br></br>
        <div className='viewadminborder'><br></br>
          <table className='center'>
            <tr>
              <td className='thpad'>
                <TextField label="Approved By:" className="required" id="approvedby" margin='normal' variant='standard' color="secondary" /><br></br> <span id='esurveydoneby' className='text-danger' >  </span>
              </td>
              <td className='thpad'>
                <TextField label="Amount Needed" InputProps={{ startAdornment: <InputAdornment position="start">Rs.</InputAdornment> }} id='egmoneyneed' type="number" value={userData['egmoneyneeded']} onChange={(e) => setuserData({ ...userData, "egmoneyneeded": e.target.value })} margin='normal' variant='standard' color="secondary" />
              </td>
            </tr>
            <tr>
              <td className='thpad'>
                <TextField label="Approved Amount:" InputProps={{ startAdornment: <InputAdornment position="start">Rs.</InputAdornment> }} className="required" type='number' id="approvedamount" margin='normal' variant='standard' color="secondary" /><span>  </span>
              </td>
              <td className='thpad'>
                <TextField label="Comments:" id="comments" margin='normal' variant='standard' color="secondary" />
              </td>
            </tr>
          </table> */}
        {/* <div className='datepick2'>
       <Button variant='contained' color='primary' onClick={submit} >Submit</Button><span> </span>
      <br></br><br></br>
      

      <hr class="solid"></hr><br></br>
    <div>
      <h6 class="fs-title">Approval Details</h6>
    </div>
    <br></br>
    <div  className='viewadminborder'><br></br>
    <table className='center'>
        <tr>
          <td className='thpad'>
          <TextField label="Approved By:" className ="required" id="approvedby" margin='normal' variant='standard' color="primary" /><br></br> <span id='esurveydoneby' className='text-danger' >  </span>
          </td>
          <td className='thpad'>
          <TextField label="Amount Needed" InputProps={{ startAdornment: <InputAdornment position="start">Rs.</InputAdornment>}} id='egmoneyneed' type="number" value={userData['egmoneyneeded']} onChange={(e) => setUserData({ ...userData, "egmoneyneeded": e.target.value })} margin='normal' variant='standard' color="primary" />
          </td>
        </tr>
        <tr>
          <td className='thpad'>
          <TextField label="Approved Amount:" InputProps={{ startAdornment: <InputAdornment position="start">Rs.</InputAdornment>}} className ="required" type='number' id="approvedamount"  margin='normal' variant='standard' color="primary" /><span>  </span>
          </td>
          <td className='thpad'>
          <TextField label="Comments:" id="comments"  margin='normal' variant='standard' color="primary" />
          </td>
        </tr>
      </table>
      {/* <div className='datepick2'>
      <DatePickerComponent placeholder='Enter Date' format="dd-MMM-yy" ></DatePickerComponent>
      </div> */}
        {/* <br></br>

          <div>
            <input type='checkbox' style={{ width: '30px' }} /><span>  Above details for Application ID {id} are correct and ready for Approve.</span>
          </div><br></br>
        </div><br></br><br></br> */}

      </Box></Card>

    {/* <Button variant='contained' color='secondary' onClick={reject}>Reject</Button><span> </span>
    <Button variant='contained' color='primary' onClick={approve} >Approve</Button><br></br><br></br><br></br><br></br> */}

  </div>
}





















// erronious code leave it






// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';


// import { Button, TextField, Box } from '@material-ui/core';
// import { Card, Table, } from 'react-bootstrap'
// import InputAdornment from '@material-ui/core/InputAdornment'
// // import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
// // import AdapterDateFns from '@mui/lab/AdapterDateFns';
// // import LocalizationProvider from '@mui/lab/LocalizationProvider';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../App.css'
// import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';

// export default function View(props) {
//   const { id } = useParams()
//   const [userData, setuserData,] = useState([])
//   console.log('user data in view file', userData)

//   // const submit = () => {
//   //   let surveydoneby = document.getElementById('surveydoneby').value

//   //   if (surveydoneby == null || surveydoneby === "") {
//   //     document.getElementById('esurveydoneby').innerHTML = "Please Enter survey done by !"
//   //   }
//   //   else if (!isNaN(surveydoneby)) {
//   //     document.getElementById('esurveydoneby').innerHTML = "Numbers are not allowed !"
//   //   }
//   //   else if (surveydoneby.length < 2 || surveydoneby.length > 50) {
//   //     document.getElementById('esurveydoneby').innerHTML = "Minimum 2 and Maximum 50 characters are allowed !"
//   //   }
//   //   else {
//   //     document.getElementById('esurveydoneby').innerHTML = " "
//   //     alert('Survey Details Submited Sucessfully.')
//   //   }
//   // }

//   // let surveydoneby = document.getElementById('surveydoneby').value

//   // if (surveydoneby == null || surveydoneby === "") {
//   //     document.getElementById('esurveydoneby').innerHTML="Please Enter survey done by !"
//   // }
//   // else if(!isNaN(surveydoneby)){
//   //     document.getElementById('esurveydoneby').innerHTML="Numbers are not allowed !"
//   // }
//   // else if(surveydoneby.length < 2  || surveydoneby.length > 50){
//   //     document.getElementById('esurveydoneby').innerHTML="Minimum 2 and Maximum 50 characters are allowed !"
//   // } 
//   // else{
//   //     document.getElementById('esurveydoneby').innerHTML=" "
//   //     document.getElementsByName('status').value='submit'
//   //     alert('Survey Details Submited Sucessfully.')
//   // }

//   //   useEffect(() => {
//   //     const url = `https://hirsurishwarji-foundation.herokuapp.com/user/${id}`;

//   //     const fetchData = async () => {
//   //         try {
//   //             const response = await fetch(url);
//   //             const json = await response.json();
//   //             setuserData(json)

//   //             // console.log(json);            
//   //         } catch (error) {
//   //             console.log("error", error);
//   //         }
//   //     };
//   //     fetchData();
//   // }, []);


//   // console.log(userData['dependenttable'].length)




//   useEffect(() => {
//     loadUser();
//   }, []);


//   const loadUser = async () => {
//     const result = await axios.get(`http://localhost:8000/user/${id}`)
//     setuserData(result.data);
//   }


//   console.log("userData of given id", userData)


//   const update = () => {
//     axios.put(`https://hirsurishwarji-foundation.herokuapp.com/user/${id}`, userData)
//       .then(res => {
//         window.alert(res.data)
//       })
//       .catch(err => {
//         console.log(err)
//       })
//   }

//   const submit = () => {
//     axios.put(`https://hirsurishwarji-foundation.herokuapp.com/user/updateSurvey/${id}`, userData)
//       .then(res => {
//         window.alert(res.data)
//       })
//       .catch(err => {
//         console.log(err)
//       })
//   }

//   // const approve = () => {
//   //   axios.put(`https://hirsurishwarji-foundation.herokuapp.com/user/updateApprove/${id}`)
//   //     .then(res => {
//   //       window.alert(res.data)
//   //     })
//   //     .catch(err => {
//   //       console.log(err)
//   //     })
//   // }

//   // const reject = () => {
//   //   axios.put(`https://hirsurishwarji-foundation.herokuapp.com/user/updateReject/${id}`)
//   //     .then(res => {
//   //       window.alert(res.data)
//   //     })
//   //     .catch(err => {
//   //       console.log(err)
//   //     })
//   // }




//   // console.log(Object.entries(userData))


//   // for (const [key, value] of Object.entries(userData['dependenttable'])) {
//   //   console.log(`${value}`);
//   // }




//   // userData.map(items => {
//   //   console.log(items.Name)
//   // })

//   // for (let [key, value] of Object.entries(userData)) {
//   //   console.log(`${key},${value}`)
//   // }

//   // const viewFile = (id, imageName) => {
//   //   alert("viewfile clicked", id, imageName)
//   //   // href = {'https://hirsurishwarji-foundation.herokuapp.com/user/file/'+userData.Image[1] }

//   // }
//   // const dependenttable = (
//   //   userData.dependenttable ?

//   //   Object.entries(userData.dependenttable).forEach(([key, value]) => {
//   //     console.log(`${key} ${value}`); 
//   //     <td>{`${val}`}</td>
//   //     // "a 5", "b 7", "c 9"
//   //   })


//   // : <li></li>
//   // )

//   // const [dependenttableData, setdependenttableData,] = useState([])

//   // var data = ''
//   // userData.dependenttable?
//   //    Object.entries(userData.dependenttable).forEach(([key, value]) => {
//   //     data.append(<td>{value}</td>)
//   //     // "a 5", "b 7", "c 9"
//   //   })

//   // :<li></li>

//   // {userData.skilltableData?

//   // userData.skilltableData.forEach(element => {

//   //   console.log(element)

//   // })
//   // :<li></li>}

//   userData.skilltableData ?
//     Object.entries(userData.skilltableData).forEach(([key, value]) => {
//       console.log(key, value)
//       //     data.append(<td>{value}</td>)
//       //     // "a 5", "b 7", "c 9"
//     })
//     // console.log(userData.skilltableData['skill1name'])


//     : console.log("mo skill")


// // logic for displaying skill table data

// const handleupdate = (key) => {

//   userData.skilltableData[`${key}`] = "ratnesh"
//   setuserData(...userData)


// }

//   let arr1 = ''
//   if (userData.skilltableData) {
//     arr1 = Object.entries(userData.skilltableData).map(([key, val]) => {
//       return (
//         <div>
//           <td key={key} className='rows'>{key}:</td>
//           <td className='rows'><input type = {"text"} value={userData.skilltableData[`${key}`]} onChange={(e)=> {
//             userData.skilltableData[`${key}`] = e.target.value;
//             setuserData([...userData.skilltableData])
//           }}></input></td>
//         </div>
//       )

//     })
//   }
//   else {
//     return (
//       <td>{"No data found"}</td>
//     )
//   }
// // logic for displaying skill table ends here
//   // const table = {
//   //   skill1name: "ratnesh",
//   //   skill1work: "B.E.",
//   //   skill1education: "engineering."
//   // }
//   // console.log("temp obj created", table)
//   // const arr = Object.entries(table).map(([key, val]) => {
//   //   return (
//   //     <div>
//   //       <td key={key}>{key}:</td>
//   //       <td key = {key}><input value = {val} onChange={(e) => table[key] = e.target.value}></input></td>
//   //     </div>     
//   //   )
//   // })
//   // const arr = () => {
//   //   Object.entries(table).map(([key, val]) => {
//   //     return (
//   //       <div>
//   //         <td key={key}>{key}:</td>
//   //         <td key={key}><input value={val} onChange={(e) => table[key] = e.target.value}></input></td>
//   //       </div>
//   //     )
//   //   })

//   // }




//   // function skilltab() {
//   //   table?
//   //   Object.entries(table).map(([key,val])=>{
//   //     return(
//   //       <div>
//   //         <td key = {key}>{key}</td>
//   //         <td key = {key}>{val}</td>
//   //       </div>
//   //     )
//   //   })
//   // :<td></td>

//   // }





//   return <div>

//     {/* <input type={"text"} readOnly value={userData['Image']}></input> */}

//     <div class="form-title">
//       <h2 class="fs-title">Details for Application ID: {id}</h2>
//     </div><br></br>
//     <div className='viewpad viewborder' id='view'><br></br>
//     <h5 className='viewdth viewhp'>Personal Details</h5>
//       <table class="table">
//         <thead class="thead-secondary">
//           <tr>
//             {/* <th>Personal Details</th> */}
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>Name:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['Name']} onChange={(e) => setuserData({ ...userData, "Name": e.target.value })} id="ex2" type="text" />
//               </div>
//             </td>
//             <td>Father/Husband Name:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" id="ex2" value={userData['Father_or_Husband_Name']} onChange={(e) => setuserData({ ...userData, "Father_or_Husband_Name": e.target.value })} type="text" />
//               </div>
//             </td>
//           </tr>
//           <tr>
//             <td>Address Line 1:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['Address_Line1']} onChange={(e) => setuserData({ ...userData, "Address_Line1": e.target.value })} id="ex2" type="text" />
//               </div>
//             </td>
//             <td>Address Line 2:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['Address_Line2']} onChange={(e) => setuserData({ ...userData, "Address_Line2": e.target.value })} id="ex2" type="text" />
//               </div>
//             </td>
//           </tr>
//           <tr>
//             <td>City:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['City']} onChange={(e) => setuserData({ ...userData, "City": e.target.value })} id="ex2" type="text" />
//               </div>
//             </td>
//             <td>State:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['State']} onChange={(e) => setuserData({ ...userData, "State": e.target.value })} id="ex2" type="text" />
//               </div>
//             </td>
//           </tr>
//           <tr>
//             <td>PIN Code:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['Pincode']} onChange={(e) => setuserData({ ...userData, "Pincode": e.target.value })} id="ex2" type="text" />
//               </div>
//             </td>
//             <td>Native Town:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['Native_Town']} onChange={(e) => setuserData({ ...userData, "Native_Town": e.target.value })} id="ex2" type="text" />
//               </div>
//             </td>
//           </tr>
//           <tr>
//             <td>Phone No.:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['Phone_Number']} onChange={(e) => setuserData({ ...userData, "Phone_Number": e.target.value })} id="ex2" type="Number" />
//               </div>
//             </td>
//             <td>Mobile No.:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['Mobile_Number']} onChange={(e) => setuserData({ ...userData, "Mobile_Number": e.target.value })} id="ex2" type="Number" />
//               </div>
//             </td>
//           </tr>
//           <tr>
//             <td>Creed:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['Creed']} onChange={(e) => setuserData({ ...userData, "Creed": e.target.value })} id="ex2" type="text" />
//               </div>
//             </td>
//             <td>Category:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['Category']} onChange={(e) => setuserData({ ...userData, "Category": e.target.value })} id="ex2" type="text" />
//               </div>
//             </td>
//           </tr>
//           <tr>
//             <td>Jain:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['Jain']} onChange={(e) => setuserData({ ...userData, "Jain": e.target.value })} id="ex2" type="text" />
//               </div>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//       <br></br>
//       <h5 className='viewdth viewhp'>Documents Uploaded</h5>
//       <table class="table">
//         <thead class="thead-secondary">
//           <tr>
//             {/* <th>Documents Uploaded</th> */}
//           </tr>
//         </thead>
//         <tbody>  
//         <tr>
//             <td>Ration Card Number:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['Ration_Card_Number']} onChange={(e) => setuserData({ ...userData, "Ration_Card_Number": e.target.value })} id="ex2" type="text" />
//               </div>
//             </td>
//             <td>Rent/Maintenance Receipt Number:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['Rent_Reciept_Number']} onChange={(e) => setuserData({ ...userData, "Rent_Reciept_Number": e.target.value })} id="ex2" type="text" />
//               </div>
//             </td>
//           </tr>
//           <tr>            
//             <td>Electric Bill Number:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['Electricity_Consumer_Number']} onChange={(e) => setuserData({ ...userData, "Jain": e.target.value })} id="ex2" type="text" />
//               </div>
//             </td>
          
            
//             <td>Medical Insurance Number:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['Insurance_ID_Number']} onChange={(e) => setuserData({ ...userData, "Insurance_ID_Number": e.target.value })} id="ex2" type="text" />
//               </div>
//             </td>
//           </tr>
//           <tr>
            
//             <td>Salary Certificate Number:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['Salary_Certificate_ID']} onChange={(e) => setuserData({ ...userData, "Salary_Certificate_ID": e.target.value })} id="ex2" type="text" />
//               </div>
//             </td>
          
           
//             <td>Bank Passbook Number:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['Bank_Account_Details']} onChange={(e) => setuserData({ ...userData, "Bank_Account_Details": e.target.value })} id="ex2" type="text" />
//               </div>
//             </td>
//           </tr>
//           <tr>
           
//             <td>Jain Minority Certificate Number:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['Jain_Minority_Certificate_ID']} onChange={(e) => setuserData({ ...userData, "Jain_Minority_Certificate_ID": e.target.value })} id="ex2" type="text" />
//               </div>
//             </td>
          
            
//             <td>Telephone Bill Number:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['Telephone_Account_Number']} onChange={(e) => setuserData({ ...userData, "Telephone_Account_Number": e.target.value })} id="ex2" type="text" />
//               </div>
//             </td>
//           </tr>
//           <tr>
           
//             <td>Referral Letter Number:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['Referral_Letter_Serial_Number']} onChange={(e) => setuserData({ ...userData, "Referral_Letter_Serial_Number": e.target.value })} id="ex2" type="text" />
//               </div>
//             </td>
          
            
//             <td>Aadhar Card Number:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['Aadhaar_Card_Number']} onChange={(e) => setuserData({ ...userData, "Aadhaar_Card_Number": e.target.value })} id="ex2" type="text" />
//               </div>
//             </td>
//           </tr>
//           <tr>            
//             <td>School/College Fees Receipt:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['School_College_Fees_Receipt_Number']} onChange={(e) => setuserData({ ...userData, "School_College_Fees_Receipt_Number": e.target.value })} id="ex2" type="text" />
//               </div>
//             </td>
          
//             <td>Others:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control"  id="ex2" type="text" />
//               </div>
//             </td>          
//             </tr>        
//         <tbody>
//           <tr>
//             {/* <td>Ration Card:</td> */}
//             <td>
//               {
//                 userData.Image
//                   ? userData.Image[0] ? <p>{userData.Image[0]}</p>
//                     : <span />
//                   : <span />
//               }
//             </td>
//             <td>
//               {
//                 userData.Image
//                   ? userData.Image[1] ?
//                     <a href={'https://hirsurishwarji-foundation.herokuapp.com/user/file/' + userData.Image[1]}>
//                       {userData.Image[1]}</a>
//                     : <span />
//                   : <span />
//               }
//             </td>
//             <td>
//               {
//                 userData.Image
//                   ? userData.Image[2] ?
//                     <p>{userData.Image[2]}</p>
//                     : <span />
//                   : <span />
//               }
//             </td>
//             <td>
//               {
//                 userData.Image
//                   ? userData.Image[3] ?
//                     <a href={'https://hirsurishwarji-foundation.herokuapp.com/user/file/' + userData.Image[3]}>
//                       {userData.Image[3]}</a> : <span />
//                   : <span />
//               }
//             </td></tr><tr>
//             <td>
//               {
//                 userData.Image
//                   ? userData.Image[4] ? <p>{userData.Image[4]}</p>
//                     : <span />
//                   : <span />
//               }
//             </td>
//             <td>
//               {
//                 userData.Image
//                   ? userData.Image[5] ?
//                     <a href={'https://hirsurishwarji-foundation.herokuapp.com/user/file/' + userData.Image[5]}>
//                       {userData.Image[5]}</a> : <span />
//                   : <span />
//               }
//             </td>
//             <td>
//               {
//                 userData.Image
//                   ? userData.Image[6] ? <p>{userData.Image[6]}</p>
//                     : <span />
//                   : <span />
//               }
//             </td>
//             <td>
//               {
//                 userData.Image
//                   ? userData.Image[7] ?
//                     <a href={'https://hirsurishwarji-foundation.herokuapp.com/user/file/' + userData.Image[7]}>
//                       {userData.Image[7]}</a> : <span />
//                   : <span />
//               }
//             </td></tr><tr>
//             <td>
//               {
//                 userData.Image
//                   ? userData.Image[8] ? <p>{userData.Image[8]}</p>
//                     : <span />
//                   : <span />
//               }
//             </td>
//             <td>
//               {
//                 userData.Image
//                   ? userData.Image[9] ?
//                     <a href={'https://hirsurishwarji-foundation.herokuapp.com/user/file/' + userData.Image[9]}>
//                       {userData.Image[9]}</a> : <span />
//                   : <span />
//               }
//             </td>
//             <td>
//               {
//                 userData.Image
//                   ? userData.Image[10] ? <p>{userData.Image[10]}</p>
//                     : <span />
//                   : <span />
//               }
//             </td>
//             <td>
//               {
//                 userData.Image
//                   ? userData.Image[11] ?
//                     <a href={'https://hirsurishwarji-foundation.herokuapp.com/user/file/' + userData.Image[11]}>
//                       {userData.Image[11]}</a> : <span />
//                   : <span />
//               }
//             </td></tr><tr>
//             <td>
//               {
//                 userData.Image
//                   ? userData.Image[12] ? <p>{userData.Image[12]}</p>
//                     : <span />
//                   : <span />
//               }
//             </td>
//             <td>
//               {
//                 userData.Image
//                   ? userData.Image[13] ?
//                     <a href={'https://hirsurishwarji-foundation.herokuapp.com/user/file/' + userData.Image[13]}>
//                       {userData.Image[13]}</a> : <span />
//                   : <span />
//               }
//             </td>
//             <td>
//               {
//                 userData.Image
//                   ? userData.Image[14] ? <p>{userData.Image[14]}</p>
//                     : <span />
//                   : <span />
//               }
//             </td>
//             <td>
//               {
//                 userData.Image
//                   ? userData.Image[15] ?
//                     <a href={'https://hirsurishwarji-foundation.herokuapp.com/user/file/' + userData.Image[15]}>
//                       {userData.Image[15]}</a> : <span />
//                   : <span />
//               }
//             </td></tr><tr>
//             <td>
//               {
//                 userData.Image
//                   ? userData.Image[16] ? <p>{userData.Image[16]}</p>
//                     : <span />
//                   : <span />
//               }
//             </td>
//             <td>
//               {
//                 userData.Image
//                   ? userData.Image[17] ?
//                     <a href={'https://hirsurishwarji-foundation.herokuapp.com/user/file/' + userData.Image[17]}>
//                       {userData.Image[17]}</a> : <span />
//                   : <span />
//               }
//             </td>
//             <td>
//               {
//                 userData.Image
//                   ? userData.Image[18] ? <p>{userData.Image[18]}</p>
//                     : <span />
//                   : <span />
//               }
//             </td>
//             <td>
//               {
//                 userData.Image
//                   ? userData.Image[19] ?
//                     <a href={'https://hirsurishwarji-foundation.herokuapp.com/user/file/' + userData.Image[19]}>
//                       {userData.Image[19]}</a> : <span />
//                   : <span />
//               }
//             </td></tr><tr>
//             <td>
//               {
//                 userData.Image
//                   ? userData.Image[20] ? <p>{userData.Image[20]}</p>
//                     : <span />
//                   : <span />
//               }
//             </td>
//             <td>
//               {
//                 userData.Image
//                   ? userData.Image[21] ?
//                     <a href={'https://hirsurishwarji-foundation.herokuapp.com/user/file/' + userData.Image[21]}>
//                       {userData.Image[21]}</a> : <span />
//                   : <span />
//               }
//             </td>
//             <td>
//               {
//                 userData.Image
//                   ? userData.Image[21] ? <p>{userData.Image[21]}</p>
//                     : <span />
//                   : <span />
//               }
//             </td>
//             <td>
//               {
//                 userData.Image
//                   ? userData.Image[21] ? <p>{userData.Image[21]}</p>
//                     : <span />
//                   : <span />
//               }
//             </td>
//             </tr>             
          
//             </td>
//           <tr>
//             <td>Ration Card Number:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['Ration_Card_Number']} onChange={(e) => setuserData({ ...userData, "Ration_Card_Number": e.target.value })} id="ex2" type="text" />
//               </div>
//             </td>
//             <td>Rent/Maintenance Receipt Number:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['Rent_Reciept_Number']} onChange={(e) => setuserData({ ...userData, "Rent_Reciept_Number": e.target.value })} id="ex2" type="text" />
//               </div>
//             </td>
//           </tr>
//           <tr>
//             <td>Electric Bill Number:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['Electricity_Consumer_Number']} onChange={(e) => setuserData({ ...userData, "Jain": e.target.value })} id="ex2" type="text" />
//               </div>
//             </td>


//             <td>Medical Insurance Number:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['Insurance_ID_Number']} onChange={(e) => setuserData({ ...userData, "Insurance_ID_Number": e.target.value })} id="ex2" type="text" />
//               </div>
//             </td>
//           </tr>
//           <tr>

//             <td>Salary Certificate Number:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['Salary_Certificate_ID']} onChange={(e) => setuserData({ ...userData, "Salary_Certificate_ID": e.target.value })} id="ex2" type="text" />
//               </div>
//             </td>


//             <td>Bank Passbook Number:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['Bank_Account_Details']} onChange={(e) => setuserData({ ...userData, "Bank_Account_Details": e.target.value })} id="ex2" type="text" />
//               </div>
//             </td>
//           </tr>
//           <tr>

//             <td>Jain Minority Certificate Number:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['Jain_Minority_Certificate_ID']} onChange={(e) => setuserData({ ...userData, "Jain_Minority_Certificate_ID": e.target.value })} id="ex2" type="text" />
//               </div>
//             </td>


//             <td>Telephone Bill Number:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['Telephone_Account_Number']} onChange={(e) => setuserData({ ...userData, "Telephone_Account_Number": e.target.value })} id="ex2" type="text" />
//               </div>
//             </td>
//           </tr>
//           <tr>

//             <td>Referral Letter Number:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['Referral_Letter_Serial_Number']} onChange={(e) => setuserData({ ...userData, "Referral_Letter_Serial_Number": e.target.value })} id="ex2" type="text" />
//               </div>
//             </td>


//             <td>Aadhar Card Number:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['Aadhaar_Card_Number']} onChange={(e) => setuserData({ ...userData, "Aadhaar_Card_Number": e.target.value })} id="ex2" type="text" />
//               </div>
//             </td>
//           </tr>
//           <tr>
//             <td>School/College Fees Receipt:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['School_College_Fees_Receipt_Number']} onChange={(e) => setuserData({ ...userData, "School_College_Fees_Receipt_Number": e.target.value })} id="ex2" type="text" />
//               </div>
//             </td>

//             <td>Others:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" id="ex2" type="text" />
//               </div>
//             </td>          </tr>
//         </tbody>
//       </table>
//       <br></br>
//       <h5 className='viewdth viewhp'>Miscellaneous Question</h5>
//       <table class="table">
//         <thead class="thead-secondary">
//           <tr>
//             {/* <th>Miscellaneous Question</th> */}
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>Pathshala Children:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['Q1']} onChange={(e) => setuserData({ ...userData, "Q1": e.target.value })} id="ex2" type="text" />
//               </div></td>
//             <td>Religious Education Impart:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['Q2']} onChange={(e) => setuserData({ ...userData, "Q2": e.target.value })} id="ex2" type="text" />
//               </div>
//             </td>
//             <td>Temple Pooja:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['Q3']} onChange={(e) => setuserData({ ...userData, "Q3": e.target.value })} id="ex2" type="text" />
//               </div>
//             </td>
//           </tr>
//           <tr>
//             <td>Upashray Visit:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['Q4']} onChange={(e) => setuserData({ ...userData, "Q4": e.target.value })} id="ex2" type="text" />
//               </div>
//             </td>
//             <td>Usage of Kanmool:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['Q5']} onChange={(e) => setuserData({ ...userData, "Q5": e.target.value })} id="ex2" type="text" />
//               </div>
//             </td>
//             <td>Kanmool Usage Stooped:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['Q6']} onChange={(e) => setuserData({ ...userData, "Q6": e.target.value })} id="ex2" type="text" />
//               </div>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//       <br></br>
//       <h5 className='viewdth viewhp'>Monthly Expenses Details</h5>
//       <table class="table">
//         <thead class="thead-secondary">
//           <tr>
//             {/* <th>Monthly Expenses Details</th> */}
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>Maintenance Expense:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['MaintenanceExpense']} onChange={(e) => setuserData({ ...userData, "MaintenanceExpense": e.target.value })} id="ex2" type="text" />
//               </div>
//             </td>
//             <td>Electric Expense:</td>
//             <td>

//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['ElectricBillExpense']} onChange={(e) => setuserData({ ...userData, "ElectricBillExpense": e.target.value })} id="ex2" type="text" />
//               </div>
//             </td>
//             <td>Telephone Expense:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['TelephoneExpense']} onChange={(e) => setuserData({ ...userData, "TelephoneExpense": e.target.value })} id="ex2" type="text" />
//               </div>
//             </td>
//           </tr>
//           <tr>
//             <td>Education Expense:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['EducationExpense']} onChange={(e) => setuserData({ ...userData, "EducationExpense": e.target.value })} id="ex2" type="text" />
//               </div>
//             </td>
//             <td>Tuition Expense:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['TuitionExpense']} onChange={(e) => setuserData({ ...userData, "TuitionExpense": e.target.value })} id="ex2" type="text" />
//               </div>
//             </td>
//             <td>Medical Expense:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['MedicalExpense']} onChange={(e) => setuserData({ ...userData, "MedicalExpense": e.target.value })} id="ex2" type="text" />
//               </div>
//             </td>
//           </tr>
//           <tr>
//             <td>Groceries Expense:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['GroceriesExpense']} onChange={(e) => setuserData({ ...userData, "GroceriesExpense": e.target.value })} id="ex2" type="text" />
//               </div>
//             </td>
//             <td>Other Expense:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['OtherExpense']} onChange={(e) => setuserData({ ...userData, "OtherExpense": e.target.value })} id="ex2" type="text" />
//               </div>
//             </td>
//             <td></td>

//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['TotalExpense']} onChange={(e) => setuserData({ ...userData, "TotalExpense": e.target.value })} id="ex2" type="text" />
//               </div></td>
//           </tr>
//           <tr>
//             <td>Total Area of Flat:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['AreaOfFlat']} onChange={(e) => setuserData({ ...userData, "AreaOfFlat": e.target.value })} id="ex2" type="text" />
//               </div>
//             </td>
//             <td>Rent or Ownership:</td>
//             <td>

//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['RentOrOwnershipStatus']} onChange={(e) => setuserData({ ...userData, "RentOrOwnershipStatus": e.target.value })} id="ex2" type="text" />
//               </div>

//             </td>
//           </tr>
//         </tbody>
//       </table>
//       <br></br>
//       <h5 className='viewdth viewhp'>Home Furniture Details</h5>
//       <table class="table">
//         <thead class="thead-secondary">
//           <tr>
//             {/* <th>Home Furniture Details</th> */}
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>T.V:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['TV']} onChange={(e) => setuserData({ ...userData, "TV": e.target.value })} id="ex2" type="text" />
//               </div>
//             </td>
//             <td>Cable:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['Cable']} onChange={(e) => setuserData({ ...userData, "Cable": e.target.value })} id="ex2" type="text" />
//               </div>
//             </td>
//             <td>Fridge:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['Fridge']} onChange={(e) => setuserData({ ...userData, "Fridge": e.target.value })} id="ex2" type="text" />
//               </div>
//             </td>
//             <td>Washing Machine:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['WashingMachine']} onChange={(e) => setuserData({ ...userData, "WashingMachine": e.target.value })} id="ex2" type="text" />
//               </div>
//             </td>
//           </tr>
//           <tr>
//             <td>Vehicle:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['Vehicle']} onChange={(e) => setuserData({ ...userData, "Vehicle": e.target.value })} id="ex2" type="text" />
//               </div>
//             </td>
//             <td>Bike</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['Bike']} onChange={(e) => setuserData({ ...userData, "Bike": e.target.value })} id="ex2" type="text" />
//               </div>
//             </td>
//             <td>Phones:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['Phones']} onChange={(e) => setuserData({ ...userData, "Phones": e.target.value })} id="ex2" type="text" />
//               </div>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//       <br></br>
//       <h5 className='viewdth viewhp'>Dependent Details</h5>
//       <table class="table">
//         <thead class="thead-secondary">
//           <tr className='viewdth'>
//             {/* <th>Dependent Details</th> */}
//           </tr>
//         </thead>
//         <tbody>

//           {/* {data}
//              */}
//           <tr>

//             {userData.dependenttable ?
//               //  ? userData.dependenttable[0]?
//               //  <p>{userData.dependenttable[0]}</p>
//               //  :<li>{"not available"}</li>







//               // Object.entries(userData.dependenttable).forEach(([key, value]) => {
//               //   let var1 = "hello";
//               //   let var2 = "world"
//               //   console.log(`${key} ${value}`);
//               //   <tr>
//               //   <td>{var1}</td></tr>
//               //   // "a 5", "b 7", "c 9"
//               // })
//               // userData.dependenttable.forEach()
//               userData.dependenttable.map(function (d) {
//                 const myArray = d.split(",")

//                 console.log("array after splitting", myArray)
//                 return (
//                   <tr>
//                     {myArray[0] ? <td>{myArray[0]}</td> : <td></td>}
//                     {myArray[1]
//                       ?
//                       <td>
//                         {myArray[1] === 'undefined' ? "No"
//                           :
//                           <div class="w-75 d-inline-block">
//                             <input class="form-control" value={myArray[1]} id="ex2" type="text" />
//                           </div>

//                         }

//                       </td>
//                       : <td></td>}


//                     {myArray[2] ? <td>{myArray[2]}</td> : <td></td>}

//                     {myArray[3]
//                       ?
//                       <td>
//                         {myArray[3] === 'undefined' ? "No"
//                           :
//                           <div class="w-75 d-inline-block">
//                             <input class="form-control" value={myArray[3]} id="ex2" type="text" />
//                           </div>

//                         }

//                         {/* <div class="w-75 d-inline-block">
//                         <input class="form-control" value={myArray[3]} id="ex2" type="text" />
//                       </div> */}
//                       </td>
//                       : <td></td>}
//                     {myArray[4] ? <td>{myArray[4]}</td> : <td></td>}
//                     {/* <td>
//                       {myArray[4]?<td></td>
//                       :<td></td>
//                       }
                    
//                     </td> */}

//                     {myArray[5] ?

//                       <td>
//                         {myArray[5] === 'undefined' || "" ? "No"
//                           :
//                           <div class="w-75 d-inline-block">
//                             <input class="form-control" value={myArray[5]} id="ex2" type="text" />
//                           </div>

//                         }

//                         {/* <div class="w-75 d-inline-block">
//                         <input class="form-control" value={myArray[5]} id="ex2" type="text" />
//                       </div> */}
//                       </td>
//                       : <td></td>}

//                   </tr>
//                 )
//               })

//               : <tr></tr>
//             }
//           </tr>
//         </tbody>
//       </table>
//       <br></br>
//       {/* <h5 className='viewdth viewhp'>Financial Grant Details</h5> */}
//       <table>
//         {userData['Category'] === "Financial"?
//         <tr>
//           <td>Financial Loan <h12 className='smalltext'> (Amount Needed)</h12>:</td>
//           <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['loanamountneeded']} onChange={(e) => setuserData({ ...userData, "loanamountneeded": e.target.value })} id="ex2" type="text" />
//               </div>
//             </td>
//         </tr>
        
//         :userData['Category'] === "education" ?
//         // <tr><td>Education grant needed</td></tr>
//         <table class="table">
//         <thead class="thead-secondary">
//         <h5 className='viewdth viewhp padd'>Education Grant Details</h5>
//           {/* <tr>
//             <th>Education Grant Details</th>
//           </tr> */}
//         </thead>
//         <tbody>
//           <tr>
//             <td>School/College Name:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['egscname']} onChange={(e) => setuserData({ ...userData, "egscname": e.target.value })} id="ex2" type="text" />
//               </div>
//             </td>
//             <td>School/College Address:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" id="ex2" value={userData['egscaddress']} onChange={(e) => setuserData({ ...userData, "egscaddress": e.target.value })} type="text" />
//               </div>
//             </td>
          
//             <td>Course/Degree Name:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['egcoursename']} onChange={(e) => setuserData({ ...userData, "egcoursename": e.target.value })} id="ex2" type="text" />
//               </div>
//             </td>
//             </tr>
//           <tr>
//             <td>Annual Fees:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['egannualfees']} onChange={(e) => setuserData({ ...userData, "egannualfees": e.target.value })} id="ex2" type="text" />
//               </div>
//             </td>
         
//             <td>Detail Of Course:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['egdetailsofcourse']} onChange={(e) => setuserData({ ...userData, "egdetailsofcourse": e.target.value })} id="ex2" type="text" />
//               </div>
//             </td>
//             <td>Independent:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['egindependent']} onChange={(e) => setuserData({ ...userData, "egindependent": e.target.value })} id="ex2" type="text" />
//               </div>
//             </td>
//           </tr>
//           <tr>
//             <td>Education Loan <h12 className='smalltext'> (Amount Needed)</h12>:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['loanamountneeded']} onChange={(e) => setuserData({ ...userData, "loanamountneeded": e.target.value })} id="ex2" type="text" />
//               </div>
//             </td>
//             <td>Self Manage Contribution:</td>
//         {userData['Category'] === "Financial" ?
//           <tr>
//             <td>Financial Amoount Needed :</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['financialamountneeded']} onChange={(e) => setuserData({ ...userData, "financialamountneeded": e.target.value })} id="ex2" type="text" />
//               </div>
//             </td>
//           </tr>


//         :
//         <table class="table">
//         <thead class="thead-secondary">
//         <h5 className='viewdth viewhp padd'>Medical Grant Details</h5>
//           {/* <tr>
//             <th>Medical Grant Details</th>
//           </tr> */}
//         </thead>
//         <tbody>
//           <tr>
//             <td>Hospital Name:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['mghname']} onChange={(e) => setuserData({ ...userData, "mghname": e.target.value })} id="ex2" type="text" />
//               </div>
//             </td>
//             <td>Hospital Address:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" id="ex2" value={userData['mghaddress']} onChange={(e) => setuserData({ ...userData, "mghaddress": e.target.value })} type="text" />
//               </div>
//             </td>
          
//             <td>Disease Name:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['mgdiseasedetails']} onChange={(e) => setuserData({ ...userData, "mgdiseasedetails": e.target.value })} id="ex2" type="text" />
//               </div>
//             </td>
//             </tr>
//           <tr>
//             <td>Approximate Expenses:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['mgaprxexpenses']} onChange={(e) => setuserData({ ...userData, "mgaprxexpenses": e.target.value })} id="ex2" type="text" />
//               </div>
//             </td>
          
//             <td>Medical Loan   <h12 className='smalltext'>  (Amount Needed)</h12>:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['loanamountneeded']} onChange={(e) => setuserData({ ...userData, "loanamountneeded": e.target.value })} id="ex2" type="text" />
//               </div>
//             </td>
//             <td>Amount Contributed(Self):</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['State']} onChange={(e) => setuserData({ ...userData, "State": e.target.value })} id="ex2" type="text" />
//               </div>
//             </td>
//           </tr>
//           <tr>
//             <td>Existing Medical Aid:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['mgmedicalaid']} onChange={(e) => setuserData({ ...userData, "mgmedicalaid": e.target.value })} id="ex2" type="text" />
//               </div>
//             </td>
//             <td>Medical Insurance Details:</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['mginsurancedetails']} onChange={(e) => setuserData({ ...userData, "mginsurancedetails": e.target.value })} id="ex2" type="text" />
//               </div>
//             </td>
         
//             <td>Medical Insurance Amount :</td>
//             <td>
//               <div class="w-75 d-inline-block">
//                 <input class="form-control" value={userData['mgmedamt']} onChange={(e) => setuserData({ ...userData, "mgmedamt": e.target.value })} id="ex2" type="Number" />
//               </div>
//             </td>            
//           </tr>
//         </tbody>
//       </table>
//               }
//           : userData['Category'] === "education" ?
//             // <tr><td>Education grant needed</td></tr>
//             <table class="table">
//               <thead class="thead-secondary">
//                 <tr>
//                   <th>Education Grant Details</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>School/College Name:</td>
//                   <td>
//                     <div class="w-75 d-inline-block">
//                       <input class="form-control" value={userData['egscname']} onChange={(e) => setuserData({ ...userData, "egscname": e.target.value })} id="ex2" type="text" />
//                     </div>
//                   </td>
//                   <td>School/College Address:</td>
//                   <td>
//                     <div class="w-75 d-inline-block">
//                       <input class="form-control" id="ex2" value={userData['egscaddress']} onChange={(e) => setuserData({ ...userData, "egscaddress": e.target.value })} type="text" />
//                     </div>
//                   </td>

//                   <td>Course/Degree Name:</td>
//                   <td>
//                     <div class="w-75 d-inline-block">
//                       <input class="form-control" value={userData['egcoursename']} onChange={(e) => setuserData({ ...userData, "egcoursename": e.target.value })} id="ex2" type="text" />
//                     </div>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>Annual Fees:</td>
//                   <td>
//                     <div class="w-75 d-inline-block">
//                       <input class="form-control" value={userData['egannualfees']} onChange={(e) => setuserData({ ...userData, "egannualfees": e.target.value })} id="ex2" type="text" />
//                     </div>
//                   </td>

//                   <td>Detail Of Course:</td>
//                   <td>
//                     <div class="w-75 d-inline-block">
//                       <input class="form-control" value={userData['egdetailsofcourse']} onChange={(e) => setuserData({ ...userData, "egdetailsofcourse": e.target.value })} id="ex2" type="text" />
//                     </div>
//                   </td>
//                   <td>Independent:</td>
//                   <td>
//                     <div class="w-75 d-inline-block">
//                       <input class="form-control" value={userData['egindependent']} onChange={(e) => setuserData({ ...userData, "egindependent": e.target.value })} id="ex2" type="text" />
//                     </div>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>Money Needed:</td>
//                   <td>
//                     <div class="w-75 d-inline-block">
//                       <input class="form-control" value={userData['egmoneyneeded']} onChange={(e) => setuserData({ ...userData, "egmoneyneeded": e.target.value })} id="ex2" type="text" />
//                     </div>
//                   </td>
//                   <td>Self Manage Contribution:</td>
//                   <td>
//                     <div class="w-75 d-inline-block">
//                       <input class="form-control" value={userData['egselfmanagecontribution']} onChange={(e) => setuserData({ ...userData, "egselfmanagecontribution": e.target.value })} id="ex2" type="text" />
//                     </div>
//                   </td>
//                 </tr>

//               </tbody>
//             </table>


//             :
//             <table class="table">
//               <thead class="thead-secondary">
//                 <tr>
//                   <th>Medical Grant Details</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>Hospital Name:</td>
//                   <td>
//                     <div class="w-75 d-inline-block">
//                       <input class="form-control" value={userData['mghname']} onChange={(e) => setuserData({ ...userData, "mghname": e.target.value })} id="ex2" type="text" />
//                     </div>
//                   </td>
//                   <td>Hospital Address:</td>
//                   <td>
//                     <div class="w-75 d-inline-block">
//                       <input class="form-control" id="ex2" value={userData['mghaddress']} onChange={(e) => setuserData({ ...userData, "mghaddress": e.target.value })} type="text" />
//                     </div>
//                   </td>

//                   <td>Disease Name:</td>
//                   <td>
//                     <div class="w-75 d-inline-block">
//                       <input class="form-control" value={userData['mgdiseasedetails']} onChange={(e) => setuserData({ ...userData, "mgdiseasedetails": e.target.value })} id="ex2" type="text" />
//                     </div>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>Approximate Expenses:</td>
//                   <td>
//                     <div class="w-75 d-inline-block">
//                       <input class="form-control" value={userData['mgaprxexpenses']} onChange={(e) => setuserData({ ...userData, "mgaprxexpenses": e.target.value })} id="ex2" type="text" />
//                     </div>
//                   </td>

//                   <td>Amount Needed:</td>
//                   <td>
//                     <div class="w-75 d-inline-block">
//                       <input class="form-control" value={userData['mgamountneeded']} onChange={(e) => setuserData({ ...userData, "mgamountneeded": e.target.value })} id="ex2" type="text" />
//                     </div>
//                   </td>
//                   <td>Amount Contributed(Self):</td>
//                   <td>
//                     <div class="w-75 d-inline-block">
//                       <input class="form-control" value={userData['State']} onChange={(e) => setuserData({ ...userData, "State": e.target.value })} id="ex2" type="text" />
//                     </div>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>Existing Medical Aid:</td>
//                   <td>
//                     <div class="w-75 d-inline-block">
//                       <input class="form-control" value={userData['mgmedicalaid']} onChange={(e) => setuserData({ ...userData, "mgmedicalaid": e.target.value })} id="ex2" type="text" />
//                     </div>
//                   </td>
//                   <td>Medical Insurance Details:</td>
//                   <td>
//                     <div class="w-75 d-inline-block">
//                       <input class="form-control" value={userData['mginsurancedetails']} onChange={(e) => setuserData({ ...userData, "mginsurancedetails": e.target.value })} id="ex2" type="text" />
//                     </div>
//                   </td>

//                   <td>Medical Insurance Amount :</td>
//                   <td>
//                     <div class="w-75 d-inline-block">
//                       <input class="form-control" value={userData['mgmedamt']} onChange={(e) => setuserData({ ...userData, "mgmedamt": e.target.value })} id="ex2" type="Number" />
//                     </div>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//         }
//       </table>

// <br></br>
// <h5 className='viewdth viewhp'>Earning Member Details</h5>
//       <table class="table">
//         <thead class="thead-secondary">
//           <tr className='viewdth'>
//             {/* <th>Earning Member Details</th> */}
//           </tr>
//         </thead>
//         <tbody>

//           <tr>

//             {userData.earningmembertable ?
//               //  ? userData.dependenttable[0]?
//               //  <p>{userData.dependenttable[0]}</p>
//               //  :<li>{"not available"}</li>







//               // Object.entries(userData.dependenttable).forEach(([key, value]) => {
//               //   let var1 = "hello";
//               //   let var2 = "world"
//               //   console.log(`${key} ${value}`);
//               //   <tr>
//               //   <td>{var1}</td></tr>
//               //   // "a 5", "b 7", "c 9"
//               // })
//               // userData.dependenttable.forEach()
//               userData.earningmembertable.map(function (d) {
//                 const myArray = d.split(",")

//                 console.log("array after splitting", myArray)
//                 return (
//                   <tr>
//                     {myArray[0] ? <td>{myArray[0]}</td> : <td></td>}
//                     {myArray[1]
//                       ?
//                       <td>
//                         {myArray[1] === "undefined" ? "No"
//                           :
//                           <div class="w-75 d-inline-block">
//                             <input class="form-control" value={myArray[1]} id="ex2" type="text" />
//                           </div>

//                         }

//                       </td>
//                       : <td></td>}


//                     {myArray[2] ? <td>{myArray[2]}</td> : <td></td>}

//                     {myArray[3]
//                       ?
//                       <td>
//                         {myArray[3] === 'undefined' ? "No"
//                           :
//                           <div class="w-75 d-inline-block">
//                             <input class="form-control" value={myArray[3]} id="ex2" type="text" />
//                           </div>

//                         }

//                         {/* <div class="w-75 d-inline-block">
//             <input class="form-control" value={myArray[3]} id="ex2" type="text" />
//           </div> */}
//                       </td>
//                       : <td></td>}
//                     {myArray[4] ? <td>{myArray[4]}</td> : <td></td>}
//                     {/* <td>
//           {myArray[4]?<td></td>
//           :<td></td>
//           }
        
//         </td> */}

//                     {myArray[5] ?

//                       <td>
//                         {myArray[5] === 'undefined' || "" ? "No"
//                           :
//                           <div class="w-75 d-inline-block">
//                             <input class="form-control" value={myArray[5]} id="ex2" type="text" />
//                           </div>

//                         }

//                         {/* <div class="w-75 d-inline-block">
//             <input class="form-control" value={myArray[5]} id="ex2" type="text" />
//           </div> */}
//                       </td>
//                       : <td></td>}

//                   </tr>
//                 )
//               })

//               : <li></li>
//             }
//           </tr>

//         </tbody>
//       </table>
//       <br></br>
//       <h5 className='viewdth viewhp'>Skill Details</h5>
//       <table class="table">
//         <thead class="thead-secondary">
//           <tr className='viewdth'>
//             {/* <th>Skill Details</th> */}
//       {/* {
//         userData.skilltableData?
//         Object.keys(userData.skilltableData).map((key,i)=>{

//           <table>
//           <tr key = {i}>
//             <td>
//               {userData.skilltableData[key]}
//             </td>
//           </tr>
//         </table>

//         })
//         :"."
//       } */}
//       <table>
//         <thead>
//           <h6>Skill table</h6>
//         </thead>
//         <tr>
//           {arr1}

//           {/* {skilltab} */}
//           {/* {
//             table ?
//               Object.entries(table).map(([key, val]) => {
//                 <div>
//                   <td key = {key}>{key}:</td>
//                   <td key = {key}><input type={"text"} value={val}></input></td>
//                 </div>
//               })
//               : ("")
//           } */}
//           {/* <td>skilldata useranem</td> */}

//           {/* <td><input type = "text" value = {userData.skilltableData['skill1name']} onChange={(e) => setuserData({ ...userData, "abcd": e.target.value })}></input></td> */}
//         </tr>

//       </table>








//       {/* <table class="table">
//         <thead class="thead-secondary">
//           <tr>
//             <th>Skill Details</th>
//           </tr>
//         </thead>
//         <tbody>
//         <tr>

// {userData.skilltableData ?
//   userData.skilltableData.map(function (d) {
//     const myArray = d.split(",")
//     console.log("array after splitting", myArray)
//     return (
//       <tr>
//         {myArray[0]?<td>{myArray[0]}</td>:<td></td>}
//         {myArray[1]
//         ?
//         <td>
//         {myArray[1] === "undefined"? "No"
//           :
//           <div class="w-75 d-inline-block">
//             <input  class="form-control" value={myArray[1]} id="ex2" type="text" />
//           </div>
          
//           }
          
//         </td>
//         :<td></td>}
        
       
//         {myArray[2]?<td>{myArray[2]}</td>:<td></td>}

//         {myArray[3]
//         ?
//         <td>
//         {myArray[3] === 'undefined'? "No"
//           :
//           <div class="w-75 d-inline-block">
//             <input  class="form-control" value={myArray[3]} id="ex2" type="text" />
//           </div>
          
//           }        
//         </td>
//         :<td></td>}
//         {myArray[4]?<td>{myArray[4]}</td>:<td></td>}    
//         {myArray[5]?
//         <td>
//           {myArray[5] === 'undefined'|| "" ? "No"
//           :
//           <div class="w-75 d-inline-block">
//             <input  class="form-control" value={myArray[5]} id="ex2" type="text" />
//           </div>
          
//           }
//         </td>
//         :<td></td>}
// {myArray[6]?<td>{myArray[6]}</td>:<td></td>}
// {myArray[7]?
//         <td>
//           {myArray[7] === 'undefined'|| "" ? "No"
//           :
//           <div class="w-75 d-inline-block">
//             <input  class="form-control" value={myArray[7]} id="ex2" type="text" />
//           </div>          
//           }          
//         </td>
//         :<td></td>}
//       </tr>
//     )
//   })
//   : <li></li>
// }
// </tr>         
//         </tbody>
//       </table> */}
//       <br></br>
//       <h5 className='viewdth viewhp'>Administrative Details</h5>
//       <table class="table">
//           <tr>
//           </tr>
//         <tbody>
//           <tr>
//             <td>Referred By:</td>
//             <td>{userData['referredby']}</td>
//             <td>Address of Referral:</td>
//             <td>{userData['referraladdress']}</td>

//           </tr>
//         </tbody>
//       </table>


//       <button className='btn btn-secondary' onClick={update}>
//         Update
//       </button>

//     </div><br></br><br></br><hr class="solid"></hr><br></br>
//     <div>
//       <h6 class="fs-title">Survey Details</h6>
//     </div>
//     <br></br>
//     <Card style={{ width: '147ch' }} className='mx-auto'>
//       <Box
//         component="form"
//         sx={{
//           '& .MuiTextField-root': { m: 1, width: '40ch' },
//         }}
//         noValidate
//         autoComplete="off">
//         <div className='viewadminborder'><br></br>

//           <div>
//             <table className='center'>
//               <tr>
//                 <td>
//                   <label className='vadminlable1 required'>Survey Done By:</label>
//                   <input type='text' className="form-control" id="ex2" value={userData['surveydoneby']} onChange={(e) => setuserData({ ...userData, "surveydoneby": e.target.value })} /><br></br> <span id='esurveydoneby' className='text-danger' >  </span>
//                 </td>
//                 <td>
//                   <label className='vadminlable'>Survey Details:</label>
//                   <input type='text' className="form-control" id="ex2" value={userData['surveydetails']} onChange={(e) => setuserData({ ...userData, "surveydetails": e.target.value })} /> <br></br><span>  </span>
//                 </td>
//               </tr>
//               <tr>
//                 <td>
//                   <label className='vadminlable'>Special Notes:</label>
//                   <input type='text' className="form-control" id="ex2" value={userData['specialnotes']} onChange={(e) => setuserData({ ...userData, "specialnotes": e.target.value })} /><br></br>
//                 </td>
//                 <td>
//                   <div className='datepick'>
//                     <tr>
//                       <td>
//                         <p className='date'>Date : <DatePickerComponent placeholder='Enter Date' format="dd-MMM-yy" width='105' value={userData['surveydate']} onChange={(e) => setuserData({ ...userData, "surveydate": e.target.value })}></DatePickerComponent></p>
//                       </td>
//                     </tr>
//                   </div>
//                 </td>
//               </tr>
//             </table><br></br>

//             {/* <div>
//         <p>Above details for Application ID {id} are correct and ready for Approve.</p>
//       </div> */}

//           </div>
//         </div><br></br>
//         <Button variant='contained' color='primary' onClick={submit} >Submit</Button><br></br><br></br>
//         <br></br><br></br>


//         {/* <hr class="solid"></hr><br></br>
//         <div>
//           <h6 class="fs-title">Approval Details</h6>
//         </div>
//         <br></br>
//         <div className='viewadminborder'><br></br>
//           <table className='center'>
//             <tr>
//               <td className='thpad'>
//                 <TextField label="Approved By:" className="required" id="approvedby" margin='normal' variant='standard' color="secondary" /><br></br> <span id='esurveydoneby' className='text-danger' >  </span>
//               </td>
//               <td className='thpad'>
//                 <TextField label="Amount Needed" InputProps={{ startAdornment: <InputAdornment position="start">Rs.</InputAdornment> }} id='egmoneyneed' type="number" value={userData['egmoneyneeded']} onChange={(e) => setuserData({ ...userData, "egmoneyneeded": e.target.value })} margin='normal' variant='standard' color="secondary" />
//               </td>
//             </tr>
//             <tr>
//               <td className='thpad'>
//                 <TextField label="Approved Amount:" InputProps={{ startAdornment: <InputAdornment position="start">Rs.</InputAdornment> }} className="required" type='number' id="approvedamount" margin='normal' variant='standard' color="secondary" /><span>  </span>
//               </td>
//               <td className='thpad'>
//                 <TextField label="Comments:" id="comments" margin='normal' variant='standard' color="secondary" />
//               </td>
//             </tr>
//           </table> */}
//         {/* <div className='datepick2'>
//        <Button variant='contained' color='primary' onClick={submit} >Submit</Button><span> </span>
//       <br></br><br></br>
      

//       <hr class="solid"></hr><br></br>
//     <div>
//       <h6 class="fs-title">Approval Details</h6>
//     </div>
//     <br></br>
//     <div  className='viewadminborder'><br></br>
//     <table className='center'>
//         <tr>
//           <td className='thpad'>
//           <TextField label="Approved By:" className ="required" id="approvedby" margin='normal' variant='standard' color="primary" /><br></br> <span id='esurveydoneby' className='text-danger' >  </span>
//           </td>
//           <td className='thpad'>
//           <TextField label="Amount Needed" InputProps={{ startAdornment: <InputAdornment position="start">Rs.</InputAdornment>}} id='egmoneyneed' type="number" value={userData['egmoneyneeded']} onChange={(e) => setUserData({ ...userData, "egmoneyneeded": e.target.value })} margin='normal' variant='standard' color="primary" />
//           </td>
//         </tr>
//         <tr>
//           <td className='thpad'>
//           <TextField label="Approved Amount:" InputProps={{ startAdornment: <InputAdornment position="start">Rs.</InputAdornment>}} className ="required" type='number' id="approvedamount"  margin='normal' variant='standard' color="primary" /><span>  </span>
//           </td>
//           <td className='thpad'>
//           <TextField label="Comments:" id="comments"  margin='normal' variant='standard' color="primary" />
//           </td>
//         </tr>
//       </table>
//       {/* <div className='datepick2'>
//       <DatePickerComponent placeholder='Enter Date' format="dd-MMM-yy" ></DatePickerComponent>
//       </div> */}
//         {/* <br></br>

//           <div>
//             <input type='checkbox' style={{ width: '30px' }} /><span>  Above details for Application ID {id} are correct and ready for Approve.</span>
//           </div><br></br>
//         </div><br></br><br></br> */}

//       </Box></Card>

//     {/* <Button variant='contained' color='secondary' onClick={reject}>Reject</Button><span> </span>
//     <Button variant='contained' color='primary' onClick={approve} >Approve</Button><br></br><br></br><br></br><br></br> */}

//   </div>
// }










