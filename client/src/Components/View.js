import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function View() {

    const {id} = useParams()
    const [userData, setuserData] = useState()

    useEffect(() => {
      axios.get(`https://hirsurishwarji-foundation.herokuapp.com/user/${id}`)
          .then(response => {
              setuserData(response.data)
          })
  }, [])

  console.log(userData)
    // alert(id)

    
  return <div>

{/* 
{Object.keys(userData).map((key) => (
  <h1>{userData[key]}</h1>



))}
     */}



    

      

          <div class="form-title">
            <h2 class="fs-title">Details for Application ID: {id}</h2>
          </div>

          <div className='viewpad' id='view'>
          <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th>Personal Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Name:</td>
                        <td>name</td>
                        <td>Father/Husband Name:</td>
                        <td>{id}</td>
                    </tr>
                    <tr>
                        <td>Address Line 1:</td>
                        <td>{id}</td>
                        <td>Address Line 2:</td>
                        <td>{id}</td>
                    </tr>
                    <tr>
                        <td>City:</td>
                        <td>UCITY</td>
                        <td>State:</td>
                        <td>USTATE</td>
                    </tr>
                    <tr>
                        <td>PIN Code:</td>
                        <td>UPIN</td>
                        <td>Native Town:</td>
                        <td>UNTOWN</td>
                    </tr>
                    <tr>
                        <td>Phone No.:</td>
                        <td>UPHNO</td>
                        <td>Mobile No.:</td>
                        <td>UMONO</td>
                    </tr>
                    <tr>
                        <td>Creed:</td>
                        <td>UCREED</td>
                        <td>Category:</td>
                        <td>UCategory</td>
                    </tr>
                    <tr>
                        <td>Jain:</td>
                        <td>UJAIN</td>
                    </tr>
                </tbody>
            </table>
            <br></br>

            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th>Documents Uploaded</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Ration Card:</td>
                        <td>URATION</td>
                        <td>Ration Card Number:</td>
                        <td>URATIONN</td>
                    </tr>
                    <tr>
                        <td>Rent/Maintenance Receipt:</td>
                        <td>URENT</td>
                        <td>Rent/Maintenance Receipt Number:</td>
                        <td>URENTN</td>
                    </tr>
                    <tr>
                        <td>Electric Bill:</td>
                        <td>UEBILL</td>
                        <td>Electric Bill Number:</td>
                        <td>UEBILL</td>
                    </tr>
                    <tr>
                        <td>Medical Insurance:</td>
                        <td>UMINSURANCE</td>
                        <td>Medical Insurance Number:</td>
                        <td>UMINSURANCE</td>
                    </tr>
                    <tr>
                        <td>Salary Certificate:</td>
                        <td>USCERTI</td>
                        <td>Salary Certificate Number:</td>
                        <td>USCERTI</td>
                    </tr>
                    <tr>
                        <td>Bank Passbook:</td>
                        <td>UBPASSBOOK</td>
                        <td>Bank Passbook Number:</td>
                        <td>UBPASSBOOK</td>
                    </tr>
                    <tr>
                        <td>Jain Minority Certificate:</td>
                        <td>UJMCERTI</td>
                        <td>Jain Minority Certificate Number:</td>
                        <td>UJMCERTI</td>
                    </tr>
                    <tr>
                        <td>Telephone Bill:</td>
                        <td>UTBILL</td>
                        <td>Telephone Bill Number:</td>
                        <td>UTBILL</td>
                    </tr>
                    <tr>
                        <td>Referral Letter:</td>
                        <td>URLETTER</td>
                        <td>Referral Letter Number:</td>
                        <td>URLETTER</td>
                    </tr>
                    <tr>
                        <td>Aadhar Card:</td>
                        <td>UACARD</td>
                        <td>Aadhar Card Number:</td>
                        <td>UACARD</td>
                    </tr>
                    <tr>
                        <td>School/College Fees Receipt:</td>
                        <td>USCFRECEIPT</td>
                        <td>School/College Fees Receipt:</td>
                        <td>USCFRECEIPT</td>
                    </tr>
                    <tr>
                        <td>Others:</td>
                        <td>UOTHERS</td>
                    </tr>
                </tbody>
            </table>
            <br></br>
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th>Miscellaneous Question</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Pathshala Children:</td>
                        <td>UAQ1</td>
                        <td>Religious Education Impart:</td>
                        <td>UAQ2</td>
                        <td>Temple Pooja:</td>
                        <td>UAQ3</td>
                    </tr>
                    <tr>
                        <td>Upashray Visit:</td>
                        <td>UAQ4</td>
                        <td>Usage of Kanmool:</td>
                        <td>UAQ5</td>
                        <td>Kanmool Usage Stooped:</td>
                        <td>UAQ6</td>
                    </tr>
                </tbody>
            </table>
            <br></br>
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th>Monthly Expenses Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Maintenance Expense:</td>
                        <td>UAQ1</td>
                        <td>Electric Expense:</td>
                        <td>UAQ2</td>
                        <td>Telephone Expense:</td>
                        <td>UAQ3</td>
                    </tr>
                    <tr>
                        <td>Education Expense:</td>
                        <td>UAQ4</td>
                        <td>Tuition Expense:</td>
                        <td>UAQ5</td>
                        <td>Medical Expense:</td>
                        <td>UAQ6</td>
                    </tr>
                    <tr>
                        <td>Groceries Expense:</td>
                        <td>UAQ4</td>
                        <td>Other Expense:</td>
                        <td>UAQ5</td>
                        <td>Total Expense:</td>
                        <td>UAQ6</td>
                    </tr>
                    <tr>
                        <td>Total Area of Flat:</td>
                        <td>UAQ4</td>
                        <td>Rent or Ownership:</td>
                        <td>UAQ5</td>
                    </tr>
                </tbody>
            </table>
            <br></br>
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th>Home Furniture Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>T.V:</td>
                        <td>UAQ1</td>
                        <td>Cable:</td>
                        <td>UAQ2</td>
                        <td>Fridgee:</td>
                        <td>UAQ3</td>
                        <td>Washing Machine:</td>
                        <td>UAQ4</td>
                    </tr>
                    <tr>
                        <td>Vehicle:</td>
                        <td>UAQ5</td>
                        <td>Medical Expense:</td>
                        <td>Bike</td>
                        <td>Phones:</td>
                        <td>Bike</td>
                    </tr>
                </tbody>
            </table>
            <br></br>
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th>Dependent Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Sr.no: 1</td>
                        <td>Name</td>
                        <td>uname</td>
                        <td>Age:</td>
                        <td>Uage:</td>
                        <td>Aahaar No:</td>
                        <td>Uadhar:</td>
                        <td>Income:</td>
                        <td>Uincome</td>
                    </tr>
                    <tr>
                        <td>Education:</td>
                        <td>uedg:</td>
                        <td>Profession:</td>
                        <td>UPro</td>
                        <td>Religious Education:</td>
                        <td>UAQ5</td>
                    </tr>
                    <tr>
                        <td>Kanmool:</td>
                        <td>Bike</td>
                        <td>Navkarshi:</td>
                        <td>Bike</td>
                        <td>Pooja:</td>
                        <td>Bike</td>
                        <td>Night Dinner:</td>
                        <td>Bike</td>
                    </tr>
                </tbody>
            </table>
            <br></br>
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th>Earning Member Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Name:</td>
                        <td>uname</td>
                        <td>Work:</td>
                        <td>uwork</td>
                        <td>Phone Number:</td>
                        <td>uph no</td>
                    </tr>
                </tbody>
            </table>
            <br></br>
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th>Skill Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Name:</td>
                        <td>uname</td>
                        <td>Work:</td>
                        <td>uwork</td>
                        <td>Education:</td>
                        <td>uph no</td>
                        <td>Phone Number:</td>
                        <td>uph no</td>
                    </tr>
                </tbody>
            </table>
            <br></br>
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th>Administrative Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Referred By:</td>
                        <td>uname</td>
                        <td>Address of Referral:</td>
                        <td>uwork</td>
                        <td>Survey Done By:</td>
                        <td>uph no</td>
                    </tr>
                </tbody>
            </table>

          </div>
          

      

  </div>;
}
