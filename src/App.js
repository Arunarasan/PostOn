import { Route, Routes, useNavigate } from "react-router-dom";
import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Missing from "./Missing";
import Nav from "./Nav";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import api from "./api/posts";
import Edit from "./Edit";

function App() {
  const [posts,setPosts] = useState([])
  const [search, setSearch] =useState('')
  const [searchResults, setSearchResults] =useState([])
  const [postTitle,setPostTitle] =useState('')
  const [editBody,setEditBody]=useState('')
  const [editTitle,setEditTitle] =useState('')
  const [postBody,setPostBody]=useState('')
  const [postImage,setPostImage]=useState(null)
  const [editImage,setEditImage]=useState(null)
  const navigate = useNavigate()

  useEffect(()=>{
  const fetcPosts = async () => {
    try{
      const response = await api.get('/posts')
      setPosts(response.data)
    }catch(err){
      if(err.response){
        console.log(err.response.data)
        console.log(err.response.status)
        console.log(err.response.headers)
      }else{
        console.log(`Error: ${err.message}`)
      }
    }
  }
  fetcPosts()
},[])

  useEffect(() =>{
    const filteredResults = posts.filter((post)=>((post.body).toLowerCase()).includes(search.toLowerCase()) || ((post.title).toLowerCase().includes(search.toLowerCase()))
  )
  setSearchResults(filteredResults.reverse())
  },[posts,search])

  const handleImage = async (e) =>
{
  e.preventDefault();
  const file = e.target.files[0];
  const reader = new FileReader();

  reader.onloadend = ()=>{
    const base64String = reader.result;
    setPostImage(base64String)
  }

  if(file){
    reader.readAsDataURL(file);
  }
}
  
  const handleSubmit = async (e) =>{
    e.preventDefault();
    const id = posts.length? posts[posts.length-1].id+1:1;
    const datetime= format(new Date(),'MMMM dd, yyyy pp')
    const newPost = {id,title:postTitle,datetime,body:postBody,imag:postImage}
    const response = await api.post("/posts",newPost)
    const allPosts = [...posts, response.data]
    setPosts(allPosts)
    setPostTitle('')
    setPostBody('')
    setPostImage('')
    navigate('/')
  }

  const handlePath = async (id) =>{
    navigate(`/edit/${id}`)
  }

  const handleEdit = async (id) =>{
    const datetime= format(new Date(),'MMMM dd, yyyy pp')
    const updatedPost = {id,title:editTitle,datetime,body:editBody,imag:postImage}
    try{
      const response = await api.patch(`/posts/${id}`,updatedPost)
      setPosts(posts.map(post => post.id === id ? {...response.data}:post))
      setEditTitle('')
      setEditBody('')
      setPostImage('')
      navigate('/')
    }catch(err){
      console.log(`Error: ${err.message}`)
    }
  }
  
  const handleDelete = async (id) =>{
    try{
      await api.delete(`posts/${id}`)
    const postlists = posts.filter(post => post.id !==id)
    setPosts(postlists)
    navigate('/')}
    catch(err){
      console.log(`Error: ${err.message}`)
    }
  }

  return (
    
    <div className="App">
    
      <Header title={"PostOn"} />
      <Nav
        search={search}
        setSearch={setSearch}
      />
      <Routes>
      <Route path="/" element={<Home posts ={searchResults} handleDelete={handleDelete} handlePath={handlePath}/>}/>
      <Route path="post"> 
      <Route index element={<NewPost 
        handleSubmit ={handleSubmit}
        handleImage ={handleImage}
        postBody={postBody}
        postTitle={postTitle}
        setPostBody={setPostBody}
        setPostTitle={setPostTitle}
        postImage={postImage}
        setPostImage={setPostImage}
      />}/>
        <Route path=":id" element={<PostPage 
        posts={posts} handleDelete={handleDelete} handlePath={handlePath}/>} />
      </Route>
      <Route path="/edit/:id" element={<Edit 
        posts={posts} 
        handleEdit={handleEdit}
        handleImage={handleImage}
        editBody={editBody}
        editTitle={editTitle}
        editImage={editImage}
        setEditTitle={setEditTitle}
        setEditBody={setEditBody}
        setEditImage={setEditImage}
        />} />
      <Route path="about" element={<About />}/>
      <Route path="*" element={<Missing />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
