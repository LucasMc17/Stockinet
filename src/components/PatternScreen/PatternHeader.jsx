import { Link } from "react-router-dom";

export default function PatternHeader({ title, author, difficulty }) {
  return (
    <div className="pattern-header card">
      <h1>{title}</h1>
      <div>
        <h3>
          by <Link to={`/authors/${author.id}`}>{author.username}</Link>
        </h3>
        <h3>Skill Level: {difficulty}</h3>
      </div>
    </div>
  );
}
