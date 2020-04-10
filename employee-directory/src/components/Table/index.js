import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Table() {
  return (
    <table>
      <tr>
        <th>Image</th>
        <th>Name</th>
        <th>Phone</th>
        <th>Email</th>
        <th>DOB</th>
      </tr>
      <tr>
        <td></td>
        <td>Ari Horowitz</td>
        <td>(555) 123-4567</td>
        <td>testemail@comcast.net</td>
        <td>4/9/2020</td>
      </tr>
    </table>
  );
}

export default Table;
