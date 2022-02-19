import Form from '../model/createApplication.js'

import upload from './fileUpload.js';

import path from 'path';
import nodemon from 'nodemon';


// all application list
export const getApplicantList = (req, res) => {
    Form.find().sort('-_id').select({id:1,Name:1,Mobile_Number:1,Aadhaar_Card_Number:1,status:1,Ration_Card_Number:1}).exec(function(err,docs){
        res.send(docs)
    })
}

// application creating 
export const createApplication = (req, res) =>{
    upload(req, res, function (err) {
        if (err) {

          console.log("error in uploading"+err)
          return res.end("Error uploading file.");
        }
        console.log("no error received after upload")

        console.log(req.body)
        console.log(req.files)
        // storing path of files uploaded
        const paths = []
        req.files.forEach(function(value, key) {
          paths.push(value.fieldname)
          paths.push(value.originalname)
        })
        // saving data into db
        try {
          console.log("In trust save method"+req.body.creed)
          console.log("recieved skilldata object",JSON.parse(req.body.skilltableData))
          
            // console.log("in the post "+max1)
            const trust = new Form({
            //   id:max1 + 1,
              status : "pending",
              Name: req.body.name == "undefined" ? "" :req.body.name,
              Father_or_Husband_Name: req.body.fhname == "undefined" ? "" :req.body.fhname,
              Address_Line1: req.body.add1 == "undefined" ? "" :req.body.add1,
              Address_Line2: req.body.add2 == "undefined" ? "" :req.body.add2,
              City: req.body.city== "undefined" ? "Mumbai" :req.body.city,
              State: req.body.state== "undefined" ? "Maharashtra" :req.body.state,
              Pincode: req.body.pincode  == "undefined" ? "" :req.body.pincode,
              Native_Town: req.body.nativetown  == "undefined" ? "" :req.body.nativetown,
              Phone_Number: req.body.phonenumber  == "undefined" ? "" :req.body.phonenumber,
              Mobile_Number: req.body.mobilenumber  == "undefined" ? "" :req.body.mobilenumber,
              Jain: req.body.jainism  == "undefined" ? "Yes" :req.body.jainism,
              Category:req.body.category == "undefined" ? "Financial" :req.body.category ,

              

              Creed: req.body.creed == "undefined" ? "" : req.body.creed,
              Image: paths,

              Ration_Card_Number:req.body.rationcardnumber== "undefined" ? "" :req.body.rationcardnumber,
              Rent_Reciept_Number:req.body.rentrecieptormaintenanceserialnumber== "undefined" ? "" :req.body.rentrecieptormaintenanceserialnumber,
              Electricity_Consumer_Number:req.body.electricconsumernumber== "undefined" ? "" :req.body.electricconsumernumber,
              Insurance_ID_Number:req.body.insuranceid== "undefined" ? "" :req.body.insuranceid,
              Salary_Certificate_ID:req.body.salarycertificateid== "undefined" ? "" :req.body.salarycertificateid,
              Bank_Account_Details:req.body.bankaccountdetails== "undefined" ? "" :req.body.bankaccountdetails,
              Jain_Minority_Certificate_ID:req.body.jaincertificateid== "undefined" ? "" :req.body.jaincertificateid,
              Telephone_Account_Number:req.body.telephoneaccountnumber== "undefined" ? "" :req.body.telephoneaccountnumber,
              Referral_Letter_Serial_Number:req.body.referralletterserialnumber== "undefined" ? "" :req.body.referralletterserialnumber,
              Aadhaar_Card_Number:req.body.aadharnumber== "undefined" ? "" :req.body.aadharnumber,
              School_College_Fees_Receipt_Number:req.body.schoolorcollegefeesserialnumber== "undefined" ? "" :req.body.schoolorcollegefeesserialnumber,

              

              Q1: req.body.pathshalachildren== "undefined" ? "Yes" :req.body.pathshalachildren,
              Q2: req.body.religiouseducation== "undefined" ? "Yes" :req.body.religiouseducation,
              Q3: req.body.templepooja== "undefined" ? "Yes" :req.body.templepooja,
              Q4: req.body.upashrayvisit== "undefined" ? "Yes" :req.body.upashrayvisit,
              Q5: req.body.kanmoolusage== "undefined" ? "Yes" :req.body.kanmoolusage,
              Q6: req.body.kanmoolusagestopped== "undefined" ? "Yes" :req.body.kanmoolusagestopped,
              MaintenanceExpense: req.body.maintenance== "undefined" ? "" :req.body.maintenance,
              ElectricBillExpense: req.body.electricbillexpense== "undefined" ? "" :req.body.electricbillexpense,
              TelephoneExpense: req.body.telephoneexpense== "undefined" ? "" :req.body.telephoneexpense,
              EducationExpense: req.body.educationexpense== "undefined" ? "" :req.body.educationexpense,
              TuitionExpense: req.body.tuitionexpense== "undefined" ? "" :req.body.tuitionexpense,
              MedicalExpense: req.body.medicalexpense == "undefined" ? "" :req.body.medicalexpense,
              GroceriesExpense: req.body.groceriesexpense == "undefined" ? "" :req.body.groceriesexpense,
              OtherExpense: req.body.otherexpense == "undefined" ? "" :req.body.otherexpense,
              TotalExpense: req.body.totalexpenses == "undefined" ? "" :req.body.totalexpenses,
              AreaOfFlat: req.body.areaofflat  == "undefined" ? "" :req.body.areaofflat,
              RentOrOwnershipStatus: req.body.rentownershipstatus == "undefined" ? "Ownership" :req.body.rentownershipstatus,
              TV:req.body.tv == "undefined" ? "" :req.body.tv,
              Cable:req.body.cable == "undefined" ? "" :req.body.cable,
              Fridge:req.body.fridge == "undefined" ? "" :req.body.fridge,
              WashingMachine:req.body.washingmachine == "undefined" ? "" :req.body.washingmachine,
              Vehicle:req.body.vehicle == "undefined" ? "" :req.body.vehicle,
              Bike:req.body.bike == "undefined" ? "" :req.body.bike,
              Phones:req.body.phones == "undefined" ? "" :req.body.phones,    

              dependenttable : req.body.dependenttable == "undefined" ? "" :JSON.parse(req.body.dependenttable),

              unemployedpersoneducation : req.body.unemployedpersoneducation == "undefined" ? "" :req.body.unemployedpersoneducation,
              unemployedpersonexperience : req.body.unemployedpersonexperience == "undefined" ? "" :req.body.unemployedpersonexperience,
              loanstatus : req.body.loanstatus == "undefined" ? "No" :req.body.loanstatus,
              loanamount : req.body.loanamount == "undefined" ? "" :req.body.loanamount,
              financialloanstatus : req.body.financialloanstatus == "undefined" ? "" :req.body.financialloanstatus,
              loanamountneeded : req.body.loanamountneeded == "undefined" ? "" :req.body.loanamountneeded,
              egunemployedpersoneducation: req.body.egunemployedpersoneducation == "undefined" ? "" :req.body.egunemployedpersoneducation,
              egunemployedpersonexperience: req.body.egunemployedpersonexperience == "undefined" ? "" :req.body.egunemployedpersonexperience,
              egloanstatus: req.body.egloanstatus == "undefined" ? "No" :req.body.egloanstatus,
              egloanamount: req.body.loanamount == "undefined" ? "" :req.body.egloanamount,
              egscname: req.body.egscname == "undefined" ? "" :req.body.egscname,
              egscaddress: req.body.egscaddress == "undefined" ? "" :req.body.egscaddress,
              egcoursename: req.body.egcoursename == "undefined" ? "" :req.body.egcoursename,
              egannualfees: req.body.egannualfees == "undefined" ? "" :req.body.egannualfees,
              egdetailsofcourse: req.body.egdetailsofcourse == "undefined" ? "" :req.body.egdetailsofcourse,
              egindependent: req.body.egindependent== "undefined" ? "" :req.body.egindependent,
              // egmoneyneeded: req.body.egmoneyneeded== "undefined" ? "" :req.body.egmoneyneeded,
              egselfmanagecontribution: req.body.egselfmanagecontribution== "undefined" ? "" :req.body.egselfmanagecontribution,
              mgunemployedpersoneducation: req.body.mgunemployedpersoneducation== "undefined" ? "" :req.body.mgunemployedpersoneducation,
              mgunemployedpersonexperience: req.body.mgunemployedpersonexperience== "undefined" ? "" :req.body.mgunemployedpersonexperience,
              mgloanstatus: req.body.mgloanstatus== "undefined" ? "No" :req.body.mgloanstatus,
              mgloanamount: req.body.mgloanamount== "undefined" ? "" :req.body.mgloanamount,
              mghname: req.body.mghname== "undefined" ? "" :req.body.mghname,
              mghaddress: req.body.mghaddress== "undefined" ? "" :req.body.mghaddress,
              mgdiseasedetails: req.body.mgdiseasedetails== "undefined" ? "" :req.body.mgdiseasedetails,
              mgaprxexpenses: req.body.mgaprxexpenses== "undefined" ? "" :req.body.mgaprxexpenses,
              // mgamountneeded: req.body.mgamountneeded== "undefined" ? "" :req.body.mgamountneeded,
              mgamtcont: req.body.mgamtcont== "undefined" ? "" :req.body.mgamtcont,
              mgmedicalaid: req.body.mgmedicalaid== "undefined" ? "" :req.body.mgmedicalaid,
              mgmedamt: req.body.mgmedamt== "undefined" ? "" :req.body.mgmedamt,
              mginsurancedetails: req.body.mginsurancedetails== "undefined" ? "" :req.body.mginsurancedetails,
              earningmembertable: req.body.earningmembertable== "undefined" ? "" :JSON.parse(req.body.earningmembertable),
              skilltableData: req.body.skilltableData== "undefined" ? "" :JSON.parse(req.body.skilltableData),
              // skilltableData:JSON.parse(req.body.skilltableData),

              referredby: req.body.referredby== "undefined" ? "" :req.body.referredby,
              referraladdress: req.body.referraladdress== "undefined" ? "" :req.body.referraladdress,
              surveydoneby: req.body.surveydoneby== "undefined" ? "" :req.body.surveydoneby,
              surveydetails: req.body.surveydetails== "undefined" ? "" :req.body.surveydetails,
              specialnotes: req.body.specialnotes == "undefined" ? "" :req.body.specialnotes,
              approvedby: req.body.approvedby == "undefined" ? "" : req.body.approvedby,
              approvedammount: req.body.approvedammount == "undefined" ? "" : req.body.approvedammount,
              comments: req.body.comments == "undefined" ? "" : req.body.comments,
              bankname: req.body.bankname == "undefined" ? "" : req.body.bankname ,
              bankaccountno: req.body.bankaccountno == "undefined" ? "" : req.body.bankaccountno,
              chequeneft: req.body.chequeneft == "undefined" ? "" : req.body.chequeneft,
              surveydate: req.body.surveydate == "undefined" ? "" : req.body.surveydate,
              approvaldate : req.body.approvaldate  == "undefined" ? "" : req.body.approvaldate ,
              grantdate: req.body.grantdate == "undefined" ? "" : req.body.grantdate,
              grantamount : req.body.grantamount == "undefined" ? "" : req.body.grantamount    
            });  
            console.log("data recieved " +trust)
            trust.save()  
            res.send("data uploaded successfully")
          } catch (error) {
            res.send(error)
          }  
})
}

