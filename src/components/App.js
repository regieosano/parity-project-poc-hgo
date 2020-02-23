import React from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "reactstrap";

import "./App.css";

import XComp from "./xcomp/XComp";
import Login from "./login/Login";

function App(props) {
  return (
    <div>
      <Login />
    </div>
  );
}

export default App;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
