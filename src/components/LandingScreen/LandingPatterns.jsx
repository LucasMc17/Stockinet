import { Link } from "react-router-dom";
import "./LandingPatterns.module.scss";
import PatternCard from "../PatternCard.jsx";

export default function LandingPatterns() {
  return (
    <section id="landing-patterns" className="menu">
      <header>
        <h3>My Patterns</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </header>
      <div id="landing-patterns-list">
        <PatternCard
          title="Pattern Name"
          image="/public/placeholder.webp"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
          link={"/patterns/1"}
        />
        <PatternCard
          title="Pattern Name"
          image="/public/placeholder.webp"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
          link={"/patterns/1"}
        />
        <PatternCard
          title="Pattern Name"
          image="/public/placeholder.webp"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
          link={"/patterns/1"}
        />
      </div>
      <div className="right-button">
        <Link to="/patterns/my-patterns">
          <button>View Your Patterns</button>
        </Link>
      </div>
    </section>
  );
}
