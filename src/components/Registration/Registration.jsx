import React from 'react';
import { TextField, Button, Typography, Box, Link } from '@mui/material';
import { userRegistration } from '../../api/userRegistration';
import { Profile } from '../Profile/Profile';

export class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        username: '',
        password: '',
        userId: '',
        error: ''
        };
    }

    userRegistrationCall = async () => {
        let userData = await userRegistration(
        this.state.username,
        this.state.password
        );
        this.setState(() => ({
        userId: userData.id,
        error: userData.error,
        username: '',
        password: ''
        }));
    };

    getData = (event, field) =>
        this.setState(() => ({ [field]: event.target.value }));

    render() {
        return (
        <>
            <Typography variant="h5" sx={{ textAlign: 'center', mt: 8 }}>
            Registration
            </Typography>
            <Box
            component="div"
            id="form"
            sx={{
                pt: 5,
                pb: 5,
                border: '1px solid black',
                borderRadius: '10px',
                width: 350,
                height: 200,
                mx: 'auto',
                mt: 2,
                display: 'block',
                textAlign: 'center'
            }}
            >
            <TextField
                id="email"
                label="Email"
                variant="outlined"
                size="small"
                margin="dense"
                onChange={(event) => this.getData(event, 'username')}
            />
            <TextField
                id="pass"
                label="Password"
                variant="outlined"
                size="small"
                margin="dense"
                onChange={(event) => this.getData(event, 'password')}
            />
            <Button
                sx={{ display: 'block', mt: 2, mx: 'auto', mb: 2 }}
                onClick={this.userRegistrationCall}
            >
                Зарегистрироваться
            </Button>
            <Button
                variant="contained"
                onClick={this.props.onclick}
            >
                Уже есть учетная запись
            </Button>
            </Box>
            {this.state.userId !== '' && (
            <> <Typography variant="h5" sx={{ textAlign: 'center', mt: 2 }}>
                Идентификатор пользователя: {this.state.userId}
            </Typography>
            <Profile />
            </>
            )}
            {this.state.error !== '' && (
            <Typography
                id="error"
                variant="h5"
                sx={{ textAlign: 'center', mt: 2, color: 'red' }}
            >
                {this.state.error}
            </Typography>
            )}
        </>
        );
    }
}
