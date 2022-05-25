
import './App.css';

import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import { useContext, useEffect } from 'react';
import { Context } from './Componants/Provider'


//components
import Navbar from './Componants/Navbar/Navbar'
import New from './Componants/New/New'
import WelcomeScreen from './Componants/Welcome/WelcomeScreen';
import Footer from './Componants/Footer/Footer';
import Home from './Componants/Home/Home';
import Login from './Componants/Login/Login';
import Edit from './Componants/Edit/Edit';
import { auth } from './Componants/firebase.config';
import { ACTION_TYPES } from './Componants/Reducer';


function App() {

  const { data,actionDispatch } = useContext(Context)
  let user = data.user
  

  // useEffect(() => {
  //   if (auth.currentUser) {
  //     actionDispatch({
  //       type: ACTION_TYPES.LOGIN_USER,
  //       payload: {
  //         user:auth.currentUser
  //       }
  //     })
  //   }
  // },[])
  
  return (
    <Router>
      <div className="App">
        

        {
          user ? (
              
            <>
              <Navbar />
              <WelcomeScreen/>
              <Routes>
                
                <Route path="/"   element={<Home/>} />
                <Route path="/new" element={<New />} />
                <Route path='/post/:pid' element={<Edit/>}/>
                
              </Routes>
            </>
            
          ):<Login/>
        }
        
        <Footer/>
          
      </div>
    </Router>
  );
}

export default App;
