import {
  CampaignCategory,
  CampaignDesc,
  CampaignMeta,
  CampaignPerk,
  CampaignSupport,
  CampainImage,
  CampainTitle,
} from './parts';

import { Button } from 'components';
import CampaignGrid from './CampaignGrid';
import CampaignItem from './CampaignItem';
import CampaignViewAuthor from './parts/CampaignViewAuthor';
import React from 'react';

const CampaignView = () => {
  return (
    <>
      <div className="gradient-banner h-[140px] rounded-3xl mb-10 bg-no-repeat w-full bg-center bg-cover bg-opacity-40 flex items-center justify-center text-white font-bold text-[40px]">
        <h1>Education</h1>
      </div>
      <div className="flex items-start gap-x-10 w-full max-w-[1066px]">
        <div className="flex-1">
          <CampainImage className="h-[398px] mb-8" />
          <div className="flex justify-center gap-x-5">
            {Array(5)
              .fill(0)
              .map((image, index) => (
                <img
                  key={index}
                  src="https://source.unsplash.com/random"
                  alt=""
                  className="rounded-lg w-[89px] h-[70px] object-cover"
                />
              ))}
          </div>
        </div>
        <div className="flex-1 max-w-[443px]">
          <CampaignCategory text="Architecture" className="mb-4 text-sm" />
          <CampainTitle className="mb-4 text-xl font-bold">
            Remake - We make architectture exbihition
          </CampainTitle>
          <CampaignDesc className="mb-6 text-sm">
            Remake - We Make: an exhibition about architecture's social agency in the face of
            urbanisation
          </CampaignDesc>
          <CampaignViewAuthor />
          <div className="w-full rounded-full bg-[#EFEFEF] h-[5px] mb-6">
            <div className="w-2/4 bg-primary rounded-full h-full"></div>
          </div>
          <div className="flex items-start justify-between gap-x-5 mb-4">
            <CampaignMeta size="big"></CampaignMeta>
            <CampaignMeta size="big"></CampaignMeta>
            <CampaignMeta size="big"></CampaignMeta>
          </div>
          <Button type="button" kind="primary" className="w-full">
            Back this project
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-between mt-[100px] bg-white p-5 border-b border-b-slate-100 mb-6">
        <div className="text-sm capitalize font-medium text-text3 flex items-center gap-x-14">
          <span className="cursor-pointer text-secondary">campaign</span>
        </div>
        <Button kind="primary" type="button">
          Back this Project
        </Button>
      </div>
      <div className="grid gap-x-[124px] grid-cols-[1.3fr,1fr]">
        <div className="">
          <h2 className="mb-5 text-lg font-semibold uppercase">Story</h2>
          <div className="w-full bg-white"></div>
        </div>
        <div className="">
          <CampaignSupport />
          <div className="mb-[60px]"></div>
          <div className="flex flex-col gap-y-[30px]">
            <CampaignPerk />
            <CampaignPerk />
            <CampaignPerk />
          </div>
        </div>
      </div>
      <h2 className="mb-10 text-xl font-semibold">You also may be interested in</h2>
      <CampaignGrid>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
      </CampaignGrid>
    </>
  );
};

export default CampaignView;
