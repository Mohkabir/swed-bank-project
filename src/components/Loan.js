import React, { useState, useEffect } from 'react';

import StepOne from './loanSteps/StepOne';
import StepTwo from './loanSteps/StepTwo';
import StepThree from './loanSteps/StepThree';
import StepFour from './loanSteps/StepFour';
import StepFive from './loanSteps/StepFive';
import Summary from './loanSteps/Summary';



const Loan = () => {
  const [step, setStep] = useState(1);
  const [alert, setAlert] = useState("")

  const [loanData, setloanData] = useState({
    questionOne : null,
    questionTwo : null,
    questionThree : null,
    questionFour : null,
    questionFive : null,
  });

  useEffect(() => {
    console.log(loanData);
    
  }, [loanData])

  useEffect(() => {
    setAlert("");
    
  }, [step])
  

  const previous = ( ) => {
    setStep(step - 1);
  }
  const next = ( ) => {
    setStep(step + 1);
  }

  switch (step) {
    case 1:
      return <StepOne previous={previous} next={next} />;
    case 2:
      return <StepTwo 
      previous={previous} 
      next={next} 
      setloanData={setloanData} 
      loanData={loanData}
      alert={alert} 
      setAlert={setAlert} />;
    case 3:
      return <StepThree 
      previous={previous} 
      next={next} 
      setloanData={setloanData} 
      loanData={loanData}
      alert={alert} 
      setAlert={setAlert} />;
    case 4:
      return <StepFour 
      previous={previous} 
      next={next} 
      alert={alert} 
      setAlert={setAlert}
      setloanData={setloanData} 
      loanData={loanData} />;
    case 5:
      return <StepFive 
      previous={previous} 
      next={next} 
      setloanData={setloanData} 
      loanData={loanData}
      alert={alert} 
      setAlert={setAlert} />;
    case 6:
      return <Summary previous={previous} setloanData={setloanData} loanData={loanData}/>
    default: 
      return null;
  }
}

export default Loan
