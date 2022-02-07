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
    type: String,
    // required: [true, "please check your data entry, no Pincode specified!"],
  },
  Native_Town: {
    type: String,
    // required: [true, "please check your data entry, no Native_Town specified!"],
  },
  Phone_Number: {
    type: String,
    // required: [true, "please check your data entry, no Phone_Number specified!"],
  },
  Mobile_Number: {
    type: String,
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


  Ration_Card_Number: {
    type: String,
    // required: [true, "please check your data entry, no Creed specified!"],
    // minlength:[2, "Creed minimum 2 letters"],
    // maxlength:20,
    // validate(value){
    //   if(!validator.isAlpha((value),'en-US', {ignore: ' '})){
    //     throw new Error("Creed is Invalid");
    //   }
    // }
  },

  Rent_Reciept_Number: {
    type: String,
    // required: [true, "please check your data entry, no Creed specified!"],
    // minlength:[2, "Creed minimum 2 letters"],
    // maxlength:20,
    // validate(value){
    //   if(!validator.isAlpha((value),'en-US', {ignore: ' '})){
    //     throw new Error("Creed is Invalid");
    //   }
    // }
  },

  Electricity_Consumer_Number: {
    type: String,
    // required: [true, "please check your data entry, no Creed specified!"],
    // minlength:[2, "Creed minimum 2 letters"],
    // maxlength:20,
    // validate(value){
    //   if(!validator.isAlpha((value),'en-US', {ignore: ' '})){
    //     throw new Error("Creed is Invalid");
    //   }
    // }
  },
  
  Insurance_ID_Number: {
    type: String,
    // required: [true, "please check your data entry, no Creed specified!"],
    // minlength:[2, "Creed minimum 2 letters"],
    // maxlength:20,
    // validate(value){
    //   if(!validator.isAlpha((value),'en-US', {ignore: ' '})){
    //     throw new Error("Creed is Invalid");
    //   }
    // }
  },

  Salary_Certificate_ID: {
    type: String,
    // required: [true, "please check your data entry, no Creed specified!"],
    // minlength:[2, "Creed minimum 2 letters"],
    // maxlength:20,
    // validate(value){
    //   if(!validator.isAlpha((value),'en-US', {ignore: ' '})){
    //     throw new Error("Creed is Invalid");
    //   }
    // }
  },

  Bank_Account_Details: {
    type: String,
    // required: [true, "please check your data entry, no Creed specified!"],
    // minlength:[2, "Creed minimum 2 letters"],
    // maxlength:20,
    // validate(value){
    //   if(!validator.isAlpha((value),'en-US', {ignore: ' '})){
    //     throw new Error("Creed is Invalid");
    //   }
    // }
  },



  Jain_Minority_Certificate_ID: {
    type: String,
    // required: [true, "please check your data entry, no Creed specified!"],
    // minlength:[2, "Creed minimum 2 letters"],
    // maxlength:20,
    // validate(value){
    //   if(!validator.isAlpha((value),'en-US', {ignore: ' '})){
    //     throw new Error("Creed is Invalid");
    //   }
    // }
  },

  Telephone_Account_Number: {
    type: String,
    // required: [true, "please check your data entry, no Creed specified!"],
    // minlength:[2, "Creed minimum 2 letters"],
    // maxlength:20,
    // validate(value){
    //   if(!validator.isAlpha((value),'en-US', {ignore: ' '})){
    //     throw new Error("Creed is Invalid");
    //   }
    // }
  },

  Referral_Letter_Serial_Number: {
    type: String,
    // required: [true, "please check your data entry, no Creed specified!"],
    // minlength:[2, "Creed minimum 2 letters"],
    // maxlength:20,
    // validate(value){
    //   if(!validator.isAlpha((value),'en-US', {ignore: ' '})){
    //     throw new Error("Creed is Invalid");
    //   }
    // }
  },

  Aadhaar_Card_Number: {
    type: String,
    // required: [true, "please check your data entry, no Creed specified!"],
    // minlength:[2, "Creed minimum 2 letters"],
    // maxlength:20,
    // validate(value){
    //   if(!validator.isAlpha((value),'en-US', {ignore: ' '})){
    //     throw new Error("Creed is Invalid");
    //   }
    // }
  },

  School_College_Fees_Receipt_Number: {
    type: String,
    // required: [true, "please check your data entry, no Creed specified!"],
    // minlength:[2, "Creed minimum 2 letters"],
    // maxlength:20,
    // validate(value){
    //   if(!validator.isAlpha((value),'en-US', {ignore: ' '})){
    //     throw new Error("Creed is Invalid");
    //   }
    // }
  },



  status : String,
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
  
  dependenttable :{type:Object},
  unemployedpersoneducation : String,
  unemployedpersonexperience : String,
  loanstatus : String,
  loanamount : String,
  financialloanstatus : String,
  loanamountneeded : String,
  egunemployedpersoneducation : String,
  egunemployedpersonexperience : String,
  egloanstatus : String,
  egloanamount : String, 
  egscname : String,
  egscaddress : String,
  egcoursename : String,
  egannualfees : String,
  egdetailsofcourse : String,
  egindependent : String, 
  // egmoneyneeded : String,
  egselfmanagecontribution : String,
  mgunemployedpersoneducation : String,
  mgunemployedpersonexperience : String,
  mgloanstatus : String,
  mgloanamount : String,
  mghname : String,
  mghaddress : String,
  mgdiseasedetails : String,
  mgaprxexpenses : String,
  // mgamountneeded : String,
  mgamtcont : String, 
  mgmedicalaid : String, 
  mgmedamt : String, 
  mginsurancedetails : String, 
  earningmembertable : {type:Object},
  skilltableData :{type:Object},
  referredby : String, 
  referraladdress : String,
  surveydoneby : String,
  surveydetails : String,
  specialnotes : String,
  approvedby : String,
  approvedammount : String,
  comments : String,
  bankname : String,
  bankaccountno : String,
  chequeneft : String,
  surveydate : Date,
  approvaldate : Date,
  grantdate : Date,

},{
  timestamps : true,
});


