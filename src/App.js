
import './App.css';

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './Componants/Home';
import Profile from './Componants/Profile';
import Login from './Componants/Login';
import { useContext } from 'react';
import {Context} from './Componants/Provider'


function App() {

  const { data, actionDispatch } = useContext(Context)
  const user=data.user
  
  return (
    <div className="App">

      {
        user ? (
          <Router>
            <Switch>
              
              <Route path={'/profile'} exact component={ Profile} />
              <Route path={'/login'} exact={true} component={Login} />
              <Route path={'/'} exact component={ Home} />
            </Switch>
          </Router>
        ):<Login/>
      }

      
      
      
      
      
    </div>
  );
}

export default App;
