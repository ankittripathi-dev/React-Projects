import React from 'react'
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>ReBoxed</h3>
          <p className="footer-desc">Affordable, certified pre-owned gadgets for creators. Buy and sell smartphones, cameras, mics, and accessories with confidence.</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/cart">MyCart</a></li>
            <li><a href="/order">MyOrder</a></li>
            <li><a href="/profile">Profile</a></li>
            <li><a href="/admin">Admin</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} ReBoxed. All rights reserved.
        <br />
        <span className="footer-dev">Developer: <a href="https://adiportfolio-orcin.vercel.app/" target="_blank" rel="noopener noreferrer">Aditya Gupta</a></span>
      </div>
    </footer>
  )
}
