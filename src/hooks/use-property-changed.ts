import deepEquals from 'fast-deep-equal';
import { useRef } from 'react';

export interface PropertyChangedReturn<T> {
  changed: boolean;
  previousValue: T | undefined;
}

const usePropertyChanged = <T>(property: T): PropertyChangedReturn<T> => {
  const lastValue = useRef<T>();
  let changed = false;

  if (lastValue.current) {
    changed = deepEquals(lastValue.current, property);

    if (changed) {
      lastValue.current = property;
    }
  }

  const returnValue: PropertyChangedReturn<T> = {
    changed,
    previousValue: lastValue.current,
  };

  lastValue.current = property;

  return returnValue;
};

export { usePropertyChanged };
