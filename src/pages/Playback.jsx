import React from 'react';
import { useParams } from 'react-router';
import HeaderPlayback from '../components/HeaderPlayback';
import SidebarPlayback from '../components/SidebarPlayback';
import VideoPlayback from '../components/VideoPlayback';
import videos from '../data.json';

const Playback = () => {
	const params = useParams();

	const video = videos.filter(vid => vid.id.toString() === params.id)[0];

	return (
		<div className='playback'>
			<HeaderPlayback />
			<div className='playback_main'>
				<VideoPlayback video={video} />
				<SidebarPlayback />
			</div>
		</div>
	);
};

export default Playback;