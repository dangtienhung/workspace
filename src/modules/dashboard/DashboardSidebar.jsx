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
    url: '/campaign',
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
    url: '/logout',
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
  const navLinkClass =
    'flex items-center gap-x-5 md:w-12 md:h-12 md:justify-center md:rounded-lg md:mb-8  last:mt-auto last:bg-white last:shadow-sdprimary';
  return (
    <div className="flex flex-shrink-0 flex-col w-full md:w-[76px] rounded-lg bg-lite px-[14px] py-10 shadow-[10px_10px_20px_rgba(218,_213,_213,_0.15)]">
      {siderbarLinks.map((link) => (
        <NavLink
          to={link.url}
          key={link.title}
          className={({ isActive }) =>
            isActive
              ? ` text-primary bg-primary bg-opacity-20 ${navLinkClass}`
              : `${navLinkClass} text-icon-color`
          }
        >
          {link.icon}
          <span className="md:hidden block">{link.title}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default DashboardSidebar;
