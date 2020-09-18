import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Login from './pages/Login';
import Signup from './pages/Signup';
import NoMatch from "./pages/NoMatch";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Pantry from "./pages/Pantry";

import "./App.css";


class App extends Component {

  render() {
    return (
      <Router>
        <div>

          <Header />
          <Wrapper>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/saved" component={Saved} />
            <Route exact path="/pantry" component={Pantry} />
            <Route exact path="/noMatch" component={NoMatch} />
          </Wrapper>

        </div>
      </Router>
    )
  };
};

export default App;