import { Route, Routes } from 'react-router-dom';

import FilterProduct from './components/FillterProduct/FilterProduct';
import Login from './components/Login/Login';
import Main from './components/Main/Main';
import React from 'react';
import SingleProduct from './components/FillterProduct/SingleProduct';
import { useSelector } from 'react-redux';

function App() {
	const user = useSelector((state) => state.users);
	console.log('🚀 ~ file: App.js:12 ~ App ~ user:', user);
	const { authUser } = user;
	console.log('🚀 ~ file: App.js:14 ~ App ~ authUser:', authUser);
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={authUser ? <Main /> : <Login />} />
				<Route path="/filtered-products/:type" element={<FilterProduct />} />
				<Route
					path="/filtered-products/:type/:id"
					element={<SingleProduct />}
				/>
				<Route path="*" element={'Not fond 404'} />
			</Routes>
		</div>
	);
}

export default App;
