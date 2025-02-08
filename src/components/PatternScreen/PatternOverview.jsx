import { Link } from "react-router-dom";
import { Star } from "../../icons";
import "./PatternOverview.module.scss";

export default function PatternOverview({
  title,
  author,
  avgRating,
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
        <div className="rating-box">
          <div style={{ width: avgRating * 20 + "px" }}>
            <Star fill="black" />
            <Star fill="black" />
            <Star fill="black" />
            <Star fill="black" />
            <Star fill="black" />
          </div>
          <small>
            {avgRating} ({ratings} Ratings)
          </small>
        </div>
        <p>{description}</p>
      </div>
      <div className="pattern-overview-button">
        <button>Buy this Pattern</button>
      </div>
    </section>
  );
}
