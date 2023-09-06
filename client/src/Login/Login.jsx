import React from 'react';
import './Login.css';

function Login() {
  return (
    <div class="login-container">
<div class="login-box">
  <h2>Login</h2>
  <form>
    <div class="user-box">
      <input type="text" name="" required="" />
      <label>Username</label>
    </div>
    <div class="user-box">
      <input type="password" name="" required="" /> 
      <label>Password</label>
    </div>
    <button>
    <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </button>
  </form>
  </div>
</div>
  )
}

export default Login
