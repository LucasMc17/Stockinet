import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./LandingPatterns.module.scss";
import PatternCard from "../PatternCard.jsx";
import { useEffect } from "react";
import { fetchRecentPatterns } from "../../@redux/reducers/Patterns/PatternSlice.js";

export default function LandingPatterns() {
  const dispatch = useDispatch();
  const { recentPatterns } = useSelector((s) => s.patterns);

  useEffect(() => {
    dispatch(fetchRecentPatterns());
  }, []);

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
        {recentPatterns.map((pattern) => (
          <PatternCard
            title={pattern.title}
            image={pattern.leadImage}
            description={pattern.description}
            link={`/pattern/${pattern.id}`}
          />
        ))}
      </div>
      <div className="right-button">
        <Link to="/patterns/my-patterns">
          <button>View Your Patterns</button>
        </Link>
      </div>
    </section>
  );
}
