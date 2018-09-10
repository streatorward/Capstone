import React, { Component } from "react"
import Navbar from "./nav/Navbar"
import AppViews from "./AppViews"



class Capstone extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <AppViews />
            </React.Fragment>
        )
    }
}

export default Capstone
