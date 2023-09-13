import './App.css';
import React from'react';
import { Route, Routes,  } from 'react-router-dom';
import Login from './Login/Login';
import "react-toastify/dist/ReactToastify.css";
import Register from './Register/Register';
import Dashboard from './Components/Dashboard/Dashborad';
import PrivateRoute from './Private/Privateroute';

function App() {
  return (

    <div className="App">
    <Routes>
      
      <Route path='/' element={<Login />}/>
      <PrivateRoute path='/register' element={<Register/>}/>
      <PrivateRoute path='/dashboard' element={<Dashboard/>}/>
      
      </Routes>
    </div>
  );
}

export default App;
