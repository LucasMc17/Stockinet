import LandingSection from "./LandingSection.jsx";
import LandingHeader from "./LandingHeader.jsx";
import Globe from "../../icons/Globe.jsx";
import Dollar from "../../icons/Dollar.jsx";
import GradCap from "../../icons/GradCap.jsx";
import "./index.module.scss";
import UseLoginStatus from "../../hooks/UseLoginStatus.js";

export default function LandingScreen() {
  console.log(UseLoginStatus());
  return (
    <>
      <LandingHeader />
      <div className="landing-screen">
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
