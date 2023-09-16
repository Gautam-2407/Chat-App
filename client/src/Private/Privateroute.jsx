import React, { useRef, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Sidebar from '../Components/Sidebar/Super-admin-sidebar/Super-admin-sidebar';
import './style.css';
import Admin from '../Components/Sidebar/Admin-sidebar/Admin-sidebar';
import User from '../Components/Sidebar/User-sidebar/User-sidebar';
import Header from '../Components/Header/Header';

const PrivateRoute = ({ onLogout }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const authToken = sessionStorage.getItem('auth_token');
  const initialRenderRef = useRef(false);

  useEffect(() => {
    if (initialRenderRef.current) {
      initialRenderRef.current = true;
      return;
    }

    if (!authToken) {
      navigate("/", { replace: true });
    }
  }, [authToken, navigate]);

  const isProfileRoute = location.pathname === "/register";

  let sidebarComponent;
  const authtoken = sessionStorage.getItem('auth_token');
  const role = authtoken.split("")
  const getrole = role[role.length - 1]
  console.log(getrole);
  if (getrole === "2") {
    sidebarComponent = <Admin />;
  } else if (getrole === "1") {
    sidebarComponent = <Sidebar />;
  } else if (getrole === "3") {
    sidebarComponent = <User />;
  }


  return authToken ? (
    <div className="main-container">
      {sidebarComponent}
      <div className="main-screen">
        {!isProfileRoute}
        <Header />
        <div className="page-content">
          <Outlet />

        </div>
      </div>
    </div>
  ) : (
    navigate("/")
  );
};

export default PrivateRoute;
