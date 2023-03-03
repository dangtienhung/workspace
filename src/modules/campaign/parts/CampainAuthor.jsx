import React from 'react';
import { defaultImage } from 'constants/Global';

const CampainAuthor = ({ image = defaultImage, author = 'Mahfuzul Nabil' }) => {
  return (
    <div className="flex items-center gap-x-3">
      <img src={image} alt="" className="w-8 h-8 rounded-full object-cover" />
      <p className="text-text3 text-xs">
        by <span className="font-semibold text-text2 capitalize">{author}</span>
      </p>
    </div>
  );
};

export default CampainAuthor;
