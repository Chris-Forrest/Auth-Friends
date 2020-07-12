import React from "react";
import axios from "axios";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", this.state.credentials)
      .then(res => {
        console.log('this is returned from the login',res);
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/protected");
      })
      .catch(err => console.log({ err }));
  };

    render(){
      return(
        <form onSubmit={this.login}>
            <label>username</label>
            <input 
            placeholder='Lambda School'
            type='text'
            name='username'
            value={this.state.credentials.username}
            onChange={this.handleChange}
            />
            <label>password</label>
            <input
            placeholder='i<3Lambd4'
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