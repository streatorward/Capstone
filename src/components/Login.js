import React, { Component } from "react"
import DataManager from "../data/DataManager"
import "./login.css"

export default class Login extends Component {

    // Set initial state
    state = {
        email: "",
        password: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    // Simplistic handler for login submit
    handleLogin = (e) => {
        e.preventDefault()

        /*
            For now, just store the email and password that
            the customer enters into local storage.
        */
        let email = this.state.email;
        let password = this.state.password;
        DataManager.getAll("users")
            .then(users => {
                let activeUser = users.find(u => u.email === email && u.password === password)
                if (activeUser) {
                    sessionStorage.setItem(
                        "activeUser",
                        JSON.stringify({
                            email: this.state.email,
                            password: this.state.password,
                            id: activeUser.id
                        })
                    )
                    this.props.history.push("/tasks")
                } else {
                    alert("No user found, please register!")
                }
            })
    }

    constructNewUser = evt => {
        evt.preventDefault()
        const user = {
            email: this.state.email,
            password: this.state.password,
        }

        this.props.addUser(user, "users").then(() => this.props.history.push("/"))
    }


    render() {
        return (
            <div class="loginForm">
                <form onSubmit={this.handleLogin}>
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <label htmlFor="email">
                        Email address
                </label>
                    <input onChange={this.handleFieldChange} type="email"
                        id="email"
                        placeholder="Email address"
                        required="" autoFocus="" />
                    <br />
                    <label htmlFor="password">
                        Password
                </label>
                    <input onChange={this.handleFieldChange} type="password"
                        id="password"
                        placeholder="Password"
                        required="" />
                    <br />
                    <button type="submit" onClick={this.constructNewUser}>
                        Register
                </button>
                    <button type="submit" onClick={this.handleLogin}>
                        Sign In
                </button>
                </form>
            </div>
        )
    }
}

