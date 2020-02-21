import React from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "reactstrap";

import "./App.css";

import Xcomp from "./xcomp/Xcomp";

import NavBar from "./navbar/NavBar";
import SideBar from "./mainsidebar/MainSideBar";
import XMenuCategory from "./mainview/XMenuCategory";

import GrowerHaulerTable from "./users/grower-hauler-table/GrowerHaulerTable";

function App(props) {
  return (
    <div>
      {/* <NavBar />
      <SideBar />

      <Container>
        <XMenuCategory
          xTitle="Grower / Hauler Detail View"
          xTable={<GrowerHaulerTable />}
        />
      </Container> */}
      <Xcomp />
    </div>
  );
}

export default App;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
