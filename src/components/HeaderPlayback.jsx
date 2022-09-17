import React from 'react';
import { AiOutlineSearch, AiFillAudio, AiOutlineMenu } from 'react-icons/ai';
import { BiVideoPlus, BiBell } from 'react-icons/bi';
import { useNavigate } from 'react-router';
import logo from '../logo.svg';

const HeaderPlayback = () => {
	const navigate = useNavigate();
	return (
		<div className='playback_layout'>
			<header className='header'>
				<div className='left'>
					<AiOutlineMenu className='menu-btn' size={25} />
					<img src={logo} onClick={() => navigate('/')} />
				</div>
				<div className='center'>
					<form className='form'>
						<input placeholder='Search'/>
						<div className='search-divider'/>
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
			<div className='playback_divider'/>
		</div>
	);
};

export default HeaderPlayback;