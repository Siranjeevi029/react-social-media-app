import  { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import DataContext from './contexts/DataContext';

const PostPage = () => {

  const { posts, handleDelete,navigate,location } = useContext(DataContext);
  const { id } = useParams();

  const post = posts.find((item) => {
    return item.id.toString() === id;
  })

  return (
    <main className='PostPage'>
      <article className='post'>
        {
          post &&
          <>
            <h2>{post.title}</h2>
            <p className='postDate'>{post.datetime}</p>

            <p className='postBody'>{
              post.body
            }</p>
             <button className='editButton' onClick={() => {
             navigate(`${location.pathname}/editpost`);
            }}>Edit Post</button>
            <button className='deleteButton' onClick={() => {
              handleDelete(post.id)
            }}>Delete Post</button>
          </>
        }
        {
          !post &&
          <>
            <h2>Post Not Found</h2>
            <p>Well, that's disappointing.</p>
            <p><Link to='/'>
              Visit Our HomePage
            </Link></p>
          </>
        }
      </article>
    </main>
  )
}

export default PostPage