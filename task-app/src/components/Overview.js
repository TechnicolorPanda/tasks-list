import React, { Component } from 'react'

class Overview extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className = 'tasks'>
                <h2>{this.props.task}</h2>
            </div>
        )
    }
}

export default Overview;