import React from 'react';
import { Link } from 'react-router-dom';
import success from "../asset/success.png";


const Successfull = () => {
  return (
    <div className="wrapper">
      <h3>You Have Successfully Submited A Request For Mortage Loan</h3>

      <img className="success" src={success} alt="success" />
      <p>we will get back to you after reviewing.</p>
      <p>Thank You For choosing <strong>Swedbank</strong></p>
      <Link to="/">
            <p>Go Back</p>
      </Link>
    </div>
  )
}

export default Successfull
