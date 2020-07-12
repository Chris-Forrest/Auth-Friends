import React from 'react';
import Loader from 'react-loader-spinner';
import { axiosWithAuth } from '../utils/AxiosWithAuth';

class FriendsList extends React.Component {

    state = {
        friends: []
    };


    componentDidMount(){
        this.getFriendsList();

    }

    getFriendsList = () => {
        axiosWithAuth()
            .get("/friends")
            .then(res => {
                console.log('friends list data',res)
                this.setState({friends: res.data})
            })
            .catch(err => console.log('error fetching friends list', err));

    }


    render() {
        return(
            <>
            <h2>Friends List</h2>
            {this.state.friends.map(friend => {
                return <div key={friend.id}>
                    <h3>{friend.name}</h3>
                    <h4>{friend.age} </h4>
                    <h4>{friend.email} </h4>
                </div>
            })}
            </>
        )
    }

}

export default FriendsList;