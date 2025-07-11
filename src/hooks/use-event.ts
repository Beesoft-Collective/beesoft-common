import { useInsertionEffect, useRef } from 'react';

/**
 * The callback can be a function of any number of arguments with any return type.
 */
type UnknownFunction = (...args: Array<never>) => never;

type CallbackFunction<P, R> = (...args: Array<P>) => R;

const useEventPreMountCallbackError = () => {
  throw new Error('useEvent should not be called before the component is mounted');
};

/**
 * Creates a stable function that will always contain the latest state or property values and doesn't require the use of
 * a dependency array. This is currently submitted as a React RFC and is explained here
 * https://github.com/reactjs/rfcs/blob/useevent/text/0000-useevent.md.
 * @param callback - The actual function to run.
 */
const useEvent = <F extends UnknownFunction, P extends Array<never> = Parameters<F>, R = ReturnType<F>>(
  callback: CallbackFunction<P, R>
) => {
  // maintains the actual code to run...this is updated on every render
  const latestCallback = useRef<CallbackFunction<P, R>>(useEventPreMountCallbackError as never);
  useInsertionEffect(() => {
    latestCallback.current = callback;
  }, [callback]);

  // creates the stable function that does not change on each render
  const stableCallback = useRef<F>(null as never);
  if (!stableCallback.current) {
    stableCallback.current = function (this: never) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line prefer-rest-params
      return latestCallback.current?.apply(this, arguments);
    } as F;
  }

  return stableCallback.current;
};

export { useEvent };
