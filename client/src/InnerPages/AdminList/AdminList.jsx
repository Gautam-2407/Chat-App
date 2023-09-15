import React, { useState, useEffect } from 'react';
import { adminfetch, adminDelete } from '../../Services/api';
import "../UserList/List.css"; // Import your shared CSS

const AdminList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await adminfetch();
        const adminMembers = response;
        setData(adminMembers);
      } catch (error) {
        console.error('API Error:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (userId) => {
    try {
      await adminDelete(userId);
      setData((prevData) => prevData.filter((user) => user._id !== userId));
    } catch (error) {
      console.error('Delete Error:', error);
    }
  };

  return (
    <div className='container'>
      <div className="app">

            <h1 className='title'>Admin Members</h1>
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
              <button  className='edit-button'>Edit</button>
                <button onClick={() => handleDelete(member._id)} className='delete-button'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default AdminList;
