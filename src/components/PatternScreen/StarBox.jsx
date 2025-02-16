import { Star } from "../../icons";
import "./StarBox.module.scss";

export default function StarBox({ rating, pixelWidth }) {
  return (
    <div className="star-box" style={{ width: pixelWidth + "px" }}>
      <div className="unfilled-stars">
        <Star flex={"1 0 " + pixelWidth / 5 + "px"} />
        <Star flex={"1 0 " + pixelWidth / 5 + "px"} />
        <Star flex={"1 0 " + pixelWidth / 5 + "px"} />
        <Star flex={"1 0 " + pixelWidth / 5 + "px"} />
        <Star flex={"1 0 " + pixelWidth / 5 + "px"} />
      </div>
      <div
        className="filled-stars"
        style={{ width: `${rating * (pixelWidth / 5)}px` }}
      >
        <Star fill="black" flex={"1 0 " + pixelWidth / 5 + "px"} />
        <Star fill="black" flex={"1 0 " + pixelWidth / 5 + "px"} />
        <Star fill="black" flex={"1 0 " + pixelWidth / 5 + "px"} />
        <Star fill="black" flex={"1 0 " + pixelWidth / 5 + "px"} />
        <Star fill="black" flex={"1 0 " + pixelWidth / 5 + "px"} />
      </div>
    </div>
  );
}
