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
            <div className="loginWrapper">
                <img src="slackerz.png" className="App-logo" alt="logo" />
                <br />
                <div class="loginForm" >
                    <form onSubmit={this.handleLogin}>

                        <label htmlFor="email">

                        </label>
                        <input onChange={this.handleFieldChange} type="email"
                            id="email"
                            placeholder="Email"
                            required="" />
                        <br />
                        <label htmlFor="password">
                        </label>
                        <input onChange={this.handleFieldChange} type="password"
                            id="password"
                            placeholder="Password"
                            required="" />
                        <br />
                        <div className="buttonRow">
                                <button id="btn" className="btn btn-dark" type="submit" onClick={this.constructNewUser}>
                                    Register 
                        </button>
                                <button id="btn" className="btn btn-dark" type="submit" onClick={this.handleLogin}>
                                    Sign In
                        </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

