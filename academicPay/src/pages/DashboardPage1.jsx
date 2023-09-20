import React from "react";
import TableBox from "../components/TableBox";
import Nav from "../components/Nav";

const DashboardPage1 = () => {
  return (
    <React.Fragment>
      <Nav />
      <TableBox />
      <h1 style={{ textAlign: "center" }}>Dashboard1</h1>
    </React.Fragment>
  );
};

export default DashboardPage1;
