import { Link } from "react-router-dom";
import Slider from "./Slider/index.jsx";

export default function PatternImages({ images, description }) {
  return (
    <div className="card">
      <Slider>
        {images.map((image) => (
          <img src={image} />
        ))}
      </Slider>
      {images.length > 0 && <Link to="">Enlarge</Link>}
      <p>{description}</p>
    </div>
  );
}
