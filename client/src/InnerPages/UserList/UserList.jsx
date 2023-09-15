import React, { useState, useEffect } from 'react';
import { userfetch, adminDelete } from '../../Services/api';

const UserList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await userfetch();
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
                <a href={`/user/edit/${member._id}`}>Edit</a>
                <a href={`/admin/delete/${member._id}`}>Delete</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
       
    </div>
  );
};
export default UserList;

