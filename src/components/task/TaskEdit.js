import React, { Component } from "react"
import "./taskList.css"


export default class TaskEdit extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            detail: "",
            recurring: "",
            activeUser: "",
            complete: this.props.tasks.completed
        }
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
            taskName: this.state.taskName,
            taskDetail: this.state.taskDetail,
            taskRecurring: this.state.taskRecurring,
            activeUser: JSON.parse(sessionStorage.getItem("activeUser")).id,
        }
        const taskEditId = parseInt(this.props.match.params.taskId, 0)
        // Create the task and redirect user to task list
        if (this.props.tasks[0].complete === false) {
            this.props.editTask(task, taskEditId, "tasks").then(() => this.props.history.push("/tasks"))
        } else {
            this.props.editTask(task, taskEditId, "tasks").then(() => this.props.history.push("/completed"))
        }
    }
    componentDidMount() {
        const task = this.props.tasks.find(a => a.id === parseInt(this.props.match.params.taskId, 0)) || {}
        this.setState({ ...task })
    }

    render() {
        return (
            <React.Fragment>
                <div className="taskWrapper">
                    <form className="TaskForm">
                        <div className="form-group">
                            <label htmlFor="taskName">Task name</label>
                            <input type="text" required={true}
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="taskName"
                                placeholder="Task Name"
                                defaultValue={this.state.taskName} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="taskDetail">Task Detail</label>
                            <input type="text" required={true}
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="taskDetail" placeholder="Task Detail"
                                defaultValue={this.state.taskDetail} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="taskRecurring">Recurring: </label>
                            <select value={this.state.taskRecurring} onChange={this.handleFieldChange} id="taskRecurring">
                                <option value="">Select:</option>
                                <option value="daily">Daily</option>
                                <option value="weekly">Weekly</option>
                                <option value="monthly">Monthly</option>
                            </select>
                        </div>
                        <button type="submit" onClick={this.constructNewTask} className="btn">Submit</button>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}