import LandingSection from "./LandingSection.jsx";
import LandingHeader from "./LandingHeader.jsx";
import Globe from "../../icons/Globe.jsx";
import Dollar from "../../icons/Dollar.jsx";
import GradCap from "../../icons/GradCap.jsx";
import "./index.module.scss";
import { Link } from "react-router-dom";

export default function LandingScreen() {
  return (
    <>
      <LandingHeader />
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