// const formschema = new mongoose.Schema({
//   id:{
//     type:Number
//   },
//   Name: {
//     type: String,
//     required: [true, "please check your data entry, no Name specified!"],
//     unique: true,
//     minlength:[2, "Name must have minimum 2 letters"],
//     maxlength:50,
//     validate(value){
//       if(!validator.isAlpha((value),'en-US', {ignore: ' '})){
//         throw new Error("Name is Invalid");
//       }
//     }
//     // required: [true, "please check your data entry, no Name specified!"],
//   },
//   Father_or_Husband_Name: {
//     type: String,
//     required: [true, "please check your data entry, no Father_or_Husband_Name specified!"],
//     minlength:[2, "Father name must have minimum 2 letters"],
//     maxlength:50,
//     validate(value){
//       if(!validator.isAlpha((value),'en-US', {ignore: ' '})){
//         throw new Error("Father Name is Invalid");
//       }
//     }
//   },
//   Address_Line1: {
//     type: String,
//     required: [true, "please check your data entry, no Address_Line1 specified!"],
//     minlength:[2, "add line1 minimum 2 letters"],
//     maxlength:50,
//     validate(value){
//       if(!validator.isAlphanumeric((value),'en-US', {ignore: ' '})){
//         throw new Error("Address line 1 is Invalid");
//       }
//     }
//   },
//   Address_Line2: {
//     type: String,
//     required: [true, "please check your data entry, no Address_Line2 specified!"],
//     minlength:[2, "add line2 minimum 2 letters"],
//     maxlength:50,
//     validate(value){
//       if(!validator.isAlphanumeric((value),'en-US', {ignore: ' '})){
//         throw new Error("Address line 2 is Invalid");
//       }
//     }
//   },
//   City: {
//     type: String,
//     required: [true, "please check your data entry, no City specified!"],
//     minlength:[2, "city minimum 2 letters"],
//     maxlength:20,
//     validate(value){
//       if(!validator.isAlpha((value),'en-US', {ignore: ' '})){
//         throw new Error("City is Invalid");
//       }
//     }
//   },
//   State: {
//     type: String,
//     required: [true, "please check your data entry, no State specified!"],
//     minlength:[2, "state minimum 2 letters"],
//     maxlength:20,
//     validate(value){
//       if(!validator.isAlpha((value),'en-US', {ignore: ' '})){
//         throw new Error("State is Invalid");
//       }
//     }
//   },
//   Pincode: {
//     type: String,
//     required: [true, "please check your data entry, no Pin code specified!"],
//     minlength:[6, " Pin code should be of minimum 6 number"],
//     maxlength:6,
//     validate(value){
//       if(!validator.isNumeric(value)){
//         throw new Error("Pincode is Invalid");
//       }
//     }
//   },
//   Native_Town: {
//     type: String,
//     required: [true, "please check your data entry, no Native_Town specified!"],
//     minlength:[2, "native town minimum 2 letters"],
//     maxlength:20,
//     validate(value){
//       if(!validator.isAlpha((value),'en-US', {ignore: ' '})){
//         throw new Error("Native Town is Invalid");
//       }
//     }
//   },
//   Phone_Number: {
//     type: String,
//     required: [true, "please check your data entry, no Phone_Number specified!"],
//     unique: true,
//     minlength:[10, " phone number should be of minimum 10 number"],
//     maxlength:12,
//     validate(value){
//       if(!validator.isNumeric(value)){
//         throw new Error("Phone number is Invalid");
//       }
//     }
//   },
//   Mobile_Number: {
//     type: String,
//     required: [true, "please check your data entry, no Mobile_Number specified!"],
//     unique: true,
//     minlength:[10, " mobile number should be of minimum 10 number"],
//     maxlength:12,
//     validate(value){
//       if(!validator.isNumeric(value)){
//         throw new Error("mobile number is Invalid");
//       }
//     }
//   },
//   Aadhar_Number:{
//     type: String,
//     required: [true, "please check your data entry, no aadhar number specified specified!"],
//     unique: true,
//     minlength:[12, " aadhar number should be of minimum 12 number"],
//     maxlength:12,
//     validate(value){
//       if(!validator.isNumeric(value)){
//         throw new Error("Aadhar number is Invalid");
//       }
//     }
//   },
//   Jain: {
//     type: String,
//     required: [true, "please check your data entry, no Jain specified!"],
//   },
//   Category:{
//     type:String,
//     required: [true, "please check your data entry, no Category specified!"]
//   },
//   Creed: {
//     type: String,
//     required: [true, "please check your data entry, no Creed specified!"],
//     minlength:[2, "Creed minimum 2 letters"],
//     maxlength:20,
//     validate(value){
//       if(!validator.isAlpha((value),'en-US', {ignore: ' '})){
//         throw new Error("Creed is Invalid");
//       }
//     }
//   },
  
