import { Star } from "../../icons";
import "./StarBox.module.scss";

export default function StarBox({ ratings, pixelWidth }) {
  const average = ratings.length
    ? ratings.reduce((a, b) => a + b.stars, 0) / ratings.length
    : NaN;

  return (
    <div className="star-box">
      <div className="star-holder" style={{ width: pixelWidth + "px" }}>
        <div className="unfilled-stars">
          <Star flex={"1 0 " + pixelWidth / 5 + "px"} />
          <Star flex={"1 0 " + pixelWidth / 5 + "px"} />
          <Star flex={"1 0 " + pixelWidth / 5 + "px"} />
          <Star flex={"1 0 " + pixelWidth / 5 + "px"} />
          <Star flex={"1 0 " + pixelWidth / 5 + "px"} />
        </div>
        <div
          className="filled-stars"
          style={{ width: average ? `${average * (pixelWidth / 5)}px` : "0px" }}
        >
          <Star fill="black" flex={"1 0 " + pixelWidth / 5 + "px"} />
          <Star fill="black" flex={"1 0 " + pixelWidth / 5 + "px"} />
          <Star fill="black" flex={"1 0 " + pixelWidth / 5 + "px"} />
          <Star fill="black" flex={"1 0 " + pixelWidth / 5 + "px"} />
          <Star fill="black" flex={"1 0 " + pixelWidth / 5 + "px"} />
        </div>
      </div>
      <span>
        {average == NaN
          ? "No reviews yet!"
          : `${average} (${ratings.length} Reviews)`}
        {/* {avgRating} ({ratings.length} Ratings) */}
      </span>
    </div>
  );
}
