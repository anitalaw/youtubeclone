import React from 'react';

import { Paper, TextField } from '@material-ui/core';


class SearchBar extends React.Component {
    state = { 
        searchTerm: '',
    }

    handleSearch = (event) => {
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
                    <TextField fullWidth label="Search..." onChange={this.handleSearch}/>
                </form>
            </Paper>
        )
    }
}

export default SearchBar;