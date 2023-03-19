import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';

const Sidebar = () => {
  const [show, setShow] = useState(false);
  const handleShowSubNav = () => {
    setShow(!show);
  };
  return (
    <div className="w-full max-w-xs h-screen overflow-y-auto bg-white">
      <div className="p-5 rounded">
        {SidebarData.map((sidebar) => {
          return (
            <div className={`flex flex-col`} key={sidebar.id} onClick={handleShowSubNav}>
              <NavLink
                to={sidebar.to}
                className={`flex select-none relative gap-x-2 items-center p-2 hover:bg-color10 transition-all duration-200 rounded-sm cursor-pointer ${
                  show ? 'bg-gray-200' : ''
                }`}
              >
                <span>{sidebar.icon}</span>
                <span>{sidebar.title}</span>
                <span className="ml-auto">{sidebar.iconDropDown}</span>
              </NavLink>
              {show && sidebar.subNav && sidebar.subNav.length > 0 && (
                <div className=" top-full left-0 w-full bg-gray-100">
                  {sidebar.subNav.map((sidebar) => (
                    <SubMenu item={sidebar} key={sidebar.id} />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;