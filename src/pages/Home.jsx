import React from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiFillAudio } from 'react-icons/ai';
import { BiVideoPlus, BiBell } from 'react-icons/bi';
import logo from '../logo.svg';

const Home = () => {
	return (
		<div className='home'>
			<header className='header'>
				<div className='left'>
					<AiOutlineMenu className='menu-btn' size={30} />
					<img src={logo} />
				</div>
				<div className='center'>
					<form>
						<input placeholder='Search'/>
						<button type='submit'><AiOutlineSearch /></button>
					</form>
					<AiFillAudio />
				</div>
				<div className='right'>
					<BiVideoPlus />
					<BiBell />
					<div className='avatar'><p>N</p></div>
				</div>
			</header>
		</div>
	);
};

export default Home;