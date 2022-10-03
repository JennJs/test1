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
    this.setState({userId: userData.id, error: userData.error, username: '', password: ''});
  }
  
  getData = (event , field) => this.setState(() => ({[field]: event.target.value}));

  render() { 
    return ( 
      <div id='form'>
        <label htmlFor="email">Email</label>
        <input type="email" id='email' name='email' value={this.state.username} onChange={event => this.getData(event, 'username')} />
        <label htmlFor="pass">Пароль</label>
        <input type="passsword" id='pass' name='password' value={this.state.password} onChange={event => this.getData(event, 'password')} />
        <input type="button" value="Войти"  onClick={this.userLoginCall} />
        { this.state.userId !== '' &&
          <div> Идентификатор пользователя: {this.state.userId}</div>
        }
        { this.state.error !== '' &&
          <div id='error'> {this.state.error}</div>
        }
      </div>
    );
  }
}
export default Login;