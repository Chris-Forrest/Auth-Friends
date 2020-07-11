import React from 'react';

class Login extends React.Component {

    state = {
        credentials: {
            username:'',
            password:''
        }
    }

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials, 
                    [e.target.name]: e.target.value
                
            }
        })
    }


    render(){
      return(
        <form>
            <label>username</label>
            <input 
            placeholder='username'
            type='text'
            name='username'
            value={this.state.credentials.username}
            onChange={this.handleChange}
            />
            <label>password</label>
            <input
            placeholder='password'
            type='text'
            name='password'
            value={this.state.credentials.password}
            onChange={this.handleChange}
            />
            <button>Log In</button>
        </form>
      )
    }

}

export default Login;