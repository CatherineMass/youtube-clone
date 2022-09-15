import React from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiFillAudio } from 'react-icons/ai';
import { BiVideoPlus, BiBell } from 'react-icons/bi';
import { BsCollectionPlay } from 'react-icons/bs';
import { MdHomeFilled, MdOutlineExplore, MdVideoLibrary } from 'react-icons/md';
import logo from '../logo.svg';

const Home = () => {
	return (
		<div className='home'>
			<div className='sidebar'>
				<div className='menu'>
					<AiOutlineMenu className='menu-btn' size={25} />
				</div>
				<div className='sidebar-item'>
					<MdHomeFilled size={25} />
					<p>Home</p>
				</div>
				<div className='sidebar-item'>
					<MdOutlineExplore size={25} />
					<p>Explore</p>
				</div>
				<div className='sidebar-item'>
					<BsCollectionPlay size={25} />
					<p>Subscriptions</p>
				</div>
				<div className='sidebar-item'>
					<MdVideoLibrary size={25} />
					<p>Library</p>
				</div>
			</div>
			<div className='main'>
				<header className='header'>
					<div className='left'>
						<img src={logo} />
					</div>
					<div className='center'>
						<form className='form'>
							<input placeholder='Search'/>
							<div className='divider'/>
							<div className='btn'>
								<button type='submit'><AiOutlineSearch size={25} /></button>
							</div>
						</form>
						<div className='micro'>
							<AiFillAudio size={22} />
						</div>
					</div>
					<div className='right'>
						<BiVideoPlus size={25} />
						<BiBell size={25} />
						<div className='avatar'><p>N</p></div>
					</div>
				</header>
			</div>
		</div>
	);
};

export default Home;