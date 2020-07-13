import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './Components/Login';
import PrivateRoute from './Components/PrivateRoute';
import FriendsList from './Components/FriendsList';
import AddFriend from './Components/AddFriend';
import styled from 'styled-components';


const StyledNav = styled.nav `
  display: flex;
  width: 50%;
  justify-content: space-between;
  margin-left:45%;
`

function App() {
  return (
    <Router>
     <div className="App">
       <StyledNav>
      <h1>Auth friends App</h1>
       
           <Link to="/login">Login</Link>
         
           <Link to="/protected">Friends List</Link>
       
           <Link to="/addFriend">Add Friend</Link>
         
       </StyledNav>
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
