import { DependencyList, useRef } from 'react';
import deepEquals from 'fast-deep-equal';
import { cloneDeep } from '../functions/clone-deep/clone-deep.ts';

const arraysAreDifferent = (oldArray: ReadonlyArray<unknown>, newArray: ReadonlyArray<unknown>): boolean => {
  for (let i = oldArray.length; i-- !== 0; ) {
    if (!deepEquals(oldArray[i], newArray[i])) {
      return true;
    }
  }

  return false;
};

const useDeepMemo = <T>(factory: () => T, dependencies: DependencyList): T => {
  const _memo = useRef<[] | [DependencyList] | [DependencyList, T]>([]);
  const isChanged = _memo.current.length > 0 && _memo.current[0] && arraysAreDifferent(_memo.current[0], dependencies);

  if (_memo.current.length === 0 || isChanged) {
    _memo.current = [cloneDeep(dependencies), factory()];
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return _memo.current[1];
};

export { useDeepMemo };
