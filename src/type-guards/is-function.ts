import { FunctionType } from '../global-types.ts';

const isFunction = (item: unknown): item is FunctionType => {
  return typeof item === 'function';
};

const isFunctionArray = (value: unknown): value is Array<FunctionType> => {
  return Array.isArray(value) && value.every((item) => isFunction(item));
};

export { isFunction, isFunctionArray };
