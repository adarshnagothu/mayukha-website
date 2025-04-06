import React from "react";
import { Link } from "react-router-dom";
import m1 from "./images/m1.jpeg";
import m2 from "./images/m2.jpeg";

function Header() {
  return (
    <>
      <h1 style={{ color: "black", marginBottom: "3px" }}>Mayukha Dhanvi Sri</h1>

      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          background: "blue",
          padding: "18px 100px",
        }}
      >
        {/* Left Side Links */}
        <div style={{ display: "flex", gap: "40px" }}>
          <Link style={linkStyle} to="/">Home</Link>
          <Link style={linkStyle} to="/birthdaycountdown">BirthdayCountdown</Link>
        </div>

        {/* Right Side Links */}
        <div style={{ display: "flex", gap: "40px" }}>
          <Link style={linkStyle} to="/cutemoments">Cute Moments</Link>
          <Link style={linkStyle} to="/memories">Memories</Link>
          <Link style={linkStyle} to="/firsttouch">First Touch</Link>
        </div>
      </nav>
    </>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "bold"
};

export default Header;
