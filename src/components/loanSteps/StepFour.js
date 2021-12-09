import React, { useState } from 'react';

const StepFour = ({previous, next, loanData,setloanData, alert, setAlert}) => {
  const [spend, setSpend] = useState("");

  const handleChange = (e) => {
    setSpend(e.target.value);
  }

  const handleSpend = () => {
    if(spend === ""){
      setAlert("please answer all question")
    }else{
      setloanData({
        ...loanData,
        questionThree: spend
      })
      next();
    }
  }

  return (
    <div>
      <h3>Step Three</h3>
      <p className="error">{alert ? alert:""}</p>
      <p>
       {loanData.questionTwo === "yes"? "Since you have some debts":"Since you dont have any debts"} can you tell us what you spend your money on?
      </p>

      <input required type="text" value={spend} onChange={handleChange} placeholder="what you spend on .."/>
      <div className="btn_group">
        <button className="btn_prev" onClick={previous}>previous</button>
        <button className="btn_next" onClick={handleSpend}>next</button>
      </div>
    </div>
  )
}

export default StepFour
