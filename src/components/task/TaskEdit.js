import React, { Component } from "react"
// import "./Task.css"



export default class TaskEdit extends Component {
    state = {
        name: "",
        detail: "",
        recurring: "",
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
            taskRecurring: this.state.recurring,
        }
        const taskEditId = parseInt(this.props.match.params.taskId, 0)
        // Create the task and redirect user to task list
        this.props.editTask(task, taskEditId, "tasks").then(() => this.props.history.push("/tasks"))
    }
    render() {
        return (
            <React.Fragment>
                <form className="TaskForm">
                    <div className="form-group">
                        <label htmlFor="taskName">Task name</label>
                        <input type="text" required={true}
                               className="form-control"
                               onChange={this.handleFieldChange.bind(this)}
                               id="name"
                               placeholder="Task Name"
                               defaultValue={this.state.taskName} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="taskDetail">Task Detail</label>
                        <input type="text" required={true}
                               className="form-control"
                               onChange={this.handleFieldChange.bind(this)}
                               id="detail" placeholder="Task Detail"
                               defaultValue={this.state.taskDetail}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="taskRecurring">Recurring: </label>
                        <select defaultValue="" onChange={this.handleFieldChange} id="recurring">
                            <option value="">Select:</option>
                            <option value="daily">Daily</option>
                            <option value="weekly">Weekly</option>
                            <option value="monthly">Monthly</option>
                        </select>
                    </div>
                    <button type="submit" onClick={this.constructNewTask} className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
        )
    }
}