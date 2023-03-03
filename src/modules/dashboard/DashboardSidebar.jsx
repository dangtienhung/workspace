import {
  IconCampain,
  IconDarkmode,
  IconDashboard,
  IconLogout,
  IconPayment,
  IconProfile,
  IconWidraw,
} from 'components';

import { NavLink } from 'react-router-dom';
import React from 'react';

const siderbarLinks = [
  {
    icon: <IconDashboard />,
    title: 'Dashboard',
    url: '/',
  },
  {
    icon: <IconCampain />,
    title: 'Campain',
    url: '/campain',
  },
  {
    icon: <IconPayment />,
    title: 'Payment',
    url: '/payment',
  },
  {
    icon: <IconWidraw />,
    title: 'Withdraw',
    url: '/withdraw',
  },
  {
    icon: <IconProfile />,
    title: 'Profile',
    url: '/profile',
  },
  {
    icon: <IconLogout />,
    title: 'Log out',
    url: '#',
    onClick: () => {},
  },
  {
    icon: <IconDarkmode />,
    title: 'Light/Dark',
    url: '#',
    onClick: () => {},
  },
];

const DashboardSidebar = () => {
  return (
    <div className="flex flex-col w-full md:w-[76px] rounded-lg bg-lite px-[14px] py-10 shadow-[10px_10px_20px_rgba(218,_213,_213,_0.15)]">
      {siderbarLinks.map((link) => (
        <NavLink
          to={link.url}
          key={link.title}
          className={({ isActive }) =>
            isActive
              ? 'bg-green-500 text-white flex items-center gap-x-5 md:justify-center md:h-12 md:w-12 md:rounded-lg md:mb-8 last:mt-auto last:shadow-sdprimary last:text-darkbg last:bg-white'
              : `flex items-center gap-x-5 md:justify-center md:h-12 md:w-12 md:rounded-lg md:mb-8 last:mt-auto last:shadow-sdprimary last:bg-white`
          }
        >
          <span>{link.icon}</span>
          <span className="md:hidden block">{link.title}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default DashboardSidebar;
