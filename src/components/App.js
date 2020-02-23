import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import XComp from "./xcomp/XComp";
import Login from "./login/Login";

function App(props) {
  return (
    <>
      <div>
        <Router>
          <Route exact path="/" component={Login} />
          <Route exact path="/growerhaulerdetail" component={XComp} />
        </Router>
      </div>
    </>
  );
}

export default App;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
