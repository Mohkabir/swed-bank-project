import React, { useState } from 'react';

const StepThree = ({previous, next, alert, setAlert, setloanData, loanData}) => {

const [debt, setDebt] = useState("")
  
  const handleRadio = (value) => {
    if(value === "yes"){
      setDebt("yes");
      console.log("yes log")
    }else if(value === "no"){
      setDebt("no");
      console.log("no log")
    }
    console.log(debt);
  }

  const handleDebt = () => {
    if(debt === ""){
       setAlert("please select one option");
       
    }else{
      setloanData({
        ...loanData,
        questionTwo: debt
      })
      next();
    }
  }

  return (
    <div>
      <h3>Step Two</h3>
      <p className="error">{alert ? alert:""}</p>
      <p>
        Do you have any debts?
      </p>

      <input type="radio" id="Yes" name="fav_language" onClick={ () => handleRadio("yes")} value="Yes" />
      <label for="Yes">Yes</label>
      <input type="radio" id="No" name="fav_language" onClick={ () => handleRadio("no")} value="No" />
      <label for="No">No</label>

      <div className="btn_group">
        <button className="btn_prev" onClick={previous}>previous</button>
        <button className="btn_next" onClick={handleDebt}>next</button>
      </div>
    </div>
  )
}

export default StepThree
