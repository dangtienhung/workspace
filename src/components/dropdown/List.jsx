import React from 'react';
import { useDropdown } from './Dropdown-Context';

const List = ({ children }) => {
  const { show } = useDropdown();
  return (
    <>
      {show && (
        <div className="absolute left-0 w-full bg-white rounded-lg shadow-sm top-full z-20 max-h-[300px] overflow-y-auto">
          {children}
        </div>
      )}
    </>
  );
};

export default List;
