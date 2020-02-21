import React from "react";

import "./GrowerHaulerTable.css";

import { Table } from "reactstrap";

function GrowerHaulerTable(props) {
  return (
    <div>
      <Table bordered>
        <thead></thead>
        <tbody>
          <tr>
            <th scope="row">Account Id</th>
            <td>H-4535354</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">Account Name</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">Type</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row">Email</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default GrowerHaulerTable;
