import React, { useState } from 'react'
import App from './App';
import axios from 'axios'

export const multiStepContext = React.createContext();

const StepContext = () => {
    const [currentStep, setStep] = useState(1);
    const [userData, setUserData] = useState([]);
    const [finalData, setFinalData] = useState([]);
    const dependettablearray = [];
    const [dependenttableData, setdependenttableData] = useState([]);
    const [earningmembertableData, setearningmembertableData] = useState([])
    const earningmembertablearray = []
    const [skilltableData, setskilltableData] = useState([])

    const skilltableDataarray = []


    // const [userfiles,setUserFiles] = useState('')

    // console.log(dependenttableData)
    // console.log("dependenttablearray", dependettablearray)

    const formData = new FormData()


    const showData = () => {

        axios.get('https://hirsurishwarji-foundation.herokuapp.com/')
            .then((response) => {
                setFinalData(response.data);
            })

        console.log(finalData)
    }


    function submitData() {
        console.log("submitData called")
        // setFinalData(finalData => [...finalData, userData]);
        // setUserData('');
        // setStep(1);
        // personal details appending
        formData.append('name', userData.name)
        formData.append('fhname', userData.fhname)
        formData.append('add1', userData.add1)
        formData.append('add2', userData.add2)
        formData.append('state', userData.state)
        formData.append('city', userData.city)
        formData.append('pincode', userData.pincode)
        formData.append('nativetown', userData.nativetown)
        formData.append('phonenumber', userData.phonenumber)
        formData.append('mobilenumber', userData.mobilenumber)
        // formData.append('aadharnumber', userData.aadharnumber)
        formData.append('jainism', userData.jainism)
        formData.append('category', userData.category)
        formData.append('creed', userData.creed)

        // files appending
        formData.append('rationcard', userData.rationcard)

        formData.append('rentreciept', userData.rentreciept)

        formData.append('electricitybill', userData.electricitybill)

        formData.append('medicalinsurance', userData.medicalinsurance)

        formData.append('salarycertificate', userData.salarycertificate)

        formData.append('bankpassbook', userData.bankpassbook)

        formData.append('jainminoritycertificate', userData.jainminoritycertificate)

        formData.append('telephonebill', userData.telephonebill)

        formData.append('referralletter', userData.referralletter)

        formData.append('aadharcard', userData.aadharcard)

        formData.append('schoolcollegefees', userData.schoolcollegefees)

        formData.append('others', userData.others)

        // files data appending
        formData.append('rationcardnumber', userData.rationcardnumber)
        formData.append('rentrecieptormaintenanceserialnumber', userData.rentrecieptormaintenanceserialnumber)
        formData.append('electricconsumernumber', userData.electricconsumernumber)
        formData.append('insuranceid', userData.insuranceid)
        formData.append('salarycertificateid', userData.salarycertificateid)
        formData.append('bankaccountdetails', userData.bankaccountdetails)
        formData.append('jaincertificateid', userData.jaincertificateid)
        formData.append('telephoneaccountnumber', userData.telephoneaccountnumber)
        formData.append('referralletterserialnumber', userData.referralletterserialnumber)
        formData.append('aadharnumber', userData.aadharnumber)
        formData.append('schoolorcollegefeesserialnumber', userData.schoolorcollegefeesserialnumber)




        // Miscellaneous appending
        formData.append('pathshalachildren', userData.pathshalachildren)
        formData.append('religiouseducation', userData.religiouseducation)
        formData.append('templepooja', userData.templepooja)
        formData.append('upashrayvisit', userData.upashrayvisit)
        formData.append('kanmoolusage', userData.kanmoolusage)
        formData.append('kanmoolusagestopped', userData.kanmoolusagestopped)

        // monthly expenses appending::::

        formData.append('maintenance', userData.maintenance)
        formData.append('electricbillexpense', userData.electricbillexpense)
        formData.append('telephoneexpense', userData.telephoneexpense)
        formData.append('educationexpense', userData.educationexpense)
        formData.append('tuitionexpense', userData.tuitionexpense)
        formData.append('medicalexpense', userData.medicalexpense)
        formData.append('groceriesexpense', userData.groceriesexpense)
        formData.append('otherexpense', userData.otherexpense)
        formData.append('totalexpenses', userData.totalexpenses)
        formData.append('areaofflat', userData.areaofflat)
        formData.append('rentownershipstatus', userData.rentownershipstatus)

        // Home furniture details

        formData.append('tv', userData.tv)
        formData.append('cable', userData.cable)
        formData.append('fridge', userData.fridge)
        formData.append('washingmachine', userData.washingmachine)
        formData.append('vehicle', userData.vehicle)
        formData.append('bike', userData.bike)
        formData.append('phones', userData.phones)


        // education grant
        if (userData.egunemployedpersoneducation) {
            formData.append('egunemployedpersoneducation', userData.egunemployedpersoneducation)
            formData.append('egunemployedpersonexperience', userData.egunemployedpersonexperience)
            formData.append('egloanstatus', userData.egloanstatus)
            formData.append('loanamount', userData.loanamount)
            formData.append('egscname', userData.egscname)
            formData.append('egscaddress', userData.egscaddress)
            formData.append('egcoursename', userData.egcoursename)
            formData.append('egannualfees', userData.egannualfees)
            formData.append('egdetailsofcourse', userData.egdetailsofcourse)
            formData.append('egindependent', userData.egindependent)
            formData.append('egmoneyneeded', userData.egmoneyneeded)
            formData.append('egselfmanagecontribution', userData.egselfmanagecontribution)
        } else {

        }
        // medical grant

        if (userData.mgunemployedpersoneducation) {

            formData.append('mgunemployedpersoneducation', userData.mgunemployedpersoneducation)
            formData.append('mgunemployedpersonexperience', userData.mgunemployedpersonexperience)
            formData.append('mgloanstatus', userData.mgloanstatus)
            formData.append('mgloanamount', userData.mgloanamount)
            formData.append('mghname', userData.mghname)
            formData.append('mghaddress', userData.mghaddress)
            formData.append('mgdiseasedetails', userData.mgdiseasedetails)
            formData.append('mgaprxexpenses', userData.mgaprxexpenses)
            formData.append('mgamountneeded', userData.mgamountneeded)
            formData.append('mgamtcont', userData.mgamtcont)
            formData.append('mgmedicalaid', userData.mgmedicalaid)
            formData.append('mgmedamt', userData.mgmedamt)
            formData.append('mginsurancedetails', userData.mginsurancedetails)


        }
        // Earning member table
        for (const [key, value] of Object.entries(earningmembertableData)) {
            earningmembertablearray.push(`${key}: ${value}`);
        }
        formData.append('earningmembertable', earningmembertablearray)
        // skill table data
        for (const [key, value] of Object.entries(skilltableData)) {
            skilltableDataarray.push(`${key}: ${value}`);
        }
        formData.append('skilltableData', skilltableDataarray)

        // formData.append('skilltableData', userData.skilltableData)
        // administration details
        formData.append('referredby', userData.referredby)
        formData.append('referraladdress', userData.referraladdress)
        formData.append('surveydoneby', userData.surveydoneby)
        formData.append('surveydetails', userData.surveydetails)
        formData.append('specialnotes', userData.specialnotes)


        // console.log(dependenttableData)

        // Dependent details

        formData.append("dependenttable",userData.dependenttable)
        console.log(userData.dependenttable)


        // for (const [key, value] of Object.entries(dependenttableData)) {
        //     dependettablearray.push(`${key}: ${value}`);
        // }

        // dependenttableData.forEach(function(value, key){
        //     console.log(value)
        // })

        // for(var in dependenttableData){
        //     console.log(dependenttableData['var'])
        // }

        // formData.append('dependenttable', dependettablearray)


        // console.log(dependettablearray)
        // console.log(userData)
        // console.log(formData.get('dependenttable').valueOf('dependent1name'))


        axios.post("https://hirsurishwarji-foundation.herokuapp.com/createApplication", formData)
            .then(res => {
                console.log(res)
                // window.alert("response after submitting data"+res.data)
                window.alert(res.data)
            })
            .catch(err => { console.log(err) })

        console.log("submitData calling finished")


        // axios.post("http://localhost:8000/createApplication", formData)
        // .then(res => {
        //     console.log(res)
        //     window.alert(res.data)
        // })
        // .catch(err => { console.log(err) })

        // setUserData('');
        // setStep(1);

    }

    return (
        <div>
            <multiStepContext.Provider value={{
                currentStep, setStep, userData, setUserData, finalData, setFinalData, formData, submitData, showData, dependettablearray, dependenttableData, setdependenttableData,
                earningmembertableData, setearningmembertableData, earningmembertablearray, skilltableData, setskilltableData, skilltableDataarray, formData
            }}>
                <App />
            </multiStepContext.Provider>

        </div>
    )
}
export default StepContext;
