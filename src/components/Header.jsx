import React from 'react';
import { AiOutlineSearch, AiFillAudio } from 'react-icons/ai';
import { BiVideoPlus, BiBell } from 'react-icons/bi';
import logo from '../logo.svg';

const Header = () => {
	return (
		<div className='layout'>
			<header className='header'>
				<div className='left'>
					<img src={logo} />
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
			<div className='divider'/>
		</div>
	);
};

export default Header;