import React, { useState, useEffect } from 'react';
import { getTask } from '../../Services/api';

const PendingSA = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getTask();
        setData(response);
      } catch (error) {
        console.error('API Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='test2-container'>
      <div className="test2-app">
        <h1 className='test2-title'>Admin Members</h1>
        <table className='test2-member-table'>
          <thead>
            <tr>
              <th className='test2-table-header'>Title</th>
              <th className='test2-table-header'>Description</th>
              <th className='test2-table-header'>Users</th>
              <th className='test2-table-header'>Date</th>
              <th className='test2-table-header'>Action</th>
            </tr>
          </thead>
          <tbody>
            {data && data.length > 0 ? (
              data.map((task) => (
                <tr key={task._id} className='test2-table-row'>
                  <td className='test2-table-data'>{task.title}</td>
                  <td className='test2-table-data'>{task.description}</td>
                  <td className='test2-table-data'>
                    {task.id && task.id.length > 0 ? (
                      // Render user names based on the user details available in the task data
                      task.id.map((users) => (
                        <div key={users._id}>{users.name}</div>
                      ))
                    ) : (
                      <div>No user data available</div>
                    )}
                  </td>
                  <td className='test2-table-data'>{task.date}</td>
                  <td className='test2-table-data'>
                    <button className='test2-edit-button'>Edit</button>
                    <button className='test2-delete-button'>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No task data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PendingSA;
