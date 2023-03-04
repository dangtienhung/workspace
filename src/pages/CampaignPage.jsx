import { Button, Heading } from 'components';

import CampaignFeature from 'modules/campaign/CampaignFeature';
import CampaignGrid from 'modules/campaign/CampaignGrid';
import { Link } from 'react-router-dom';
import React from 'react';

const CampaignPage = () => {
  return (
    <>
      <div className="mb-10 bg-white rounded-3xl flex items-center justify-between px-10 py-8">
        <div className="flex items-start gap-x-6">
          <div className="h-14 w-14 rounded-full flex justify-center items-center text-white bg-secondary bg-opacity-60 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </div>
          <div className="flex-1">
            <h1 className="font-semibold mb-2 text-[22px] capitalize">create your campaign</h1>
            <p className="text-text3 text-sm mb-2">
              Jump right into our editor and create your first Virtue campaign!
            </p>
            <Link to="/" className="text-primary text-sm">
              Need any help? Learn More...
            </Link>
          </div>
        </div>
        <Button type="button" kind="ghost" className="px-8">
          Create Campaign
        </Button>
      </div>
      <Heading number={4}>Your campaign</Heading>
      <CampaignGrid type="secondary">
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
      </CampaignGrid>
      <div className="mt-10 text-center"></div>
      <Button kind="ghost" className="mx-auto flex items-center" type="button">
        <span>See more</span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
          </svg>
        </span>
      </Button>
    </>
  );
};

export default CampaignPage;
