import React, { useState, useEffect } from "react";
import axios from "../../axios";
import ClickableCardComp from "../../components/ClickableCard";

const base_URL = "https://image.tmdb.org/t/p/original/";

function ClickableCard({ title, fetchURL }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  return <ClickableCardComp title={title} baseURL={base_URL} movies={movies} />;
}

export default ClickableCard;
