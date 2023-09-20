import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DashboardPage1 from "./pages/DashboardPage1";
import DashboardPage2 from "./pages/DashboardPage2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardPage1 />,
  },
  {
    path: "/about",
    element: <DashboardPage2 />,
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
