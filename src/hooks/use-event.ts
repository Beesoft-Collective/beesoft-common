import { useInsertionEffect, useRef } from 'react';

/**
 * The callback can be a function of any number of arguments.
 */
type UnknownFunction = (...args: Array<never>) => never;

const useEventPreMountCallbackError = () => {
  throw new Error('useEvent should not be called before the component is mounted');
};

/**
 * Creates a stable function that will always contain the latest state or property values and doesn't require the use of
 * a dependency array. This is currently submitted as a React RFC and is explained here
 * https://github.com/reactjs/rfcs/blob/useevent/text/0000-useevent.md.
 * @param callback - The actual function to run.
 */
const useEvent = <T extends UnknownFunction>(callback: T) => {
  // maintains the actual code to run...this is updated on every render
  const latestCallback = useRef<T>(useEventPreMountCallbackError as never);
  useInsertionEffect(() => {
    latestCallback.current = callback;
  }, [callback]);

  // creates the stable function that does not change on each render
  const stableCallback = useRef<T>(null as never);
  if (!stableCallback.current) {
    stableCallback.current = function (this: never) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line prefer-rest-params
      return latestCallback.current?.apply(this, arguments);
    } as T;
  }

  return stableCallback.current;
};

export { useEvent };
