import { Link } from "react-router-dom";
import "./PatternCard.module.scss";

export default function PatternCard({ image, title, description, link }) {
  return (
    <Link to={link} className="pattern-card">
      <img src={image} />
      <h5>{title}</h5>
      <p>{description}</p>
    </Link>
  );
}
