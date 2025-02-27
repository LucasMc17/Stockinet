import LandingHeader from "./LandingHeader.jsx";
import LandingPatterns from "./LandingPatterns.jsx";
import LandingSearch from "./LandingSearch.jsx";
import LandingHelp from "./LandingHelp.jsx";
import { useLoginStatus } from "../../hooks";
import "./index.module.scss";

export default function LandingScreen() {
  const loggedIn = useLoginStatus();
  return (
    <div id="landing-screen" className="screen">
      <LandingHeader />
      {loggedIn && <LandingPatterns />}
      <LandingSearch />
      <LandingHelp />
    </div>
  );
}
