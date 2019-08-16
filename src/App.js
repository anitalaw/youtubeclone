import React from 'react';

import { Grid } from '@material-ui/core';

import { SearchBar, VideoDetail, VideoList } from './components';

import youtube from './api/youtube';

class App extends React.Component {
    
    state = {
        allVideos: [],
        selectedVideo: null,
    }

    componentDidMount() {
        this.handleApiSearch('josh clopton')
    }

    handleApiSearch = async (searchTerm) => {
        // Youtube api is called.
        const apiResponse = await youtube.get('search', {
            params: {
                part: 'snippet',  //will return our videos. Refer to api doc. 
                maxResults: 5,
                key: 'AIzaSyAxD60uuQZIqX7DsIatVNY_DX3Q5Gz3kF0',
                q: searchTerm,
                }
        });
        this.setState({ allVideos: apiResponse.data.items, selectedVideo: apiResponse.data.items[0]});
        console.log('user input, youtube fetches this:', apiResponse)
    }

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }

    render() {
        const { selectedVideo, allVideos } = this.state;

        return(
            <Grid justify="center" container spacing={10}>
                <Grid item xs={12}>  
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit={this.handleApiSearch}/>
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetail video={selectedVideo}/>
                        </Grid>
                        <Grid item xs={4}>
                            <VideoList videos={allVideos} onVideoSelect={ this.onVideoSelect }/>
                        </Grid> 
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default App;