import React from 'react'
import UserInfoComp from '../../components/UserInfo';
import NavBar from '../../components/Navbar';
import { Box } from '@mui/material';
import { Grid } from '@mui/material';
import UserTotalPointComp from '../../components/UserTotalPoints';
import WatchListComp from '../../components/Watchlist';

function UserInfo() {
  return (
    
    <Box className="App-header" sx={{ minWidth: '100%', minHeight: '100%'}}>
      {/* <NavBar/>
      <div style={{minHeight: '100vh'}}>

      <div style={{marginBottom: 50, marginTop: 30}}> 
      <UserInfoComp  />
      </div>

      <div style={{marginTop: 100}}>
      <UserTotalPointComp />
      </div>
      </div> */}
      <NavBar/>
        <Grid container spacing={1} minHeight='100vh' maxWidth='320'>
        <Grid item xs={6}>
        <UserInfoComp  />
        <UserTotalPointComp />
        </Grid>
        <Grid item xs={6}>
        <WatchListComp />
        </Grid>
      </Grid>
      </Box>
  )
}

export default UserInfo;