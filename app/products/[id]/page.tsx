
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, products } from "../../data/products";

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { id } = await params;
  const product = getProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <main className="container detail">
      <Link href="/" className="back-link">
        ← Back to all products
      </Link>

      <article className="detail-card">
        <div
          className="detail-art"
          style={{ background: product.accent }}
        >
          <span className="detail-emoji">
            {product.emoji}
          </span>
        </div>

        <div className="detail-content">
          <span className="detail-category">
            {product.category}
          </span>

          <h1>{product.name}</h1>

          <p className="detail-description">
            {product.description}
          </p>

          <p className="detail-price">
            ${product.price}
          </p>

          <h2>Product Specifications</h2>

          <ul>
            {product.specs.map((spec) => (
              <li key={spec}>{spec}</li>
            ))}
          </ul>
        </div>
      </article>
    </main>
  );
}
