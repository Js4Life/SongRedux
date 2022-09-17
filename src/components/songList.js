import React from "react";
import { connect } from 'react-redux';
import { selectSong } from '../actions'

class SongList extends React.Component {

    renderList() {
        console.log('props',this.props)
        console.log('selectSong',selectSong())
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button className="ui button primary" onClick={()=>this.props.selectSong(song)}>
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        })
    }

    render() {
        console.log('props', this.props) // comes here from below
        return <div className="ui divided list">{this.renderList()}</div>
    }
}

const mapStateToProps = (state) => {
    console.log('state', state); // songsList + selectedsong
    return { songs: state.songs } // getListofSings
}

//key
export default connect(mapStateToProps,{
    // 1.pass action
   selectSong
})(SongList);

// function connect() {
//     return function(){
//            return 'hi there' 
//     }
//   }
//   connect()() -- hi there

