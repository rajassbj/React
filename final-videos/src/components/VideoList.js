import React from 'react';
import VideoCard from './VideoCard';

class VideoList extends React.Component {
    render () {
        const renderedList = this.props.videos.map((video) => {
            return <VideoCard key={video.id.videoId}
                video={video}
                onVideoSelect={this.props.onVideoSelect}/>;
        })
        return <div className="ui relaxed divided list">{renderedList}</div>
    }
}

export default VideoList;