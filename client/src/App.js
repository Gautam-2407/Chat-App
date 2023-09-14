import './App.css';
import React from'react';
import { Route, Routes,  } from 'react-router-dom';
import Login from './Login/Login';
import "react-toastify/dist/ReactToastify.css";
import Register from './Register/Register';
import Dashboard from './Components/Dashboard/Dashborad';
import Privateroute from './Private/Privateroute';
import AdminList from './InnerPages/AdminList/AdminList';
// import jwt from 'jsonwebtoken';

function App() {
  const handleLogout = () => {
    sessionStorage.removeItem("auth_token");
    window.location.replace("/");
  };

  // const decoded =

//   const parts = token.split('.');
//   if (parts.length !== 3) {
//     throw new Error('JWT token has wrong number of parts!');
//   }

//   const payload = JSON.parse(atob(parts[1]));

//   return payload;
// }

// const token = sessionStorage.getItem('auth_token');

// const payload = decodeJWT(token);
// console.log(payload.role)

  return (

    <div className="App">
    <Routes>
      
      <Route path='/' element={<Login onLogout={handleLogout} />}/>
      <Route
            path="/dashboard"
            element={<Privateroute onLogout={handleLogout} />} >
            <Route index element={<Dashboard />} />
      
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<AdminList/>}/>
      </Routes>
    </div>
  );
}

export default App;
