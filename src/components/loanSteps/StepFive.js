import React, { useState } from 'react';

const StepFive = ({previous, next, alert, setAlert, setloanData, loanData}) => {

  const [children, setChildren] = useState("")
  
  const handleRadio = (value) => {
    if(value === "yes"){
      setChildren("yes");
    }else if(value === "no"){
      setChildren("no");
    }
  }

  const handleChildren = () => {
    if(children === ""){
       setAlert("please select one option")
    }else{
      setloanData({
        ...loanData,
        questionTwo: children
      })
      next();
    }
  }

  return (
    <div>
      <h3>Final step</h3>
      <p>
        Do you have children ?
      </p>
      <p className="error">{alert ? alert:""}</p>
        <input type="radio" id="Yes" name="fav_language" onClick={ () => handleRadio("yes")} value="Yes" />
        <label for="Yes">Yes</label>
        <input type="radio" id="No" name="fav_language" onClick={ () => handleRadio("no")} value="No" />
        <label for="No">No</label>

      <div className="btn_group">
        <button className="btn_prev" onClick={previous}>previous</button>
        <button className="btn_next" onClick={handleChildren}>next</button>
      </div>
    </div>
  )
}

export default StepFive
