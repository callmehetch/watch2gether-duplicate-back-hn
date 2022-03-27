import React from "react";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Tabs from "@mui/material/Tabs";

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
    transition: "transform 0.15s ease-in-out",
    "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
  },
});

const ClickableCardComp = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <h2>{props.title}</h2>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
        >
          {props.movies.map((movie) => (
            <Link to="/chart">
              <img
                className={classes.root}
                height="200px"
                src={`${props.baseURL}${movie.poster_path}`}
                alt={movie.name}
              />
            </Link>
          ))}
          ;
        </Tabs>
      </Box>
    </React.Fragment>
  );
};

export default ClickableCardComp;
