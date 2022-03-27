import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'pink',
    ...theme.typography.body1,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: 'black',
  }));

  const HeadItem = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#642D3C',
    ...theme.typography.body1,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: 'white',
  }));

function UserInfoComp() {
  return (
    <Box sx={{ flexGrow: 1,
      marginTop:5,
      marginLeft:4,
      borderRadius:1,
      border:1,
      borderColor:'black' }}>
        <Grid container spacing={1}>
        <Grid item xs={12}>
          <HeadItem>UserInfo</HeadItem>
        </Grid>
        <Grid item xs={6}>
          <Item>First Name:</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>Sangram</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>Last Name:</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>More</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>Email:</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>sangrammore1997@gmail.com</Item>
        </Grid>        
      </Grid>
  </Box>
  )
}

export default UserInfoComp;