import axios from 'axios';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
    part: 'snippet', 
    maxResults: 5,
    key: 'AIzaSyAxD60uuQZIqX7DsIatVNY_DX3Q5Gz3kF0'
    }
});
