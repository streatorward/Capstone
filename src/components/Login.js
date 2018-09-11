import React, { Component } from "react"
import DataManager from "../data/DataManager"

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
                let activeUser = users.find(u => u.inputEmail === email && u.inputPassword === password)
                if(activeUser){
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
            inputEmail: this.state.email,
            inputPassword: this.state.password,
            userId: this.props.activeUser.id
        }

        this.props.addUser(user, "users").then(() => this.props.history.push("/"))
    }


    render() {
        return (
            <form onSubmit={this.handleLogin}>
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label htmlFor="inputEmail">
                    Email address
                </label>
                <input onChange={this.handleFieldChange} type="email"
                    id="email"
                    placeholder="Email address"
                    required="" autoFocus="" />
                <label htmlFor="inputPassword">
                    Password
                </label>
                <input onChange={this.handleFieldChange} type="password"
                    id="password"
                    placeholder="Password"
                    required="" />
                <button type="submit" onClick={this.constructNewUser}>
                    Register
                </button>
                <button type="submit" onClick={this.handleLogin}>
                    Sign In
                </button>
            </form>
        )
    }
}