import React, { Component } from "react"
import { Link } from "react-router-dom"
class NoTodos extends Component {
    render() {
        return (
            <div className="noPostsContainer">
                <p style={{ fontSize: 'x-large' }}>No Todos List Available</p>
                <Link to="/create" >Create</Link>
            </div>
        )
    }
}
export default NoTodos