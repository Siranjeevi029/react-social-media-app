import { createContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import api from '../api/posts'
import useAxiosFetch from '../hooks/useAxiosFetch'
import useWindowSize from '../hooks/useWindowSize'


const DataContext = createContext({});

export const DataProvider = ({children})=>{

     // useEffect(() => {
    
  //   const fetchPosts = async () => {
  //     try{
  //       const data = await api.get('/posts');
  //     setPosts(data.data);
     
  //     }
  //     catch(error){
  //       if(error.response){
  //         console.log(error.response.status);
  //         console.log(error.response.data);
  //         console.log(error.response.headers);
  //       }
  //       else console.log(`error occured ${error.message}`);
  //     }
  //   }
  //   fetchPosts();
    
  // }, []);

  const {data,fetchError,isLoading} = useAxiosFetch('https://sample-spring-7j2j.onrender.com/posts');
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
const [editTitle,setEditTitle] = useState('');
const [editBody,setEditBody] = useState('');
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');

  
  useEffect(()=>{
    setPosts(data);
  },[data]);



  useEffect(() => {
    
    const value = posts.filter((post) => {
      return post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    });

    value.sort((a,b)=>b.priority-a.priority);
    setSearchResults(value);
    

  }, [search, posts]);

  const navigate = useNavigate();
  const location = useLocation();
  const {width} = useWindowSize();

  async function handleSubmit(e) {
    e.preventDefault();
    const datetime = calcTime();
    
    
   

    let unique = 0;

    posts.forEach((post)=>{
      unique = Math.max(unique,post.priority);
    });


    const newPost = {
      
      datetime,
      title: postTitle,
      body: postBody,
      priority : unique+1
    }
   
    
     try{
      const val = await api.post('/posts',newPost);
     
     
      
      const alteredPosts = [...posts, val.data]
      setPosts(alteredPosts);
      setPostBody('');
    setPostTitle('');
    navigate('/');
    
      }
    
    catch(error){
        if(error.response){
          console.log(error.response.status);
          console.log(error.response.data);
          console.log(error.response.headers);
        }
        else console.log(`error occured ${error.message}`);
      }
    
  }

  

  function calcTime() {
    const now = new Date();

    const formatted = now.toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
    return formatted.replace("at", "");

  }


 async function  handleDelete(id) { 
   try{
    
    await api.delete(`/posts/${id}`);
     const newPosts = posts.filter((p) => {

      return p.id !== id
    });
     setPosts(newPosts);
     navigate('/');
   }
   catch(error){
        if(error.response){
          console.log(error.response.status);
          console.log(error.response.data);
          console.log(error.response.headers);
        }
        else console.log(`error occured ${error.message}`);
   }
  }

  async function handleEdit(post){
   
    let unique = 0;

    posts.forEach((post)=>{
      unique = Math.max(unique,post.priority);
    });
     
    const editedPost={
      id: post.id,
      datetime: calcTime(),
      title: editTitle,
      body:editBody,
      priority : unique+1
    }
    
    try{
    
   await api.put(`/posts/${editedPost.id}`,editedPost);
   setEditTitle('');
   setEditBody('');
   navigate('/');
    
   const wposts= posts.map((post)=>{
       return post.id===editedPost.id ? editedPost : post;
     })
     
     setPosts(wposts);
     
     navigate('/');
   }
   catch(error){
        if(error.response){
          console.log(error.response.status);
          console.log(error.response.data);
          console.log(error.response.headers);
        }
        else console.log(`error occured ${error.message}`);
   }
  }

    return (
       < DataContext.Provider value={{
        width,title:'Social Media App',search,setSearch,fetchError,isLoading,
        editTitle,setEditTitle,searchResults,posts,setPostBody,
        postBody,setPostTitle,handleSubmit,postTitle,handleDelete,
        navigate,location,handleEdit,editBody,setEditBody,


       }}>
       {children}
       </DataContext.Provider>
    )
}
export default DataContext