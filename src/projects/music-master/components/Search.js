import React, {Component} from 'react';


class Search extends Component {

    state = { artistQuery : ''}

    componentDidMount(){
        this.setState({artistQuery:'bruno'},() => {this.searchArtist()})
    }

    updateArtistQuery = event => {
        this.setState({artistQuery: event.target.value})
    }

    handlerKeyPress = event => {
        if (event.key === 'Enter'){
            this.searchArtist();
        }
    }

    searchArtist = () => {
        const {artistQuery} = this.state;
        this.props.searchArtist(artistQuery);
    }

    render(){
        return(
            <div>
                <input
                    onChange={this.updateArtistQuery}
                    onKeyPress={this.handlerKeyPress}
                    type="text"
                    placeholder="Search for an Artist" 
                />
                <button onClick={this.searchArtist}>Search</button>
            </div>
        )
    }

}
export default Search;