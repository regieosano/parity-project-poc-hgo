import React from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "reactstrap";

import "./App.css";

import NavBar from "./navbar/NavBar";
import SideBar from "./sidebar/SideBar";
import XMenuCategory from "./mainview/XMenuCategory";

import GrowerHaulerTable from "./users/grower-hauler-table/GrowerHaulerTable";

function App(props) {
  return (
    <div>
      <NavBar />
      {/* <SideBar />  Properties would define the Table */}

      <Container>
        <XMenuCategory
          xTitle="Grower / Hauler Detail View"
          xTable={<GrowerHaulerTable />}
        />
      </Container>
    </div>
  );
}

export default App;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
