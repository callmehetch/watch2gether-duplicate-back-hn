import ClickableCard from "../../containers/ClickableCard";
import Grid from "@mui/material/Grid";
import NavBar from "../../components/Navbar";
import requests from "../../requests";

function HomePage() {
  return (
    <Grid container spacing={2} className="App-header">
      <Grid container>
        <Grid item xs={12}>
          <NavBar />
        </Grid>
        <Grid item xs={12} className="App-header">
          <ClickableCard
            title="Trending Now"
            fetchURL={requests.fetchTrending}
          />
        </Grid>
        <Grid item xs={12} className="App-header">
          <ClickableCard title="Top Rated" fetchURL={requests.fetchTopRated} />
        </Grid>
        <Grid item xs={12} className="App-header">
          <ClickableCard
            title="Action Movies"
            fetchURL={requests.fetchActionMovies}
          />
        </Grid>
        <Grid item xs={12} className="App-header">
          <ClickableCard
            title="Comedy Movies"
            fetchURL={requests.fetchComedyMovies}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default HomePage;
