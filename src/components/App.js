import React from "react";
import ReactDOM from "react-dom";

function App(props) {
  return (
    <div>
      <h1>React Component</h1>
    </div>
  );
}

export default App;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
