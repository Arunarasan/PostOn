import { Route, Routes, useNavigate } from "react-router-dom";
import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Missing from "./Missing";
import Nav from "./Nav";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import Edit from "./Edit";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import api from "./api/posts";

function App() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // New Post
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [postImage, setPostImage] = useState(null);

  // Edit Post
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");
  const [editImage, setEditImage] = useState(null);

  const navigate = useNavigate();

  // Fetch posts initially
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("/posts");
        setPosts(response.data);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };
    fetchPosts();
  }, []);

  // Search filtering
  useEffect(() => {
    const filteredResults = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults([...filteredResults].reverse());
  }, [posts, search]);

  // Common image handler (used for new/edit)
  const handleImageChange = (e, setter) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setter(reader.result);
    reader.readAsDataURL(file);
  };

  const handleNewImage = (e) => handleImageChange(e, setPostImage);
  const handleEditImage = (e) => handleImageChange(e, setEditImage);

  // Create Post
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!postTitle.trim() || !postBody.trim()) {
      alert("Title and Body are required!");
      return;
    }

    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const newPost = {
      id,
      title: postTitle,
      datetime,
      body: postBody,
      image: postImage,
    };

    try {
      const response = await api.post("/posts", newPost);
      const allPosts = [...posts, response.data];
      setPosts(allPosts);
      setPostTitle("");
      setPostBody("");
      setPostImage(null);
      navigate("/");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  // Navigate to edit page
  const handlePath = async (id) => {
    navigate(`/edit/${id}`);
  };

  // Edit Post
  const handleEdit = async (id) => {
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const updatedPost = {
      id,
      title: editTitle,
      datetime,
      body: editBody,
      image: editImage,
    };

    try {
      const response = await api.patch(`/posts/${id}`, updatedPost);
      setPosts(posts.map((post) => (post.id === id ? response.data : post)));
      setEditTitle("");
      setEditBody("");
      setEditImage(null);
      navigate("/");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  // Delete Post
  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`);
      const postList = posts.filter((post) => post.id !== id);
      setPosts(postList);
      navigate("/");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  return (
    <div className="App">
      <Header title={"PostOn"} />
      <Nav search={search} setSearch={setSearch} />

      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={
            <Home
              posts={searchResults}
              handleDelete={handleDelete}
              handlePath={handlePath}
            />
          }
        />

        {/* New Post */}
        <Route
          path="post"
          element={
            <NewPost
              handleSubmit={handleSubmit}
              handleImage={handleNewImage}
              postBody={postBody}
              postTitle={postTitle}
              setPostBody={setPostBody}
              setPostTitle={setPostTitle}
              postImage={postImage}
              setPostImage={setPostImage}
            />
          }
        />

        {/* Single Post Page */}
        <Route
          path="post/:id"
          element={
            <PostPage
              posts={posts}
              handleDelete={handleDelete}
              handlePath={handlePath}
            />
          }
        />

        {/* Edit Page */}
        <Route
          path="/edit/:id"
          element={
            <Edit
              posts={posts}
              handleEdit={handleEdit}
              handleImage={handleEditImage}
              editBody={editBody}
              editTitle={editTitle}
              editImage={editImage}
              setEditTitle={setEditTitle}
              setEditBody={setEditBody}
              setEditImage={setEditImage}
            />
          }
        />

        {/* About & Missing */}
        <Route path="about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
