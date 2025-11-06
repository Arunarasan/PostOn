import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const Edit = ({
  posts,
  handleImage, // this will be handleEditImage from App.js
  handleEdit,
  editBody,
  editTitle,
  editImage,
  setEditTitle,
  setEditBody,
  setEditImage,
}) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
      setEditImage(post.image || null);
    }
  }, [post, setEditBody, setEditImage, setEditTitle]);

  return (
    <div className="Newpost">
      {editTitle ? (
        <>
          <h2>Edit Post</h2>
          <form className="newpostform" onSubmit={(e) => e.preventDefault()}>
            {/* Title */}
            <label htmlFor="postTitle">Title:</label>
            <input
              id="postTitle"
              type="text"
              required
              placeholder="Enter post title..."
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />

            {/* Body */}
            <label htmlFor="postBody">Post:</label>
            <textarea
              id="postBody"
              required
              placeholder="Write your post content..."
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
            />

            {/* Image Upload */}
            <label htmlFor="uploadimg">Image:</label>
            <input
              type="file"
              id="uploadimg"
              accept="image/*"
              onChange={handleImage}
            />

            {/* Preview */}
            {editImage && (
              <div className="preview">
                <p>Image Preview:</p>
                <img
                  src={editImage}
                  alt="Post Preview"
                  style={{
                    width: "200px",
                    height: "auto",
                    borderRadius: "10px",
                    marginTop: "10px",
                  }}
                />
              </div>
            )}

            <button
              type="submit"
              onClick={() => handleEdit(post.id)}
              style={{
                marginTop: "15px",
                padding: "8px 15px",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Update Post
            </button>
          </form>
        </>
      ) : (
        <>
          <h2>Post Not Found</h2>
          <p>Well, that’s disappointing.</p>
        </>
      )}
    </div>
  );
};

export default Edit;
