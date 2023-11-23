import axios from "axios";
import * as URLS from "./apiEndpoints";
import { useState } from "react";


const AddRating = () => {
  const [movie, setMovie] = useState("");
  const [rating, setRating] = useState("");
  const [user, setUser] = useState("");

  const ratings = [1, 2, 3, 4, 5];

  const updateRating = (event) => {
    console.log(event.target.value);
    setRating(event.target.value);
  };

  const updateSelectedMovie = (event) => {
    console.log(event.target.value);
    setMovie(event.target.value);
  };

  const updateUser = (event) => {
    console.log(event.target.value);
    setUser(event.target.value);
  };

  const handleSubmit = (event) => {
    console.log(event);
    addRating(user, rating, movie);
    event.preventDefault();
  };

  async function addRating(user, rating, movie) {
    try {
      const response = await axios.post(
        URLS.ADD_RATING_FOR_USER_MOVIE(user, rating, movie)
      );
      console.log("Added:", response.data);
    } catch (error) {
      console.log("Something went wrong:", error);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Add Rating</h2>
        <label>
          <input type="text" placeholder="Input userID" onChange={updateUser} />
        </label>
        <label>
          <input
            type="text"
            placeholder="Input Movie Name"
            onChange={updateSelectedMovie}
          ></input>
        </label>
        <label>
          <select value={rating} onChange={updateRating}>
            <option value=""> - Please select a rating - </option>
            {ratings.map((rating, index) => (
              <option key={index} value={rating}>
                {rating}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Add Rating</button>
      </form>
    </>
  );
}



export default AddRating;
