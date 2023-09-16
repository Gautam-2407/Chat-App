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
    <div className='test-container'>
      <div className="test-app">

            <h1 className='test-title'>Admin Members</h1>
      <table className='test-member-table'>
        <thead>
          <tr>
            <th className='test-table-header'>Name</th>
            <th className='test-table-header'>Email</th>
            <th className='test-table-header'>Role</th>
            <th className='test-table-header'>Phone</th>
            <th className='test-table-header'>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((member) => (
            <tr key={member._id} className='test-table-row'>
              <td className='test-table-data'>{member.name}</td>
              <td className='test-table-data'>{member.email}</td>
              <td className='test-table-data'>{member.role}</td>
              <td className='test-table-data'>{member.phone}</td>
              <td className='test-table-data'>
              <button  className='test-edit-button'>Edit</button>
                <button onClick={() => handleDelete(member._id)} className='test-delete-button'>Delete</button>
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