// view applicant detail by id
export const getUserById = (req,res) =>{
  const id =  req.params.id
  Form.findById(id).exec(function(err,docs){
    console.log(docs)
    res.send(docs)
  })

}


// update by Id
export const updateUserById = async(req, res) => {
  const id = req.params.id;

  Form.findByIdAndUpdate(id,req.body,function(err,docs){
    if (err){
      console.log(err)
  }
  else{
      console.log("Updated User : ", docs);
  }
  })

  res.send("User's Data Updated Successfully")
  console.log(id)
  console.log(req.body)
}


export const getFile  = async(req, res, next) => {
  var options = {
    root: path.join('./uploads'),
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  }

  var fileName = req.params.name
  console.log(fileName)
  res.sendFile(fileName, options, function(err){
    if(err){
      next(err)
    }else{
      console.log('sent', fileName)
    }
  })
}

//for suvery update
export const updateSurvey = async (req, res) => {
  const id = req.params.id;
  Form.findByIdAndUpdate(id,req.body,function(err,docs){
    if (err){
      console.log(err)
  }
  else{
      console.log("Updated User : ", docs);
  }
  // res.send("Survey Details & Successfully Updated.")
})
  try{
    const result = await Form.findByIdAndUpdate({_id: id},{
      $set :{
        status :"Survey Completed"
      }
    }
    ,{
      new: true,
      useFindAndModify: false
    }
    );
    console.log(result);
  }catch(err){
    console.log(err);
  }
  res.send("Survey Details Successfully Updated.")
}

