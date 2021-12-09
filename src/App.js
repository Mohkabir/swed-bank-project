import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './components/Home';
import Loan from './components/Loan';
import Header from './components/Header';
import Successful from './components/Successfull';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/mortageLoan">
            <div className="wrapper">  
              <Loan />
            </div>
          </Route>
          <Route exact path="/successfull">
            <Successful />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
