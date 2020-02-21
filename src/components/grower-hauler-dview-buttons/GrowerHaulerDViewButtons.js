import React from "react";
import { Button } from "reactstrap";

import "./GrowerHaulerDViewButtons.css";

function GrowerHaulerDViewButtons(props) {
  return (
    <div className="dviewButtons">
      <Button color="primary" className="seeDeliveries">
        See Deliveries
      </Button>

      <Button color="primary" className="seePayments">
        See Payments
      </Button>
    </div>
  );
}

export default GrowerHaulerDViewButtons;
