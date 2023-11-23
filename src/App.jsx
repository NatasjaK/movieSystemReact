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
      {/* Main container for the entire application */}
      <MainContent>
        <Banner />
        <Switch>
          {/* Route for '/user' path, renders UserPage component */}
          <Route path="/user">
            <UserPage />
          </Route>
          {/* Default route for other paths, renders UserList component */}
          <Route path="/">
            <UserList />
          </Route>
        </Switch>
      </MainContent>
    </Router>
  );
}

export default App;
