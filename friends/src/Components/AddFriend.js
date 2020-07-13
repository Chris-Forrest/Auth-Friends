import React from 'react';
import { axiosWithAuth } from '../utils/AxiosWithAuth';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

const StyledForm = styled.form `
    display:flex;
    flex-direction:column;
    align-items:center;
    border:1px solid rgb(210, 210, 210 );
    border-radius: 5px;
    box-shadow: 10px 8px 12px -2px rgb(128, 127, 197);
    margin: 8px;
    padding: 12px;
    background-color:#8deb96;
    width: 50%;
    margin-left:25%;
`

class AddFriend extends React.Component {

    state = {
        loading:true,
        newFriend: {
            id: Date.now(),
            name:'',
            age:'',
            email:''
        }
    }

    componentDidMount(){
        this.isLoading();
    }

    isLoading = () => {
        this.setState({ loading: false})
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
        const {loading} = this.state;
        return(
            <StyledForm onSubmit={this.createNewFriend}>
                  { loading && <Loader type="Circles" color="#00bfff" height={100} width={100} />}
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

            </StyledForm>
        )
    }

}

export default AddFriend;