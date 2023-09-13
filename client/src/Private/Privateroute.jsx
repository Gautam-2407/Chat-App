// PrivateRoute.js
import React from 'react';
// import { Route, Redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = sessionStorage.getItem('auth_token');
  const isAuthenticated = !!token; // Check if token exists
  const navigate = useNavigate();

  if (!isAuthenticated) {
    // Redirect to login page if not authenticated
    navigate( "/login") ;
  }

  // Get user role from the token (you need to decode it)
//   const userRole = decodeTokenAndGetUserRole(token); // Implement this function

  // Render the protected component with the user role
//   return <Route {...rest} render={(props) => <Component {...props} userRole={userRole} />} />;
};

export default PrivateRoute;
