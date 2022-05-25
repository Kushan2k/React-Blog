import React, { useEffect, useRef, useState } from 'react'

import { useParams,useNavigate } from 'react-router-dom'
import { db } from '../firebase.config'
import "./Edit.css"

function Edit() {

  const { pid } = useParams()
  const navigation = useNavigate()
  
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  
  const loadref = useRef()
  const formref=useRef()
  
  

  
  useEffect(() => {
    db.collection('posts').doc(pid).get()
      .then(res => {
        setTitle(res.data().title)
        setContent(res.data().content)

      }).catch(error => {
        console.log(error.message)
        navigation('/')
        
      })
  },[navigation,pid])
  
  function updatepost() {

    loadref.current.style.display = 'flex'
    formref.current.style.display = 'none'
    db.collection('posts').doc(pid).update({
      title: title,
      content:content
    })
      .then(() => {
        loadref.current.style.display = 'none'
        formref.current.style.display = 'flex'
        navigation('/')
      })
      .catch((error) => {
        loadref.current.style.display = 'none'
        formref.current.style.display='flex'
      alert(error.message)
    })
    
    
  }
  
    // console.log(title)
    // console.log(content)

  return (
    <div className="edit-page">
      <div className="loader" ref={loadref} style={{ display: "none"}}>
        <div className="spiner">

        </div>
        <p>Updating...</p>
      </div>
      <div className="post-from" ref={formref} style={{display:'flex'}}>

        <input type="text" className='inputs' value={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder='Enter title of your post' />
        <textarea value={content} onChange={(e)=>{setContent(e.target.value)}} cols="30" rows="10" className='inputs' placeholder='Enter your content'>
          
        </textarea>
        
        <button className='post-btn' onClick={updatepost}>Update Now</button>
      </div>


    </div>
  )
}

export default Edit