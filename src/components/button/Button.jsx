import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

const Button = ({ type = 'button', className = '', children, isLoading = false, ...rest }) => {
  let defaultBtnClassName = `p-4 min-h-[56px] text-base font-semibold flex justify-center items-center rounded-xl`;
  switch (rest.kind) {
    case 'primary':
      defaultBtnClassName = defaultBtnClassName + ' bg-primary text-white';
      break;
    case 'secondary':
      defaultBtnClassName = defaultBtnClassName + ' bg-secondary text-white';
      break;
    case 'ghost':
      defaultBtnClassName = defaultBtnClassName + ' text-secondary bg-secondary bg-opacity-20';
      break;
    default:
      break;
  }
  const child = !!isLoading ? (
    <div className="w-10 h-10 rounded-full border-4 border-white border-t-transparent animate-spin"></div>
  ) : (
    children
  );
  if (rest.href) {
    return (
      <Link to={rest.href} className={`${defaultBtnClassName} ${className}`} {...rest}>
        {child}
      </Link>
    );
  }
  return (
    <button type={type} className={`${defaultBtnClassName} ${className}`} {...rest}>
      {child}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  href: PropTypes.string,
  kind: PropTypes.oneOf(['primary', 'secondary', 'ghost']),
};

export default Button;
