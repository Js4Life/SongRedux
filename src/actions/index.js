// Action Creator
export const selectSong = (song) => {
    // Return an action
    return {
        type:"SONG_SELECTED",
        payload:song
    }
};
// named export ..use named export see top
// export default selectSong