import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../config/index";
import axios from "../../axios";
import requests from "../../requests";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import { Box, Button, Typography } from "@mui/material";
import Chip from "@mui/material/Chip";
import WatchListComp from "../../components/Watchlist";
import Chart from "../../containers/Chart";
import NavBar from "../../components/Navbar";
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import EventIcon from "@mui/icons-material/Event";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#2b282a",
    color: "White",
  },
  image: {
    maxWidth: 300,
    transition: "transform 0.15s ease-in-out",
    "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
  },
});

const ContentPageInfo = (props) => {
  const [data, setData] = useState({});
  const classes = useStyles();
  // const fetchURL = requests.fetchURL;

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTopRated);
      setData(request.data);
      return request;
    }
    fetchData();
  }, []);
  return (
    <div>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <NavBar />
        </Grid>
        <Grid container spacing={2}>
          {/*-------------- image container -----------*/}

          <Grid item xs={2}>
            <img
              className={classes.image}
              height="300px"
              src={`${BASE_URL}${data.poster_path}`}
              alt={data.name}
            />
          </Grid>
          {/*-------------- Description container -----------*/}
          <Grid item xs={10} alignItems="center">
            <Box pt={8}>
              <Typography variant="h3">{data.title}</Typography>
            </Box>

            <Box pt={1}>
              {data.genres &&
                data.genres.map((genre) => (
                  <Chip label={genre.name} variant="outlined" color="primary" />
                ))}
            </Box>

            <Box pt={2}>
              <Typography>{data.overview}</Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid item>
          <Box display="flex" justifyContent="flex-end">
            <Button variant="outlined">
              <EventIcon />
              Add to Schedule
            </Button>
          </Box>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Chart />
          </Grid>
          <Grid item xs={12}>
            <WatchListComp />
          </Grid>
          <Grid item></Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ContentPageInfo;
