import { Link } from 'react-router-dom'
import React, { Component } from "react"


export default class TaskCard extends Component {

    state = {
        task: {},
        edit: false,
        // isToggleOn: true
    }

    componentDidMount = () => {
        const result = this.props.tasks.find(a => a.id === this.props.task.id) || {}

        const task = {
            ...result
        }

        this.setState({ task })
    }

    // handleClick() {
    //     this.setState(state => ({
    //       isToggleOn: !state.isToggleOn
    //     }));
    //   }

    render() {
        return (
            <div key={this.props.task.id} className="taskCard">
                <section className="tasks">
                    <div key={this.props.task.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                <p>{this.props.task.taskName}</p>
                                <p>{this.props.task.taskDetail}</p>
                                <p>{this.props.task.taskRecurring}</p>
                                <Link className="nav-link" to={`/tasks/edit/${this.props.task.id}`}>Edit</Link>
                                <button type="button" className="btn btn-success"
                                    onClick={() => this.props.deleteTask(this.props.task.id, "tasks")}
                                >Delete</button>
                                <input onClick={() => this.props.patch("tasks", { completed: true }, this.props.task.id)} className="taskCheckbox" name="completed" type="checkbox" />
                            </h5>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}