import { createContext, useContext, useState } from 'react';

const DropDownContext = createContext();

function DropdownProvider(props) {
  const [show, setShow] = useState(false);
  const toggle = () => {
    console.log(123);
    setShow(!show);
  };
  const values = { show, setShow, toggle };
  return <DropDownContext.Provider value={values}>{props.children}</DropDownContext.Provider>;
}

function useDropdown() {
  const context = useContext(DropDownContext);
  if (typeof context === 'undefined') {
    throw new Error('useDropdown must be use within DropdownProvider');
  }
  return context;
}

export { useDropdown, DropdownProvider };