//   Image: [{
//     type: String,
//     required: [true, "please check your data entry, Image is specified!"]
//   }],

//   Ration_Card_Number: {
//     type: String,
//     required: [true, "please check your data entry, no Creed specified!"],
//     minlength:[2, "Creed minimum 2 letters"],
//     maxlength:20,
//     validate(value){
//       if(!validator.isAlpha((value),'en-US', {ignore: ' '})){
//         throw new Error("Creed is Invalid");
//       }
//     }
//   },

//   Rent_Reciept_Number: {
//     type: String,
//     required: [true, "please check your data entry, no Creed specified!"],
//     minlength:[2, "Creed minimum 2 letters"],
//     maxlength:20,
//     validate(value){
//       if(!validator.isAlpha((value),'en-US', {ignore: ' '})){
//         throw new Error("Creed is Invalid");
//       }
//     }
//   },

//   Electricity_Consumer_Number: {
//     type: String,
//     required: [true, "please check your data entry, no Creed specified!"],
//     minlength:[2, "Creed minimum 2 letters"],
//     maxlength:20,
//     validate(value){
//       if(!validator.isAlpha((value),'en-US', {ignore: ' '})){
//         throw new Error("Creed is Invalid");
//       }
//     }
//   },
  
//   Insurance_ID_Number: {
//     type: String,
//     required: [true, "please check your data entry, no Creed specified!"],
//     minlength:[2, "Creed minimum 2 letters"],
//     maxlength:20,
//     validate(value){
//       if(!validator.isAlpha((value),'en-US', {ignore: ' '})){
//         throw new Error("Creed is Invalid");
//       }
//     }
//   },

