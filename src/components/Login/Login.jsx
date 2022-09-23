import React from 'react';
import {userLogin} from '../API/userLogin';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      userId: '',
      error: ''
    };
  } 
  
  userLoginCall = async () => {
    let userData = await userLogin( this.state.username, this.state.password);
    this.state.userId = userData.id;
    this.state.error = userData.error;
    this.setState({username: '', password: ''});
  }
  
  getEmail = (event) => {
    this.setState({username: event.target.value });
  }

  getPass = (event) => {
    this.setState({password: event.target.value });
  }

  render() { 
    return ( 
      <div id='form'>
        <label htmlFor="email">Email</label>
        <input type="email" id='email' name='email' value={this.state.username} onChange={this.getEmail} />
        <label htmlFor="pass">Пароль</label>
        <input type="passsword" id='pass' name='password' value={this.state.password} onChange={this.getPass} />
        <input type="button" value="Войти"  onClick={this.userLoginCall} />
        { this.state.userId &&
          <div> Идентификатор пользователя: {this.state.userId}</div>
        }
        { this.state.error &&
          <div id='error'> {this.state.error}</div>
        }
      </div>
    );
  }
}
export default Login;