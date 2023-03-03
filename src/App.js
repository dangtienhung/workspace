import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const SignUpPage = lazy(() => import('./pages/SignUpPage'));
const SignInPage = lazy(() => import('./pages/SignInPage'));
const DashBoardPage = lazy(() => import('./pages/DashBoardPage'));
const CampaignPage = lazy(() => import('./pages/CampaignPage'));
const StartCampaignPage = lazy(() => import('./pages/StartCampaignPage'));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<DashBoardPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/campaign" element={<CampaignPage />} />
        <Route path="/start-campaign" element={<StartCampaignPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
