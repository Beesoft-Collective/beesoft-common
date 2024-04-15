import { FunctionType } from '../global-types.ts';

const isFunction = (item: unknown): item is FunctionType => {
  return typeof item === 'function';
};

export { isFunction };
