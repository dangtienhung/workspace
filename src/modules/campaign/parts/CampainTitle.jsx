import React from 'react';

const CampainTitle = ({ children, className = 'mb-1 font-semibold' }) => {
  return <h3 className={`text-text1 ${className}`}>{children}</h3>;
};

export default CampainTitle;
