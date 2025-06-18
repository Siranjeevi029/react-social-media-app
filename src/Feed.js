import React from 'react'
import Post from './Post'

const Feed = ({posts}) => {
  
  return (
     <>
        {
            posts.map((item) => {
              
                
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