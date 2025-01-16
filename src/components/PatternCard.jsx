import { Link } from "react-router-dom";
import "./PatternCard.module.scss";

export default function PatternCard({
  image,
  title,
  description,
  link,
  type,
  purchaseCount,
  difficulty,
}) {
  return (
    <Link to={link} className="pattern-card">
      <img src={image} />
      <h5>{title}</h5>
      <small>
        {type} • FREE • {difficulty}
      </small>
      <p>{description}</p>
      <div>
        <small>Purchased {purchaseCount} times</small>
      </div>
    </Link>
  );
}
