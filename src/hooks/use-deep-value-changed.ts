import deepEquals from 'fast-deep-equal';
import { useRef } from 'react';

const useDeepValueChanged = <T>(callback: (value: T) => void, value: T) => {
  const lastValue = useRef<T>();
  const isChanged = !deepEquals(lastValue.current, value);

  if (!lastValue.current || isChanged) {
    lastValue.current = value;
    callback(value);
  }
};

export { useDeepValueChanged };
