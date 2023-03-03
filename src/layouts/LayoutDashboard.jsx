import { DashboardSidebar, DashboardTopbar } from 'modules/dashboard';

import React from 'react';

const LayoutDashboard = ({ children }) => {
  return (
    <div className="p-10 bg-lite dark:bg-darkbg min-h-screen">
      <DashboardTopbar />
      <div className="flex gap-x-10 items-start">
        <DashboardSidebar />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default LayoutDashboard;
