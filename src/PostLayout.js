import React from 'react'
import { Outlet,Link } from 'react-router-dom'

const PostLayout = () => {
  return (
    
    <ul>
       
    <li>
      <Link to='1'>Post 1</Link>
    </li>
    <li>
       <Link to='2'>Post 2</Link>
    </li>
    <li><Link to='3'>Post 3</Link></li>
    <li><Link to='newpost'>NewPost</Link></li>
    <Outlet/>
   </ul>
   
  )
}

export default PostLayout