import { Button } from 'components';
import { CampainTitle } from '.';
import React from 'react';
import { defaultImage } from 'constants/Global';

const CampaignPerk = ({ showButton = false }) => {
  return (
    <div>
      <div className="bg-white shadow-1 rounded-xl">
        <img src={defaultImage} alt="" className="h-[232px] w-full object-cover rounded-xl" />
        <div className="p-5">
          <span className="text-xs text-white bg-secondary px-3 py-1 inline-block font-medium rounded mb-5">
            Featured
          </span>
          <CampainTitle className="text-xl font-semibold mb-1">Special one camera</CampainTitle>
          <div className="flex items-center mb-4 gap-x-3">
            <span className="text-xl font-bold text-text1">$2,724 USD</span>{' '}
            <span className="text-sm font-medium line-through text-error">$1,504 USD</span>
            <span className="text-sm font-medium text-error">(12% OFF)</span>
          </div>
          <div className="flex flex-col mb-4 gap-y-1">
            <strong>Estimated Shipping</strong> <span className="text-text2">October 2022</span>
          </div>
          <p className="mb-4 text-text2">
            <strong className="text-text1">05</strong> claimed
          </p>
          <p className="text-text2">Ships worldwide</p>
        </div>
      </div>
      {showButton && (
        <div className="mt-6">
          <Button type="button" kind="primary">
            Get this perk
          </Button>
        </div>
      )}
    </div>
  );
};

export default CampaignPerk;
