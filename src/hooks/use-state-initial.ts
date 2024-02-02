import { Dispatch, SetStateAction, useRef, useState } from 'react';

const isStateFunction = <S>(setStateAction: SetStateAction<S>): setStateAction is (prevState: S) => S =>
  typeof setStateAction === 'function';

/**
 * Wraps the actual state value in an object with an initial property that determines if this version of the state is
 * the initial version or not.
 */
interface InitialState<T> {
  value: T;
  initial: boolean;
}

/**
 * A hook that will tell the user if the current version of the state is the initial version or not. Unlike `setState`
 * this version requires an initial value be set.
 * @param {T} initialState - The initial value of the state.
 * @returns {readonly [InitialState<T>, <T>(value: ((<T>(prevState: T) => T) | T)) => void]}
 */
const useStateInitial = <T>(initialState: T) => {
  const [state, setState] = useState<InitialState<T>>({
    value: initialState,
    initial: true,
  });
  const lastState = useRef<T>(initialState);

  const dispatcher: Dispatch<SetStateAction<T>> = (value) => {
    if (!isStateFunction(value)) {
      setState({
        value: value,
        initial: false,
      });
    } else {
      const newValue = value(lastState.current);
      lastState.current = newValue;

      setState({
        value: newValue,
        initial: false,
      });
    }
  };

  return [state, dispatcher] as const;
};

export { useStateInitial };
