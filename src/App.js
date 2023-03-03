import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const SignUpPage = lazy(() => import('./pages/SignUpPage'));
const SignInPage = lazy(() => import('./pages/SignInPage'));
const DashBoardPage = lazy(() => import('./pages/DashBoardPage'));
const CampaignPage = lazy(() => import('./pages/CampaignPage'));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<DashBoardPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/campaign" element={<CampaignPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
