import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import './App.css';
import Main from './components/Main/Main';
import NoMatch from './components/NoMatch/NoMatch';
import PostDetail from './components/PostDetail/PostDetail';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/main">
        <Main></Main>
        </Route>
        <Route exact path = "/">
          <Main></Main>
        </Route>
        <Route path = "/PostDetail/:postId">
        <PostDetail></PostDetail>
        </Route>
        <Route path = "*">
        <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
