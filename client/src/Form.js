import React, { useContext } from 'react';
import './App.css';
import FirstStep from './Components/FirstStep';
import SecondStep from './Components/SecondStep';
import ThirdStep from './Components/ThirdStep';
import FourthStep from './Components/FourthStep';
import FifthStep from './Components/FifthStep';
import SixthStep from './Components/SixthStep';
import SeventhStep from './Components/SeventhStep';
import EighthStep from './Components/EighthStep';
import NinethStep from './Components/NinethStep';
import TenthStep from './Components/TenthStep';
import { Stepper, StepLabel, Step } from '@material-ui/core'
import { multiStepContext } from './StepContext';
import EleventhStep from './Components/EleventhStep';

export default function Form() {

  const { currentStep, userData } = useContext(multiStepContext);

  // console.log("category of user" +userData['category'])

  function showStep(step) {

    switch (step) {
      case 1:
        return <FirstStep />
      case 2:
        return <SecondStep />
      case 3:
        return <ThirdStep />
      case 4:
        return <FourthStep />
      case 5:
        return <FifthStep />
      case 6:
        return <SixthStep />
      case 7:
        return <SeventhStep />
      case 8:
        return <EighthStep />
      case 9:
        return <NinethStep />
      case 10:
        return <TenthStep />
      case 11:
        return <EleventhStep />


      default:
        break;
    }
  }
  return (
    <div>
      <div class="form-title text-center">
            <h2 class="text-dark">New Application</h2>
            <span class="text-vlight">Use the below form to create a new application</span>
            </div>      
      <div class="stepper">
        <Stepper style = {{width:"80%"}} activeStep={currentStep - 1} orientation="horizontal">
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>

        </Stepper>
      </div>
      {showStep(currentStep)}
      {/* <DisplayData/> */}

    </div>
  )
}
