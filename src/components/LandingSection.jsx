import { Link } from "react-router-dom";
import "./LandingSection.module.scss";

export default function LandingSection({
  title,
  subtitle,
  description,
  link,
  SVG,
}) {
  return (
    <section className="landing-section">
      <section>
        <SVG />
        <h1>{title}</h1>
      </section>
      <div>
        <h2>{subtitle}</h2>
        <p>{description}</p>
        <Link to={link}>Try it out</Link>
      </div>
    </section>
  );
}
