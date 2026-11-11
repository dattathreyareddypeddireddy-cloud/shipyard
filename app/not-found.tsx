
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container not-found">
      <h1>404 - Product Not Found</h1>

      <p>
        Sorry, we could not find the product you are looking for.
      </p>

      <Link href="/" className="back-link">
        ← Return to ShipYard
      </Link>
    </main>
  );
}
