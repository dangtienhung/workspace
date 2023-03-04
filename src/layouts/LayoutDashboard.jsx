import { DashboardSidebar, DashboardTopbar } from 'modules/dashboard';

import { Outlet } from 'react-router-dom';
import { Overlay } from 'components';
import React from 'react';

const LayoutDashboard = () => {
  return (
    <div className="p-10 bg-lite dark:bg-darkbg min-h-screen">
      <Overlay />
      <DashboardTopbar />
      <div className="flex gap-x-10 items-start">
        <DashboardSidebar />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LayoutDashboard;
