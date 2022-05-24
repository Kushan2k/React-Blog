
import './App.css';

import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import { useContext } from 'react';
import { Context } from './Componants/Provider'


//components
import Navbar from './Componants/Navbar/Navbar'
import New from './Componants/New/New'
import WelcomeScreen from './Componants/Welcome/WelcomeScreen';
import Footer from './Componants/Footer/Footer';
import Home from './Componants/Home/Home';
import Login from './Componants/Login/Login';


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
