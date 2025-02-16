import Review from "./Review.jsx";

export default function PatternReviews({ reviews }) {
  return (
    <section>
      <h1>Reviews from Buyers</h1>
      {reviews.map((review, i) => (
        <Review key={i} review={review} />
      ))}
    </section>
  );
}
