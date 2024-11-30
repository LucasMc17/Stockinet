import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingScreen from "./components/LandingScreen/index.jsx";
import "./Base.module.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingScreen />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
);
