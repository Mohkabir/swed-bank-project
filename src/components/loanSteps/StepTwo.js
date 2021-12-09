import React, { useState } from 'react';

const StepTwo = ({previous, next, setloanData, loanData, setAlert, alert}) => {

  const [earn, setEarn] = useState("");


  const handleChange = (e) => {
    setEarn(e.target.value);
  }

  const handleEarning = () => {
    if(earn === ""){
      setAlert("please answer all question")
    }else{
      setloanData({
        ...loanData,
        questionOne: earn
      })
      next();
    }
  }

  return (
    <div>
      <h3>Step One</h3>
        <p className="error">{alert ? alert:""}</p>
      <p>
        How much do you earn per annum?
      </p>
      <input required type="number" value={earn} onChange={handleChange} placeholder="$ 00000"/>
     
      <div className="btn_group">
        <button className="btn_prev" onClick={previous}>previous</button>
        <button className="btn_next" onClick={handleEarning}>next</button>
      </div>
    </div>
  )
}

export default StepTwo
