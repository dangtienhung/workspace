import { CampaignAddNew } from 'modules';
import LayoutDashboard from 'layouts/LayoutDashboard';
import React from 'react';

const StartCampaignPage = () => {
  return (
    <LayoutDashboard>
      <CampaignAddNew />
    </LayoutDashboard>
  );
};

export default StartCampaignPage;
