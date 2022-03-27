import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { makeStyles } from "@material-ui/core";
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const useStyles = makeStyles({
  button: {
    color: "black",
    backgroundColor: "skyblue",
  },
});

const HeadItem = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#642D3C',
  ...theme.typography.body1,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: 'white',
}));


export default function WatchListComp() {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1,
        marginTop:5,
        marginLeft:4,
        marginRight:4,
          border:1,
          borderRadius:1,
          borderColor:'black' }}>
     <Grid container spacing={1}>
        <Grid item xs={12}>
          <HeadItem>Watch Groups List</HeadItem>
        </Grid>
        <Grid item xs={12}>
    <List sx={{ width: '100%', bgcolor: 'pink' , color: 'black'}}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
        <ListItem
          key={value}
          disableGutters   
          disableRipple
          disableTouchRipple
          alignItems='flex-start'
          sx={{border:1}}
        >
          <ListItem>
          <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
          <ListItemText sx={{ color: 'black',
                              boxShadow: 1,
                              border:2, 
                              borderRadius:5, 
                              borderColor: 'brown', 
                              padding:1,
                              margin:2,
                              textAlign: 'center' }} 
                              primary={`Watch Group ${value}`}/>
          <ListItemText sx={{ color: 'black',
                              boxShadow: 1,
                              border:2, 
                              borderRadius:5, 
                              borderColor: 'brown', 
                              padding:1,
                              margin:2,
                              textAlign: 'center' }} 
                              primary={`Schedule Detail  ${value}`}/>
          
          <Button variant="contained" className={classes.button}>Join</Button>
          </ListItem>
        </ListItem>
         
      ))}
    </List>
    </Grid>          
    </Grid>
    </Box>
  );
}