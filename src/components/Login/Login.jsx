import React from 'react';
import axios from 'axios';
import { Buffer } from "buffer";


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      userId: '',
      errors: ''
    };
  } 
  
  userLogin = async() => {
    const encodedBase64Token = Buffer.from(`${this.state.username}:${this.state.password}`).toString('base64');
    const authorization = `Basic ${encodedBase64Token}`;
    await axios.get('https://cloud-api.10levels.ru/v1/login/basic', {
      headers: {
        Authorization: authorization
      }
    })
    .then((response) => {
      this.setState({userId: response.data.content.id});
      this.setState({errors: ''})
    })
    .catch((error) => {
      this.setState({errors: error.response.data})
      this.setState({userId: ''});
    }); 
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
      <> 
        <div id='form'>
            <label htmlFor="email">Email</label>
            <input type="email" id='email' name='email' value={this.state.username} onChange={this.getEmail} />
            <label htmlFor="pass">Пароль</label>
            <input type="passsword" id='pass' name='password' value={this.state.password} onChange={this.getPass} />
          <input type="button" value="Войти"  onClick={this.userLogin} />
          { this.state.userId &&
             <div> Идентификатор пользователя: {this.state.userId}</div>
          }
           { this.state.errors &&
             <div id='error'> {this.state.errors}</div>
          }
        </div>
      </>  
    );
  }
}
 
export default Login;