import React from 'react';

const CheckBox = ({ checked = false, onClick = () => {}, name = '', children }) => {
  return (
    <div className="flex items-start gap-x-5">
      <div
        className={`inline-flex justify-center items-center text-white p-1 h-5 w-5 rounded border ${
          checked ? 'bg-primary border-primary' : 'border-strock dark:border-text3'
        }`}
        onClick={onClick}
      >
        <input type="checkbox" name={name} id="" className="hidden" onChange={() => {}} />
        <span className={`${checked ? '' : 'opacity-0 visible'}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </span>
      </div>
      {children && (
        <span className="font-medium text-text3 cursor-pointer select-none" onClick={onClick}>
          {children}
        </span>
      )}
    </div>
  );
};

export default CheckBox;
