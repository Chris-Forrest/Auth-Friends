import React from 'react';
import { axiosWithAuth } from '../utils/AxiosWithAuth';

class AddFriend extends React.Component {

    state = {
        newFriend: {
            id: Date.now(),
            name:'',
            age:'',
            email:''
        }
    }

    handleChange = e => {
       this.setState({
        newFriend: {
            ...this.state.newFriend,
            [e.target.name]: e.target.value
        }
      });
    };

    createNewFriend = e => {
        e.preventDefault();
        axiosWithAuth()
            .post("/friends", this.state.newFriend)
            .then(res => {
                this.setState({ friends: res.data})
                this.props.history.push("/protected")
            })
            .catch(err => console.log('error posting new friend', err))
    }

    render(){
        return(
            <form onSubmit={this.createNewFriend}>
                <h2>Add A friend </h2>
                <label>Name</label>
                <input
                    name='name'
                    type='text'
                    onChange={this.handleChange}
                    value={this.state.newFriend.name}
                    />

                <label>Age</label>
                <input 
                    name='age'
                    type='text'
                    onChange={this.handleChange}
                    value={this.state.newFriend.age}
                    />

                <label>Email</label>
                <input  
                    name='email'
                    type='text'
                    onChange={this.handleChange}
                    value={this.state.newFriend.email}
                    />

                <button>Add New Friend</button>

            </form>
        )
    }

}

export default AddFriend;