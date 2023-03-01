import ErrorComponent from 'components/common/ErrorComponent';
import PropTypes from 'prop-types';
import React from 'react';
import { useController } from 'react-hook-form';
import { withErrorBoundary } from 'react-error-boundary';

const Input = (props) => {
  const { control, name, type = 'text', error = '', placeholder = '', children, ...rest } = props;
  const { field } = useController({
    control,
    name,
    defaultValue: '',
  });
  return (
    <div className="relative">
      <input
        type={type}
        id={name}
        placeholder={error.length > 0 ? '' : placeholder}
        className={`w-full px-6 py-4 text-sm border dark:focus:bg-darkbg select-none transition-all duration-75 font-medium outline-none rounded-xl placeholder:text-text4 dark:placeholder:text-text2 dark:text-white dark:bg-darkbg ${
          error.length > 0
            ? 'border-error text-error'
            : 'border-strock dark:border-darkStroke text-text1'
        } ${children ? 'pr-16' : ''}`}
        {...rest}
        {...field}
      />
      {error.length > 0 && (
        <span className="text-error text-sm font-medium absolute top-1/2 -translate-y-1/2 left-6 error-input">
          {error}
        </span>
      )}
      <div className="absolute right-6 top-1/2 select-none -translate-y-1/2">{children}</div>
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.string,
  control: PropTypes.any.isRequired,
};

export default withErrorBoundary(Input, {
  FallbackComponent: <ErrorComponent></ErrorComponent>,
});
