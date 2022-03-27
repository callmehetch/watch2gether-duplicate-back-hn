import React from "react";
import ContentPageInfo from "../../containers/ContentPageInfo";

const ContentPage = (props) => {
  return (
    <ContentPageInfo />
    // <Grid container className={classes.root}>
    //   <Grid container spacing={2}>
    //     {/*-------------- image container -----------*/}

    //     <Grid item xs={2}>

    //       <img
    //         className={classes.image}
    //         height="300px"
    //         src={`${BASE_URL}${data.poster_path}`}
    //         alt={data.name}
    //       />

    //     </Grid>
    //     {/*-------------- Description container -----------*/}
    //     <Grid item xs={10} alignItems="center">
    //     <Box pt={8}>
    //       <Typography variant="h3">{data.title}</Typography>
    //       </Box>

    //       <Box pt={1}>
    //       {data.genres &&
    //         data.genres.map((genre) => (
    //           <Chip label={genre.name} variant="outlined" color="primary"/>
    //         ))}
    //       </Box>

    //       <Box pt={2}>
    //         <Typography>{data.overview}</Typography>
    //       </Box>
    //     </Grid>
    //     <Grid item></Grid>
    //     <Grid item></Grid>
    //     <Grid item></Grid>
    //   </Grid>
    // </Grid>
  );
};

export default ContentPage;
