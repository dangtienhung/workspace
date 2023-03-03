import { Button } from 'components';
import DashboardFundrising from './DashboardFundrising';
import DashboardSearch from './DashboardSearch';
import React from 'react';

const DashboardTopbar = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center flex-1 gap-x-10">
        <img srcSet="/logo.png 2x" alt="logo" />
        <div className="w-full max-w-[458px]">
          <DashboardSearch />
        </div>
      </div>
      <div className="flex items-center justify-end gap-x-10 flex-1">
        <DashboardFundrising />
        <Button className="bg-secondary capitalize px-7" type="button">
          start a camping
        </Button>
        <img
          srcSet="https://meliawedding.com.vn/wp-content/uploads/2022/05/gai-xinh-mac-do-thieu-vai-4.jpg"
          alt="logo"
          className="h-[52px] w-[52px] rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default DashboardTopbar;
