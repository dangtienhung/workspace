import React from 'react';
import { useDropdown } from './Dropdown-Context';

const Option = (props) => {
  console.log('🚀 ~ file: Option.jsx:5 ~ Option ~ props:', props);
  const { onClick } = props;
  const { setShow } = useDropdown();
  const handleClick = () => {
    onClick && onClick();
    setShow(false);
  };
  return (
    <div
      onClick={handleClick}
      className="py-4 px-5 cursor-pointer flex items-center justify-between hover:text-primary transition-all text-sm"
    >
      {props.children}
    </div>
  );
};

export default Option;
