// import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import TaskCard from './TaskCard'
import "bootstrap/dist/css/bootstrap.min.css"
import "./taskCard.css"
import "./taskList.css"


export default class TaskList extends Component {

    render() {
        const filteredTasks = this.props.tasks.filter(task => task.complete !== true)
        const dailyTasks = filteredTasks.filter(task => task.taskRecurring === "daily")
        const weeklyTasks = filteredTasks.filter(task => task.taskRecurring === "weekly")
        const monthlyTasks = filteredTasks.filter(task => task.taskRecurring === "monthly")
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
                    <div className="allTasks">
                        <div className="taskColumn">
                            {
                                dailyTasks.map(task =>
                                    <TaskCard key={task.id} task={task} {...this.props} />
                                )
                            }
                        </div>
                        <div className="taskColumn">
                            {
                                weeklyTasks.map(task =>
                                    <TaskCard key={task.id} task={task} {...this.props} />
                                )
                            }
                        </div>
                        <div className="taskColumn">
                            {
                                monthlyTasks.map(task =>
                                    <TaskCard key={task.id} task={task} {...this.props} />
                                )
                            }
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}