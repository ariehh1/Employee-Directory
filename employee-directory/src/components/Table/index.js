import React from "react";
import "./style.css";
import API from "../../utils/API";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
// function Table() {
class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = { people: [{ name: "Henry" }] };
  }

  //component did mount
  componentDidMount() {
    API.getData().then((results) => {
      this.setState({ people: results.data.results });
      console.log(results);
    });
  }

  //render
  render() {
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
          <td>{this.state.people[0].name.first}</td>
          <td>(555) 123-4567</td>
          <td>testemail@comcast.net</td>
          <td>4/9/2020</td>
        </tr>
      </table>
    );
  }
}

export default Table;
