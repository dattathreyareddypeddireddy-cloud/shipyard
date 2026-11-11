
"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main
      style={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "24px",
      }}
    >
      <h1>Something went wrong!</h1>

      <p>
        We couldn't load this page. Please try again.
      </p>

      <button
        onClick={() => reset()}
        style={{
          marginTop: "16px",
          padding: "12px 24px",
          backgroundColor: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Try Again
      </button>
    </main>
  );
}
