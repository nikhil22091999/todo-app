import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NoTodos from './noTodos'
import Todo from './todo';
class Dashboard extends Component {
    _isMounted = false;
    state = {
        todos: []
    }
    // addNewTodo = (todoData) => {
    //     this.setState(prevState => ({
    //         todos: [...prevState.todos, todoData],
    //     }));
    // };
    componentWillUnmount() {
        this._isMounted = false;
    }
    componentDidMount = () => {
        this.getTodos();
        setInterval(this.getTodos, 1000);
    }
    getTodos = () => {
        fetch("http://jsonplaceholder.typicode.com/todos")
            .then(response => response.json())
            .then(response =>
                this.setState({
                    todos: response
            })
        )
    }
    render() {
        const { todos } = this.state
        if (todos.length === 0) {
            return (
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: "space-between" }} className="postContainer">
                        <h4>Posts</h4>
                        <Link to="/create" className="link">Create</Link>
                    </div>
                  
                    <NoTodos />
                </div >
            )
        }
        else {
            return (
                <div className="container">
                    <Todo
                        todos={this.state.todos} />
                </div >
            )
        }
    }
}
export default Dashboard
