import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

/****************************************************************************************************************************
Private Route requirements:
    1.It has the same API as <Route />
    2.It renders a <Roue /> and passes all the props to it 
    3.It checks if the user is authenticated. If they are render the component passed in as a prop.
      If not redirect the user back to /login
****************************************************************************************************************************/

const PrivateRoute = ({ component: Component, ...rest }) => {
    return(
        <Route 
        {...rest}
        render={props => {
            if (localStorage.getItem('token')){
                return <Component {...props} />;
            }else{
                console.log('redirecting!');
                return <Redirect to="/login" />;
            }
        }}
        />
    );
};

export default PrivateRoute;