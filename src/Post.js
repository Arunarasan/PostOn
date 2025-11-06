import { Link } from "react-router-dom";

const Post = ({ post, handleDelete, handlePath }) => {
  const imageSrc =
    post.image && post.image.startsWith("data:image")
      ? post.image
      : "https://via.placeholder.com/400x250?text=No+Image";

  return (
    <article
      className="post"
      style={{
        background: "#ffffff",
        borderRadius: "16px",
        padding: "20px",
        marginBottom: "25px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
        transition: "transform 0.2s ease, box-shadow 0.3s ease",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 8px 18px rgba(21, 101, 192, 0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.15)";
      }}
    >
      {/* ====== Image Section ====== */}
      <div
        style={{
          width: "100%",
          marginBottom: "15px",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <img
          src={imageSrc}
          alt={post.title || "Post image"}
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "300px",
            objectFit: "cover",
            display: "block",
            borderRadius: "12px",
            border: "2px solid #1976d2",
            backgroundColor: "#e3f2fd",
          }}
        />
      </div>

      {/* ====== Content Section ====== */}
      <div className="news" style={{ flexGrow: 1 }}>
        <h2 style={{ marginBottom: "8px" }}>
          <Link
            to={`/post/${post.id}`}
            style={{
              textDecoration: "none",
              color: "#0d47a1",
              fontWeight: "600",
              fontSize: "1.4rem",
            }}
          >
            {post.title}
          </Link>
        </h2>

        <p
          className="postbody"
          style={{
            fontSize: "1rem",
            color: "#444",
            lineHeight: "1.6",
            marginBottom: "12px",
          }}
        >
          {post.body.length <= 120
            ? post.body
            : `${post.body.slice(0, 120)}...`}
        </p>

        <p
          className="postdt"
          style={{
            fontSize: "0.85rem",
            color: "#777",
            marginBottom: "16px",
            fontStyle: "italic",
          }}
        >
          {post.datetime}
        </p>

        {/* ====== Buttons ====== */}
        <div
          className="btns"
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          <button
            onClick={() => handleDelete(post.id)}
            style={{
              backgroundColor: "#e74c3c",
              color: "#fff",
              border: "none",
              padding: "8px 14px",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "500",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#c0392b")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#e74c3c")}
          >
            Delete
          </button>

          <button
            onClick={() => handlePath(post.id)}
            style={{
              backgroundColor: "#1565c0",
              color: "#fff",
              border: "none",
              padding: "8px 14px",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "500",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#1976d2")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#1565c0")}
          >
            Edit
          </button>
        </div>
      </div>
    </article>
  );
};

export default Post;
