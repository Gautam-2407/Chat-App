import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { loginfunction } from '../Services/api'
import './Login.css';
import { ToastContainer, toast } from 'react-toastify';
import Register from '../Register/Register';

const Login = () => {
  const [phone, setPhone] = useState('');
  const [buttonLabel, setButtonLabel] = useState(true);
  const navigate = useNavigate();
  const [user, setUser] = useState(false);

  useEffect(() => {
    // Check if the user is already authenticated
    const authToken = sessionStorage.getItem("auth_token");
    if (authToken) {
      navigate("/dashboard");
    }
  }, [navigate]);



  const send_otp = (e) => {
    e.preventDefault();
    toast.success("OTP SENT");
    setButtonLabel(false);
  };

  const verify_otp = async (e) => {
    e.preventDefault();
    console.log('login started');
    try {
      const response = await loginfunction(phone);
      console.log(response);
      if (response && response.exists) {
        sessionStorage.setItem("auth_token", response.token);
        const authToken = sessionStorage.getItem('auth_token');
        console.log(authToken);
        navigate("/dashboard");
      } else {
        console.log("not in for loop");
        setUser(true);
        navigate(`/register?phoneNumber=${phone}`);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="login-container">
      <ToastContainer />
      <div className="login-box">
        <h2>Login</h2>
        {user ? (
          <Register phone={phone} />
        ) : (
          <form>
            <div className="user-box">
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              {/* <label>Phone No.</label> */}
              <label htmlFor="phone">Phone</label>
            </div>
            <div className="user-box">
              <input type="password" required />
              <label>OTP</label>
            </div>
            {buttonLabel ? (
              <button onClick={send_otp}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Send OTP
              </button>
            ) : (
              <button onClick={verify_otp}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Verify OTP
              </button>
            )}
          </form>
        )}
      </div>
    </div>
  );
}

export default Login;
