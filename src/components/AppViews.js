import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import Login from './Login'
import DataManager from '../data/DataManager'
import "bootstrap/dist/css/bootstrap.min.css"
// import "./AppViews.css"

import TaskForm from './task/TaskForm'
import TaskList from './task/TaskList'
import TaskEdit from './task/TaskEdit'
import CompletedTask from './task/CompletedTask'


export default class AppViews extends Component {


    isAuthenticated = () => sessionStorage.getItem("activeUser") !== null

    state = {
        tasks: [],
        users: [],
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
    patch = (link, tasks, id) => DataManager.patch(link, tasks, id)
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

                    <Route exact path="/" render={(props) => {
                        return <Login {...props}
                            addUser={this.addUser} />
                    }} />

                    {/* <Route path="/login" render={(props) => {
                        return <Login {...props}
                            addUser={this.addUser} />
                    }} /> */}
                    <Route exact path="/tasks" render={(props) => {
                        if (this.isAuthenticated()) {
                            return <TaskList {...props}
                                tasks={this.state.tasks}
                                deleteTask={this.deleteTask}
                                patch={this.patch}
                            />
                        } else {
                            return <Redirect to="/login" />
                        }
                    }} />
                    <Route exact path="/completed" render={(props) => {
                        if (this.isAuthenticated()) {
                            return <CompletedTask {...props}
                                tasks={this.state.tasks}
                                deleteTask={this.deleteTask}
                                patch={this.patch}
                            />
                        } else {
                            return <Redirect to="/login" />
                        }
                    }} />
                    <Route exact path="/tasks/new" render={(props) => {
                        return <TaskForm {...props}
                            addTask={this.addTask} />
                    }} />
                    <Route exact path="/tasks/edit/:taskId(\d+)" render={(props) => {
                        return <TaskEdit {...props}
                            tasks={this.state.tasks}
                            editTask={this.editTask}
                        />
                    }} />
                </div>
            </React.Fragment>
        )
    }
}