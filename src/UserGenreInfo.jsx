import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import * as URLS from "./apiEndpoints";
import UserGenre from "./UserGenre";

const UserGenreInfo = () => {
  const [data, setData] = useState({ data: [] });
  // Get the userId from the URL
  let { userId } = useParams();

  useEffect(() => {
    // Fetch genre data based on the userId
    const fetchData = async () => {
      try {
        const result = await axios(URLS.FETCH_GENRES_BY_USER_ID(userId));
        setData(result); // Assuming result contains an array of genre data
      } catch (error) {
        console.error("Error fetching genres:", error);
        // Handle errors, such as setting data to an empty array or displaying an error message
      }
    };

    fetchData();
  }, [userId]); // Re-fetch data when userId changes

  // Render the list of genres using UserGenre component
  return (
    <>
      {data.data.map((genre, index) => (
        <UserGenre key={index} title={genre.title} />
      ))}
    </>
  );
};

export default UserGenreInfo;
