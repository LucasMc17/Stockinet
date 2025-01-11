import {
  LandingHeader,
  LandingPatterns,
  LandingSearch,
  LandingHelp,
} from "../components";
import { useLoginStatus } from "../hooks";
import "./LandingScreen.module.scss";

export default function LandingScreen() {
  const loggedIn = useLoginStatus();
  return (
    <div id="landing-screen">
      <LandingHeader />
      {loggedIn && <LandingPatterns />}
      <LandingSearch />
      <LandingHelp />
    </div>
  );
}
