import React from "react";
import smartphoneImg from "../public/images/1.png";
import cameraImg from "../public/images/2.png";
import micImg from "../public/images/3.png";
import accessoryImg from "../public/images/4.png";

export default function Home() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Affordable Gadgets for Creators</h1>
        <div className="hero-subtitle">
          Buy Certified Pre-Owned Devices at Best Prices
        </div>
        <button className="hero-cta">Shop Now</button>
      </div>
      <div className="hero-images">
        <img src={smartphoneImg} alt="Smartphone" className="hero-img" />
        <img src={cameraImg} alt="Camera" className="hero-img" />
        <img src={micImg} alt="Microphone" className="hero-img" />
        <img src={accessoryImg} alt="Accessory" className="hero-img" />
      </div>
      {/* Tech-inspired abstract icon shapes */}
      <span className="hero-icon" style={{top: '10%', left: '5%'}}>&#128247;</span> {/* Camera icon */}
      <span className="hero-icon" style={{bottom: '8%', right: '7%'}}>&#128241;</span> {/* Smartphone icon */}
      <span className="hero-icon" style={{top: '60%', left: '45%'}}>&#127908;</span> {/* Microphone icon */}
    </section>
  );
}
