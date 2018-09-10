import React, { Component } from "react"
// import "./Task.css"


export default class TaskForm extends Component {
    // Set initial state
    
    state = {
        name: "",
        detail: "",
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    /*
        Local method for validation, creating task object, and
        invoking the function reference passed from parent component
     */
    constructNewTask = evt => {
        evt.preventDefault()
            const task = {
                taskName: this.state.name,
                taskDetail: this.state.detail,
            }

            // Create the task and redirect user to task list
            this.props.addTask(task, "tasks").then(() => this.props.history.push("/tasks"))
        }
    

    render() {
        return (
            <React.Fragment>
                <form className="taskForm">
                    <div className="form-group">
                        <label htmlFor="taskName">Task </label>
                        <input type="text" required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="name"
                               placeholder="Task" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="eventDetail">Details</label>
                        <input type="text" required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="detail" 
                               placeholder="Details" />
                    </div>
                    <button type="submit" onClick={this.constructNewTask} className="btn btn-primary">Add</button>
                </form>
            </React.Fragment>
        )
    }
}