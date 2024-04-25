import { DependencyList, useEffect, useRef, useState } from 'react';
import { arraysAreDifferent } from '../functions/common.ts';

const useDeepEffect = (effect: () => void | (() => void), dependencies: DependencyList) => {
  const [effectTrigger, setEffectTrigger] = useState(false);
  const previousDependencies = useRef<DependencyList>();
  const isChanged =
    previousDependencies.current !== undefined && arraysAreDifferent(previousDependencies.current, dependencies);

  if (!previousDependencies.current || isChanged) {
    setEffectTrigger(!effectTrigger);
  }

  useEffect(effect, [effectTrigger]);
};

export { useDeepEffect };
