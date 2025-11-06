import React from "react";
import { useParams } from "react-router-dom";

const PostPage = ({ posts, handleDelete, handlePath }) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  if (!post) {
    return (
      <div className="PostPage" style={{ textAlign: "center", marginTop: "40px" }}>
        <h2>Post Not Found</h2>
        <p>Well, that’s disappointing 😔</p>
      </div>
    );
  }

  return (
    <div
      className="PostPage"
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "30px",
        padding: "20px",
      }}
    >
      <article
        className="post"
        style={{
          maxWidth: "700px",
          background: "#f8f8f8",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        {/* Post Image */}
        <img
          src={post.image || "https://via.placeholder.com/250x180?text=No+Image"}
          alt={post.title || "Post image"}
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "10px",
            marginBottom: "15px",
          }}
        />

        {/* Post Content */}
        <div className="pd" style={{ marginBottom: "15px" }}>
          <h2 style={{ color: "#333", marginBottom: "10px" }}>{post.title}</h2>
          <p className="postbody" style={{ color: "#555", lineHeight: "1.6" }}>
            {post.body}
          </p>
          <p
            className="postdt"
            style={{ color: "#888", fontSize: "0.9rem", marginTop: "8px" }}
          >
            {post.datetime}
          </p>
        </div>

        {/* Action Buttons */}
        <div
          className="btns"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          <button
            className="deleteBtn"
            onClick={() => {
              if (window.confirm("Are you sure you want to delete this post?")) {
                handleDelete(post.id);
              }
            }}
            style={{
              backgroundColor: "#e74c3c",
              color: "#fff",
              border: "none",
              padding: "8px 12px",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Delete
          </button>
          <button
            className="editBtn"
            onClick={() => handlePath(post.id)}
            style={{
              backgroundColor: "#3498db",
              color: "#fff",
              border: "none",
              padding: "8px 12px",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Edit
          </button>
        </div>
      </article>
    </div>
  );
};

export default PostPage;
