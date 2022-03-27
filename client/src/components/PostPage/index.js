import React from "react";
import { Avatar, Grid } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ImageIcon from "@mui/icons-material/Image";

const PostPageComp = () => {
  const styleObjHeading = {
    fontSize: 45,
    color: "rgb(153 163 204)",
    fontFamily: "Monospace",
  };

  const padding = {
    padding: 0,
  };

  const styleObjPara = {
    fontSize: 20,
    color: "rgb(153 163 204)",
    fontFamily: "Monospace",
    alignItems: "end",
  };

  const styleObjAuth = {
    fontSize: 22,
    color: "rgb(153 163 204)",
    fontFamily: "Arial, Helvetica, sans-serif",
  };

  return (
    <Grid container spacing={5} p={2} minHeight={300}>
      <Grid item xs={6}>
        <img
          src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/01/TheBatman6963-Womens.jpg?q=50&fit=crop&w=750&dpr=1.5"
          alt="BigCo Inc. logo"
        />
      </Grid>
      <Grid item xs={6}>
        <h2 style={styleObjHeading}>THE BATMAN</h2>

        <p style={styleObjPara}>
          Batman ventures into Gotham City's underworld when a sadistic killer
          leaves behind a trail of cryptic clues. As the evidence begins to lead
          closer to home and the scale of the perpetrator's plans become clear,
          he must forge new relationships, unmask the culprit and bring justice
          to the abuse of power and corruption that has long plagued the
          metropolis.
        </p>

        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            pt: 8,
          }}
        >
          <ListItem sx={{ alignItems: "left" }} style={padding}>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="AUTHOR"
              disableTypography="false"
              style={styleObjAuth}
            />
            <ListItemText style={styleObjPara}>2022, Aug 10:56</ListItemText>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
};

export default PostPageComp;
