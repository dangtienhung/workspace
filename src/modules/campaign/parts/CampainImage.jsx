import React from 'react';
import { defaultImage } from 'constants/Global';

const CampainImage = ({ className = 'h-[158px]', image = defaultImage }) => {
  return (
    <div className={`${className}`}>
      <img src={image} alt="" className="w-full h-full object-cover rounded-2xl" />
    </div>
  );
};

export default CampainImage;
