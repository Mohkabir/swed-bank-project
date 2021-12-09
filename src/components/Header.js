import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import swedbankLogo from "../asset/swedbank-logo.svg";
import barsSolid from "../asset/bars-solid.svg";
import timesCircleRegular from "../asset/times-circle-regular.svg";

const Header = () => {

  const [navStatus, setNavStatus] = useState(false);

  const handleNav = ( ) => {
    setNavStatus(!navStatus);
  }

  const displayNav = navStatus ? "viewNav":"closeNav"
  return (
    <header>
      <div className="navigation wrapper">
        <div>
          <Link to="/">
            <img className="logo" src={swedbankLogo} alt="swedbankLogo" />
          </Link>
        </div>
        <div>
          <img className="menu_bar" onClick={handleNav} src={navStatus ? timesCircleRegular: barsSolid} alt="nav icon" />
          <nav className={`${displayNav}`}>
          <Link to="/mortageLoan">
              <li>Become a customer</li>
          </Link>
          <Link to="/">
              <li>Log in</li>
          </Link>
            
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
