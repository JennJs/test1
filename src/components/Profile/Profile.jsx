import React from 'react';
import { Box, Grid, Typography, createTheme, ThemeProvider, Button, autocompleteClasses, Divider } from '@mui/material';
import { red } from '@mui/material/colors';
import ModeIcon from '@mui/icons-material/Mode';
import Man2OutlinedIcon from '@mui/icons-material/Man2Outlined';
import Woman2OutlinedIcon from '@mui/icons-material/Woman2Outlined';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';

export class Profile extends React.Component {
  constructor(props) {
    super(props);
} 
  render() {
    return (
      <>
      <Box sx={{
        width: 500,
        backgroundColor: '#f7f7f7',
        mx: "auto",
        minWidth: '400px',
        pb: '20px',
        mb:'30px'
      }}>
        <Grid container sx={{
              minWidth: '400px',
              py: 2,
              border: '1px solid #f1f1f1',
              borderRadius: '5px',
              mt: 2,
            }}>
          <Grid item xs={2} md={2}></Grid>
          <Grid
           item
            xs={8}
            md={8}
          >  
              <Typography align="center" variant="h5" color='#2a2a2a'>
                Профиль
              </Typography>
          </Grid>
          <Grid item xs={2} md={2}></Grid>
        </Grid>
        <Grid container sx={{
              py: 2,
              border: '1px solid #f1f1f1',
              borderRadius: '5px',
              backgroundColor: '#ffffff',
              color:'#494848'
            }}>
          <Grid item >
            <Typography align="start" pl={'15px'} >
              Ваш идентификатор: <strong >{this.props.userId} </strong>
            </Typography>
            <Typography align="start" fontSize={'14px'} pl={'15px'} >
              Версия: 2.0.91
            </Typography>
          </Grid>
        </Grid>
        <Grid container sx={{
              py: 2,
              mt: 1,
              border: '1px solid #f1f1f1',
              borderRadius: '5px',
              backgroundColor: '#ffffff'
            }}>
          <Grid item xs={10} md={10} >
            <Typography align="start" pl={'15px'} fontSize='18px' color='#323232'>
              О приложении
            </Typography>
            <Typography align="start" fontSize={'14px'} pl={'15px'} pt={'15px'} color='#494848'>
              Язык
            </Typography>
          </Grid>
          <Grid item xs={2} md={2}  
            sx={{ 
              display: 'flex', 
              alignItems: 'flex-end', 
              justifyContent: 'flex-end',
              pr: '10px'
            }} >
            <ModeIcon sx={{
                color: '#5bc99c',
              }}>
              </ModeIcon> 
            </Grid>
        </Grid>
        <Grid container sx={{
              py: 2,
              mt: 1,
              border: '1px solid #f1f1f1',
              borderRadius: '5px',
              backgroundColor: '#ffffff'
            }}>
          <Grid item xs={6} md={6}  pb='13px' >
            <Typography align="start" pl={'15px'} fontSize='18px' color='#323232'>
              Основные параметры
            </Typography>
            <Typography align="start" fontSize={'14px'} pl={'15px'} pt={'15px'} color='#494848'>
             Имя
            </Typography>
          </Grid>
          <Grid item xs={6} md={6}  
            sx={{ 
              display: 'flex', 
              alignItems: 'flex-end', 
              justifyContent: 'flex-end',
              pr: '10px',
              pb: '13px'
            }} >
              <Typography align="start" pl={'15px'}  color='#323232' fontWeight='bold' pr='7px'>
                Andrew Yudkin
              </Typography>
              <ModeIcon sx={{
                color: '#5bc99c',
              }}>
              </ModeIcon> 
          </Grid> 
          <Divider variant="middle" width='470px' />
          <Grid container  pt='13px' pb='13px'>
            <Grid item xs={6} md={6} >
              <Typography align="start" fontSize={'14px'} pl={'15px'} pt={'15px'} color='#494848'>
                Пол
              </Typography>
            </Grid>
            <Grid item xs={6} md={6}  
              sx={{ 
                display: 'flex', 
                alignItems: 'flex-end', 
                justifyContent: 'flex-end',
                pr: '10px'
              }} >
              <Man2OutlinedIcon sx={{
                  color: '#5bc99c',
                  fontSize: '35px',
                  pr: '10px'
                }}>
                </Man2OutlinedIcon>  
                <Woman2OutlinedIcon sx={{
                  color: '#c8c8c8',
                  fontSize: '35px',
                }}>
                </Woman2OutlinedIcon> 
            </Grid>   
          </Grid> 
          <Divider variant="middle" width='470px' />
          <Grid container  pt='13px' pb='13px'>
            <Grid item xs={6} md={6} >
              <Typography align="start" fontSize={'14px'} pl={'15px'} pt={'15px'} color='#494848'>
                Дата рождения
              </Typography>
            </Grid>
            <Grid item xs={6} md={6}  
              sx={{ 
                display: 'flex', 
                alignItems: 'flex-end', 
                justifyContent: 'flex-end',
                pr: '10px'
              }} >
              <Typography align="start" pl={'15px'}  color='#323232' fontWeight='bold' pr='7px'>
                04.04.1984
              </Typography>
              <ModeIcon sx={{
                color: '#5bc99c',
              }}>
              </ModeIcon> 
            </Grid>   
          </Grid> 
          <Divider variant="middle" width='470px' />
          <Grid container  pt='13px' pb='13px'>
            <Grid item xs={6} md={6} >
              <Typography align="start" fontSize={'14px'} pl={'15px'} pt={'15px'} color='#494848'>
                Рост
              </Typography>
            </Grid>
            <Grid item xs={6} md={6}  
              sx={{ 
                display: 'flex', 
                alignItems: 'flex-end', 
                justifyContent: 'flex-end',
                pr: '10px'
              }} >
              <Typography align="start" pl={'15px'}  color='#323232' fontWeight='bold' pr='7px'>
                182 <span style={{color:'#c8c8c8', fontWeight:'normal'}}> см </span>
              </Typography>
              <ModeIcon sx={{
                color: '#5bc99c',
              }}>
              </ModeIcon> 
            </Grid>   
          </Grid>     
        </Grid>
        <Grid container sx={{
              py: 2,
              mt: 1,
              border: '1px solid #f1f1f1',
              borderRadius: '5px',
              backgroundColor: '#ffffff'
            }}>
          <Grid item xs={10} md={10} pb='13px'>
            <Typography align="start" pl={'15px'} fontSize='18px' color='#323232'>
              Единицы измерения
            </Typography>
            <Typography align="start" fontSize={'14px'} pl={'15px'} pt={'15px'} color='#494848'>
              Вес
            </Typography>
          </Grid>
          <Grid item xs={2} md={2}  
            sx={{ 
              display: 'flex', 
              alignItems: 'flex-end', 
              justifyContent: 'flex-end',
              pr: '10px',
              pb: '13px'
            }} >
            <ModeIcon sx={{
                color: '#5bc99c',
              }}>
              </ModeIcon> 
          </Grid>
            <Divider variant="middle" width='470px' />
          <Grid container  pt='13px' pb='13px'>
            <Grid item xs={6} md={6} >
              <Typography align="start" fontSize={'14px'} pl={'15px'} pt={'15px'} color='#494848'>
                Рост
              </Typography>
            </Grid>
            <Grid item xs={6} md={6}  
              sx={{ 
                display: 'flex', 
                alignItems: 'flex-end', 
                justifyContent: 'flex-end',
                pr: '10px'
              }} >
              <ModeIcon sx={{
                color: '#5bc99c',
              }}>
              </ModeIcon> 
            </Grid>   
          </Grid>     
        </Grid>
        <Grid container sx={{
              py: 2,
              mt: 1,
              border: '1px solid #f1f1f1',
              borderRadius: '5px',
              backgroundColor: '#ffffff'
            }}>
          <Grid item >
            <Typography align="start" pl={'15px'}  >
              КБЖУ
            </Typography>
          </Grid>
        </Grid>
        <Box  sx={{ 
          display: 'flex', 
          alignItems: 'flex-center', 
          justifyContent: 'flex-center',
          pt: '10px'

        }}> 
          <Button  sx={{width: '180px', mx:'auto'}} startIcon={<EmailRoundedIcon/>}>
            Техподдержка
          </Button> 
        </Box>
      </Box>
      </>
    );
  }
}
