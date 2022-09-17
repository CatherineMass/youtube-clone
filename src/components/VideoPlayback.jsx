/* eslint-disable react/prop-types */
import React from 'react';
import { RiThumbUpLine, RiThumbDownLine, RiMenuAddLine } from 'react-icons/ri';
import { IoArrowRedoOutline } from 'react-icons/io5';
import { FaCut } from 'react-icons/fa';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { TbArrowBarToDown } from 'react-icons/tb';
import { channels } from '../channels/channels';

const VideoPlayback = ({ video }) => {
	const youtubeID = video.videoId.split('=')[1];
	const channelThumbnail = channels.filter(channel => channel.path === video.channelThumbnail)[0].channelimg;

	return (
		<div className='video_playback'>
			<iframe className='video'
				src={`https://www.youtube.com/embed/${youtubeID}`}
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			/>
			<div className='playback_video-text'>
				<h3>{video.videoName}</h3>
				<p>{video.views} views 17 Sept. 2022</p>
			</div>
			<div className='icons'>
				<div className='icon'>
					<RiThumbUpLine size={22} />
					<p>100</p>
				</div>
				<div className='icon'>
					<RiThumbDownLine size={22} />
					<p>Dislike</p>
				</div>
				<div className='icon'>
					<IoArrowRedoOutline size={22} />
					<p>Share</p>
				</div>
				<div className='icon'>
					<TbArrowBarToDown size={22} />
					<p>Download</p>
				</div>
				<div className='icon'>
					<FaCut size={22} />
					<p>Cut</p>
				</div>
				<div className='icon'>
					<RiMenuAddLine size={22} />
					<p>Save</p>
				</div>
				<BiDotsHorizontalRounded size={22} />
			</div>
			<div className='playback_video-channel'>
				<div className='playback_img-text'>
					<img src={channelThumbnail} alt='channel thumbnail' />
					<div className='playback_channel-text'>
						<h3>{video.channelName}</h3>
						<p>3.5K subscribers</p>
					</div>
				</div>
				<div className='playback_btn'>SUBSCRIBE</div>
			</div>
			<div className='comments'>
				<p>Comments are turned off. <span>Learn more</span></p>
			</div>
		</div>
	);
};

export default VideoPlayback;