import { Box, Grid } from "@mui/material";
import React from "react";
import NavBar from "../../components/Navbar";
import PostComp from "../../components/Post";

function Post() {
  return (
    <Box sx={{ flexGrow: 1 }} className="App-header">
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <NavBar />
        </Grid>
        <Grid item xs={3}>
          <PostComp
            heading="Heading"
            desc="THe port desc THe port desc THe port desc THe port desc "
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStWsZkUmEt29ObFrfoTG0nuzpxc0WnMOmsrg&usqp=CAU"
          ></PostComp>
        </Grid>
        <Grid item xs={3}>
          <PostComp
            heading="Heading"
            desc="THe port desc THe port desc THe port desc THe port desc "
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStWsZkUmEt29ObFrfoTG0nuzpxc0WnMOmsrg&usqp=CAU"
          ></PostComp>
        </Grid>
        <Grid item xs={3}>
          <PostComp
            heading="Heading"
            desc="THe port desc THe port desc THe port desc THe port desc "
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStWsZkUmEt29ObFrfoTG0nuzpxc0WnMOmsrg&usqp=CAU"
          ></PostComp>
        </Grid>
        <Grid item xs={3}>
          <PostComp
            heading="Heading"
            desc="THe port desc THe port desc THe port desc THe port desc "
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStWsZkUmEt29ObFrfoTG0nuzpxc0WnMOmsrg&usqp=CAU"
          ></PostComp>
        </Grid>
        <Grid item xs={3}>
          <PostComp
            heading="Heading"
            desc="THe port desc THe port desc THe port desc THe port desc "
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStWsZkUmEt29ObFrfoTG0nuzpxc0WnMOmsrg&usqp=CAU"
          ></PostComp>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Post;
