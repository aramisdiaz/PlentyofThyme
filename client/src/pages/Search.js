import React from "react";
import Form from "../components/Form";
import Results from "../components/Results";
import API from "../utils/API";

class Search extends React.Component {
    state = {
        value: "",
        recipes: []
    };

    componentDidMount() {
        this.searchRecipe();
    }

    makeRecipe = recipeData => {
        return {
            _id: recipeData.recipe.label+recipeData.recipe.source,
            servings: recipeData.recipe.yield,
            label: recipeData.recipe.label,
            ingredients: recipeData.recipe.ingredients,
            source: recipeData.recipe.source,
            image: recipeData.recipe.image,
            link: recipeData.recipe.url
        }
    }

    
    
// ***
//res => this.setState({ recipes: res.data.hits.map(recipeData => this.makeRecipe(recipeData))}))

    searchRecipe = query => {
        API.getRecipe(query)
            .then(
                //console.log(res.data),
                res => this.setState({ recipes: res.data.hits.map(recipeData => this.makeRecipe(recipeData))}))
            .catch(err => console.error(err));
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchRecipe(this.state.search);
    };

    render() {
        return (
            <div>
                <Form
                    search={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />
                <div className="container">
                    <h2>Results</h2>
                    <Results recipes={this.state.recipes}/>
                </div>
            </div>
        )
    }
}

export default Search;