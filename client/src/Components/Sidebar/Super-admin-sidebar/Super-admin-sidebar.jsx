import React from 'react'
import '../Sidebar.css'
import { Link } from 'react-router-dom'
// import NewTask from '../../../AssignTask/AssignTask'
function Sidebar() {
    const handlelogout = (() => {
        window.location.replace("/");
        sessionStorage.removeItem('auth_token');
    })
    return (

        <aside className="sidebar" id="show-side-navigation1">
            <div className="sidebar-header ">
                <div className="ms-2">
                    <h2 className="fs-6 mb-0">
                        <Link to='#' id="a"> Task- Manager</Link>

                    </h2>

                </div>
            </div>
            <div className="links">
                <ul className="categories list-unstyled">
                    <li className="">
                        <Link to='/dashboard' id="a">Dashboard</Link>
                    </li>
                    <li className="">
                        <Link to="/new-task" id="a">New Task</Link>
                    </li>

                    <li className="">
                        <Link to='/new-task' id="a">Pending Task</Link>
                    </li>
                    <li className="">
                        <Link to='/new-task' id="a">Admin List </Link>
                    </li>
                    
                    <li className="">
                        <Link to='/new-task' id="a">User's List </Link>
                    </li>
                    <li className="">
                        <p id="a" onClick={handlelogout}>Logout </p>
                    </li>
                </ul>
            </div>
        </aside>


    )
}

export default Sidebar
