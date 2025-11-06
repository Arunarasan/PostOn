import React from "react";

const Header = ({ title }) => {
  return (
    <header
      className="header"
      style={{
        background: "#0d47a1", // deep blue tone
        color: "#fff",
        padding: "20px 0",
        textAlign: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
      }}
    >
      <h1
        style={{
          margin: 0,
          fontSize: "2rem",
          letterSpacing: "1px",
          fontWeight: "600",
          textTransform: "uppercase",
        }}
      >
        {title}
      </h1>
    </header>
  );
};

export default Header;
