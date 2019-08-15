import React from 'react';

import { Grid } from '@material-ui/core';

import VideoItem from './VideoItem';

const VideoList = ({videos}) => {
    // we need to return a component which is actually a video item so we are
    // going to import Video Item.
    // return a VideoItem for each of the videos
    const listOfVideos = videos.map((video, id) => <VideoItem key={id} video={video}/>)

    return (
        <React.Fragment>
            {listOfVideos}
        </React.Fragment>
    )   
}

export default VideoList