import React, {useState}from "react";
import "./task.css"; 
import { newtask } from "../Services/api";


const NewTask = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const task = await newtask(title, description);
            console.log(task);
            
        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='wrapper'>
            <div className="left">
                <div className="title1">
                <h1 >New Task</h1>

                </div>

                <div className="userbox">
                    <input type="text" value={title}  onChange={(e) => setTitle(e.target.value)}required />
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

                <h1 >Whom To Assign</h1>
                </div>
            </div>
        </div>
    );
}

export default NewTask;
