import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './Components/Login';
import PrivateRoute from './Components/PrivateRoute';
import FriendsList from './Components/FriendsList';
import AddFriend from './Components/AddFriend'


function App() {
  return (
    <Router>
     <div className="App">
      <h1>Auth friends App</h1>
       <ul>
         <li>
           <Link to="/login">Login</Link>
         </li>
         <li>
           <Link to="/protected">Friends List</Link>
         </li>
         <li>
           <Link to="/addFriend">Add Friend</Link>
         </li>
       </ul>
         <Switch>
           <PrivateRoute exact path="/protected" component={ FriendsList }/>

           <PrivateRoute exact path="/addFriend" component={ AddFriend } />

           <Route path="/login" component={Login} />

           <Route component={Login} />
        </Switch>
     </div>
    </Router>
  );
}

export default App;
