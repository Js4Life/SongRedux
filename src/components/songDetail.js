import React from "react";
import { connect } from 'react-redux'

const SongDetail = ({ song }) => {
    console.log('props detail', song)
    if (!song) {
        return (
            <div><h3>select a song</h3></div>
        )
    }
    return <div><h3>details for</h3>
        <p>{song.title}</p>
        <p>{song.duration}</p>
    </div>
}

const mapStateToProps = (state) => {
    return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail)