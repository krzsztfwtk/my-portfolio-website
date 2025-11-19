import React from "react";

const Header = () => {
  return (
    <div
      style={{
        fontSize: "1.2rem",
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        background: "rgba(255,255,255,0.9)",
        padding: "1rem 5vw",
        top: 0,
        width: "90vw",
        zIndex: 10,
      }}
    >
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#portfolio">Projects</a>
      <a href="#footer">Contact</a>
    </div>
  );
};

export default Header;
