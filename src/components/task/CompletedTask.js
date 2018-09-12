// import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import TaskCard from './TaskCard'
// import "./Task.css"


export default class CompletedTask extends Component {

    render() {
        const filteredTasks = this.props.tasks.filter(task => task.completed === true)
        return (

            <React.Fragment>     
                <div>
                    </div>         
                    {
                            filteredTasks.map(task =>
                                <TaskCard key={task.id} task={task} {...this.props}/>
                            )
                        }
            </React.Fragment>
        )
    }
}