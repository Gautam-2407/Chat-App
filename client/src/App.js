import './App.css';
import React from'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Login/Login';
import "react-toastify/dist/ReactToastify.css";
import Register from './Register/Register';

function App() {
  return (

    <div className="App">
    <Routes>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register phone="8847209941"/>}/>
          </Routes>
    </div>
  );
}

export default App;
