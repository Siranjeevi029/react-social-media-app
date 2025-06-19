import  { useContext } from 'react'
import Feed from './Feed'
import DataContext from './contexts/DataContext';

const Home = () => {

  const { searchResults, fetchError, isLoading } = useContext(DataContext);

  const posts = searchResults;
 

  return (

    <main className='Home'>

      {

        isLoading && <p className='statusMsg'>Loading posts...</p>
      }
      {
        !isLoading && fetchError && <p className='statusMsg' style={
          { color: 'red' }
        }>{fetchError}</p>
      }
      {!isLoading && !fetchError &&
        (posts.length ? <Feed
          posts={posts} /> : <p
            className='statusMsg'
          >No Posts to Display</p>)
      }

    </main>

  )
}

export default Home