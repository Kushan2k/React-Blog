import React, { useState, useContext } from 'react'
import { ACTION_TYPES } from './Reducer'
import {Context} from './Provider'

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error,setError]=useState("")
  
  const {data,actionDispatch}=useContext(Context)
  return (

    
    

    <div className='login-page'>
      <div className='login-form'>

        
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        
        <button onClick={() => {
          actionDispatch({type:ACTION_TYPES.LOGIN_USER,payload:{user:true}})
        }}>Login</button>

        
      </div>
    </div>
  )
}

export default Login