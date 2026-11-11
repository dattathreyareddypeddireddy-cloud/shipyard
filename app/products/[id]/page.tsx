
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProduct, products } from "../../data/products";

const Reviews = dynamic(() => import("./Reviews"), {
  loading: () => <p>Loading customer reviews...</p>,
});

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = getProduct(id);

  if (!product) {
    return {
      title: "Product Not Found | ShipYard",
    };
  }

  return {
    title: `${product.name} | ShipYard`,
    description: product.description,
  };
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
          <Image
            src={product.image}
            alt={product.name}
            width={800}
            height={800}
            sizes="(max-width: 650px) 100vw, 50vw"
            className="detail-image"
            priority
          />
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

      <Reviews />
    </main>
  );
}
