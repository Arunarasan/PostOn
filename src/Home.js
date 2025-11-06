import React from "react";
import Postfeed from "./Postfeed";

const Home = ({ posts, handleDelete, handlePath }) => {
  return (
    <main
      className="home"
      style={{
        minHeight: "85vh",
        padding: "30px 20px",
        background: "#e3f2fd", // light blue background (soft)
        display: "flex",
        justifyContent: "center",
      }}
    >
      {posts.length ? (
        <div
          style={{
            width: "100%",
            maxWidth: "900px", // ⬅️ limit feed width for balance
          }}
        >
          <Postfeed
            posts={posts}
            handleDelete={handleDelete}
            handlePath={handlePath}
          />
        </div>
      ) : (
        <div
          style={{
            textAlign: "center",
            marginTop: "3rem",
            color: "#555",
            fontSize: "1.1rem",
          }}
        >
          <p>No posts to display 📰</p>
          <p style={{ marginTop: "10px", fontSize: "0.95rem" }}>
            Start by creating a new post from the “New Post” page.
          </p>
        </div>
      )}
    </main>
  );
};

export default Home;
