import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage1 from "./pages/Dashboard1/DashboardPage1";
import "./App.css";
const App = () => {
  return (
    <React.Fragment>
      <DashboardPage1 />
    </React.Fragment>

    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/ " element={<DashboardPage1 />} />
    //   </Routes>
    // </BrowserRouter>
  );
};

export default App;
