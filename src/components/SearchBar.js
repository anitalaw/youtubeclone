import React from 'react';

import { Paper, TextField } from '@material-ui/core';


class SearchBar extends React.Component {
    // class state here:
    state = { 
        searchTerm: '',
    }

    // methods. Write as regular function, you will have to bind. This is a work-around using arrow funct.
    handleSearch = (event) => {
        // OUTCOME OF THIS FUNCT: updates the searchTerm's State.
        // "this" will refer to the class and not the function's scope.
        // setState -> specify what we want to change. 
        console.log('this is state which changes', event.target.value)
        this.setState({ searchTerm: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { searchTerm } = this.state;
        const { onFormSubmit } = this.props;

        onFormSubmit(searchTerm);
        }


    render() {
        return(
            <Paper elevation={6} style={{ padding: '25px' }}>
                <form onSubmit={this.handleSubmit}>
                    <TextField fullWidth label="search..." onChange={this.handleSearch}/>
                </form>
            </Paper>
        )
    }
}

export default SearchBar;