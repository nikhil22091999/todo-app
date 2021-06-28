import React, { Component } from 'react'
export default class EditPost extends Component {
    _isMounted = false;
    state = {
        title: '',
        completed: false,
        userId:"",
    }
    componentDidMount = () => {
        const id = this.props.match.params.id;
        this.fetchData(id);
    }
    componentWillUnmount() {
        this._isMounted = false;
    }
    fetchData = id => {
        this._isMounted = true;
        fetch(`http://jsonplaceholder.typicode.com/todos/${id}`)
        .then((response) => response.json())
            .then((response) => {
                console.log(response)
                this.setState({
                    title: response.title,
                    completed: response.completed,
                    userId:response.userId
                })
            });
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handletoggle = () => {
        this.setState({
            checked: !this.state.checked,
        })
        if (this.state.checked === true) {
            this.setState({completed:true })
        }
        else {
            this.setState({ completed:false})
        }
    }
   
    handleUpdateClick = (event) => {
        this._isMounted = true;
        event.preventDefault();
        const id = this.props.match.params.id;
        this.setState({
            submitted: true,
        })
        const { title, completed, userId } = this.state;
        fetch(`http://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                id: id,
                title: title,
                completed: completed,
                userId: userId,
              }),
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
        })
            .then(res => res.json())
            .then(res => {
                if (this._isMounted) {
                    console.log("Updated successfully",res)
                }
            })
    }
   
    render() {
    return (
        <form className="formFields" >
                
            <h5>Edit Todo</h5>
            <label htmlFor="title">Title</label>
            <input type="text" placeholder=" Title" value={this.state.title || ''}
                onChange={this.handleChange} name="title" className="inputTitleText" />
            <div style={{ marginTop: "2%" }}>
            <input type="checkbox" id="status" name="status" value={this.state.completed} onChange={this.handletoggle} checked={this.state.completed}></input>
            <label style={{marginLeft:"2%"}} htmlFor="status">Mark if the task is completed</label>
           </div>
                <div className="buttons">
                <button className="inputFieldButtons" onClick={this.handleUpdateClick}>Update</button>
            </div>
        </form >
    )}
}



