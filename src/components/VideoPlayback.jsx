/* eslint-disable react/prop-types */
import React from 'react';

const VideoPlayback = ({ video }) => {
	const youtubeID = video.videoId.split('=')[1];

	return (
		<div className='video_playback'>
			<iframe className='video'
				src={`https://www.youtube.com/embed/${youtubeID}`}
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			/>
		</div>
	);
};

export default VideoPlayback;