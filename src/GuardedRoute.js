import React from 'react';
import { Route, Redirect } from "react-router-dom";

const GuardedRoute = ({ component: Component, ...rest }) => {
  return(
    <Route {...rest} render={(props) => (
      localStorage.getItem("usuario")
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  )
}

export default GuardedRoute;
