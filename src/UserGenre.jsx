import styled from "styled-components";

const UserGenreContent = styled.div`
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

//Return genre title to UserGenreDetail
const UserGenre = (props) => {
  return (
    <UserGenreContent>
      <h1>{props.title}</h1>
    </UserGenreContent>
  );
};


export default UserGenre;
