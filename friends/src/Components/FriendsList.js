import React from 'react';
import Loader from 'react-loader-spinner';
import { axiosWithAuth } from '../utils/AxiosWithAuth';
import styled from 'styled-components';

const StyledFriends= styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid rgb(210, 210, 210);
    border-radius: 5px;
    box-shadow: 10px 8px 12px -2px rgb(128, 127, 197);
    margin: 8px;
    padding: 12px;
    background-color: #8deb96;
    width: 50%;
    margin-left: 25%;
`


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
            <StyledFriends>
           { loading && <Loader type="Circles" color="#00bfff" height={100} width={100} />}
            {this.state.friends.map(friend => {
                return <div key={friend.id}>
                    <h3>{friend.name}</h3>
                    <h4>{friend.age} </h4>
                    <h4>{friend.email} </h4>
                </div>
            })}
            </StyledFriends>
        )
    }

}

export default FriendsList;