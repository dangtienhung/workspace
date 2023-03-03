import { IconFolder } from 'components';
import { Link } from 'react-router-dom';
import React from 'react';

const CampaignCategory = ({ text = 'Education', className = 'text-xs' }) => {
  return (
    <Link
      to="/"
      className={`flex items-center gap-x-3 mb-4 font-medium text-text3 capitalize ${className}`}
    >
      <IconFolder />
      <span>{text}</span>
    </Link>
  );
};

export default CampaignCategory;
