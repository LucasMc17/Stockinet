import { Products } from "@stytch/vanilla-js";
import { StytchLogin } from "@stytch/react";

const config = {
  passwordOptions: {
    loginExpirationMinutes: 30,
    loginRedirectURL: "http://localhost:8000",
    resetPasswordExpirationMinutes: 30,
    resetPasswordRedirectURL: "http://localhost:8000/reset",
  },
  products: [Products.passwords],
};

export default function Login() {
  return <StytchLogin config={config} />;
}
