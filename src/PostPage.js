import React from 'react'
import {  useParams } from 'react-router-dom';

const PostPage = ({posts,handleDelete,handlePath}) => {
  const{id}=useParams();
  const post = posts.find(post =>(post.id).toString() ===id);

  return (
    <div className='PostPage'>
        <article className="post">
        {post &&
        <>
           
            <img src={post.imag} alt="photoo" width="50px" height="70px" ></img> 
            <div className='pd'>
            <h2>{post.title}</h2>
            <p className="postbody">{
                post.body
            }</p><p className="postdt">{post.datetime}</p></div>
            <div className='btns'>
            <button className='donate' onClick={()=>handleDelete(post.id)}>Delete</button>
              <button className='donat' id='libtn' onClick={()=>handlePath(post.id)}>Edit</button></div>
            </>}{
              !post &&
              <>
                <h2>Posts not found</h2>
                <p>well,that's disappointing</p>
              </>
            }
        </article>
    </div>
  )
}

export default PostPage