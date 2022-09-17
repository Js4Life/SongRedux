import React from 'react'

// name need curly braces
import { selectSong } from '../actions';
import SongDetail from './songDetail';
import SongList from './songList';

const App = () => {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                     <SongList />
                </div>   
                <div className="column eight wide">
                     <SongDetail />
                </div>              
            </div>         
        </div>
    )
}

export default App;