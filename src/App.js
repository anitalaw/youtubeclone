import React from 'react';

import { Grid } from '@material-ui/core';

import { SearchBar, VideoDetail, VideoList } from './components';

import youtube from './api/youtube'; //access to the axios instance 

class App extends React.Component {
    
    state = {
        allVideos: [],
        selectedVideo: null,
    }

    handleApiSearch = async (searchTerm) => {
        // where the youtube api is called.
        const apiResponse = await youtube.get('search', {
            params: {
                part: 'snippet',  //will return our videos. Refer to api doc. 
                maxResults: 5,
                key: 'AIzaSyAxD60uuQZIqX7DsIatVNY_DX3Q5Gz3kF0',
                q: searchTerm,
                }
        });
        // 1) FETCH THE DATA FROM YOUTUBE API
        // 2) THEN SET THE APP CLASS' STATE INTO state.allVideos
        this.setState({ allVideos: apiResponse.data.items, selectedVideo: apiResponse.data.items[0]});
        console.log('user input, youtube fetches this:', apiResponse)
    }


    render() {
        const { selectedVideo, allVideos } = this.state;
        // const { allVideos } = this.state;

        return(
            <Grid justify="center" container spacing={10}>
                <Grid item xs={12}>  
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit={this.handleApiSearch}/>
                            {/* this.handleSubmit refers to the method in the SearchBar.js dummy component */}
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetail video={selectedVideo}/>
                        </Grid>
                        <Grid item xs={4}>
                            {/* create a VideoList component */}
                            <VideoList videos={allVideos}/>
                        </Grid> 
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default App;