import React, { Component } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import "./App.css";
import MyNav from "./components/Navbar";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <MyNav />
          <Switch>
            <Route exact path={["/", "/saved"]}>
              <Search />
            </Route>
            <Route exact path="/search">
              <Saved />
            </Route>
            <Route>
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
