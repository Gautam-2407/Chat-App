import React, { useState, useEffect } from 'react';
import { getTask, taskDelete, taskcomplete } from '../../Services/api';

const PendingSA = () => {
  const [data, setData] = useState([]);
  const [setStatus]= useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getTask();
        setData(response);
        console.log(response);
      } catch (error) {
        console.error('API Error:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (taskId) => {
    try {
      await taskDelete(taskId);
      setData((prevData) => prevData.filter((task) => task._id !== taskId));
    } catch (error) {
      console.error('Delete Error:', error);
    }
  };

  const handlecomplete = async (taskId) => {
    try {
      await taskcomplete(taskId);
      setStatus((prevData) => prevData.filter((task) => task._id !== taskId));
      // status = "complete";
      console.log("complete");
    } catch (error) {
      console.error('Complete Error:', error);
    }
  };

  return (
    <div className='test2-container'>
      <div className="test2-app">
        <h1 className='test2-title'>Pending List</h1>
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
                    {task.id && task.id.name ? (
                      task.id.name
                    ) : (
                      <div>No user data available</div>
                    )}
                  </td>
                      
                  <td className='test2-table-data'>{task.date}</td>
                  <td className='test2-table-data'>
                    <button className='test2-edit-button'>Edit</button>
                    <button className='test2-complete-button' onClick={() => handlecomplete(task._id)}>Complete</button>
                    <button className='test2-delete-button' onClick={() => handleDelete(task._id)}>Delete</button>
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
