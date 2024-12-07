import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingScreen from "./components/LandingScreen/index.jsx";
import PatternScreen from "./screens/Pattern/index.jsx";
import { Provider } from "react-redux";
import { store } from "./@redux/store";
import "./Base.module.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingScreen />,
  },
  {
    path: "pattern",
    element: <PatternScreen />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <div>
        <RouterProvider router={router} />
      </div>
    </Provider>
  </React.StrictMode>,
);
