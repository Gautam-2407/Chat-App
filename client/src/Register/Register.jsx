import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Register.css';
import {registerfunction} from '../Services/api';



const  Register = () => {  
  const [name, setName]= useState("");
  const [email, setEmail]= useState("");
  const [gender, setGender]= useState("");
  const [phoneNumber, setPhoneNumber] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
 
 // To get a phone number from login page
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const phoneNumberParam = queryParams.get('phoneNumber');
    if (phoneNumberParam) {
      setPhoneNumber(phoneNumberParam);
    }
  }, [location]);


// To register a new user

const handleClick = async (e) => {
  e.preventDefault();
  console.log("Register");
  try{
    const response = await registerfunction(name,phoneNumber, email, gender);
    console.log(response);
    navigate('/dashboard');
  }
  
  catch(err){
    console.log("error start");
    console.log(err);
  }
}
    return (

    
    <div className="register-container">
<div className="register-box">
  <h2>Register</h2>
  <form>
  <div className="user-box">
      <input type="text"  value={name} onChange={(e) => setName(e.target.value)} required/>
      <label>Name</label>
    </div>
    <div className="user-box">
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required/>
      <label>Email</label>
    </div>
    <div className="user-box">
    <div className="phonelabel">
      Phone No.
      
      </div> 
      <input
  type="text"
  name="number"
  value={phoneNumber}
  onChange={(e) => setPhoneNumber(e.target.value)}
  disabled={true} // Now it's a boolean value
  required
/>


    </div>
    <div className="user-box">
      <input type="text" value={gender} onChange={(e) => setGender(e.target.value)}  required/> 
      <label>Gender</label>
    </div>
    
      <button onClick={handleClick}>
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
