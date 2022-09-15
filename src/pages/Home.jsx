import React from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiFillAudio } from 'react-icons/ai';
import { BiVideoPlus, BiBell } from 'react-icons/bi';
import logo from '../logo.svg';

const Home = () => {
	return (
		<div className='home'>
			<header>
				<div className='header menu-logo'>
					<AiOutlineMenu />
					<img src={logo} />
				</div>
				<div className='header search'>
					<form>
						<input/>
						<button type='submit'><AiOutlineSearch /></button>
					</form>
					<AiFillAudio />
				</div>
				<div className='header actions'>
					<BiVideoPlus />
					<BiBell />
					<div className='avatar'><p>N</p></div>
				</div>
			</header>
		</div>
	);
};

export default Home;