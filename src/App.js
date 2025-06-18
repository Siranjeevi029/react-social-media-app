import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Missing from './Missing'
import Home from './Home'
import Nav from './Nav'
import NewPost from './NewPost'
import PostPage from './PostPage'
import About from './About';
import { Route, Routes, Link, Navigate, useNavigate, useLocation } from 'react-router-dom'
import Post from './Post'
import PostLayout from './PostLayout'
import api from './api/posts';
import EditPost from './EditPost'
import useWindowSize from './hooks/useWindowSize'
import useAxiosFetch from './hooks/useAxiosFetch'
import { DataProvider } from './contexts/DataContext'

const App = () => {
  
 

 

  return (
    <div className='App'>
      <DataProvider>
         <Header/>
      <Nav 

      />


      <Routes>
        <Route path='/' element={
          <Home
            
          />
        }></Route>
        <Route path='/post'>
          <Route index element={<NewPost
            
          />}>
          </Route>
          <Route path=':id' >
            <Route index element={<PostPage
           
          />}>
            

            </Route>
            <Route path='editpost' element={
              
              <EditPost
               
             />}>
            </Route>
          </Route>
        </Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='*' element={<Missing />}></Route>

      </Routes>
      
      <Footer />
      </DataProvider>
    </div>
  )
}

export default App