//for aprrove
export const updateApprove = async (req, res) => {
  const id = req.params.id;
  Form.findByIdAndUpdate(id,req.body,function(err,docs){
    if (err){
      console.log(err)
  }
  else{
      console.log("Updated User : ", docs);
  }
  // res.send("Survey Details & Successfully Updated.")
})
  try{
    const result = await Form.findByIdAndUpdate({_id: id},{
      $set :{
        status :"Approved"
      }
    }
    ,{
      new: true,
      useFindAndModify: false
    }
    );
    console.log(result);
  }catch(err){
    console.log(err);
  }
  res.send("Application Sucessfully Appreoved ")
}

//for Reject
export const updateReject = async (req, res) => {
  const id = req.params.id;
  try{
    const result = await Form.findByIdAndUpdate({_id: id},{
      $set :{
        status :"Rejected"
      }
    }
    ,{
      new: true,
      useFindAndModify: false
    }
    );
    console.log(result);
  }catch(err){
    console.log(err);
  }
  res.send("Application Rejected ! ")
}


//for Grant
export const updateGrant = async (req, res) => {
  const id = req.params.id;
  Form.findByIdAndUpdate(id,req.body,function(err,docs){
    if (err){
      console.log(err)
  }
  else{
      console.log("Updated User : ", docs);
  }
  // res.send("Survey Details & Successfully Updated.")
})
  try{
    const result = await Form.findByIdAndUpdate({_id: id},{
      $set :{
        status :"Granted"
      }
    }
    ,{
      new: true,
      useFindAndModify: false
    }
    );
    console.log(result);
  }catch(err){
    console.log(err);
  }
  res.send("Application Sucessfully Granted ")
}

