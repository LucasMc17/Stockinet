import { Link } from "react-router-dom";
import "./PatternOverview.module.scss";
import StarBox from "./StarBox.jsx";

export default function PatternOverview({
  title,
  author,
  ratings,
  description,
}) {
  return (
    <section className="pattern-overview">
      <div className="pattern-overview-text">
        <div>
          <h1>{title}</h1>
          {/* heart svg */}
        </div>
        <p>
          by <Link to={`/authors/${author.slug}`}>{author.username}</Link>
        </p>
        <StarBox ratings={ratings} pixelWidth={100} />
        <p>{description}</p>
      </div>
      <div className="pattern-overview-button">
        <button>Buy this Pattern</button>
      </div>
    </section>
  );
}
