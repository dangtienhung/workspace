import { Button } from 'components';
import DashboardFundrising from './DashboardFundrising';
import DashboardSearch from './DashboardSearch';
import { Link } from 'react-router-dom';
import React from 'react';

const DashboardTopbar = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center flex-1 gap-x-10">
        <Link to={'/'} className="inline-block">
          <img srcSet="/logo.png 2x" alt="logo" />
        </Link>
        <div className="w-full max-w-[458px]">
          <DashboardSearch />
        </div>
      </div>
      <div className="flex items-center justify-end gap-x-10 flex-1">
        <DashboardFundrising />
        <Button className="capitalize px-7" type="button" kind="secondary" href="/start-campaign">
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
