import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";

import Login from './pages/Login';
import Signup from './pages/Signup';
import WaterPage from './pages/WaterPage';
import NutritionPage from './pages/NutritionPage';
import ExercisePage from './pages/ExercisePage';
import WeightPage from './pages/WeightPage';
import MoreInfoPage from './pages/MoreInfoPage';

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
          <NavBar />
          <Header />
          <Wrapper>
            <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/saved" component={Saved} />
            <Route exact path="/pantry" component={Pantry} />
            <Route exact path="/noMatch" component={NoMatch} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/water" component={WaterPage} />
            <Route exact path="/nutrition" component={NutritionPage} />
            <Route exact path="/exercise" component={ExercisePage} />
            <Route exact path="/weight" component={WeightPage} />
            <Route exact path="/Info" component={MoreInfoPage} />
          </Wrapper>

        </div>
      </Router>
    )
  };
};

export default App;