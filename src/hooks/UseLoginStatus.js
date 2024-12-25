import { useStytchUser } from "@stytch/react";

export default function UseLoginStatus() {
  const { user } = useStytchUser();
  return !!user;
}
