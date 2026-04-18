import React, { useState } from "react";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";
import axios from "axios";
import "./Cart.css";
export default function Cart() {
  const { user, cart, setCart } = useContext(AppContext);
  const [orderValue, setOrderValue] = useState(0);
  const [error, setError] = useState();
  const Navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;
  const increment = (id, qty) => {
    const updatedCart = cart.map((product) =>
      product._id === id ? { ...product, qty: qty + 1 } : product
    );
    setCart(updatedCart);
  };

  const decrement = (id, qty) => {
    const updatedCart = cart.map((product) =>
      product._id === id ? { ...product, qty: qty - 1 } : product
    );
    setCart(updatedCart);
  };

  useEffect(() => {
    setOrderValue(
      cart.reduce((sum, value) => {
        return sum + value.qty * value.price;
      }, 0)
    );
  }, [cart]);

  const placeOrder = async () => {
    try {
      const url = `${API_URL}/api/orders`;
      const newOrder = {
        userId: user._id,
        email: user.email,
        orderValue,
        items: cart,
      };
      const result = await axios.post(url, newOrder);
      setCart([])
      Navigate("/order");
    } catch (err) {
      console.log(err);
      setError("Something went wrong");
    }
  };

  return (
    <section className="cart-section">
      <h2 className="section-title">My Cart</h2>
      {error && <div className="error-message">{error}</div>}
      <div className="cart-list">
        {cart &&
          cart.map(
            (value) =>
              value.qty > 0 && (
                <div className="cart-item" key={value._id}>
                  <div className="cart-item-info">
                    <span className="cart-item-name">{value.productName}</span>
                    <span className="cart-item-price">₹{value.price}</span>
                  </div>
                  <div className="cart-item-controls">
                    <button className="qty-btn" onClick={() => decrement(value._id, value.qty)}>
                      -
                    </button>
                    <span className="cart-item-qty">{value.qty}</span>
                    <button className="qty-btn" onClick={() => increment(value._id, value.qty)}>
                      +
                    </button>
                  </div>
                  <div className="cart-item-total">₹{value.price * value.qty}</div>
                </div>
              )
          )}
      </div>
      <div className="cart-summary">
        <h4>Order Value: <span className="cart-summary-value">₹{orderValue}</span></h4>
        {user?.token ? (
          <button className="modern-btn" onClick={placeOrder}>Place Order</button>
        ) : (
          <button className="modern-btn" onClick={() => Navigate("/login")}>Login to Order</button>
        )}
      </div>
    </section>
  );
}
