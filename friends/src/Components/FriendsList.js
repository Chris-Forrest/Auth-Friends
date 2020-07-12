import React from 'react';
import Loader from 'react-loader-spinner';
import { axiosWithAuth } from '../utils/AxiosWithAuth';
import styled from 'styled-components';


class FriendsList extends React.Component {

    state = {
        friends: [],
        loading: false
    };


    componentDidMount(){
         this.getFriendsList();
       
    }

    getFriendsList = () => {
        this.setState({ loading: true})
        axiosWithAuth()
            .get("/friends")
            .then(res => {
                console.log('friends list data',res)
                this.setState({friends: res.data})
              //  setTimeout(() => {
                    this.setState({ loading: false});
              //  }, 1000)
            })
            .catch(err => console.log('error fetching friends list', err));

    }


    render() {
        const {loading} = this.state;
        return(
            <>
           { loading && <Loader type="Circles" color="#00bfff" height={100} width={100} />}
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