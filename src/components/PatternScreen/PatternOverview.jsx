import { Link } from "react-router-dom";
import "./PatternOverview.module.scss";
import StarBox from "./StarBox.jsx";

export default function PatternOverview({
  title,
  author,
  ratings,
  description,
  owned,
}) {
  const average = ratings.length
    ? ratings.reduce((a, b) => a + b.stars, 0) / ratings.length
    : null;
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
        <div className="rating-box">
          <StarBox rating={average} pixelWidth={100} />
          <span>
            {average === null
              ? "No reviews yet!"
              : `${average} (${ratings.length} Reviews)`}
          </span>
        </div>
        <p>{description}</p>
      </div>
      <div className="pattern-overview-button">
        <button>{owned ? "Open in Workspace" : "Buy this Pattern"}</button>
      </div>
    </section>
  );
}
