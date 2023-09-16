import React from 'react';
import './Header.css';
import 'font-awesome/css/font-awesome.min.css';


const Header = ({ username }) => {
  return (
    <div className="header">
      <div className="name">Welcome {username}</div>
      <div className="icon-container">
        <i className="icon fas fa-bell"></i>
        <i className="icon fas fa-user-circle"></i>
      </div>
    </div>
  );
};

export default Header;
