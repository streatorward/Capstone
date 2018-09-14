// import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import TaskCard from './TaskCard'
import "./taskCard.css"
import "./taskList.css"


export default class CompletedTask extends Component {

    render() {
        const filteredTasks = this.props.tasks.filter(task => task.complete === true)
        const dailyTasks = filteredTasks.filter(task => task.taskRecurring === "daily")
        const weeklyTasks = filteredTasks.filter(task => task.taskRecurring === "weekly")
        const monthlyTasks = filteredTasks.filter(task => task.taskRecurring === "monthly")
        return (

            <React.Fragment>
                <div>
                </div>
                {
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
                }
            </React.Fragment>
        )
    }
}