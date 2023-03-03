import React from 'react';

const CampaignDesc = ({ children, className = 'mb-4 text-sm' }) => {
  return <p className={`font-nomal text-text3 ${className}`}>{children}</p>;
};

export default CampaignDesc;