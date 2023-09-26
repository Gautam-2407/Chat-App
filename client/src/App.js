import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Login/Login';
import "react-toastify/dist/ReactToastify.css";
import Register from './Register/Register';
import Dashboard from './Components/Dashboard/Dashborad';
import Privateroute from './Private/Privateroute';
import AdminList from './InnerPages/AdminList/AdminList';
import UserList from './InnerPages/UserList/UserList';
import NewTask from './AssignTask/NewTask';
import Header from './Components/Header/Header';
import PendingSA from './InnerPages/SAPending/PendingSA';
import CompleteSA from './InnerPages/SAComplete/CompleteSA';

function App() {
  const handleLogout = () => {
    sessionStorage.removeItem("auth_token");
    window.location.replace("/");
  };


  return (

    <div className="App">
      <Routes>

        <Route path="/" element={<Login onLogout={handleLogout} />} />
        <Route
          path="/dashboard"
          element={<Privateroute onLogout={handleLogout} />} >
          <Route index element={<Dashboard />} />

        </Route>

        {/* Private Route */}
        <Route path="/new-task" element={<Privateroute onLogout={handleLogout} />}>
          <Route index element={<NewTask />} />
        </Route>
        <Route path="/admin" element={<Privateroute onLogout={handleLogout} />}>
          <Route index element={<AdminList />} />
        </Route>
        <Route path="/user" element={<Privateroute onLogout={handleLogout} />}>
          <Route index element={<UserList />} />
        </Route>
        <Route path="/pending-sa" element={<Privateroute onLogout={handleLogout} />}>
          <Route index element={<PendingSA />} />
        </Route>
        <Route path="/complete-sa" element={<Privateroute onLogout={handleLogout} />}>
          <Route index element={<CompleteSA />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path='/header' element={<Header username="John Doe"/>} />
      </Routes>

    </div>
  );
}

export default App;

