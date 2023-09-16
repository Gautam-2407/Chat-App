import React, { useState, useEffect } from 'react';
import { userfetch, adminfetch } from '../Services/api';
import "./task.css";
    
import { newtask } from "../Services/api";

const NewTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedOption, setSelectedOption] = useState('select');
  const [data, setData] = useState([]);
  const [selectedMembers, setSelectedMembers] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Iterate over the selected members' IDs and create a task for each one
      for (const memberId of selectedMembers) {
        const task = await newtask(title, description, memberId);
        console.log(task);
        
      }
      window.location.reload()
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        if (selectedOption === 'admin') {
          response = await adminfetch();
        } else if (selectedOption === 'user') {
          response = await userfetch();
        }
        const members = response || [];
        setData(members);
      } catch (error) {
        console.error('API Error:', error);
      }
    };

    fetchData();
  }, [selectedOption]);

  const toggleMemberSelection = (memberId) => {
    setSelectedMembers((prevSelected) => {
      if (prevSelected.includes(memberId)) {
        return prevSelected.filter((id) => id !== memberId);
      } else {
        return [...prevSelected, memberId];
      }
    });
  };

  return (
    <div className='wrapper'>

      <div className="left">
        <div className="title1">
          <h1>New Task</h1>
        </div>

        <div className="userbox">
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
          <label>TITLE</label>
        </div>

        <div className="userbox">
          <textarea required value={description} onChange={(e) => setDescription(e.target.value)} ></textarea>
          <label>DESCRIPTION</label>
        </div>

        <button onClick={handleSubmit}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Assign Task
        </button>
      </div>

      <div className="right">
          <div className="title2">
          <h1>Whom To Assign</h1>
        </div>

        <div className="userbox">
          <div>
            <select className="select-user" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
              <option value="select">Select a List</option>
              <option value="user">User List</option>
              <option value="admin">Admin List</option>
            </select>
          </div>

          <div className="user-list">
            {selectedOption === 'select' ? (
              <p>Select a list to display data.</p>
            ) : data.length === 0 ? (
              <p>No data available.</p>
            ) : (
              <ul className="ul">
                {data.map((member) => (
                  <li key={member._id} className="li">
                    <input
                      type="checkbox"
                      checked={selectedMembers.includes(member._id)}
                      onChange={() => toggleMemberSelection(member._id)}
                    />
                    {member.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewTask;
