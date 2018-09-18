import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

class NavBar extends Component {
    logout() {
        sessionStorage.clear();
    }
    render() {
        return (      
            <nav id="navbar" className=".navbar .navbar-static-top flex-md-nowrap">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link className="nav-link" to="/tasks">Things To Do</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/completed">Completed</Link>
                    </li>
                    <div className="logBtn">
                    <li className="nav-item">
                        <Link className="nav-link" to="/" onClick={this.logout}>Logout</Link>
                    </li>
                    </div>
                </ul>
            </nav>
        )
    }
}

export default NavBar