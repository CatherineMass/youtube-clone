import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsCollectionPlay } from 'react-icons/bs';
import { MdHomeFilled, MdOutlineExplore, MdVideoLibrary } from 'react-icons/md';

const Sidebar = () => {
	return (
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
	);
};

export default Sidebar;