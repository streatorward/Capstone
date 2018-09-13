import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

class NavBar extends Component {
    logout() {
        sessionStorage.clear();
    }
    render() {
        return (
            
            <nav className=".navbar.navbar-default.navbar-static-top light-blue flex-md-nowrap p-0 shadow navbar">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link className="nav-link text-success" to="/tasks">Things To Do</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-success" to="/completed">Completed</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-success" to="/" onClick={this.logout}>Logout</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default NavBar