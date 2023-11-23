import styled from "styled-components";

const UserMovieContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: auto;
  width: 25em;
  //background: red;
  border: 2px solid black;
  margin-bottom: 1em;
`;


const UserMovie = (props) => {
  return (
    <UserMovieContent>
      <h1>Title: {props.movie}</h1>
      <h1>Rating: {props.rating}</h1>
    </UserMovieContent>
  );
};
export default UserMovie;
