"use client";
import { useCart } from "./CartContext";
import { useState, useEffect } from "react";
import "./Cart.css";

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const [quantity, setQuantity] = useState(item.quantity);

  useEffect(() => {
    updateQuantity(item.id, quantity);
  }, [quantity]);

  return (
    <tr className="cart-item">
      <td>
        <div className="cart-product-image">
          <img src={item.image} alt={item.name} />
        </div>
      </td>
      <td>{item.name}</td>
      <td>${item.price}</td>
      <td>
        <div className="quantity-buttons">
          <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
          <input
            type="number"
            value={quantity}
            min="1"
            onChange={e => setQuantity(Math.max(1, Number(e.target.value)))}
          />
          <button onClick={() => setQuantity(q => q + 1)}>+</button>
        </div>
      </td>
      <td>${item.price * quantity}</td>
      <td>
        <button className="btn-remove" onClick={() => removeFromCart(item.id)}>
          x
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
