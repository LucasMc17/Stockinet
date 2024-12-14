import React, { useEffect } from "react";
import { useStytch, useStytchSession } from "@stytch/react";
import { useNavigate } from "react-router-dom";

export default function Authenticate() {
  const stytchClient = useStytch();
  const { session } = useStytchSession();
  const navigate = useNavigate();

  useEffect(() => {
    if (session) {
      // The user is authenticated. You can redirect the user to their authenticaed experience
      navigate("/");
    } else {
      const token = new URLSearchParams(window.location.search).get("token");
      stytchClient.magicLinks.authenticate(token, {
        session_duration_minutes: 60,
      });
    }
  }, [stytchClient, session]);

  return <div>Loading</div>;
}
