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
      
        {data && data.length > 0 ? (
          data.map((member) => (
            <li key={member._id}>
              Name: {member.name}, Phone Number: {member.phone}
            </li>
          ))
        ) : (
          <li>No admin members found.</li>
        )}
      
    </div>
  );
};

export default AdminList;
