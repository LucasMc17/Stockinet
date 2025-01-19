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

const stytch = new StytchUIClient(process.env.STYTCH_TEST_PUBLIC_TOKEN);

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
    element: <LoginSignupScreen method="login" />,
  },
  {
    path: "signup",
    element: <LoginSignupScreen method="signup" />,
  },
  {
    path: "reset",
    element: <LoginSignupScreen method="reset-start" />,
  },
  {
    path: "reset-password",
    element: <LoginSignupScreen method="reset-password" />,
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
    path: "pattern/:patternSlug",
    element: (
      <>
        <SiteHeader />
        <PatternScreen />
      </>
    ),
  },
  {
    path: "pattern/preview/:patternSlug",
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
