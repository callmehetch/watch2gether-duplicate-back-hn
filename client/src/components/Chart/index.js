//This function returns a chart component
// It is a line graph that represents rating of tv shows and movies

import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Grid } from "@mui/material";
import options from "./chartOptions";

const ChartComp = (props) => {
  return (
    <Grid>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </Grid>
  );
};

export default ChartComp;
