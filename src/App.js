// import logo from './logo.svg';
import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import Home from './pages/Home';
import Playback from './pages/Playback';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />}>

			</Route>
			<Route path="/playback" element={<Playback />} />
		</Routes>
	);
}

export default App;
