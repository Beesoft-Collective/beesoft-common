import deepEquals from 'fast-deep-equal';
import { useId, useRef } from 'react';

export interface PropertyChangedReturn<T> {
  changed: boolean;
  previousValue: T | undefined;
}

const usePropertyChanged = <T>(property: T): PropertyChangedReturn<T> => {
  const lastValue = useRef<T>();
  const id = useId();
  let changed = false;

  if (lastValue.current !== undefined) {
    changed = !deepEquals(lastValue.current, property);
  }

  const returnValue: PropertyChangedReturn<T> = {
    changed,
    previousValue: lastValue.current,
  };
  console.log('id', id, 'usePropertyChanged changed', changed, 'property value', property, 'return value', returnValue);
  lastValue.current = property;

  return returnValue;
};

export { usePropertyChanged };
