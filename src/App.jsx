import * as React from "react";
import styled from "styled-components";
import Banner from "./Banner";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserPage from "./UserPage";
import UserList from "./UserList";

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-height: 100vh;
`;


function App() {
  return (
    <Router>
      <MainContent>
        <Banner />
        <Switch>
          <Route path="/user">
            <UserPage /> 
          </Route>
          <Route path="/">
            <UserList /> 
          </Route>
        </Switch>
      </MainContent>
    </Router>
  );
}

export default App;
