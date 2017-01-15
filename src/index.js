import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';

const API_KEY = 'AIzaSyAGtrbpsrrB9jngseNm0LG7JxQd-rX4Ubs';

class App extends Component {
    constructor(props){
        super(props);

        this.state = { videos:[], selectedVideo: null };

        YTSearch({key:API_KEY, term:'react js'},videos => {
            this.setState({
                videos:videos,
                selectedVideo:videos[0]
            });
        });
    }

    render(){
        return (
            <div>
            <SearchBar />
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList
                onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos}/>
            </div>
        );
    }

}

ReactDOM.render(<App/>,document.getElementById('container'));