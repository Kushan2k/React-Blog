import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div>Home
      <Link to='/login'>Login</Link>
      <Link to='/profile'>Profile</Link>
    </div>
  )
}

export default Home