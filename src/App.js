import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Playback from './pages/Playback';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route path='home' element={<Home />} />
				<Route path='playback' element={<Playback />} />
			</Route>
		</Routes>
	);
}

export default App;
