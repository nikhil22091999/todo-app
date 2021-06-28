import React, { Component } from 'react';
import { Link } from 'react-router-dom';
function searchingFor(search) {
    return function (x) {
        return x.title.toLowerCase().includes(search.toLowerCase()) || !search
    }
}
export default class Todo extends Component {
    state = {
        id: '',
        search: '',
    }
    handleDeleteClick = () => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${this.state.id}`, {
            method: 'DELETE',
        })
        .then((response) => response.json())
        .then((json) =>
          console.log("deleted successfully")
        )

    }
    render() {
        const { todos } = this.props
        const { search } = this.state
        return (
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: "space-between" }} className="postContainer">
                        <h4>Todo List</h4>
                        <Link to="/create" className="link">Create</Link>
                    </div>
                    <input type="text" className="searchField" placeholder="Search by title" value={this.state.search}
                        onChange={(event) => this.setState({
                            search: event.target.value
                        })}
                        name="search" />
                    < table id="table" >
                        <thead >
                            <tr >
                                <th>id</th>
                                <th>Title</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody >
                            {
                                todos.filter(searchingFor(search)).map((todo, id) => (
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.title}</td>
                                        {todo.completed === true ? (
                  <td
                    style={{
                      backgroundColor: "rgba(209, 250, 229)",
                      color: "rgba(6, 95, 70)",
                    }}
                  >
                    Completed
                  </td>
                ) : (
                  <td
                    style={{
                      backgroundColor: "rgba(254, 243, 199)",
                      color: "rgba(146, 64, 14)",
                    }}
                  >
                    Pending
                  </td>
                )}
                                        <td>
                                            <Link to={`/edit/${todo.id}`} className="editLink" style={{textDecoration:"none",listStyle:"none",marginRight:"5px"}}>Edit</Link>
                                            <button onClick={this.handleDeleteClick} style={{border:"none",color:"red",background:"transparent",fontWeight:"bold",fontSize:"14px"}}>Delete</button>
                                        </td>
                                        
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table >
                </div>
            )
    }
}
