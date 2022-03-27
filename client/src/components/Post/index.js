import React from "react";
import { Card } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, IconButton } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

const PostComp = (props) => {
  return (
    <Box pl={1} sx={{ width: 370 }}>
      <Card sx={{ maxWidth: 400 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={props.image}
            alt="green iguana"
          />
          <CardContent>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={20}>
              <Avatar
                alt="Remy Sharp"
                xs={6}
                src="/static/images/avatar/1.jpg"
              />

              <h4 style={{ paddingTop: "5%" }}> 2021, Dec 12:43 PM</h4>
            </Stack>

            <Typography gutterBottom variant="h5" component="div" mt={2} pt={1}>
              {props.heading}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {props.desc}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button variant="contained" href="/PostPage">
            View post
          </Button>
          <IconButton style={{ marginLeft: 200 }}>
            <ThumbUpIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
};

export default PostComp;
