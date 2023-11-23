import { useState } from "react";
import axios from "axios";
import * as URLS from "./apiEndpoints";

const AddMovie = () => {
  const [movie, setMovie] = useState('');
  const [genre, setGenre] = useState("");
  const [user, setUser] = useState("");

  const genres = [
    {
      id: 101,
      genre: "Superhero",
    },
    {
      id: 102,
      genre: "Quest",
    },
    {
      id: 103,
      genre: "Cartoon",
    },
    {
      id: 104,
      genre: "Humor",
    },
    {
      id: 105,
      genre: "Illegal Activities",
    },
    {
      id: 106,
      genre: "Factual Film",
    },
    {
      id: 107,
      genre: "Emotional",
    },
    {
      id: 108,
      genre: "Household",
    },
    {
      id: 109,
      genre: "Imagination",
    },
    {
      id: 110,
      genre: "Past Events",
    },
    {
      id: 111,
      genre: "Fearful",
    },
    {
      id: 112,
      genre: "Musical",
    },
    {
      id: 113,
      genre: "Enigma",
    },
    {
      id: 114,
      genre: "Love Story",
    },
    {
      id: 115,
      genre: "Futuristic",
    },
    {
      id: 116,
      genre: "Television Drama",
    },
    {
      id: 117,
      genre: "Suspense",
    },
    {
      id: 118,
      genre: "Battle",
    },
    {
      id: 119,
      genre: "Wild West",
    },
  ];

  // Updates the genre with changes in the genre input field
  const updateSelectedGenre = (event) => {
    console.log(event.target.value);
    setGenre(event.target.value);
  };

  // Updates the movie with changes in the movie input field
  const updateSelectedMovie = (event) => {
    console.log(event.target.value);
    setMovie(event.target.value);
  };

  //Updates user with changes in user input field
  function handleUserChange(event) {
    console.log(event.target.value);
    setUser(event.target.value);
  }

  async function addMovie(user, genre, movie) {
    try {
      const response = await axios.post(
        URLS.ADD_MOVIE_FOR_USER_AND_GENRE(user, genre, movie)
      );
      console.log("Added:", response.data);
    } catch (error) {
      console.log("Something went wrong:", error);
    }
  }
return (
  <>
    <form onSubmit={handleUserChange}>
      <h2>Add movie</h2>
      <label>
        <input
          type="text"
          placeholder="Input userID"
          onChange={handleUserChange}
        />
      </label>
      <label>
        <input
          type="text"
          placeholder="Input Movie Name"
          onChange={updateSelectedMovie}
        ></input>
      </label>
      <label>
        <select value={genre} onChange={updateSelectedGenre}>
          <option value=""> - Please select a genre - </option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Add Movie</button>
    </form>
  </>
);
}

export default AddMovie;
