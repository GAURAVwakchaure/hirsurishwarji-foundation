import Form from '../model/createApplication.js'

// import max1 from './getID.js'
import upload from './fileUpload.js'
// export const getRequest = (request, response) => {
//     response.status(200).json("hi ratnesh here get request called")
// }

// all application list
export const getApplicant = (req, res) => {
    Form.find().sort('-_id').select({id:1,Name:1,Mobile_Number:1,Aadhar_Number:1}).exec(function(err,docs){
        res.send(docs)
    })
}

// application creating 
export const userApplication = (req, res) =>{
    upload(req, res, function (err) {
        if (err) {
          console.log(err)
          return res.end("Error uploading file.");
        }
        console.log(req.body)
        console.log(req.files)
        // storing path of files uploaded
        const paths = []
        req.files.forEach(function(value, key) {
          paths.push(value.path)
        })
        // saving data into db
        try {
            // console.log("in the post "+max1)
            const trust = new Form({
            //   id:max1 + 1,
              status : "pending",
              Name: req.body.name,
              Father_or_Husband_Name: req.body.fhname,
              Address_Line1: req.body.add1,
              Address_Line2: req.body.add2,
              City: req.body.city,
              State: req.body.state,
              Pincode: req.body.pincode,
              Native_Town: req.body.nativetown,
              Phone_Number: req.body.phonenumber,
              Mobile_Number: req.body.mobilenumber,
              // Aadhar_Number:req.body.aadharnumber,
              Jain: req.body.jainism,
              Category:req.body.category,
              Creed: req.body.creed,
              Image: paths,

              Ration_Card_Number:req.body.rationcardnumber,
              Rent_Reciept_Number:re.body.rentrecieptormaintenanceserialnumber,
              Electricity_Consumer_Number:req.body.electricconsumernumber,
              Insurance_ID_Number:req.body.insuranceid,
              Salary_Certificate_ID:req.body.salarycertificateid,
              Bank_Account_Details:req.body.bankaccountdetails,
              Jain_Minority_Certificate_ID:req.body.jaincertificateid,
              Telephone_Account_Number:req.body.telephoneaccountnumber,
              Referral_Letter_Serial_Number:req.body.referralletterserialnumber,
              Aadhaar_Card_Number:req.body.aadharnumber,
              School_College_Fees_Receipt_Number:req.body.schoolorcollegefeesserialnumber,





              Q1: req.body.pathshalachildren,
              Q2: req.body.religiouseducation,
              Q3: req.body.templepooja,
              Q4: req.body.upashrayvisit,
              Q5: req.body.kanmoolusage,
              Q6: req.body.kanmoolusagestopped,
              MaintenanceExpense: req.body.maintenance,
              ElectricBillExpense: req.body.electricbillexpense,
              TelephoneExpense: req.body.telephoneexpense,
              EducationExpense: req.body.educationexpense,
              TuitionExpense: req.body.tuitionexpense,
              MedicalExpense: req.body.medicalexpense,
              GroceriesExpense: req.body.groceriesexpense,
              OtherExpense: req.body.otherexpense,
              TotalExpense: req.body.totalexpenses,
              AreaOfFlat: req.body.areaofflat,
              RentOrOwnershipStatus: req.body.rentownershipstatus,
              TV:req.body.tv,
              Cable:req.body.cable,
              Fridge:req.body.fridge,
              WashingMachine:req.body.washingmachine,
              Vehicle:req.body.vehicle,
              Bike:req.body.bike,
              Phones:req.body.phones,              
              dependenttable : req.body.dependenttable,
              egunemployedpersoneducation: req.body.egunemployedpersoneducation,
              egunemployedpersonexperience: req.body.egunemployedpersonexperience,
              egloanstatus: req.body.egloanstatus,
              loanamount: req.body.loanamount,
              egscname: req.body.egscname,
              egscaddress: req.body.egscaddress,
              egcoursename: req.body.egcoursename,
              egannualfees: req.body.egannualfees,
              egdetailsofcourse: req.body.egdetailsofcourse,
              egindependent: req.body.egindependent,
              egmoneyneeded: req.body.egmoneyneeded,
              egselfmanagecontribution: req.body.egselfmanagecontribution,
              mgunemployedpersoneducation: req.body.mgunemployedpersoneducation,
              mgunemployedpersonexperience: req.body.mgunemployedpersonexperience,
              mgloanstatus: req.body.mgloanstatus,
              mgloanamount: req.body.mgloanamount,
              mghname: req.body.mghname,
              mghaddress: req.body.mghaddress,
              mgdiseasedetails: req.body.mgdiseasedetails,
              mgaprxexpenses: req.body.mgaprxexpenses,
              mgamountneeded: req.body.mgamountneeded,
              mgamtcont: req.body.mgamtcont,
              mgmedicalaid: req.body.mgmedicalaid,
              mgmedamt: req.body.mgmedamt,
              mginsurancedetails: req.body.mginsurancedetails,
              earningmembertable: req.body.earningmembertable,
              skilltableData: req.body.skilltableData,
              referredby: req.body.referredby,
              referraladdress: req.body.referraladdress,
              surveydoneby: req.body.surveydoneby,
              surveydetails: req.body.surveydetails,
              specialnotes: req.body.specialnotes       
            });  
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

