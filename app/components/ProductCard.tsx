
import Image from "next/image";
import Link from "next/link";
import type { Product } from "../data/products";

export default function ProductCard({
  product,
}: {
  product: Product;
}) {
  return (
    <Link href={`/products/${product.id}`} className="card">
      <div
        className="card-art"
        style={{ background: product.accent }}
      >
        <Image
          src={product.image}
          alt={product.name}
          width={600}
          height={400}
          sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 25vw"
          className="card-image"
        />
      </div>

      <div className="card-body">
        <span className="card-category">
          {product.category}
        </span>

        <h2 className="card-name">{product.name}</h2>

        <p className="card-tagline">{product.tagline}</p>

        <span className="card-price">${product.price}</span>
      </div>
    </Link>
  );
}
