import { DependencyList, useRef } from 'react';
import deepEquals from 'fast-deep-equal';

const arraysAreDifferent = (oldArray: ReadonlyArray<unknown>, newArray: ReadonlyArray<unknown>): boolean => {
  for (let i = oldArray.length; i-- !== 0; ) {
    if (oldArray[i] !== newArray[i] && !deepEquals(oldArray[i], newArray[i])) {
      return true;
    }
  }

  return false;
};

const useDeepMemo = <T>(factory: () => T, dependencies: DependencyList): T => {
  const _memo = useRef<[] | [DependencyList] | [DependencyList, T]>([]);
  const isChanged = _memo.current.length > 0 && _memo.current[0] && arraysAreDifferent(_memo.current[0], dependencies);
};

export { useDeepMemo };
