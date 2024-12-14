import { useState, useEffect } from "react";
import { Products } from "@stytch/vanilla-js";
import { StytchPasswordReset } from "@stytch/react";

const config = {
  passwordOptions: {
    loginExpirationMinutes: 30,
    loginRedirectURL: "/",
    resetPasswordExpirationMinutes: 30,
    resetPasswordRedirectURL: "/reset",
  },
  products: [Products.passwords],
};

export default function Reset() {
  const [passwordResetToken, setPasswordResetToken] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    setPasswordResetToken(token ?? "");
  }, []);

  return (
    <div>
      <StytchPasswordReset
        config={config}
        passwordResetToken={passwordResetToken}
      />
    </div>
  );
}
