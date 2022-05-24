/* eslint-disable no-restricted-globals */
import { Avatar } from '@material-ui/core'
import React,{useContext} from 'react'
import { Context } from '../Provider'
import { db } from '../firebase.config'

import DeleteIcon from '@material-ui/icons/Delete';


import './Post.css'
function DelButton({ pid, delfunction }) {
  return (
    <div className="options">
      <button className='del-btn' onClick={()=>{delfunction(pid)}}>
        <DeleteIcon className='del-icon' />
      </button>
    </div>
  )
}


function Post({ title, content, date, username, url, pid }) {

  

  function deletePost() {
    let ans = confirm("Are you sure you want to delete this post?")

    if (ans) {
      db.collection('posts').doc(pid).delete()
      .then(() => {

      }).catch(error => {
        alert(error.message)
      })
    }
    
  }
  
  const { data } = useContext(Context)

  return (
    <div className='post'>
      <div className="post-head">
        <Avatar src={url}/>
        <p>{username}</p>

        
        
          
        

      </div>
      <div className="post-body">
        <h4 className='post-title'>{title}</h4>
        <p className='post-msg'>{content}</p>
        {
          (username === data.user.displayName || username === data.user.email) ? <DelButton pid={pid} delfunction={ deletePost}/>:""
        }
        <small className='post-date'>{date}</small>

      </div>
    </div>
  )
}




export default Post