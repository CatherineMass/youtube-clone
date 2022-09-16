/* eslint-disable react/prop-types */
import React from 'react';
import VideoHome from './VideoHome';

const Row = ({ videos, start }) => {
	return (
		<div className='row'>
			{
				videos.slice(start, start + 4).map(video => {
					return (
						<VideoHome key={video.id} video={video} />
					);
				})
			}
		</div>
	);
};

export default Row;