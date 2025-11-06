import Post from "./Post";

const Postfeed = ({ posts, handleDelete, handlePath }) => {
  return (
    <section
      className="postfeed"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        padding: "10px 20px",
      }}
    >
      {posts.length ? (
        posts.map((post) => (
          <Post
            key={post.id}
            post={post}
            handleDelete={handleDelete}
            handlePath={handlePath}
          />
        ))
      ) : (
        <p
          style={{
            textAlign: "center",
            color: "#666",
            fontSize: "1.1rem",
            marginTop: "30px",
          }}
        >
          No posts to display.
        </p>
      )}
    </section>
  );
};

export default Postfeed;
