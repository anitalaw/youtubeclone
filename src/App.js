import React from 'react';

import { Grid } from '@material-ui/core';

import { SearchBar, VideoDetail } from './components';

import youtube from './api/youtube'; //access to the axios instance 

class App extends React.Component {
    handleApiSearch = async (searchTerm) => {
        // where the youtube api is called.
        const apiResponse = await youtube.get('search', {
            params: {
                part: 'snippet',  //will return our videos. Refer to api doc. 
                maxResults: 5, //specify how many results we want
                key: 'AIzaSyAxD60uuQZIqX7DsIatVNY_DX3Q5Gz3kF0',
                q: searchTerm,
                }
        });
        console.log('here', apiResponse)
    }


    render() {
        return(
            <Grid justify="center" container spacing={10}>
                <Grid item xs={12}> 
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit={this.handleApiSearch}/>
                            {/* this.handleSubmit refers to the method in the SearchBar.js dummy component */}
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetail />
                        </Grid>
                        <Grid item xs={4}>
                            {/* VIDEO LIST */}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default App;