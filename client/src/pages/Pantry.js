import React, { Component } from "react";
import API from "../utils/API";
import Ingredients from "../components/Ingredients";

class Pantry extends Component {
    state = {
        savedRecipes: [],
        ingredients: []
    }

     componentDidMount() {
        API.savedRecipes()
            .then(savedRecipes => this.setState({ savedRecipes: savedRecipes}))
            .catch(err => console.error(err));
    }

    render() {
        return (
            <div className="container">
                <h2>Your Pantry</h2>
                <Ingredients recipes={this.state.ingredients} />
                
            </div>
        )
    }
}

export default Pantry;