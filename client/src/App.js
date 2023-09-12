import './App.css';
import React from'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Login/Login';
import "react-toastify/dist/ReactToastify.css";
import Register from './Register/Register';
import Sidebar from './Components/Sidebar/Super-admin-sidebar/Super-admin-sidebar';
import Admin from './Components/Sidebar/Admin-sidebar/Admin-sidebar';
import User from './Components/Sidebar/User-sidebar/User-sidebar';

function App() {
  return (

    <div className="App">
    <Routes>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/sidebar' element={<Sidebar />}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/user' element={<User/>}/>
      </Routes>
    </div>
  );
}

export default App;
