import { Link } from 'react-router-dom'
import React, { Component } from "react"



export default class TaskCard extends Component {

    state = {
        task: []
    }

    changeCompleted = () => {
        let complete = { complete: this.state.task.complete }
        console.log(complete)
        if (this.state.task.complete) {
            complete = { complete: false }
        } else {
            complete = { complete: true }
        }
        console.log(complete)
        this.props.patch("tasks", complete, this.props.task.id)
    }

    componentDidMount = () => {
        const result = this.props.tasks.find(a => a.id === this.props.task.id) || {}

        const task = {
            ...result
        }

        this.setState({ task })
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{this.props.task.taskName}</h5>
                    <p className="card-text">{this.props.task.taskDetail}</p>
                    <p className="card-text">{this.props.task.taskRecurring}</p>
                    <button>
                        <Link className="nav-link" to={`/tasks/edit/${this.props.task.id}`}><i className="far fa-edit"></i></Link></button>
                    <button onClick={this.changeCompleted} className="taskCheckbox" name="complete" type="button"><i className="far fa-check-square"></i></button>
                    <button type="button" 
                        onClick={() => this.props.deleteTask(this.props.task.id, "tasks")} 
                    ><i className="far fa-trash-alt"></i></button>
                </div>
            </div>
        )
    }
}




