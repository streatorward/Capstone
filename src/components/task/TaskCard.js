import { Link } from 'react-router-dom'
import React, { Component } from "react"


export default class TaskCard extends Component {

    state = {
        task: {}

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
            <div key={this.state.task.id} className="taskCard">
                <section className="tasks">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                <p>{this.props.task.taskName}</p>
                                <p>{this.props.task.taskDetail}</p>
                                <p>{this.props.task.taskRecurring}</p>
                                <Link className="nav-link" to={`/tasks/edit/${this.props.task.id}`}>Edit</Link>
                                <button type="button" className="btn btn-success"
                                    onClick={() => this.props.deleteTask(this.props.task.id, "tasks")}
                                >Delete</button>
                                    <input onClick={this.changeCompleted} className="taskCheckbox" name="complete" type="checkbox" />
                          
                            </h5>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}