//   Salary_Certificate_ID: {
//     type: String,
//     required: [true, "please check your data entry, no Creed specified!"],
//     minlength:[2, "Creed minimum 2 letters"],
//     maxlength:20,
//     validate(value){
//       if(!validator.isAlpha((value),'en-US', {ignore: ' '})){
//         throw new Error("Creed is Invalid");
//       }
//     }
//   },

//   Bank_Account_Details: {
//     type: String,
//     required: [true, "please check your data entry, no Creed specified!"],
//     minlength:[2, "Creed minimum 2 letters"],
//     maxlength:20,
//     validate(value){
//       if(!validator.isAlpha((value),'en-US', {ignore: ' '})){
//         throw new Error("Creed is Invalid");
//       }
//     }
//   },



//   Jain_Minority_Certificate_ID: {
//     type: String,
//     required: [true, "please check your data entry, no Creed specified!"],
//     minlength:[2, "Creed minimum 2 letters"],
//     maxlength:20,
//     validate(value){
//       if(!validator.isAlpha((value),'en-US', {ignore: ' '})){
//         throw new Error("Creed is Invalid");
//       }
//     }
//   },

//   Telephone_Account_Number: {
//     type: String,
//     required: [true, "please check your data entry, no Creed specified!"],
//     minlength:[2, "Creed minimum 2 letters"],
//     maxlength:20,
//     validate(value){
//       if(!validator.isAlpha((value),'en-US', {ignore: ' '})){
//         throw new Error("Creed is Invalid");
//       }
//     }
//   },

//   Referral_Letter_Serial_Number: {
//     type: String,
//     required: [true, "please check your data entry, no Creed specified!"],
//     minlength:[2, "Creed minimum 2 letters"],
//     maxlength:20,
//     validate(value){
//       if(!validator.isAlpha((value),'en-US', {ignore: ' '})){
//         throw new Error("Creed is Invalid");
//       }
//     }
//   },

//   Aadhaar_Card_Number: {
//     type: String,
//     required: [true, "please check your data entry, no Creed specified!"],
//     minlength:[2, "Creed minimum 2 letters"],
//     maxlength:20,
//     validate(value){
//       if(!validator.isAlpha((value),'en-US', {ignore: ' '})){
//         throw new Error("Creed is Invalid");
//       }
//     }
//   },

//   School_College_Fees_Receipt_Number: {
//     type: String,
//     required: [true, "please check your data entry, no Creed specified!"],
//     minlength:[2, "Creed minimum 2 letters"],
//     maxlength:20,
//     validate(value){
//       if(!validator.isAlpha((value),'en-US', {ignore: ' '})){
//         throw new Error("Creed is Invalid");
//       }
//     }
//   },


