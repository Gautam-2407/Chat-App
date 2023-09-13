import React from 'react';
import { useSelector } from 'react-redux';
import Sidebar from '../Sidebar/Super-admin-sidebar/Super-admin-sidebar';
import Admin from '../Sidebar/Admin-sidebar/Admin-sidebar';
import User from '../Sidebar/User-sidebar/User-sidebar';
const Dashboard = () => {
  const userRole = useSelector((state) => state.userRole);
  let sidebarComponent;

  if (userRole === 'admin') {
    sidebarComponent = <Admin />;
  } else if (userRole ==='Super-Admin') {
    sidebarComponent = <Sidebar />;
  } else if (userRole === 'user') {
    sidebarComponent = <User />;
  }
  return (
    <div className='component'>
      <div className='sidebar'>
        {sidebarComponent}
      </div>
      
    </div>
  );
};

export default Dashboard;
