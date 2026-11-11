
import ProductCard from "./components/ProductCard";
import { products } from "./data/products";

export default function HomePage() {
  return (
    <main className="container">
      <header className="hero">
        <span className="hero-label">DISCOVER YOUR NEXT FAVORITE</span>

        <h1 className="hero-title">ShipYard<span>.</span></h1>

        <p className="hero-sub">
          Gear for people who build, run, and explore.
          Discover products designed for your everyday adventures.
        </p>
      </header>

      <section>
        <div className="section-head">
          <div>
            <h2 className="section-title">All Products</h2>
            <p className="section-description">
              Explore our collection
            </p>
          </div>

          <span className="section-count">
            {products.length} items
          </span>
        </div>

        <div className="grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </section>

      <footer className="footer">
        © 2026 ShipYard. Built for everyday explorers.
      </footer>
    </main>
  );
}
