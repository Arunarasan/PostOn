import React from "react";
import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <div
      className="missing"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
        textAlign: "center",
        background: "#fafafa",
        color: "#333",
        padding: "20px",
      }}
    >
      <h2 style={{ fontSize: "2rem", color: "#d32f2f", marginBottom: "10px" }}>
        404 - Page Not Found
      </h2>
      <p style={{ fontSize: "1.1rem", color: "#555", marginBottom: "20px" }}>
        Well, that’s disappointing. 😔
      </p>
      <p style={{ fontSize: "1rem", color: "#666" }}>
        It looks like the page you’re looking for doesn’t exist.
      </p>

      <Link
        to="/"
        style={{
          marginTop: "25px",
          textDecoration: "none",
          backgroundColor: "#0d47a1",
          color: "#fff",
          padding: "10px 20px",
          borderRadius: "8px",
          fontWeight: "500",
          transition: "background-color 0.3s ease",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#1565c0")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#0d47a1")}
      >
        Go to Home
      </Link>
    </div>
  );
};

export default Missing;
