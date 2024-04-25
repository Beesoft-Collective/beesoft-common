import { DependencyList, useRef } from 'react';
import { cloneDeep } from '../functions/clone-deep/clone-deep.ts';
import { arraysAreDifferent } from '../functions/common.ts';

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
