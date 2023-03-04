import React from 'react';
import { useController } from 'react-hook-form';

const Textarea = (props) => {
  const { control, name, placeholder = '', children, ...rest } = props;
  const { field } = useController({
    control,
    name,
    defaultValue: '',
  });
  return (
    <textarea
      placeholder={placeholder}
      className={`w-full min-h-[140px] resize-none px-6 py-4 text-sm border dark:focus:bg-darkbg select-none transition-all duration-75 font-medium outline-none rounded-xl placeholder:text-text4 dark:placeholder:text-text2 dark:text-white dark:bg-darkbg`}
      {...field}
      {...rest}
    ></textarea>
  );
};

export default Textarea;