//for Grant Reject
// export const updateGrantreject = async (req, res) => {
//   const id = req.params.id;
//   try{
//     const result = await Form.findByIdAndUpdate({_id: id},{
//       $set :{
//         status :"Grant Rejected"
//       }
//     }
//     ,{
//       new: true,
//       useFindAndModify: false
//     }
//     );
//     console.log(result);
//   }catch(err){
//     console.log(err);
//   }
//   res.send("Application Grant Rejected ! ")
// }

// const getRation = async () => {
//   try{
//     const ration =await Form
//     .find({Ration_Card_Number : 12345})
//     .select({Name: 1})
//     .select({status : 1})
//     .select({Category : 1})
//     .select({approvedammount : 1})
//     .select({surveydate:1})
//     .select({approvaldate:1})
//     .select({createdAt:1})
//     console.log(ration);
//   }
//   catch(err){
//     console.log(err);
//   }
// }
// getRation();


export const getRation = async (req, res) => {
  try{
    // const rationcardnumber = req.params.Ration_Card_Number;
    const ration =await Form
    .find({Ration_Card_Number : 1234567890})
    .select({Name: 1})
    .select({status : 1})
    .select({Category : 1})
    .select({approvedammount : 1})
    console.log(ration);
    res.send(ration);
  }
  catch(err){
    console.log(err);
  }
}


export const updateRowsk = async (req, res) => {
  const id = req.params.id;
  
  try{
    const result = await Form.findByIdAndUpdate({_id: id},{
      $inc :{
      'skilltableData.noOfRows': 1,
      }
    }
    ,{
      new: true,
      useFindAndModify: false
    }
    );
    console.log(result);
  }catch(err){
    console.log(err);
  }
  res.send("row updated ! ")
}


export const deleteRowsk = async (req, res) => {
  const id = req.params.id;
  let noOfRows = req.params.noOfRows
  console.log(noOfRows)
  // let first = `skilltableData.skill${noOfRows}name`
  // console.log(first)
  let removeObj = []
  removeObj.push(`skilltableData.skill${noOfRows}name`)
  removeObj.push(`skilltableData.skill${noOfRows}work`)
  
  try{
    const result = await Form.findByIdAndUpdate({_id: id},{

        $inc:{'skilltableData.noOfRows': -1},

        $unset: removeObj 

      // $inc :{
      // 'skilltableData.noOfRows': -1,
      // },
      // $unset:{
      //   first : 1,
      //   // "skilltableData.skill4work": 1,
      //   // "skilltableData.skill4phonenumber":1,
      //   // "skilltableData.skill4education":1,
      // },
      // new: true,
      // useFindAndModify: false
    }
    );
    console.log(result);
  }catch(err){
    console.log(err);
  }
  res.send("row updated ! ")
}