import React, { useContext, useState } from 'react'
import './New.css'
import {db} from '../firebase.config'
import { Context } from '../Provider'
import {useNavigate} from 'react-router-dom'

function New() {

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  
  const { data } = useContext(Context)
  const navigation=useNavigate()
  

  function addpost() {
    db.collection('posts').add({
      title: title,
      content: content,
      date: new Date().toUTCString(),
      username: data.user.displayName? data.user.displayName:data.user.email,
      id: Math.random() * 100,
      url: data.user.photoURL ? data.user.photoURL : "https://www.seekpng.com/png/detail/143-1435868_headshot-silhouette-person-placeholder.png",
      
    }).then(() => {
      navigation('/')
    }).catch(error => {
      alert(error.message)
    })
    
  }
  return (
    <div className="new-post">
      <div className="post-from">

        <input type="text" className='inputs' value={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder='Enter title of your post' />
        <textarea value={content} onChange={(e)=>{setContent(e.target.value)}} cols="30" rows="10" className='inputs' placeholder='Enter your content'>
          
        </textarea>
        
        <button className='post-btn' onClick={addpost}>Post Now</button>
      </div>
    </div>
  )
}

export default New