import { Link } from "react-router-dom"

const Post = ({post,handleDelete,handlePath}) =>{
    return(
        <article className="post">
        
           <img src={post.imag} alt="photoo" width="50px" height="70px" ></img>
           <div className="news">
           <h2 > <Link to={`post/${post.id}`} id="postt">
            {post.title}
            </Link></h2>
            <p className="postbody">{
                (post.body).length <=25? post.body:`${(post.body).slice(0,25)}....`
            }
            </p>
            <p className="postdt">{post.datetime}</p>
            </div>
            <div className='btns'>
            <button className='donate' onClick={()=>handleDelete(post.id)}>Delete</button>
            <button className='donat' id='libtn' onClick={()=>handlePath(post.id)}>Edit</button></div>
        </article>
    )
}
export default Post