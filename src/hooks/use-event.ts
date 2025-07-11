/* eslint-disable  @typescript-eslint/no-explicit-any */
import { useInsertionEffect, useRef } from 'react';

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
const useEvent = <F extends (...args: Array<any>) => any, P extends Array<any> = Parameters<F>, R = ReturnType<F>>(
  callback: CallbackFunction<P, R>
) => {
  // maintains the actual code to run...this is updated on every render
  const latestCallback = useRef<CallbackFunction<P, R>>(useEventPreMountCallbackError as any);
  useInsertionEffect(() => {
    latestCallback.current = callback;
  }, [callback]);

  // creates the stable function that does not change on each render
  const stableCallback = useRef<CallbackFunction<P, R>>(null as any);
  if (!stableCallback.current) {
    stableCallback.current = function (this: any) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line prefer-rest-params
      return latestCallback.current?.apply(this, arguments);
    } as F;
  }

  return stableCallback.current;
};

export { useEvent };
