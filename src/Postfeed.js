import Post from "./Post";

const Postfeed = ({posts,handleDelete,handlePath}) =>{
    return(
        <>
            {posts.map(post =>(
                <Post key={post.id} post={post} handleDelete={handleDelete} handlePath={handlePath}/>
            ))}
        </>
    )
} 
export default Postfeed