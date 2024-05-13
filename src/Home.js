import React from 'react'
import Postfeed from './Postfeed'

const Home = ({posts,handleDelete,handlePath}) => {
  return (
    <main className='home'> 
    {posts.length?(  
        <Postfeed posts={posts} handleDelete={handleDelete} handlePath={handlePath}/>
    ):(
      <p style={{marginTop: "2rem"}}> no post display</p>
    )
        }
    </main>
  )
}

export default Home