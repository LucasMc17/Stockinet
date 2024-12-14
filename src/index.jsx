import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingScreen from "./components/LandingScreen/index.jsx";
import PatternScreen from "./screens/Pattern/index.jsx";
import { Login, Reset, Authenticate } from "./screens/AuthScreens";
import { Provider } from "react-redux";
import { store } from "./@redux/store";
import "./Base.module.scss";
import Patterns from "./screens/Patterns/index.jsx";
import { StytchLogin, StytchProvider } from "@stytch/react";
import { StytchUIClient } from "@stytch/vanilla-js";

const stytch = new StytchUIClient(
  "public-token-test-ef6d0a44-36d8-4ab6-b69f-3d6a2a47dbb7",
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingScreen />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "auth",
    element: <Authenticate />,
  },
  {
    path: "reset",
    element: <Reset />,
  },
  {
    path: "patterns",
    element: <Patterns />,
  },
  {
    path: "pattern/:patternId",
    element: <PatternScreen />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StytchProvider stytch={stytch}>
      <Provider store={store}>
        <div>
          <RouterProvider router={router} />
        </div>
      </Provider>
    </StytchProvider>
  </React.StrictMode>,
);
