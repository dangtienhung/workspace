import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import LayoutDashboard from 'layouts/LayoutDashboard';

const SignUpPage = lazy(() => import('./pages/SignUpPage'));
const SignInPage = lazy(() => import('./pages/SignInPage'));
const DashBoardPage = lazy(() => import('./pages/DashBoardPage'));
const CampaignPage = lazy(() => import('./pages/CampaignPage'));
const StartCampaignPage = lazy(() => import('./pages/StartCampaignPage'));
const CampaignView = lazy(() => import('./modules/campaign/CampaignView'));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route element={<LayoutDashboard />}>
          <Route path="/" element={<DashBoardPage />} />
          <Route path="/campaign" element={<CampaignPage />} />
          <Route path="/start-campaign" element={<StartCampaignPage />} />
          <Route path="/campaign/:slug" element={<CampaignView />} />
        </Route>
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
