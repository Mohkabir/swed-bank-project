import React from 'react'
import { Link } from 'react-router-dom'

const Summary = ({previous, loanData}) => {
  return (
    <div>
      <div className="summary">
        <h3>Summary</h3>
        <p>1, You earn ${loanData.questionOne} per annum</p>
        <p>2, {loanData.questionTwo === "yes"? "You have some debts":"You have no debts"}</p>
        <p>3, <strong>What do you spend money on:</strong> {loanData.questionThree}</p>
        <p>4, <strong>Do you have children</strong> {loanData.questionFour === "yes" ? "Yes, i do": "No, i dont" }</p>
      </div>

      <div className="btn_group">
        <button className="btn_prev" onClick={previous}>previous</button>
        <Link to="/successfull">
          <button className="btn_next" >submit</button>
        </Link>
      </div>
    </div>
  )
}

export default Summary
