import StarBox from "./StarBox.jsx";

export default function Review({ review }) {
  return (
    <div className="review">
      <StarBox rating={review.stars} pixelWidth={400} />
      <p>{review.text}</p>
    </div>
  );
}
