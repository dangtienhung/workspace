import { useState } from 'react';

export default function useToogleValue(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const handleToogleValue = () => {
    setValue(!value);
  };
  return {
    value,
    handleToogleValue,
  };
}
