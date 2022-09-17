import { combineReducers } from 'redux'

const songsReducer = () => {
    return [
        { title: 'No scrubs', duration: '4:05' },
        { title: 'Macarena', duration: '3:05' },
        { title: 'ganesh', duration: '5:05' },
        { title: 'prabhas songs', duration: '6:05' },

    ]
}

const selectedSongReducer = (selectedSong = null, action) => {

    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }

    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong:selectedSongReducer
})