import React, { useState, useContext,useEffect,useRef } from 'react'
import { ACTION_TYPES } from '../Reducer'
import { Context } from '../Provider'
import { auth,FBprovider,provider } from '../firebase.config'


import './Login.css'

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error,setError]=useState("")
  
  const { actionDispatch } = useContext(Context)
  
  const loadref = useRef()
  const formref=useRef()


  function login() {
    if (email.length !== 0 && password.length !== 0) {

      loadref.current.style.display = 'flex'
      formref.current.style.display='none'
      auth.signInWithEmailAndPassword(email, password)
        .then(userDetails => {
          actionDispatch(
            {
              type: ACTION_TYPES.LOGIN_USER,
              payload: {
                user:userDetails.user
              }
            }
          )
        }).catch(error => {
          loadref.current.style.display = 'none'
          formref.current.style.display='flex'
          setEmail("")
          setPassword("")
          setError(error.message)
          
      })
    } else {
      loadref.current.style.display = 'none'
      formref.current.style.display='flex'
      setError("Please fill out the fields!")
    }
  }


  function createLogin() {
    
    if (email.length !== 0 && password.length !== 0) {
      loadref.current.style.display = 'flex'
          formref.current.style.display='none'
      auth.createUserWithEmailAndPassword(email, password)
        .then(userDetails => {
          actionDispatch(
            {
              type: ACTION_TYPES.LOGIN_USER,
              payload: {
                user:userDetails.user
              }
            }
          )
          loadref.current.style.display = 'none'
          formref.current.style.display='flex'
        }).catch(error => {
          loadref.current.style.display = 'none'
          formref.current.style.display='flex'
          setEmail("")
          setPassword("")
          setError(error.message)
          
      })
    } else {
      loadref.current.style.display = 'none'
      formref.current.style.display='flex'
      setError("Please fill out the fields!")
    }
  }

  function loginWithFacebook() {
    
    auth.signInWithPopup(FBprovider)
      loadref.current.style.display = 'flex'
      formref.current.style.display='none'
      .then(result => {
        console.log(result)
        var user = result.user
        actionDispatch(
            {
              type: ACTION_TYPES.LOGIN_USER,
              payload: {
                user:user
              }
            }
        )
        loadref.current.style.display = 'none'
        formref.current.style.display='flex'
      }).catch(error => {
      loadref.current.style.display = 'none'
      formref.current.style.display='flex'
      setError("Login error please try again!")
      alert(error.message)
    })
  }

  function loginWithGoogle() {

    loadref.current.style.display = 'flex'
    formref.current.style.display='none'
    auth.signInWithPopup(provider)
      .then(result => {
        var user = result.user;
          actionDispatch(
            {
              type: ACTION_TYPES.LOGIN_USER,
              payload: {
                user:user
              }
            }
        )
        loadref.current.style.display = 'none'
        formref.current.style.display='flex'
      })
      .catch(error => {
        loadref.current.style.display = 'none'
        formref.current.style.display='flex'
        setError("Login error please try again!")
      alert(error.message)
    })

  }

  useEffect(() => {
    setTimeout(() => {
      setError("")
    }, 3000);
  },[error])
  

  return (
    <div className='login-page'>
      <div className="loader" ref={loadref} style={{ display: "none"}}>
        <div className="spiner">

        </div>
        <p>Let's get you loged in.</p>
      </div>
      <div className='login-form' ref={formref} style={{display:'flex'}}>


        <p className='error'>{error }</p>

        
        <input type="email" placeholder='Enter your email address' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder='Enter your password here' value={password} onChange={(e)=>setPassword(e.target.value)} />
        
        <div className="btns">
          <button onClick={login} className='login-btn'>Login</button>

          <button onClick={ createLogin} className='login-btn'>Create</button>
        </div>



        <h4>or</h4>
        <p>Login with Google</p>
        <div className="social-logins">
          <button className='google-btn' onClick={loginWithGoogle}><img src="https://media-exp1.licdn.com/dms/image/C4E0BAQH9nQwInYRERA/company-logo_200_200/0/1527121681584?e=2147483647&v=beta&t=QRLgJal7VWy8XnAfAFcZTRxYEBRPIKSZrZf6slL5JHQ" alt="" width='50' height='50' /></button>

          <button className='fb-btn' onClick={loginWithFacebook}>
            <img src="https://pnggrid.com/wp-content/uploads/2021/04/facebook-logo-1024x1024.png" alt="fb" width='50' height='50' />
          </button>
        </div>

        
      </div>
    </div>
  )
}

export default Login