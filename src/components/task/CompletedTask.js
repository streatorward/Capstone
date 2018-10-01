// import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import TaskCard from './TaskCard'
import "./taskCard.css"
import "./taskList.css"
import NavBar from '../nav/Navbar';



export default class CompletedTask extends Component {

    render() {
        let currentUser = JSON.parse(sessionStorage.getItem("activeUser"))
        const filteredTasks = this.props.tasks.filter(task => task.activeUser === currentUser.id)
        const completedTasks = filteredTasks.filter(task => task.complete === true)
        const dailyTasks = completedTasks.filter(task => task.taskRecurring === "daily")
        const weeklyTasks = completedTasks.filter(task => task.taskRecurring === "weekly")
        const monthlyTasks = completedTasks.filter(task => task.taskRecurring === "monthly")
        return (
            <React.Fragment>
                <div className="taskWrapper">
                <img src="slackerz.png" className="App-logo" alt="logo" />
                    <NavBar />
                    {
                        <div className="allTasks">
                            <div className="taskColumn">
                            <div className="titles">
                            <h1>Daily</h1>
                            </div>
                                {
                                    dailyTasks.map(task =>
                                        <TaskCard key={task.id} task={task} {...this.props} />
                                    )
                                }
                            </div>
                            <div className="taskColumn">
                            <div className="titles">
                            <h1>Weekly</h1>
                            </div>
                                {
                                    weeklyTasks.map(task =>
                                        <TaskCard key={task.id} task={task} {...this.props} />
                                    )
                                }
                            </div>
                            <div className="taskColumn">
                            <div className="titles">
                            <h1>Monthly</h1>
                            </div>
                                {
                                    monthlyTasks.map(task =>
                                        <TaskCard key={task.id} task={task} {...this.props} />
                                    )
                                }
                            </div>
                        </div>
                    }
                </div>
            </React.Fragment>
        )
    }
}