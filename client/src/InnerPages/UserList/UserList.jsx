import React, { useState, useEffect } from 'react';
import { userfetch, adminDelete } from '../../Services/api';
import "./List.css"

const UserList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await userfetch();
        console.log(response);
        const adminMembers = response;
        setData(adminMembers);
        console.log(adminMembers);
      } catch (error) {
        console.error('API Error:', error);
      }
    };

    fetchData();
  }, []);

  const deleteUser = async (userId) => {
    try {
      // Assuming adminDelete accepts the user ID as a parameter
      await adminDelete(userId);
      // After successful deletion, update the data in your component
      setData((prevData) => prevData.filter((user) => user._id !== userId));
    } catch (error) {
      console.error('Delete Error:', error);
    }
  }

  return (
    <div className="check">
    <div className='app'>
      <h1 className='title'>Users</h1>
      <table className='member-table'>
        <thead>
          <tr>
            <th className='table-header'>Name</th>
            <th className='table-header'>Email</th>
            <th className='table-header'>Role</th>
            <th className='table-header'>Phone</th>
            <th className='table-header'>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((member) => (
            <tr key={member._id} className='table-row'>
              <td className='table-data'>{member.name}</td>
              <td className='table-data'>{member.email}</td>
              <td className='table-data'>{member.role}</td>
              <td className='table-data'>{member.phone}</td>
              <td className='table-data'>
                <button className='edit-button'>Edit</button>
                <button className='delete-button' onClick={() => deleteUser(member._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default UserList;
