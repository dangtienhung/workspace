import React, { useState } from 'react';

import { defaultImage } from 'constants/Global';

const DashboardSearch = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="relative z-50">
      <div className="bg-white flex items-center rounded-full shadow-[10px_10px_20px_rgba(218,_213,_213,_0.15)] p-2">
        <div className="flex-1 pr-5">
          <input
            type="text"
            placeholder="Do fundrise now"
            className="bg-transparent text-sm w-full placeholder:capitalize placeholder:text-text4 text-text1"
          />
        </div>
        <button className="w-[72px] bg-primary text-white flex-shrink-1 h-10 rounded-full flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
      {showSearch && (
        <div className="search-results absolute w-full lg:w-[843px] bg-white top-full left-0 z-50 translate-y-5 pb-6 rounded-3xl">
          <div className="flex items-center justify-between p-3 bg-graySoft rounded-3xl">
            <h4 className="font-medium text-sm text-text1 pl-4 underline">
              See all 10,1024 fundraisier
            </h4>
            <button className="flex justify-center items-center w-[72px] h-[50px] rounded-xl bg-error bg-opacity-20 text-error">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="p-6 pb-0">
            <div className="flex flex-col gap-y-5 mb-6">
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
            </div>
            <h3 className="text-sm font-semibold mb-4">Related Searchs</h3>
            <div className="flex text-sm text-text2 flex-col gap-y-3">
              <p>
                <strong>education</strong> fund
              </p>
              <p>schoralship fund</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const SearchItem = () => {
  return (
    <div className="flex items-center gap-x-5">
      <img src={defaultImage} alt="" className="h-[50px] w-[50px] rounded-xl object-cover" />
      <div className="flex-1">
        <h3 className="text-sm mb-1">
          <strong>Education</strong>fund for Durgham Famimy
        </h3>
        <p className="text-text3 text-sm">By Durgham Family</p>
      </div>
    </div>
  );
};

export default DashboardSearch;
