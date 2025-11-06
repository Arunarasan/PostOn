import React from "react";

const NewPost = ({
  handleSubmit,
  handleImage,
  postBody,
  postTitle,
  setPostBody,
  setPostTitle,
  postImage,
}) => {
  return (
    <div className="Newpost">
      <h2>Create New Post</h2>

      <form className="newpostform" onSubmit={handleSubmit}>
        {/* Title */}
        <label htmlFor="postTitle">Title:</label>
        <input
          id="postTitle"
          type="text"
          required
          value={postTitle}
          placeholder="Enter your post title..."
          onChange={(e) => setPostTitle(e.target.value)}
        />

        {/* Body */}
        <label htmlFor="postBody">Post:</label>
        <textarea
          id="postBody"
          required
          value={postBody}
          placeholder="Share your thoughts..."
          onChange={(e) => setPostBody(e.target.value)}
        />

        {/* Image Upload */}
        <label htmlFor="uploadimg">Image:</label>
       <input
          type="file"
          id="uploadimg"
          onChange={handleImage}
          accept="image/*"
        />


        {/* Image Preview */}
        {postImage && (
          <div className="preview">
            <p>Image Preview:</p>
            <img
              src={postImage}
              alt="Preview"
              style={{
                width: "200px",
                height: "auto",
                borderRadius: "10px",
                marginTop: "10px",
              }}
            />
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            marginTop: "15px",
            padding: "8px 15px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewPost;
