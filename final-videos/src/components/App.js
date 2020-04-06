import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoPlayer from './VideoPlayer';
import videoService from '../services/videoService';

const KEY = 'AIzaSyA1wW4p-wxUthzmYdS9282S7KUS1oyxcqc';

class App extends React.Component {
    state = {videos: [], selectedVideo: null};

    componentDidMount() {
        this.onSearchSubmit('buildings');
    }

    onSearchSubmit = async (term) => {
        const response = await videoService.get('/search', {
            params: {
                q: term,
                part: 'snippet',
                maxResults: 5,
                key: KEY
            }
        });

        this.setState({videos: response.data.items, selectedVideo: response.data.items[0]});
    };

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video});
    }

    render() {
        return (
            <div>
                <div className="ui one column padded grid">
                    <div className="column">
                        <SearchBar onSearchSubmit={this.onSearchSubmit}></SearchBar>
                    </div>
                </div>
                <div className="ui two column divided padded grid">
                    <div className="ten wide column">
                        <VideoPlayer selectedVideo={this.state.selectedVideo}></VideoPlayer>
                    </div>
                    <div className="six wide column">
                        <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}>List</VideoList>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default App;