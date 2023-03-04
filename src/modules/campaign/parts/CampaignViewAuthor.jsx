import React from 'react';
import { defaultImage } from 'constants/Global';

const CampaignViewAuthor = () => {
  return (
    <div className="flex items-center gap-x-5 mb-9">
      <img src={defaultImage} alt="" className="h-[60px] w-[60px] object-cover rounded-full" />
      <div className="flex flex-col flex-1">
        <div className="flex items-center gap-x-4">
          <h3 className="text-lg font-medium">Saifull Islam</h3>
          <div className="flex items-center gap-x-1">
            {Array(5)
              .fill(0)
              .map((start, index) => (
                <span key={index} className="mb-1 text-yellow-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              ))}
          </div>
        </div>
        <div className="flex items-center gap-x-3 text-text3 text-sm">
          <strong className="text-primary text">02 Campaign</strong>
          <div className="h-[6px] w-[6px] rounded-full bg-text3"></div>
          <span>Dhaka, Bangladesh</span>
        </div>
      </div>
    </div>
  );
};

export default CampaignViewAuthor;
