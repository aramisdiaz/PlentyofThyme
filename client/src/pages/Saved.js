import React, { Component } from "react";
import API from "../utils/API";
import Results from "../components/Results";

class Saved extends Component {
    state = {
        savedRecipes: [],
        savedIngredients: []
    }

    componentDidMount() {
        API.savedRecipes()
            .then(savedRecipes => this.setState({ savedRecipes: savedRecipes }))
            .catch(err => console.error(err));
    }


    render() {
        return (
            <div className="container">
                <h2>Your Pinned Recipes</h2>
                <Results recipes={this.state.savedRecipes} />
            </div>
            
        )
    }
}

export default Saved;