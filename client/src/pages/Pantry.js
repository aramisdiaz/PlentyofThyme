import React, { Component } from "react";
import API from "../utils/API";
import Results from "../components/Results";

class Pantry extends Component {
    state = {
        savedIngredients: [],
    }

    componentDidMount() {
        API.savedIngredients()
            .then(savedIngredients => this.setState({ savedIngredients: savedIngredients }))
            .catch(err => console.error(err));
    }

    render() {
        return (
            <div className="container">
                <h2>Your Pantry</h2>
                <Results books={this.state.savedIngredients} />
            </div>
        )
    }
}

export default Pantry;