import React from 'react';
import {userLogin} from '../API/userLogin';
// import { Box } from '@mui/system';
import { TextField, Button, Typography, Box } from '@mui/material';

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
      <>
      <Typography variant="h5" sx={{textAlign: 'center', mt: 8}}>
        Login
      </Typography>
      <Box component="div" id='form' sx={{ pt: 5, border: '1px solid black', borderRadius: '10px', width: 350, height: 200, mx: 'auto', mt: 2, display: 'block', textAlign: 'center', backgroundColor: '#123456'}}> 
        <TextField 
          id="email" 
          label="Email"
          variant="outlined" 
          value={this.state.username}
          onChange={event => this.getData(event, 'username')}
          size="small"
          margin="dense"
          />
          <TextField 
          id="pass" 
          label="Password"
          variant="outlined" 
          value={this.state.password}
          onChange={event => this.getData(event, 'password')}
          size="small"
          margin="dense"
          />
          <Button variant="contained" onClick={this.userLoginCall} sx={{display: 'block', mt: 2, mx: 'auto'}}>Войти</Button>
          
      </Box>
      { this.state.userId !== '' &&
        <Typography  variant="h5" sx={{textAlign: 'center', mt: 2}}>
          Идентификатор пользователя: {this.state.userId}
        </Typography> 
        }
      { this.state.error !== '' &&
        <Typography id='error' variant="h5" sx={{textAlign: 'center', mt: 2}}>
          {this.state.error}
        </Typography> 
      }
      
      </>
      
     
    );
  }
}
export default Login;