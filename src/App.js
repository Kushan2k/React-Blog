
import './App.css';

import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './Componants/Home';
import Login from './Componants/Login';
import { useContext } from 'react';
import { Context } from './Componants/Provider'
import Navbar from './Componants/Navbar'
import New from './Componants/New'
import WelcomeScreen from './Componants/WelcomeScreen';
import Footer from './Componants/Footer';


function App() {

  const { data } = useContext(Context)
  const user=data.user
  
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
                <Route path="/new"   element={ <New/>}/>
                
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
