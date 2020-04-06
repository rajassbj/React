import React from 'react';
import './VideoCard.css';

class VideoCard extends React.Component {
    render() {
        return (
            <div className="video-card item"
                onClick={() => {this.props.onVideoSelect(this.props.video)}}>
                <img className="ui image"
                   alt= {this.props.video.snippet.title}
                    src={this.props.video.snippet.thumbnails.medium.url}>
                </img>
                <div className="content">
                    <div className="header">{this.props.video.snippet.title}</div>
                </div>
            </div>
        );
    }
}

export default VideoCard;