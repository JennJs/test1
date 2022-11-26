import React from 'react';
import { TextField, Button, Typography, Box, Link } from '@mui/material';
import { userLogin } from '../../api/userLogin';
import { Profile } from '../Profile/Profile';

export class Login extends React.Component {
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
        let userData = await userLogin(this.state.username, this.state.password);
        this.setState(() => ({
        userId: userData.id,
        error: userData.error,
        username: '',
        password: ''
        }));
    };

    getData = (event, field) => this.setState(() => ({ [field]: event.target.value }));

    render() {
        return (
        <>
            <Typography variant="h5" sx={{ textAlign: 'center', mt: 8 }}>
            Login
            </Typography>
            <Box
            component="div"
            id="form"
            sx={{
                pt: 5,
                pb: 4,
                border: '1px solid black',
                borderRadius: '10px',
                width: 350,
                height: 200,
                mx: 'auto',
                mt: 2,
                mb: 3,
                display: 'block',
                textAlign: 'center'
            }}
            >
                <TextField
                    id="email"
                    label="Email"
                    variant="outlined"
                    value={this.state.username}
                    onChange={(event) => this.getData(event, 'username')}
                    size="small"
                    margin="dense"
                />
                <TextField
                    id="pass"
                    label="Password"
                    variant="outlined"
                    value={this.state.password}
                    onChange={(event) => this.getData(event, 'password')}
                    size="small"
                    margin="dense"
                />
                <Button
                    variant="contained"
                    onClick={this.userLoginCall}
                    sx={{ display: 'block', mt: 2, mx: 'auto', mb: 2 }}
                >
                    Войти
                </Button>
                <Button
                    color="inherit"
                    px='5px'
                    onClick={this.props.onclick}
                >
                    Зарегистрироваться
                </Button>
            </Box>
            {this.state.userId !== '' && (
            <Box> 
                <Typography variant="h5" sx={{ textAlign: 'center', mt: 2 }}>
                Идентификатор пользователя: {this.state.userId}
            </Typography>
            <Profile userId = {this.state.userId}/>
            </Box>
            )}
            {this.state.error !== '' && (
            <Typography
                id="error"
                variant="h5"
                sx={{ textAlign: 'center', mt: 2, color: 'red'}}
            >
                {this.state.error}
            </Typography>
            )}
        </>
        );
    }
}
