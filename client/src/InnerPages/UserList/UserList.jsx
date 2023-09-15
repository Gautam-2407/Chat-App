import React, { useState, useEffect } from 'react';
import { userfetch, adminDelete } from '../../Services/api';
import "./List.css"
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
    <div className='app'>
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
            <tr key={member._id}>
              <td>{member.name}</td>
              <td>{member.email}</td>
              <td>{member.phone}</td>
              <td>
              <button >Edit</button>
                <button onClick={() => deleteUser(member._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
       
    </div>
  );
};
export default UserList;

