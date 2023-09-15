import React, {  useRef } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ onLogout }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const authToken = sessionStorage.getItem('auth_token');
  const initialRenderRef = useRef(true);

  React.useEffect(() => {
    if (initialRenderRef.current) {
      initialRenderRef.current = false;
      return;
    }

    if (!authToken) {
      navigate("/", { replace: true });
    }
  }, [authToken, navigate]);

  const isProfileRoute = location.pathname === "/register";

  if (!authToken) {
    navigate("/");
    return null;
  }

  return authToken ? (
    <div className="main-container">
      <div onClick = {onLogout}/>
      <div className="main-screen">
        {!isProfileRoute}
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
