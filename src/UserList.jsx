import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


import User from "./User";
import * as URLS from "./apiEndpoints";

const UserListContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetching user data from the server
    const fetchData = async () => {
      try {
        const response = await axios.get(URLS.FETCH_USERS);
        setUsers(response.data); // Assuming response.data is an array of users
      } catch (error) {
        console.error("Error fetching users:", error);
        // Handle errors here, such as setting users to an empty array or showing an error message
      }
    };
    fetchData();
  }, []);
  // Render the list of users with links to their individual pages
  return (
    <UserListContent>
      {users.map((user) => (
        <Link to={`/user/${user.id}`} key={user.id}>
          <User name={user.name} email={user.email} />
        </Link>
      ))}
    </UserListContent>
  );
};


export default UserList;
