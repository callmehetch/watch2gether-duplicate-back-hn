import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#642D3C',
    ...theme.typography.body1,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: 'white',
  }));

  const PointItem = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'pink',
    ...theme.typography.body1,
    padding: theme.spacing(1),
    textAlign: 'center',
    paddingTop: 50,
    height: 55,
    color: 'black',
  }));  

function UserTotalPointComp() {
  return (
    <Box sx={{ flexGrow: 1,
        marginTop:10,
        marginLeft:4,
        borderRadius:1,
        border:1,
        borderColor:'black'}}>
        <Grid container spacing={1}>
        <Grid item xs={12}>
          <Item>Total Points:</Item>
        </Grid>
        <Grid item xs={6} mx='auto'>
          <PointItem>420</PointItem>      
      </Grid>
      </Grid>
  </Box>
  )
}

export default UserTotalPointComp;