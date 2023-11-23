import axios from "axios";
import * as URLS from "./apiEndpoints";
import { useState } from "react";


const AddGenre = () => {
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

  // Updates the user with changes in the user input field
  const updateUser = (event) => {
    console.log(event.target.value);
    setUser(event.target.value);
  };

  // Handles button click for submit
  const handleSubmit = (event) => {
    console.log(event);
    addGenre(user, genre);
    event.preventDefault();
  };

  //API request to add new genre
  async function addGenre(user, genre) {
    try {
      const response = await axios.post(URLS.ADD_GENRE_FOR_USER(user, genre));
      console.log("Added:", response.data);
    } catch (error) {
      console.log("Something went wrong:", error);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Add Genre</h2>
        <label>
          <input type="text" placeholder="Input userID" onChange={updateUser} />
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
        <button type="submit">Add Genre</button>
      </form>
    </>
  );
};

export default AddGenre;
