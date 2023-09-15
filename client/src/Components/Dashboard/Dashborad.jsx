import React from 'react';
import Sidebar from '../Sidebar/Super-admin-sidebar/Super-admin-sidebar';
import Admin from '../Sidebar/Admin-sidebar/Admin-sidebar';
import User from '../Sidebar/User-sidebar/User-sidebar';
import { Routes, Route } from 'react-router-dom';
import NewTask from '../../AssignTask/AssignTask';

const Dashboard = () => {
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
  return (
    <div className='component'>
      <div className='sidebar'>
        {sidebarComponent}

        <main>
          <Routes>

          <Route path='/dashboard/NewTask' element={<NewTask />} />

          </Routes>


        </main>

      </div>

    </div>
  );
};

export default Dashboard;
