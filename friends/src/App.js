import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './Components/Login';


function App() {
  return (
    <Router>
     <div className="App">
      <h1>Auth friends App</h1>
       <ul>
         <li>
           <Link to="/login">Login</Link>
         </li>
       </ul>
         <Switch>
           <Route path='/login' component={Login} />
           <Route component={Login} />
        </Switch>
     </div>
    </Router>
  );
}

export default App;
