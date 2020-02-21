import React from "react";
import { Button } from "reactstrap";

import "./GrowerHaulerButtons.css";

function GrowerHaulerButtons(props) {
  return (
    <div className="gh-buttons">
      <Button color="primary" className="menu-buttons exportButton">
        Export
      </Button>

      <Button color="primary" className="menu-buttons">
        Add New
      </Button>
    </div>
  );
}

export default GrowerHaulerButtons;
