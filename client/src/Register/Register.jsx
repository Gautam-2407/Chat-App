import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Register.css';


const  Register = (props) => {  
  const [phoneNumber, setPhoneNumber] = useState('');
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const phoneNumberParam = queryParams.get('phoneNumber');
    if (phoneNumberParam) {
      setPhoneNumber(phoneNumberParam);
    }
  }, [location]);
    return (

    
    <div className="register-container">
<div className="register-box">
  <h2>Register</h2>
  <form>
  <div className="user-box">
      <input type="text"  required/>
      <label>Name</label>
    </div>
    <div className="user-box">
      <input type="text"  required/>
      <label>Email</label>
    </div>
    <div className="user-box">
      <input type="text"
          name="number"
          defaultValue={props.phone}
           disabled={true}
          required/>
      {/* <label>Phone No.</label> */}
    </div>
    <div className="user-box">
      <input type="text"   required/> 
      <label>Gender</label>
    </div>
    
      <button>
      <span></span>
        <span></span>
        <span></span>
        <span></span>
        Register
        
      </button>
    
  </form>
  </div>
</div>
  )
}

export default Register
