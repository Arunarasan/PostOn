import React, { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom'

const Login = () => {
    const [userName,setUserName]=useState('')
    const [password,setPassword]=useState('')
    const [errmsg,setErrmsg]=useState('')
    const navigate = useNavigate()
   useEffect(()=>
    {
        if(localStorage.getItem('auth')){
            navigate('/')
        }
    })
    useEffect(()=>
        {
            if(!localStorage.getItem('auth')){
             navigate('/login')
            }
        })


    const loginVerify = async (e) =>{
        e.preventDefault();
        if(userName.toLowerCase() === "poston1" && password === 'abcd12345'){
           navigate('/')
            localStorage.setItem('auth',true);
           
        }else if(userName.length > 15){
            setErrmsg("Invalid Username")
            navigate('/login')
        }else if(password.length < 8){
            setErrmsg("Invalid password")
            navigate('/login')
        }else{
            setErrmsg("Inorrect username or passord")
            navigate('/login')
        }

    }

  return (
    <div>
        <form  onSubmit={loginVerify}>
            <p>{errmsg}</p>
        <label htmlFor='username'>Username:</label>
        <input
          id='username'
          type='text'
          required
          value={userName}
          onChange={(e)=>{ setUserName(e.target.value)}}
          />
          <label htmlFor='password'>Password:</label>
        <input
          id='Password'
          type='password'
          required
          value={password}
          onChange={(e)=>{ setPassword(e.target.value)}}
          />
           <button type='submit'>Submit</button>  
           </form>
    </div>
  )
}

export default Login