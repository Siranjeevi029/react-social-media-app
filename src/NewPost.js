import  { useContext } from 'react'

import DataContext from './contexts/DataContext';

const NewPost = () => {

  const {handleSubmit,postBody,postTitle,setPostBody,
  setPostTitle
} = useContext(DataContext);
  
  return (
    <main className='NewPost'>
      <h2>NewPost</h2>
      <form className='newPostForm' onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Title:</label>
        <input 
        type="text"
        id='postTitle'
        required
        value={postTitle}
        onChange={(e)=>{
           setPostTitle(e.target.value)
        }}
         />
         <label htmlFor="postBody">Post:</label>
         <textarea 
           id='postBody'        
           required
           value={postBody} 
           onChange={(e)=>{
             setPostBody(e.target.value)
           }}
           />
           <button
             type='submit'
           >Submit</button>
      </form>

    </main>
  )
}

export default NewPost