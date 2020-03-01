import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import MainView from "./mainview/MainView";
import XComp from "./xcomp/XComp";

function App(props) {
  return (
    <>
      <div>
        <Router>
          <Route exact path="/" component={MainView} />
          <Route exact path="/growerhaulerdetail" component={XComp} />
        </Router>
      </div>
    </>
  );
}

export default App;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
