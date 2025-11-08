"use client";

import Link from "next/link";
import Shop from "./shop/page";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Welcome to Interactive Shop</h1>
            <p>Your one-stop shop for amazing products delivered fast.</p>
            <Link href="/shop">
              <button className="btn-hero">Start Shopping</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Shop With Us?</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <span className="icon">🚚</span>
            <h3>Fast Delivery</h3>
            <p>Get your products delivered to your door in record time.</p>
          </div>
          <div className="feature-card">
            <span className="icon">💳</span>
            <h3>Secure Payments</h3>
            <p>All transactions are 100% secure and encrypted.</p>
          </div>
          <div className="feature-card">
            <span className="icon">⭐</span>
            <h3>Top Quality</h3>
            <p>We offer only the best products from trusted brands.</p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="products-preview">
          <Shop preview={true} /> {/* Shop component with limited products */}
        </div>
        <Link href="/shop">
          <button className="btn-view-all">View All Products</button>
        </Link>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>"Great products, fast shipping, and amazing service!"</p>
            <h4>- John D.</h4>
          </div>
          <div className="testimonial-card">
            <p>"I love this shop! The quality is top-notch."</p>
            <h4>- Sarah P.</h4>
          </div>
          <div className="testimonial-card">
            <p>"Highly recommend for anyone looking for reliable products."</p>
            <h4>- Mike R.</h4>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <h2>Ready to find your favorite products?</h2>
        <Link href="/shop">
          <button className="btn-cta">Shop Now</button>
        </Link>
      </section>
    </div>
  );
}
