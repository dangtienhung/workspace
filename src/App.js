import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const SignUpPage = lazy(() => import('./pages/SignUpPage'));
const SignInPage = lazy(() => import('./pages/SignInPage'));

function App() {
	return (
		<Routes>
			<Route path="/sign-up" element={<SignUpPage />} />
			<Route path="/sign-in" element={<SignInPage />} />
		</Routes>
	);
}

export default App;
