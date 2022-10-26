import React from 'react';
import { TextField, Button, Typography, Box, Link } from '@mui/material';

export class Registration extends React.Component {
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
          />
          <TextField
            id="pass"
            label="Password"
            variant="outlined"
            size="small"
            margin="dense"
          />
          <Button
            variant="contained"
            sx={{ display: 'block', mt: 2, mx: 'auto', mb: 2 }}
          >
            Зарегистрироваться
          </Button>
          <Link
            href="#"
            underline="none"
            color="inherit"
            variant="button"
            onClick={this.props.onclick}
          >
            {'Уже есть учетная запись'}
          </Link>
        </Box>
      </>
    );
  }
}
