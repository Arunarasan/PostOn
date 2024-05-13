import React from 'react'

const NewPost = ({handleSubmit,handleImage,postBody,postTitle,setPostBody,setPostTitle,postImage,setPostImage}) => {
  return (
    <div className='Newpost'>
      <h2>New Post</h2>
      <form className='newpostform' onSubmit={handleSubmit}>
        <label htmlFor='postTitle'>Title:</label>
        <input
          id='postTitle'
          type='text'
          required
          value={postTitle}
          placeholder='Title'
          onChange={(e)=>{ setPostTitle(e.target.value)}} />
        <label htmlFor='Postbody'>Post:</label>
        <textarea
          id='postBody'
          required
          placeholder='share with us'
          onChange={(e) =>{ setPostBody(e.target.value)}}/>
          <label htmlFor='uploadimg'>Image:</label>
          <input 
          type='file' 
          id='uploading' 
          onChange={handleImage}
          />
          <button type='submit'>Submit</button>  
      </form>
    </div>
  )
}

export default NewPost