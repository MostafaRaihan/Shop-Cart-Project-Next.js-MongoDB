"use client";
import { useCart } from "@/app/component/CartContext";
import CartItem from "@/app/component/CartItem";
import Link from "next/link";
import "./Cart.css";

const Cart = () => {
  const { cart, clearCart } = useCart();

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty 😢</p>
      ) : (
        <>
          <div className="cart-table-wrapper">
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </tbody>
            </table>
          </div>

          <div className="cart-footer">
            <div className="total-section">
              <h2>Total:</h2>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="cart-buttons">
              <button className="btn-clear" onClick={clearCart}>
                Clear Cart
              </button>
              <Link href="/checkout">
                <button className="btn-checkout">Proceed to Checkout</button>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
