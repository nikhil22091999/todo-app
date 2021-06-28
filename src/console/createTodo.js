import React, { Component } from 'react';

class CreatePosts extends Component {
    _isMounted = false;
    state = {
        title: '',
        completed: false,
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this._isMounted = true;
        this.setState({
            title: '',
            completed: false,
        })
        const { title, completed } = this.state;
        fetch(`http://jsonplaceholder.typicode.com/todos`, {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                completed: completed,
                userId: 1,
              }),
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
        })
            .then((response) => response.json())
            .then((json) =>
                console.log(json)
            //     this.setState({
            //     success: "Todo created successfully"
            // })
            );
          
    }
    componentWillUnmount() {
        this._isMounted = false;
    }
    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    render() {
        return (
                <div style={{padding: "25px 5px"}}>
                    < form onSubmit={this.handleSubmit} className="formFields" >
                        <h5>Create Todo</h5>
                        <label htmlFor="title"/>
                        <input type="text" placeholder="Title" value={this.state.title}
                            onChange={this.handleChange} name="title" id="title" className="inputTitleText" required />                       
                        <button className="inputFieldButton">Create</button>
                    </form >
                </div>
        )
    }
}
export default CreatePosts