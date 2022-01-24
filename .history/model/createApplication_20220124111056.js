import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const formschema = new mongoose.Schema({
    // id:{
    //   type:Number
    // },
    Name: {
      type: String,
      // required: [true, "please check your data entry, no Name specified!"],
    },
    Father_or_Husband_Name: {
      type: String,
      // required: [true, "please check your data entry, no Father_or_Husband_Name specified!"],
    },
    Address_Line1: {
      type: String,
      // required: [true, "please check your data entry, no Address_Line1 specified!"],
    },
    Address_Line2: {
      type: String,
      // required: [true, "please check your data entry, no Address_Line2 specified!"],
    },
    City: {
      type: String,
      // required: [true, "please check your data entry, no City specified!"],
    },
    State: {
      type: String,
      // required: [true, "please check your data entry, no State specified!"],
    },
    Pincode: {
      type: Number,
      // required: [true, "please check your data entry, no Pincode specified!"],
    },
    Native_Town: {
      type: String,
      // required: [true, "please check your data entry, no Native_Town specified!"],
    },
    Phone_Number: {
      type: Number,
      // required: [true, "please check your data entry, no Phone_Number specified!"],
    },
    Mobile_Number: {
      type: Number,
      // required: [true, "please check your data entry, no Mobile_Number specified!"],
    },
    Aadhar_Number:{
      type:String,
    },
    Jain: {
      type: String,
      // required: [true, "please check your data entry, no Jain specified!"],
    },
    Category:{
      type:String,
    },
    Creed: {
      type: String,
      // required: [true, "please check your data entry, no Creed specified!"],
    },
    // Date: {
    //   type: Date,
    //   // min: "2007-08-13",
    //   // max: "2021-10-15",
    // },
    // Image: {
    //       type: String,
    //       data: Buffer,
    //       contentType: 'file',
    //     },
    Image: [{
      type:String
    }],
    Status : String,
    Q1: {
      type: String,
      // required: [true, "please check your data entry, no Q1 Answer specified!"],
    },
    Q2: {
      type: String,
      // required: [true, "please check your data entry, no Q2 Answer specified!"],
    },
    Q3: {
      type: String,
      // required: [true, "please check your data entry, no Q3 Answer specified!"],
    },
    Q4: {
      type: String,
      // required: [true, "please check your data entry, no Q4 Answer specified!"],
    },
    Q5: {
      type: String,
      // required: [true, "please check your data entry, no Q5 Answer specified!"],
    },
    Q6: {
      type: String,
      // required: [true, "please check your data entry, no Q6 Answer specified!"],
    },
    MaintenanceExpense: {
      type: String,
      // required: [true, "please check your data entry, no Q6 Answer specified!"],
    }, 
     ElectricBillExpense: {
      type: String,
      // required: [true, "please check your data entry, no Q6 Answer specified!"],
    }, 
     TelephoneExpense: {
      type: String,
      // required: [true, "please check your data entry, no Q6 Answer specified!"],
    }, 
     EducationExpense: {
      type: String,
      // required: [true, "please check your data entry, no Q6 Answer specified!"],
    },
    TuitionExpense: {
      type: String,
      // required: [true, "please check your data entry, no Q6 Answer specified!"],
    },
    MedicalExpense: {
      type: String,
      // required: [true, "please check your data entry, no Q6 Answer specified!"],
    },
    GroceriesExpense: {
      type: String,
      // required: [true, "please check your data entry, no Q6 Answer specified!"],
    },
    OtherExpense: {
      type: String,
      // required: [true, "please check your data entry, no Q6 Answer specified!"],
    },
    TotalExpense: {
      type: String,
      // required: [true, "please check your data entry, no Q6 Answer specified!"],
    },
    AreaOfFlat: {
      type: String,
      // required: [true, "please check your data entry, no Q6 Answer specified!"],
    },
    RentOrOwnershipStatus: {
      type: String,
      // required: [true, "please check your data entry, no Q6 Answer specified!"],
    },
    TV: {
      type: String,
      // required: [true, "please check your data entry, no Q6 Answer specified!"],
    },
    Cable: {
      type: String,
      // required: [true, "please check your data entry, no Q6 Answer specified!"],
    },
    Fridge: {
      type: String,
      // required: [true, "please check your data entry, no Q6 Answer specified!"],
    },
    WashingMachine: {
      type: String,
      // required: [true, "please check your data entry, no Q6 Answer specified!"],
    },
    Vehicle: {
      type: String,
      // required: [true, "please check your data entry, no Q6 Answer specified!"],
    },
    Bike: {
      type: String,
      // required: [true, "please check your data entry, no Q6 Answer specified!"],
    },
    Phones: {
      type: String,
      // required: [true, "please check your data entry, no Q6 Answer specified!"],
    },
    dependenttable :[ String ],
    egunemployedpersoneducation : String,
    egunemployedpersonexperience : String,
    egloanstatus : String,
    loanamount : String, 
    egscname : String,
    egscaddress : String,
    egcoursename : String,
    egannualfees : String,
    egdetailsofcourse : String,
    egindependent : String, 
    egmoneyneeded : String,
    egselfmanagecontribution : String,
    mgunemployedpersoneducation : String,
    mgunemployedpersonexperience : String,
    mgloanstatus : String,
    mgloanamount : String,
    mghname : String,
    mghaddress : String,
    mgdiseasedetails : String,
    mgaprxexpenses : String,
    mgamountneeded : String,
    mgamtcont : String, 
    mgmedicalaid : String, 
    mgmedamt : String, 
    mginsurancedetails : String, 
    earningmembertable : [{type:String}],
    skilltableData : [{ type:String}],
    referredby : String, 
    referraladdress : String,
    surveydoneby : String,
    surveydetails : String,
    specialnotes : String
  
  });
  autoIncrement.initialize(mongoose.connection);
  formschema.plugin(autoIncrement.plugin, 'Form')

  
  const Form = mongoose.model("Form", formschema);

  export default Form



