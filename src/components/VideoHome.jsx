/* eslint-disable react/prop-types */
import React from 'react';
import { videosImg } from '../videos/videos-img';
import { channels } from '../channels/channels';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { useNavigate } from 'react-router';

const VideoHome = ({ video }) => {
	const navigate = useNavigate();

	const thumbnail = videosImg.filter(img => img.path === video.videoThumbnail)[0]?.videoimg;
	const channelThumbnail = channels.filter(channel => channel.path === video.channelThumbnail)[0]?.channelimg;

	return (
		<div key={video?.id} className='video-home' onClick={() => navigate(`/playback/${video?.id}`)}>
			<div className='home_video-img'>
				<img src={thumbnail} alt='video thumbnail' />
			</div>
			<div className='home_video-under'>
				<div className='home_channel-img'>
					<img src={channelThumbnail} alt='channel thumbnail' />
				</div>
				<div className='home_video-text'>
					<div className='home_title'>
						<h3 className=''>
							{video?.videoName}
						</h3>
					</div>
					<p className='home_channel'>
						{video?.channelName}
					</p>
					<p className='home_vues'>
						{video?.views} views
					</p>
				</div>
				<div className='home_video-menu'>
					<BiDotsVerticalRounded size={22} />
				</div>
			</div>
		</div>);
};

export default VideoHome;