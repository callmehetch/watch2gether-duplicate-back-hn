// reference: https://github.com/akashyap2013/LeaderBoard_React_App

import React, { useState } from "react";
import Profiles from "./profiles";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { data } from "./database.js";

export default function Board() {
  const [period, setPeriod] = useState(0);

  const handleClick = (e) => {
    setPeriod(e.target.dataset.id);
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h3">Leaderboard</Typography>
      </Grid>
      <Grid item xs={12}>
        <Stack spacing={2} direction="row">
          <Button variant="outlined" onClick={handleClick} data-id="7">
            7 Days
          </Button>
          <Button variant="outlined" onClick={handleClick} data-id="30">
            30 Days
          </Button>
          <Button variant="outlined" onClick={handleClick} data-id="0">
            All-time
          </Button>
        </Stack>
      </Grid>
      <Grid item>
        <Grid container>
          <Profiles data={between(data, period)} />
        </Grid>
      </Grid>
    </Grid>
  );
}

function between(data, between) {
  const today = new Date();
  const previous = new Date(today);
  previous.setDate(previous.getDate() - (between + 1));

  let filter = data.filter((val) => {
    let userDate = new Date(val.dt);
    console.log("BETWEEN VALUE", between);
    let duration = parseInt(between);
    if (duration === 0) return val;
    return previous <= userDate && today >= userDate;
  });

  // sort with asending order
  return filter.sort((a, b) => {
    if (a.score === b.score) {
      return b.score - a.score;
    } else {
      return b.score - a.score;
    }
  });
}
