import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Missing from './Missing'
import Home from './Home'
import Nav from './Nav'
import NewPost from './NewPost'
import PostPage from './PostPage'
import About from './About';
import { Route, Routes, Link, Outlet } from 'react-router-dom'
import Post from './Post'
import PostLayout from './PostLayout'


const Norm = () => {
  return (



    <ul>
      <li><Link to="" >Home</Link></li>
      <li><Link to="about" >About</Link></li>

      <li><Link to="/new/postpage" >PostPage</Link></li>

      <Outlet />
    </ul>








  )
}

export default Norm