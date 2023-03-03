import { Gap, Heading } from 'components';

import CampaignFeature from 'modules/campaign/CampaignFeature';
import CampaignGrid from 'modules/campaign/CampaignGrid';
import CampaignItem from 'modules/campaign/CampaignItem';
import LayoutDashboard from 'layouts/LayoutDashboard';
import React from 'react';
import { v4 } from 'uuid';

const DashBoardPage = () => {
  return (
    <LayoutDashboard>
      <Heading number={4}>Your Campaign</Heading>
      <CampaignFeature />
      <Gap></Gap>
      <Heading>Popular Campaign</Heading>
      <CampaignGrid>
        {Array(4)
          .fill(0)
          .map((item) => (
            <CampaignItem key={v4()} />
          ))}
      </CampaignGrid>
      <Gap></Gap>
      <Heading>Recent Campaign</Heading>
      <CampaignGrid>
        {Array(4)
          .fill(0)
          .map((item) => (
            <CampaignItem key={v4()} />
          ))}
      </CampaignGrid>
    </LayoutDashboard>
  );
};

export default DashBoardPage;
