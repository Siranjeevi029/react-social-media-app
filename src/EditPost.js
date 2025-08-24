import  { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import DataContext from './contexts/DataContext';
const EditPost = () => {

  const {
  posts,handleEdit,editBody,setEditBody,editTitle,setEditTitle
} = useContext(DataContext)
  const {id} = useParams();
 

  const post = posts.find(post=>post.id===id);
  
 
  useEffect(()=>{
 
    if(post) 
     {
       setEditTitle(post.title)
    setEditBody(post.body);
     }
  },[post,setEditTitle, setEditBody]);



  return (
    <main className='NewPost'>
      
          <h2>Edit Post</h2>
          <form className='newPostForm' onSubmit={
            (e)=>
             {
              e.preventDefault();
              handleEdit(post)
             

             }
              
          }>
            
            <label htmlFor="postTitle">Title:</label>
            <input 
            type="text"
            id='postTitle'
            required
            value={editTitle}
            onChange={(e)=>setEditTitle(e.target.value)}
            />
             <label htmlFor="postBody">Body:</label>
            <textarea 
            type="text"
            id='postBody'
            required
            value={editBody}
            onChange={(e)=>setEditBody(e.target.value)}
            />
            <button type='submit'>Submit</button>
          </form>
       
    </main>
  )
}

export default EditPost