//   status : String,
//   Q1: {
//     type: String,
//     required: [true, "please check your data entry, no Q1 Answer specified!"],
//   },
//   Q2: {
//     type: String,
//     required: [true, "please check your data entry, no Q2 Answer specified!"],
//   },
//   Q3: {
//     type: String,
//     required: [true, "please check your data entry, no Q3 Answer specified!"],
//   },
//   Q4: {
//     type: String,
//     required: [true, "please check your data entry, no Q4 Answer specified!"],
//   },
//   Q5: {
//     type: String,
//     required: [true, "please check your data entry, no Q5 Answer specified!"],
//   },
//   Q6: {
//     type: String,
//     required: [true, "please check your data entry, no Q6 Answer specified!"],
//   },
//   MaintenanceExpense: {
//     type: String,
//     required: [true, "please check your data entry, no maintenance expense specified!"],
//     minlength:[1, " Maintenance Exp should be of minimum 1 number"],
//     maxlength:7,
//     validate(value){
//       if(!validator.isNumeric(value)){
//         throw new Error("Maintenance is Invalid");
//       }
//     }
//   }, 
//    ElectricBillExpense: {
//     type: String,
//     required: [true, "please check your data entry, no electric bill expense specified!"],
//     minlength:[1, " Electric bill Exp should be of minimum 1 number"],
//     maxlength:7,
//     validate(value){
//       if(!validator.isNumeric(value)){
//         throw new Error("Electric bill is Invalid");
//       }
//     }
//   }, 
//    TelephoneExpense: {
//     type: String,
//     required: [true, "please check your data entry, no telephone Expense specified!"],
//     minlength:[1, " telephone Exp should be of minimum 1 number"],
//     maxlength:7,
//     validate(value){
//       if(!validator.isNumeric(value)){
//         throw new Error("Telephone is Invalid");
//       }
//     }
//   }, 
//    EducationExpense: {
//     type: String,
//     required: [true, "please check your data entry, no education expense specified!"],
//     minlength:[1, " Education Exp should be of minimum 1 number"],
//     maxlength:7,
//     validate(value){
//       if(!validator.isNumeric(value)){
//         throw new Error("Education is Invalid");
//       }
//     }
//   },
//   TuitionExpense: {
//     type: String,
//     required: [true, "please check your data entry, no Tution expense specified!"],
//     minlength:[1, " Tuition Exp should be of minimum 1 number"],
//     maxlength:7,
//     validate(value){
//       if(!validator.isNumeric(value)){
//         throw new Error("Tuition is Invalid");
//       }
//     }
//   },
//   MedicalExpense: {
//     type: String,
//     required: [true, "please check your data entry, no medical expense specified!"],
//     minlength:[1, " Medical Exp should be of minimum 1 number"],
//     maxlength:7,
//     validate(value){
//       if(!validator.isNumeric(value)){
//         throw new Error("Medical is Invalid");
//       }
//     }
//   },
//   GroceriesExpense: {
//     type: String,
//     required: [true, "please check your data entry, no groceries expense specified!"],
//     minlength:[1, " Grocery Exp should be of minimum 1 number"],
//     maxlength:7,
//     validate(value){
//       if(!validator.isNumeric(value)){
//         throw new Error("Grocery is Invalid");
//       }
//     }
//   },
//   OtherExpense: {
//     type: String,
//     required: [true, "please check your data entry, no other expense specified!"],
//     minlength:[1, " other Exp should be of minimum 1 number"],
//     maxlength:7,
//     validate(value){
//       if(!validator.isNumeric(value)){
//         throw new Error("other is Invalid");
//       }
//     }
//   },
//   TotalExpense: {
//     type: String,
//     // required: [true, "please check your data entry, no Q6 Answer specified!"],
//   },
//   AreaOfFlat: {
//     type: String,
//     required: [true, "please check your data entry, no Area of flat specified!"],
//     minlength:[1, " Area of flat should be of minimum 1 number"],
//     maxlength:7,
//     validate(value){
//       if(!validator.isNumeric(value)){
//         throw new Error("Area of flat is Invalid");
//       }
//     }
//   },
//   RentOrOwnershipStatus: {
//     type: String,
//     required: [true, "please check your data entry, no rent or ownership status specified!"]
//   },
//   TV: {
//     type: String,
//     required: [true, "please check your data entry, no tv quantity specified!"],
//     minlength:[1, " TV qty should be of minimum 1 number"],
//     maxlength:2,
//     validate(value){
//       if(!validator.isNumeric(value)){
//         throw new Error("TV qty is Invalid");
//       }
//     }
//   },
//   Cable: {
//     type: String,
//     required: [true, "please check your data entry, no cable quantity specified!"],
//     minlength:[1, " cable qty should be of minimum 1 number"],
//     maxlength:2,
//     validate(value){
//       if(!validator.isNumeric(value)){
//         throw new Error("cable qty is Invalid");
//       }
//     }
//   },
//   Fridge: {
//     type: String,
//     required: [true, "please check your data entry, no fridge quantity specified!"],
//     minlength:[1, " fridge qty should be of minimum 1 number"],
//     maxlength:2,
//     validate(value){
//       if(!validator.isNumeric(value)){
//         throw new Error("fridge qty is Invalid");
//       }
//     }
//   },
//   WashingMachine: {
//     type: String,
//     required: [true, "please check your data entry, no washing machine quantity specified!"],
//     minlength:[1, " washing machine qty should be of minimum 1 number"],
//     maxlength:2,
//     validate(value){
//       if(!validator.isNumeric(value)){
//         throw new Error("washing machine qty is Invalid");
//       }
//     }
//   },
//   Vehicle: {
//     type: String,
//     required: [true, "please check your data entry, no vehical quantity specified!"],
//     minlength:[1, " vehicle qty should be of minimum 1 number"],
//     maxlength:2,
//     validate(value){
//       if(!validator.isNumeric(value)){
//         throw new Error("vehicle qty is Invalid");
//       }
//     }
//   },
//   Bike: {
//     type: String,
//     required: [true, "please check your data entry, no bike quantity specified!"],
//     minlength:[1, " bike qty should be of minimum 1 number"],
//     maxlength:2,
//     validate(value){
//       if(!validator.isNumeric(value)){
//         throw new Error("bike qty is Invalid");
//       }
//     }
//   },
//   Phones: {
//     type: String,
//     required: [true, "please check your data entry, no Phones quantity specified!"],
//     minlength:[1, " Phone qty should be of minimum 1 number"],
//     maxlength:2,
//     validate(value){
//       if(!validator.isNumeric(value)){
//         throw new Error("Phone qty is Invalid");
//       }
//     }
//   },
//   dependenttable :[ String ],
//   egunemployedpersoneducation : {
//     type: String,
//     // required: [true, "please check your data entry, no Unemployed person education specified!"],
//     minlength:[2, "EG Unemployed person Education minimum 2 letters"],
//     maxlength:20,
//     validate(value){
//       if(!validator.isAlpha((value),'en-US', {ignore: ' '})){
//         throw new Error("EG Unemployed person Education is Invalid");
//       }
//     }
//   },
//   egunemployedpersonexperience : {
//     type: String,
//     // required: [true, "please check your data entry, no Unemployed person experience specified!"],
//     minlength:[1, "EG Unemployed person Experience minimum 2 letters"],
//     maxlength:20,
//     validate(value){
//       if(!validator.isAlphanumeric((value),'en-US', {ignore: ' '})){
//         throw new Error("EG Unemployed person Experience is Invalid");
//       }
//     }
//   },
//   egloanstatus : {
//     type: String,
//     // required: [true, "please check your data entry, no loan status specified!"]
//   },  
//   loanamount : {
//     type: String,
//     // required: [true, "please check your data entry, no EG loan amount specified!"],
//     minlength:[1, "EG loan amount should be of minimum 1 number"],
//     maxlength:7,
//     validate(value){
//       if(!validator.isNumeric(value)){
//         throw new Error("EG loan amount is Invalid");
//       }
//     }
//   }, 
//   egscname : {
//     type: String,
//     // required: [true, "please check your data entry, no school name specified!"],
//     minlength:[2, "EG School name minimum 2 letters"],
//     maxlength:50,
//     validate(value){
//       if(!validator.isAlpha((value),'en-US', {ignore: ' '})){
//         throw new Error("EG School name is Invalid");
//       }
//     }
//   },
//   egscaddress : {
//     type: String,
//     // required: [true, "please check your data entry, no school address specified!"],
//     minlength:[2, "EG school address minimum 2 letters"],
//     maxlength:50,
//     validate(value){
//       if(!validator.isAlphanumeric((value),'en-US', {ignore: ' '})){
//         throw new Error("EG school address is Invalid");
//       }
//     }
//   },
//   egcoursename : {
//     type: String,
//     // required: [true, "please check your data entry, no course name specified!"],
//     minlength:[2, "EG Course name minimum 2 letters"],
//     maxlength:20,
//     validate(value){
//       if(!validator.isAlpha((value),'en-US', {ignore: ' '})){
//         throw new Error("EG Course name is Invalid");
//       }
//     }
//   },
//   egannualfees : {
//     type: Number,
//     // required: [true, "please check your data entry, no annual fees specified!"],
//     minlength:[1, "EG annual fees should be of minimum 1 number"],
//     maxlength:6,
//     validate(value){
//       if(!validator.isNumeric(value)){
//         throw new Error("EG annual fees is Invalid");
//       }
//     }
//   },
//   egdetailsofcourse : {
//     type: String,
//     // required: [true, "please check your data entry, no details of course specified!"],
//     minlength:[2, "EG details of course minimum 2 letters"],
//     maxlength:80,
//     validate(value){
//       if(!validator.isAlpha((value),'en-US', {ignore: ' '})){
//         throw new Error("EG details of course is Invalid");
//       }
//     }
//   },
//   egindependent : {
//     type: String,
//     // required: [true, "please check your data entry, no independent specified!"],
//     minlength:[2, "EG independent minimum 2 letters"],
//     maxlength:50,
//     validate(value){
//       if(!validator.isAlpha((value),'en-US', {ignore: ' '})){
//         throw new Error("EG independent is Invalid");
//       }
//     }
//   },  
//   egmoneyneeded : {
//     type: String,
//     // required: [true, "please check your data entry, no money needed specified!"],
//     minlength:[2, "EG money needed minimum 2 letters"],
//     maxlength:50,
//     validate(value){
//       if(!validator.isNumeric(value)){
//         throw new Error("EG money needed is Invalid");
//       }
//     }
//   },
//   egselfmanagecontribution : {
//     type: String,
//     // required: [true, "please check your data entry, no self manage contribution specified!"],
//     minlength:[2, "EG self manage contribution minimum 2 letters"],
//     maxlength:50,
//     validate(value){
//       if(!validator.isNumeric(value)){
//         throw new Error("EG self manage contribution is Invalid");
//       }
//     }
//   },
//   mgunemployedpersoneducation : {
//     type: String,
//     // required: [true, "please check your data entry, no Unemployed person education specified!"],
//     minlength:[2, "MG Unemployed person Education minimum 2 letters"],
//     maxlength:20,
//     validate(value){
//       if(!validator.isAlpha((value),'en-US', {ignore: ' '})){
//         throw new Error("MG Unemployed person Education is Invalid");
//       }
//     }
//   },
//   mgunemployedpersonexperience : {
//     type: String,
//     // required: [true, "please check your data entry, no Unemployed person experience specified!"],
//     minlength:[1, "MG Unemployed person Experience minimum 2 letters"],
//     maxlength:20,
//     validate(value){
//       if(!validator.isAlphanumeric((value),'en-US', {ignore: ' '})){
//         throw new Error("MG Unemployed person Experience is Invalid");
//       }
//     }
//   },
//   mgloanstatus : {
//     type: String,
//     // required: [true, "please check your data entry, no loan status specified!"]
//   },  
//   mgloanamount : {
//     type: String,
//     // required: [true, "please check your data entry, no loan amount specified!"],
//     minlength:[1, "MG loan amount should be of minimum 1 number"],
//     maxlength:7,
//     validate(value){
//       if(!validator.isNumeric(value)){
//         throw new Error("MG loan amount is Invalid");
//       }
//     }
//   }, 
//   mghname : {
//     type: String,
//     // required: [true, "please check your data entry, no school name specified!"],
//     minlength:[2, "MG hospital name minimum 2 letters"],
//     maxlength:50,
//     validate(value){
//       if(!validator.isAlpha((value),'en-US', {ignore: ' '})){
//         throw new Error("MG HOSPITAL name is Invalid");
//       }
//     }
//   },
//   mghaddress : {
//     type: String,
//     // required: [true, "please check your data entry, no school address specified!"],
//     minlength:[2, "MG hospital address minimum 2 letters"],
//     maxlength:50,
//     validate(value){
//       if(!validator.isAlphanumeric((value),'en-US', {ignore: ' '})){
//         throw new Error("MG hospital address is Invalid");
//       }
//     }
//   },
//   mgdiseasedetails : {
//     type: String,
//     // required: [true, "please check your data entry, no course name specified!"],
//     minlength:[2, "MG Disease name minimum 2 letters"],
//     maxlength:20,
//     validate(value){
//       if(!validator.isAlpha((value),'en-US', {ignore: ' '})){
//         throw new Error("MG Disease name is Invalid");
//       }
//     }
//   },
//   mgaprxexpenses : {
//     type: Number,
//     // required: [true, "please check your data entry, no annual fees specified!"],
//     minlength:[1, "MG approx. expenses should be of minimum 1 number"],
//     maxlength:6,
//     validate(value){
//       if(!validator.isNumeric(value)){
//         throw new Error("MG approx expense is Invalid");
//       }
//     }
//   },
//   mgamountneeded : {
//     type: String,
//     // required: [true, "please check your data entry, no money needed specified!"],
//     minlength:[2, "MG amount needed minimum 2 letters"],
//     maxlength:50,
//     validate(value){
//       if(!validator.isNumeric(value)){
//         throw new Error("MG amount needed is Invalid");
//       }
//     }
//   },
//   mgamtcont : {
//     type: String,
//     // required: [true, "please check your data entry, no self manage contribution specified!"],
//     minlength:[2, "MG self manage contribution minimum 2 letters"],
//     maxlength:50,
//     validate(value){
//       if(!validator.isNumeric(value)){
//         throw new Error("MG self manage contribution is Invalid");
//       }
//     }
//   }, 
//   mgmedicalaid : {
//     type: String,
//     // required: [true, "please check your data entry, no self manage contribution specified!"],
//     minlength:[2, "MG any existing medical aid minimum 2 letters"],
//     maxlength:50,
//     validate(value){
//       if(!validator.isAlpha((value),'en-US', {ignore: ' '})){
//         throw new Error("MG any existing medical aid is Invalid");
//       }
//     }
//   },  
//   mgmedamt : {
//     type: String,
//     // required: [true, "please check your data entry, no money needed specified!"],
//     minlength:[2, "MG Medical amount minimum 2 letters"],
//     maxlength:50,
//     validate(value){
//       if(!validator.isNumeric(value)){
//         throw new Error("MG Medical amount is Invalid");
//       }
//     }
//   }, 
//   mginsurancedetails : {
//     type: String,
//     // required: [true, "please check your data entry, no course name specified!"],
//     minlength:[2, "MG Medical insurance details minimum 2 letters"],
//     maxlength:20,
//     validate(value){
//       if(!validator.isAlpha((value),'en-US', {ignore: ' '})){
//         throw new Error("MG Medical insurance details is Invalid");
//       }
//     }
//   }, 
//   earningmembertable : [{type:String}],
//   skilltableData : [{ type:String}],
//   referredby : {
//     type: String,
//     required: [true, "please check your data entry, no reffered by specified!"],
//     minlength:[2, "Referred by minimum 2 letters"],
//     maxlength:40,
//     validate(value){
//       if(!validator.isAlpha((value),'en-US', {ignore: ' '})){
//         throw new Error("Referred by is Invalid");
//       }
//     }
//   },  
//   referraladdress : {
//     type: String,
//     required: [true, "please check your data entry, no refferal address specified!"],
//     minlength:[2, "Referral address minimum 2 letters"],
//     maxlength:50,
//     validate(value){
//       if(!validator.isAlphanumeric((value),'en-US', {ignore: ' '})){
//         throw new Error("Referral address is Invalid");
//       }
//     }
//   },
//   surveydoneby : {
//     type: String,
//     required: [true, "please check your data entry, no survey done by specified!"],
//     minlength:[2, "survey done by minimum 2 letters"],
//     maxlength:40,
//     validate(value){
//       if(!validator.isAlpha((value),'en-US', {ignore: ' '})){
//         throw new Error("survey done by is Invalid");
//       }
//     }
//   },
//   surveydetails : {
//     type: String,
//     required: [true, "please check your data entry, no survey detail specified!"],
//     minlength:[2, "survey details minimum 2 letters"],
//     maxlength:80,
//     validate(value){
//       if(!validator.isAlpha((value),'en-US', {ignore: ' '})){
//         throw new Error("survey details is Invalid");
//       }
//     }
//   },
//   specialnotes : {
//     type: String,
//     required: [true, "please check your data entry, no special notes specified!"],
//     minlength:[2, "special notes minimum 2 letters"],
//     maxlength:50,
//     validate(value){
//       if(!validator.isAlpha((value),'en-US', {ignore: ' '})){
//         throw new Error("special notes is Invalid");
//       }
//     }
//   }
  
//   });

  autoIncrement.initialize(mongoose.connection);
  formschema.plugin(autoIncrement.plugin, 'Form')

  
  const Form = mongoose.model("Form", formschema);

  export default Form



