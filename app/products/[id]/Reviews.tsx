
const reviews = [
  {
    name: "Alex Morgan",
    rating: 5,
    comment: "Excellent product! Great quality and design.",
  },
  {
    name: "Sarah Johnson",
    rating: 4,
    comment: "Very good experience. I am happy with this purchase.",
  },
  {
    name: "David Smith",
    rating: 5,
    comment: "Amazing value for money. Highly recommended!",
  },
];

export default function Reviews() {
  return (
    <section
      style={{
        marginTop: "30px",
        padding: "25px",
        background: "#ffffff",
        borderRadius: "14px",
        border: "1px solid #e5e7eb",
      }}
    >
      <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>
        Customer Reviews
      </h2>

      {reviews.map((review) => (
        <div
          key={review.name}
          style={{
            padding: "15px 0",
            borderBottom: "1px solid #e5e7eb",
          }}
        >
          <h3 style={{ fontWeight: "bold" }}>
            {review.name}
          </h3>

          <p style={{ color: "#e6a700", margin: "6px 0" }}>
            {"★".repeat(review.rating)}
            {"☆".repeat(5 - review.rating)}
          </p>

          <p>{review.comment}</p>
        </div>
      ))}
    </section>
  );
}
