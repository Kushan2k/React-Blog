import React,{useContext} from 'react'
import { Avatar } from '@material-ui/core'
import { Context } from './Provider'
import './Welcome.css'

function WelcomeScreen() {

  const { data } = useContext(Context)

  var pics = [
    "https://demovalley.com/wup/aolegal/wp-content/uploads/sites/2/2017/01/profile-holder.png",
    "https://entballarat.com.au/wp-content/uploads/2018/11/blank-female.jpg",
    "https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Images.png",
    "https://www.freeiconspng.com/thumbs/profile-icon-png/account-profile-user-icon--icon-search-engine-10.png"
  ]

  const index=Math.floor(Math.random()*pics.length)
  
  return (
    <div className="welcome">
      <Avatar className='pic' src={data.user.photoURL ? data.user.photoURL : pics[index]} />
      <p className='text'>Welcome, <span className='name'>{ data.user.displayName?data.user.displayName:data.user.email} !</span></p>
    </div>
  )
}

export default WelcomeScreen