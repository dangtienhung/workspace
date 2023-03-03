import ErrorComponent from 'components/common/ErrorComponent';
import PropTypes from 'prop-types';
import React from 'react';
import { withErrorBoundary } from 'react-error-boundary';

const ButtonGoogle = ({ text = 'sign up with google', onClick = () => {} }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center w-full py-3 mb-5 text-base font-semibold border rounded-lg outline-none gap-x-3 border-strock dark:border-darkStroke text-text2 dark:text-white"
    >
      <img srcSet="/icon-google.png 2x" alt="icon-google" />
      <span className="capitalize">{text}</span>
    </button>
  );
};

ButtonGoogle.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default withErrorBoundary(ButtonGoogle, {
  FallbackComponent: ErrorComponent,
});
