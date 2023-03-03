import {
  CampaignCategory,
  CampaignDesc,
  CampaignMeta,
  CampainAuthor,
  CampainImage,
  CampainTitle,
} from './parts';

import React from 'react';

const CampaignItem = () => {
  return (
    <div>
      <CampainImage />
      <div className="px-5 py-4">
        <CampaignCategory />
        <CampainTitle>Lorem ipsum dolor sit amet.</CampainTitle>
        <CampaignDesc>Lorem ipsum dolor sit amet consectetur adipisicing elit.</CampaignDesc>
        <div className="flex items-start justify-between gap-x-5 mb-5">
          <CampaignMeta />
          <CampaignMeta />
        </div>
        <CampainAuthor />
      </div>
    </div>
  );
};

export default CampaignItem;
