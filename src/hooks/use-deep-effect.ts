import { DependencyList, useEffect, useRef, useState } from 'react';
import { cloneDeep } from '../functions/clone-deep/clone-deep.ts';
import { arraysAreDifferent } from '../functions/common.ts';

const useDeepEffect = (effect: () => void | (() => void), dependencies: DependencyList) => {
  const [effectTrigger, setEffectTrigger] = useState(false);
  const previousDependencies = useRef<DependencyList>();
  const isChanged =
    previousDependencies.current !== undefined && arraysAreDifferent(previousDependencies.current, dependencies);

  if (!previousDependencies.current || isChanged) {
    previousDependencies.current = cloneDeep(dependencies);
    setEffectTrigger(!effectTrigger);
  }

  useEffect(effect, [effectTrigger]);
};

export { useDeepEffect };
