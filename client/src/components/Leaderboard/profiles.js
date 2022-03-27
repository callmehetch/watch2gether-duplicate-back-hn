import * as React from "react";
import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

const useStyles = makeStyles({
  root: {
    minWidth: "80%",
  },
});

export default function Profiles(props) {
  const [dense] = React.useState(false);
  const [secondary] = React.useState(false);
  const classes = useStyles();
  return (
    <Grid item xs={12}>
      <Demo>
        <List dense={dense}>
          {props.data.map((value, index) => {
            return (
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <Avatar src={value.img}>H</Avatar>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  className={classes.root}
                  primary={value.name}
                  secondary={secondary ? "Secondary text" : null}
                />
                <ListItemText
                  primary={value.score}
                  secondary={secondary ? "Secondary text" : null}
                />
              </ListItem>
            );
          })}
        </List>
      </Demo>
    </Grid>
  );
}
