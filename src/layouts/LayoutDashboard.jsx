import { DashboardSidebar, DashboardTopbar } from 'modules/dashboard';

import React from 'react';

const LayoutDashboard = ({ children }) => {
  return (
    <div className="p-10 bg-lite dark:bg-darkbg">
      <DashboardTopbar />
      <div>
        <DashboardSidebar />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default LayoutDashboard;
