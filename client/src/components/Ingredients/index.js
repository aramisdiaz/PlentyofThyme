import React, { Component } from "react";
import API from "../../utils/API";

class Ingredients extends Component {


    state = {
        savedRecipes: [],
        ingredients: []
    }

    componentDidMount() {
        API.savedRecipes()
            .then(savedRecipes => this.setState({ savedRecipes: savedRecipes }))
            .catch(err => console.error(err));
    }

    handleSave = recipe => {

        if (this.state.savedRecipes.map(recipe => recipe._id).includes(recipe._id)) {
            API.deleteRecipe(recipe._id)
                .then(deletedRecipe => this.setState({ savedRecipes: this.state.savedRecipes.filter(recipe => recipe._id !== deletedRecipe._id) }))
                .catch(err => console.error(err));
        } else {
            API.saveRecipe(recipe)
                .then(savedRecipe => this.setState({ savedRecipes: this.state.savedRecipes.concat([savedRecipe]), ingredients: this.state.ingredients.concat([savedRecipe.ingredients]) }))
                .catch(err => console.error(err));
        }
    }


    render() {
        return (
            <div>
                {!this.props.recipes.length ? (
                    <h1 className="text-center">No Results to Display</h1>
                ) : (
                        <div>
                            {this.props.recipes.map(result => (
                                <div className="card mb-3" key={result._id}>
                                    <div className="row">

                                        <div className="col-md-10">
                                            <div className="card-body">                   
                                                {result.ingredients.map(res => (

                                                <h5 className="card-title">
                                                    {res.text}
                                                    </h5>

                                                    

                                                ))}
                                                
                                                <div>

                                                    <button onClick={() => this.handleSave(result)} className="btn badge-pill btn-outline-danger mt-3 ml-3" >
                                                        {this.state.savedRecipes.map(recipe => recipe._id).includes(result._id) ? "Remove" : "Keep"}
                                                    </button>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
            </div>
        )
    }

}


export default Ingredients;