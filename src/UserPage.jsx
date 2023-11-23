import { useRouteMatch, Switch, Route } from "react-router-dom";

import UserMovieInfo from "./UserMovieInfo";
import UserGenreInfo from "./UserGenreInfo";
import AddGenre from "./AddGenre";
import AddMovie from "./AddMovie";
import AddRating from "./AddRating";

const UserPage = () => {
  let match = useRouteMatch();

  return (
    <Switch>
      {/* Route for a specific user's page */}
      <Route path={`${match.path}/:userId`}>
        <div>
          <h1>Genres</h1>
          <AddGenre />
          <UserGenreInfo />
          <h1>Movies</h1>
          <AddMovie />
          <AddRating />
          <UserMovieInfo />
        </div>
      </Route>
      {/* Default route when no specific user is chosen */}
      <Route path={match.path}>
        <h3>No user chosen</h3>
      </Route>
    </Switch>
  );
};

export default UserPage;
