import React, { useEffect, useRef } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ onLogout }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const authToken = sessionStorage.getItem('auth_token');
  const initialRenderRef = useRef(true);

  useEffect(() => {
    if (initialRenderRef.current) {
      initialRenderRef.current = false;
      return;
    }

    const storedToken = sessionStorage.getItem('auth_token');
    if (!authToken && !storedToken) {
      navigate("/", { replace: true });
    }
  }, [authToken, navigate]);

  const isProfileRoute = location.pathname === "/register";

  if (!authToken) {
    navigate("/");
    return null;
  }

  return (
    <div className="main-container">
      <div className="main-screen">
        {!isProfileRoute}
        <div className="page-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default PrivateRoute;
