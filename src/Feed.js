
import Post from './Post'

const Feed = ({posts}) => {
  
  return (
     <>
        {
            posts.map((item) => {
             
                // console.log(item.id);
                return (
                    
                   <Post
                     key={item.id}
                     post={item}
                   />
                )
            })
        }
    </>
  )
}

export default Feed