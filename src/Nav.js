import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({search,setSearch}) => {
  return (
    <nav className='nav'>
      <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor='search'> Search</label>
        <input type='text' id='search' placeholder='Search'
        value={search}
        onChange={(e)=>setSearch(e.target.value)}/>
      </form>
      <ul id='moves'>
        <li ><Link to="/" id='home'>Home</Link></li>
        <li><Link to="/post"  id='post'>Post</Link></li>
        <li><Link to="/about" id='about'>About</Link></li>
      </ul>

    </nav>
  )
}

export default Nav