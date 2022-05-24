import React, { useContext,useEffect } from 'react'
import Post from './Post'

import { db} from './firebase.config'

import {Context} from './Provider'
import { ACTION_TYPES } from './Reducer'

function Home() {

  db.collection('posts').onSnapshot(shot => {
    let posts=[]
    shot.forEach(doc => {
      posts.push({
        id: doc.id,
        data:doc.data()
      })

    })
    actionDispatch(
        {
          type: ACTION_TYPES.LOAD_POST,
          payload: {
            posts:posts,
          }
        }
      )
  })

  const { data, actionDispatch } = useContext(Context)
  useEffect(() => {

    let posts=[]
    const d = db.collection('posts').get();
    d.then(res => {
      
      res.forEach(doc => {
        
        posts.push({
          id: doc.id,
          data:doc.data()
        })
      })
      actionDispatch(
        {
          type: ACTION_TYPES.LOAD_POST,
          payload: {
            posts:posts,
          }
        }
      )
    })
    d.catch(error => {
      alert(error.message)
    })




  }, [actionDispatch] )
  

  return (
    <div className='home'>
      {
        data.posts.map(post => {
          return (
            <Post
              key={post.id}  
              title={post.data.title}
              content={post.data.content}
              username={post.data.username}
              url={post.data.url}
              date={post.data.date}
              pid={post.id}
              
            />
          )
        })
      }
      
    </div>
  )
}

export default Home