import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import FilterNav from "./components/FilterNav";
import Table from "./components/Table";
import API from "./utils/API";

function App() {
  return (
    <div>
      <Navbar />
      <FilterNav />
      <Table />
    </div>
  );
}

export default App;
