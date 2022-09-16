import React from 'react';
import { Outlet } from 'react-router';
import videos from '../data.json';
import VideoHome from '../components/VideoHome';
import Row from '../components/Row';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const Home = () => {

	return (
		<div className='home'>
			<Sidebar />
			<div className='home_main'>
				<Header />
				<div className='rows'>
					<div className='first-row'>
						{
							videos.slice(0, 3).map(video => {
								return (
									<VideoHome key={video.id} video={video} />
								);
							})
						}
					</div>
					<Row videos={videos} start={3} />
					<Row videos={videos} start={7} />
					<Row videos={videos} start={11} />
					<Row videos={videos} start={15} />
					<div className='last-row'>
						{
							videos.slice(19).map(video => {
								return (
									<VideoHome key={video.id} video={video} />
								);
							})
						}
					</div>
				</div>
			</div>
			<Outlet />
		</div>
	);
};

export default Home;