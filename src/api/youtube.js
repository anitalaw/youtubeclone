import axios from 'axios';

//export function that will make a request to the youtube api
// make easier get requests later.

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
    part: 'snippet',  //will return our videos. Refer to api doc. 
    maxResults: 5, //specify how many results we want
    key: 'AIzaSyAxD60uuQZIqX7DsIatVNY_DX3Q5Gz3kF0'
    }
});

//Conclusion: Gets 5 videos for our search
