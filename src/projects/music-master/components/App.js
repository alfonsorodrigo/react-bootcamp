import React, {Component} from 'react';
const API_ADDRESS = 'https://spotify-api-wrapper.appspot.com';
import Artist from './Artist';
import Tracks from './Tracks';
import Search from './Search';


class App extends Component {

    state = {artist:null,tracks:[]}
    
    searchArtist = (artist) =>{
        fetch(`${API_ADDRESS}/artist/${artist}`)
        .then(response => response.json())
        .then(json => {
            if (json.artists.total > 0){
                const artist = json.artists.items[0];
                this.setState({artist});
                fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
                .then(response => response.json())
                .then(json => {
                    this.setState({tracks:json.tracks})
                });
            }
        });
    }

    render(){
        return(
            <div>
                <h2>Music Master</h2>
                <Search searchArtist = {this.searchArtist}/>
                <Artist artist={this.state.artist} />
                <Tracks tracks={this.state.tracks} />
            </div>
        )
    }
}

export default App;