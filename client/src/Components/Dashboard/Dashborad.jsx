import React from 'react';
import Sidebar from '../Sidebar/Super-admin-sidebar/Super-admin-sidebar';
import Admin from '../Sidebar/Admin-sidebar/Admin-sidebar';
import User from '../Sidebar/User-sidebar/User-sidebar';

const Dashboard = () => {
  let sidebarComponent;
    const authtoken = sessionStorage.getItem('auth_token');
    const role=authtoken.split("")
    const getrole=role[role.length-1]
    console.log(getrole);
  if (getrole === "2") {
    sidebarComponent = <Admin />;
  } else if (getrole === "1") {
    sidebarComponent = <Sidebar />;
  } else if (getrole === "3") {
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
