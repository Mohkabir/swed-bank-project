import React from 'react';
import { Link } from "react-router-dom";
import mortageImg from "../asset/towfiqu-barbhuiya-unsplash.jpg";

const Home = () => {
  return (
    <div style={{background: "#FBF2EA", padding: '30px 0'}}>
      <div className="wrapper">
        <h1 className="primary">Mortgage loan</h1>
        <div className="flex">
          <div className="box1">    
            <h2>There’s no place like home!</h2>
            <p>Home loan will be a perfect solution if you need a loan for a new home, serious renovation or construction.</p>
            <ul>
              <li><span className="list_round"></span> Fast application processing</li>
              <li><span className="list_round"></span>Opportunity to pay back earlier and manage your contract via Internet Banking</li>
              <li><span className="list_round"></span>We constantly offer discounts for home loans, when you receive the discount code from the seller and, please, do not forget to submit it completing the application for the home loan in the Internet Bank.</li>
            </ul>
          </div>
          <div className="box2">
            <img src={mortageImg} alt="mortageImg" />
          </div>
        </div>
        <Link to="mortageLoan">
        <button className="btn_prev">Apply For Mortage Loan</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
