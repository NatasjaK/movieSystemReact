import styled from "styled-components";
import PropTypes from "prop-types";

const UserContent = styled.div`
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

const UserEmail = styled.p`
  padding: 1em;
`;


const User = (props) => {
  return (
    <UserContent>
      <h1>{props.name}</h1>
      <UserEmail>{props.email}</UserEmail>
    </UserContent>
  );
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default User;
