import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Edit = ({posts,handleImage,handleEdit,editBody,editTitle,setEditTitle,setEditBody,setEditImage}) => {
    const {id} =useParams();
    const post = posts.find(post => (post.id).toString() === id)

    useEffect(()=>
    {
        if(post){
            setEditTitle(post.title)
            setEditImage(post.imag)
            setEditBody(post.body)
        }
    },[post,setEditBody,setEditImage,setEditTitle])

  return (
    <div className='Newpost'>
      {editTitle &&
      <>
      <h2>Edit Post</h2>
      <form className='newpostform' onSubmit={(e)=> e.preventDefault()}>
        <label htmlFor='postTitle'>Title:</label>
        <input
          id='postTitle'
          type='text'
          required
          value={editTitle}
          onChange={(e)=>{ setEditTitle(e.target.value)}} />
        <label htmlFor='Postbody'>Post:</label>
        <textarea
          id='postBody'
          required
          value={editBody}
          onChange={(e) =>{ setEditBody(e.target.value)}}/>
          <label htmlFor='uploadimg'>Image:</label>
          <input 
          type='file' 
          id='uploadimg' 
          onChange={handleImage}
          />
          <button type='submit' onClick={()=>handleEdit(post.id)}>Submit</button>  
      </form></>}{
              !editTitle &&
              <>
                <h2>Posts not found</h2>
                <p>well,that's disappointing</p>
              </>
            }
    </div>
  )
}

export default Edit