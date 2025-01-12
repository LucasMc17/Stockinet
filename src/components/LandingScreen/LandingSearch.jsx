import "./LandingSearch.module.scss";
import PatternSearch from "../PatternSearch.jsx";
import { Link } from "react-router-dom";

export default function LandingSearch() {
  return (
    <section id="landing-search">
      <h3>Pattern Search</h3>
      <PatternSearch />
      <p id="to-all-patterns">
        Already have something in mind?{" "}
        <Link to="/patterns">See All Patterns</Link>
      </p>
    </section>
  );
}
