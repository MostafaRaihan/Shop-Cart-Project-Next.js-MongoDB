"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/app/component/ProductCard";
import { useCart } from "@/app/component/CartContext";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data?.data || []))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Shop</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem" }}>
        {products.length ? (
          products.map((p) => <ProductCard key={p._id} product={p} onAddToCart={() => addToCart(p)} />)
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
};

export default Shop;
