import React from 'react'
import '../Sidebar.css'
import { Link } from 'react-router-dom'
function Sidebar() {
    return (

        <aside class="sidebar" id="show-side-navigation1">
            <div class="sidebar-header ">
                <div class="ms-2">
                    <h2 class="fs-6 mb-0">
                        <Link to='#' id="a"> Task- Manager</Link>

                    </h2>

                </div>
            </div>
            <div className="links">
                <ul class="categories list-unstyled">
                    <li class="">
                        <Link to='/new-task' id="a">Dashboard</Link>
                    </li>
                    <li class="">
                        <Link to='/new-task' id="a">New Task</Link>
                    </li>

                    <li class="">
                        <Link to='/new-task' id="a">Pending Task</Link>
                    </li>
                    <li class="">
                        <Link to='/new-task' id="a">Admin List </Link>
                    </li>
                    
                    <li class="">
                        <Link to='/new-task' id="a">User's List </Link>
                    </li>
                    <li class="">
                        <Link to='/new-task' id="a">Logout </Link>
                    </li>
                </ul>
            </div>
        </aside>


    )
}

export default Sidebar
