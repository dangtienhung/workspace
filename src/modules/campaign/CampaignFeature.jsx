import { CampaignCategory, CampaignDesc, CampaignMeta, CampainImage, CampainTitle } from './parts';

import React from 'react';

const CampaignFeature = () => {
  return (
    <div className="flex items-center gap-x-8 w-full max-w-[1048px]">
      <CampainImage className="h-[266px] w-full flex-1" />
      <div className="flex-1 max-w-[435px]">
        <CampaignCategory text="Architecture" className="mb-4 text-sm" />
        <CampainTitle className="mb-4 text-xl font-bold">
          Remake - We make architectture exbihition
        </CampainTitle>
        <CampaignDesc className="mb-6 text-sm">
          Remake - We Make: an exhibition about architecture's social agency in the face of
          urbanisation
        </CampaignDesc>
        <div className="w-full rounded-full bg-[#EFEFEF] h-[5px] mb-6">
          <div className="w-2/4 bg-primary rounded-full h-full"></div>
        </div>
        <div className="flex items-start justify-between gap-x-5">
          <CampaignMeta size="big"></CampaignMeta>
          <CampaignMeta size="big"></CampaignMeta>
          <CampaignMeta size="big"></CampaignMeta>
        </div>
      </div>
    </div>
  );
};

export default CampaignFeature;
