import React, { useState, useEffect } from 'react';
import { adminfetch } from '../../Services/api';

const AdminList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await adminfetch();
        console.log(response)
        const adminMembers = response;
        setData(adminMembers);
        console.log(adminMembers);
      } catch (error) {
        console.error('API Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Admin Members</h1>
      <table>

        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((member) => (
            <tr key={member.id}>
              <td>{member.name}</td>
              <td>{member.email}</td>
              <td>{member.phone}</td>
              <td>
                <a href={`/admin/edit/${member.id}`}>Edit</a>
                <a href={`/admin/delete/${member.id}`}>Delete</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
       
    </div>
  );
};

export default AdminList;
