import React from 'react';

import { Grid, Paper, Typography } from '@material-ui/core';

const VideoItem = ({ video, onVideoSelect })=>{
    console.log('what is in here', video)
    return (
        <Grid item xs={12} alignItems={"stretch"} wrap={"nowrap"}>
            <Paper style={{ display: 'flex', alignItems: 'center', cursor: 'pointer'}}  onClick={()=> onVideoSelect(video)}>     
                <img style={{ marginRight: '10px' }} alt="thumbnail" src={video.snippet.thumbnails.default.url} />
                <Typography variant="subtitle1"><b>{video.snippet.title}</b></Typography>
            </Paper>
        </Grid>
    )
}

export default VideoItem;