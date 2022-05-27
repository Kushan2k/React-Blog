import React, { useContext,useEffect, useRef } from 'react'
import Post from '../Post/Post'

import { db} from '../firebase.config'

import {Context} from '../Provider'
import { ACTION_TYPES } from '../Reducer'

import './Home.css'

function Home() {

  
  const postref=useRef()

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

    // postref.current.style.display='none'
    // loadref.current.style.display = 'flex'
    

    setTimeout(() => {
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
      // loadref.current.style.display = 'none'
      // postref.current.style.display='flex'
      

      
    }, 1000);




  }, [actionDispatch] )
  

  return (
    <div className='home'>
      {/* <div className="loader" ref={loadref} style={{ display: "flex",marginTop:10}}>
        <div className="spiner">

        </div>
        <p>Loading...</p>
      </div> */}
      <div className="posts" ref={postref} style={{display:'flex'}}>
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
      
    </div>
  )
}

export default Home