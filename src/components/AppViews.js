import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import Login from './Login'
import DataManager from '../data/DataManager'
// import "./AppViews.css"

import TaskForm from './task/TaskForm'
import TaskList from './task/TaskList'
import TaskEdit from './task/TaskEdit'


export default class AppViews extends Component {


    isAuthenticated = () => sessionStorage.getItem("activeUser") !== null

    state = {
        tasks: [],
        users: []
    }

    addUser = (user, link) => DataManager.post(user, link)
        .then(users => this.setState({
            users: users
        }))
    addTask = (task, link) => DataManager.post(task, link)
        .then(() => DataManager.getAll("tasks"))
        .then(tasks => this.setState({
            tasks: tasks,
        }))
    editTask = (task, id, link) => DataManager.put(task, id, link)
        .then(() => DataManager.getAll("tasks"))
        .then(tasks => this.setState({
            tasks: tasks
        }))
    deleteTask = (id, link) => DataManager.removeAndList(id, link)
        .then(() => DataManager.getAll("tasks"))
        .then(tasks => this.setState({
            tasks: tasks
        }))


    componentDidMount() {
        const _state = {}
        DataManager.getAll("tasks").then(tasks => _state.tasks = tasks)
            .then(() => { this.setState(_state) })
    }


    render() {
        return (
            <React.Fragment>
                <div className="viewArea">

                    <Route path="/login" render={(props) => {
                        return <Login {...props}
                            addUser={this.addUser} />
                    }} />
                    <Route exact path="/tasks" render={(props) => {
                        if (this.isAuthenticated()) {
                            return <TaskList {...props}
                                tasks={this.state.tasks}
                                deleteTask={this.deleteTask}
                            />
                        } else {
                            return <Redirect to="/login" />
                        }
                    }} />
                    <Route path="/tasks/new" render={(props) => {
                        return <TaskForm {...props}
                            addTask={this.addTask} />
                    }} />
                    <Route path="/tasks/edit/:taskId(\d+)" render={(props) => {
                        return <TaskEdit {...props}
                            editTask={this.editTask} />
                    }} />
                </div>
            </React.Fragment>
        )
    }
}