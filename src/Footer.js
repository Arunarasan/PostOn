import React from "react";

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{
        textAlign: "center",
        background: "#1e1e1e",
        color: "#f2f2f2",
        padding: "15px 10px",
        fontSize: "0.9rem",
        marginTop: "40px",
        borderTop: "2px solid #333",
        lineHeight: "1.6",
      }}
    >
      <p>
        &copy; {new Date().getFullYear()} <strong>PostOn</strong> | All rights
        reserved
      </p>
      <p style={{ marginTop: "5px", fontSize: "0.85rem" }}>
        <a
          href="#terms"
          style={{ color: "#00bcd4", textDecoration: "none", marginRight: "10px" }}
        >
          Terms of Use
        </a>
        |
        <a
          href="#privacy"
          style={{ color: "#00bcd4", textDecoration: "none", marginLeft: "10px" }}
        >
          Privacy Policy
        </a>
      </p>
    </footer>
  );
};

export default Footer;
