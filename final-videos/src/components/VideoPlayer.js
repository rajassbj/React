import React from 'react';

class VideoPlayer extends React.Component {
    render(){
        if(!this.props.selectedVideo) {
            return <div>Loading....</div>
        }
        const videoSrc = `https://www.youtube.com/embed/${this.props.selectedVideo.id.videoId}`;
        return (
            <div>
                <div className="ui embed">
                    <iframe title="video player" src={videoSrc}></iframe>
                </div>
                <div className="ui segment">
                    <h4 className="ui header">{this.props.selectedVideo.snippet.title}</h4>
                    <p>{this.props.selectedVideo.snippet.description}</p>
                </div>
            </div>
        )
    }
}

export default VideoPlayer;