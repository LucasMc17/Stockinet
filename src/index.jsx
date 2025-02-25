import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import {
  OwnedPatternsScreen,
  PatternScreen,
  LoginSignupScreen,
  AllPatternsScreen,
  LandingScreen,
  AuthorScreen,
  AllProjectsScreen,
  ProjectScreen,
} from "./screens";
import { Provider } from "react-redux";
import { store } from "./@redux/store";
import "./Base.module.scss";
import { StytchProvider } from "@stytch/react";
import { useLoggedOutRedirect } from "./hooks";
import { StytchUIClient } from "@stytch/vanilla-js";
import { SiteHeader } from "./components";

const stytch = new StytchUIClient(process.env.STYTCH_TEST_PUBLIC_TOKEN);

function LogInCheck() {
  useLoggedOutRedirect();
  return <Outlet />;
}

const router = createBrowserRouter([
  // root paths
  {
    path: "/",
    element: (
      <>
        <SiteHeader workspace={false} />
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
        <SiteHeader workspace={false} />
        <Outlet />
      </>
    ),
    children: [
      {
        path: "",
        element: <AllPatternsScreen />,
      },
      {
        path: "my-patterns",
        element: <OwnedPatternsScreen />,
      },
      {
        path: ":patternSlug",
        element: <PatternScreen />,
      },
    ],
  },

  // workspace paths

  {
    path: "workspace",
    element: (
      <>
        <SiteHeader workspace={true} />
        <LogInCheck />
      </>
    ),
    children: [
      { path: "", element: <AllProjectsScreen /> },
      {
        path: "project/:patternId",
        element: <ProjectScreen />,
      },
    ],
  },

  // author paths

  {
    path: "authors/:authorSlug",
    element: (
      <>
        <SiteHeader workspace={false} />
        <AuthorScreen />
      </>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StytchProvider stytch={stytch}>
      <Provider store={store}>
        <div id="screen-root">
          <RouterProvider router={router} />
        </div>
      </Provider>
    </StytchProvider>
  </React.StrictMode>,
);
