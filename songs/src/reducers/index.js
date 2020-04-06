import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'No Scrubs', duration:'4:15'},
        { title: 'backstreet boys', duration:'1:40'},
        { title: 'All starts', duration: '3:30'}
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SELECT_SONG') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})