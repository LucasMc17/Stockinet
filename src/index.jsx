import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingScreen from "./components/LandingScreen/index.jsx";
import PatternScreen from "./screens/PatternScreen/index.jsx";
import PatternPreviewScreen from "./screens/PatternPreviewScreen/index.jsx";
import { Provider } from "react-redux";
import { store } from "./@redux/store";
import "./Base.module.scss";
import OwnedPatternsScreen from "./screens/OwnedPatternsScreen/index.jsx";
import AllPatternsScreen from "./screens/AllPatternsScreen/index.jsx";
import LoginSignup from "./screens/LoginSignup/index.jsx";
import { StytchProvider } from "@stytch/react";
import { StytchUIClient } from "@stytch/vanilla-js";
import Header from "./components/Header/index.jsx";

const stytch = new StytchUIClient(
  "public-token-test-ef6d0a44-36d8-4ab6-b69f-3d6a2a47dbb7",
);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <LandingScreen />
      </>
    ),
  },
  {
    path: "login",
    element: <LoginSignup login={true} />,
  },
  {
    path: "signup",
    element: <LoginSignup login={false} />,
  },
  // pattern paths
  {
    path: "patterns",
    element: (
      <>
        <Header />
        <AllPatternsScreen />
      </>
    ),
  },
  {
    path: "patterns/my-patterns",
    element: (
      <>
        <Header />
        <OwnedPatternsScreen />
      </>
    ),
  },
  {
    path: "pattern/:patternId",
    element: (
      <>
        <Header />
        <PatternScreen />
      </>
    ),
  },
  {
    path: "pattern/preview/:patternId",
    element: (
      <>
        <Header />
        <PatternPreviewScreen />
      </>
    ),
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
