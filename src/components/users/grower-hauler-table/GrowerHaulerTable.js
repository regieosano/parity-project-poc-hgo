import React from "react";

import "./GrowerHaulerTable.css";

import { Table } from "reactstrap";

function GrowerHaulerTable(props) {
  return (
    <div>
      <Table bordered id="list-table">
        <thead></thead>
        <tbody>
          <tr>
            <th scope="row" className="p-4">
              Account Id
            </th>
            <td className="p-4">H-4535354</td>
          </tr>
          <tr>
            <th scope="row" className="p-4">
              Account Name
            </th>
            <td className="p-4">Jacob</td>
          </tr>
          <tr>
            <th scope="row" className="p-4">
              Type
            </th>
            <td className="p-4">Larry</td>
          </tr>
          <tr>
            <th scope="row" className="p-4">
              Email
            </th>
            <td className="p-4">Larry</td>
          </tr>
          <tr>
            <th scope="row" className="p-4">
              Phone Number
            </th>
            <td className="p-4">Larry</td>
          </tr>
          <tr>
            <th scope="row" className="p-4">
              Hauler / Grower
            </th>
            <td className="p-3">Larry</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default GrowerHaulerTable;
