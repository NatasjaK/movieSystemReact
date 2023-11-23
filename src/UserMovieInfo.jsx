import React, { useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import * as URLS from "./apiEndpoints";
import UserMovie from "./UserMovie";

const UserMovieInfo = () => {
  // State to hold movie and rating data
  const [movies, setMovies] = useState([]);

  // Retrieve the userId from the URL
  let { userId } = useParams();

  React.useEffect(() => {
    // Fetch movies and ratings for a specific user
    const fetchData = async () => {
      const result = await axios(
        URLS.FETCH_MOVIES_AND_RATINGS_BY_USER_ID(userId)
      );

      setMovies(result);
    };

    fetchData();
  }, [userId]);

  // Render a list of movies with their respective ratings
  return (
    <>
      {movies.map((movie, index) => (
        <UserMovie key={index} movie={movie.movie} rating={movie.rating} />
      ))}
    </>
  );
};

export default UserMovieInfo;
