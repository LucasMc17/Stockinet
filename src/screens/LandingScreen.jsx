import { LandingSection, LandingHeader, LandingPatterns } from "../components";
import { useLoginStatus } from "../hooks";
import { Globe, Dollar, GradCap } from "../icons";
import "./LandingScreen.module.scss";
import { Link } from "react-router-dom";

export default function LandingScreen() {
  const loggedIn = useLoginStatus();
  return (
    <>
      <LandingHeader />
      {loggedIn && <LandingPatterns />}
      <div className="landing-screen">
        <Link to="/patterns">All Patterns</Link>
        <Link to="/patterns/my-patterns">My Patterns</Link>
        <LandingSection
          title="SHARE"
          subtitle="Lorem Ipsum"
          description="test test test"
          link="/share"
          SVG={Globe}
        />
        <LandingSection
          title="LEARN"
          subtitle="Lorem Ipsum"
          description="test test test"
          link="/learn"
          SVG={GradCap}
        />
        <LandingSection
          title="BUY & SELL"
          subtitle="Lorem Ipsum"
          description="test test test"
          link="/market"
          SVG={Dollar}
        />
      </div>
    </>
  );
}
