// import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import TaskCard from './TaskCard'
// import "./Task.css"


export default class TaskList extends Component {

    render() {
        const filteredTasks = this.props.tasks.filter(task => task.completed !== true)
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
                    {
                            filteredTasks.map(task =>
                                <TaskCard key={task.id} task={task} {...this.props}/>
                            )
                        }
                </div>
            </React.Fragment>
        )
    }
}