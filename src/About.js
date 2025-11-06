import React from "react";

const About = () => {
  return (
    <section
      className="about"
      style={{
        maxWidth: "800px",
        margin: "50px auto",
        padding: "30px",
        background: "#f9f9f9",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        lineHeight: "1.6",
        textAlign: "center",
        color: "#333",
      }}
    >
      <h2 style={{ color: "#0d47a1", marginBottom: "15px" }}>About PostOn</h2>
      <p>
        <strong>PostOn</strong> is a simple social media platform built to help
        people stay connected in a fast-moving world.  
      </p>
      <p>
        Even when life gets busy, you can easily share thoughts, express ideas,
        and build meaningful relationships with others — all in one place.
      </p>
      <p style={{ marginTop: "20px", color: "#555" }}>
        We believe that communication should be easy, positive, and creative. ✨
      </p>
    </section>
  );
};

export default About;
