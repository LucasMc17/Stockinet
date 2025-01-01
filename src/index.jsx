import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  OwnedPatternsScreen,
  PatternScreen,
  PatternPreviewScreen,
  LoginSignupScreen,
  AllPatternsScreen,
  LandingScreen,
} from "./screens";
import { Provider } from "react-redux";
import { store } from "./@redux/store";
import "./Base.module.scss";
import { StytchProvider } from "@stytch/react";
import { StytchUIClient } from "@stytch/vanilla-js";
import { SiteHeader } from "./components";

const stytch = new StytchUIClient(
  "public-token-test-ef6d0a44-36d8-4ab6-b69f-3d6a2a47dbb7",
);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <SiteHeader />
        <LandingScreen />
      </>
    ),
  },
  {
    path: "login",
    element: <LoginSignupScreen login={true} />,
  },
  {
    path: "signup",
    element: <LoginSignupScreen login={false} />,
  },
  // pattern paths
  {
    path: "patterns",
    element: (
      <>
        <SiteHeader />
        <AllPatternsScreen />
      </>
    ),
  },
  {
    path: "patterns/my-patterns",
    element: (
      <>
        <SiteHeader />
        <OwnedPatternsScreen />
      </>
    ),
  },
  {
    path: "pattern/:patternId",
    element: (
      <>
        <SiteHeader />
        <PatternScreen />
      </>
    ),
  },
  {
    path: "pattern/preview/:patternId",
    element: (
      <>
        <SiteHeader />
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
