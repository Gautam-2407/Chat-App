import './App.css';
import React from'react';
import { Route,  Routes  } from 'react-router-dom';
import Login from './Login/Login';
import "react-toastify/dist/ReactToastify.css";
import Register from './Register/Register';
import Dashboard from './Components/Dashboard/Dashborad';
import Privateroute from './Private/Privateroute';
import AdminList from './InnerPages/AdminList/AdminList';
import UserList from './InnerPages/UserList/UserList';

function App() {
  const handleLogout = () => {
    sessionStorage.removeItem("auth_token");
    window.location.replace("/");
  };


  return (

    <div className="App">
    <Routes>
      
      <Route path="/" element={<Login onLogout={handleLogout} />}/>
      <Route
            path="/dashboard"
            element={<Privateroute onLogout={handleLogout} />} >
            <Route index element={<Dashboard />} />
      
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<AdminList/>}/>
          <Route path="/user" element={<UserList/>}/>
      </Routes>
    </div>
  );
}

export default App;

