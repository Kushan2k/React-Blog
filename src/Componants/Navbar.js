import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { Context } from './Provider'
import {auth} from './firebase.config'
import { ACTION_TYPES } from './Reducer'

function Navbar() {

  const { data,actionDispatch } = useContext(Context)
  function logout() {
    auth.signOut()
      .then(sus => {
        actionDispatch({
          type:ACTION_TYPES.LOGOUT_USER
        })
        
      }).catch(error => {
      alert(error.message)
    })
  }

  return (
    <div className="navbar">
      <ul className="links">
        <li><Link to="/" className='link' >Home</Link></li>
        <li><Link to="/new" className='link'   >New</Link></li>
        <li>
          {
            !data.user ? (
              <Link to="/login" className='link'>Login</Link>
            ) : (
                <button className='logout-btn' onClick={logout}>Logout</button>
            )
          }
        </li>
      </ul>
    </div>
  )
}

export default Navbar