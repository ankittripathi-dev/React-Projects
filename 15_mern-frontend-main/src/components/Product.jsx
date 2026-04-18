import React, { useEffect, useState, useContext, useRef } from "react";
import axios from "axios";
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";
import "./Product.css";

export default function Product() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [products, setProducts] = useState([]);
  const [error, setError] = useState();
  const { user, cart, setCart } = useContext(AppContext);
  const productGridRef = useRef(null);
  const navigate = useNavigate();
  const fetchProducts = async () => {
    try {
      const url = `${API_URL}/api/products/all`;
      const result = await axios.get(url);
      setProducts(result.data.products);
    } catch (err) {
      console.log(err);
      setError("Something went wrong");
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const addToCart = (product) => {
    const found = cart.find((item) => item._id === product._id);
    if (!found) {
      product.qty = 1;
      setCart([...cart, product]);
    }
  };

  const handleBrowseProducts = () => {
    if (productGridRef.current) {
      productGridRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="product-hero-section center-hero">
        <div className="product-hero-content center-hero-content">
          <h1 className="product-hero-title">Find the Best Pre-Owned Gadgets</h1>
          <div className="product-hero-subtitle">
            Discover certified second-hand smartphones, cameras, mics, and accessories for creators—affordable, reliable, and ready for your next project.
          </div>
          <button className="hero-btn hero-btn-primary" onClick={handleBrowseProducts}>Browse Products</button>
        </div>
      </section>
      <h2 className="section-title">Shop Second-Hand Gadgets</h2>
      {error && <div className="error-message">{error}</div>}
      <div className="product-grid" ref={productGridRef}>
        {products &&
          products.map((product) => (
            <div className="product-card" key={product._id}>
              <img src={product.imgUrl} alt={product.productName} className="product-img" />
              <h3 className="product-name">{product.productName}</h3>
              <p className="product-desc">{product.description}</p>
              <div className="product-price">₹{product.price}</div>
              <button className="modern-btn" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))}
      </div>
    </>
  );
}
