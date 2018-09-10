import { Link } from 'react-router-dom'
import React, { Component } from 'react'
// import "./Task.css"


export default class TaskList extends Component {
    render() {
        return (

            <React.Fragment>
                <div className="taskButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/tasks/new")
                        }
                        }>
                        Add task
                    </button>
                </div>

                <section className="tasks">
                    {
                        this.props.tasks.map(task =>
                            <div key={task.id} className="card">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        <h2>{task.taskName}</h2>
                                        <p>{task.taskDetail}</p>
                                        <p>{task.taskDate}</p>
                                        <Link className="nav-link" to={`/tasks/edit/${task.id}`}>Edit</Link>
                                        <button type="button" className="btn btn-success"
                                            onClick={() => this.props.deleteTask(task.id, "tasks")}
                                            >Delete</button>
                                    </h5>
                                </div>
                            </div>
                        )
                    }
                </section>
            </React.Fragment>
        )
    }
}