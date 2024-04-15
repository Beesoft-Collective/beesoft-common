import { isDate } from '../../type-guards/is-date.ts';
import { isFunction } from '../../type-guards/is-function.ts';
import { isObject } from '../../type-guards/is-object.ts';
import { isPrimitive } from '../../type-guards/is-primitive.ts';
import { copyObject } from './copy-object.ts';

const copyArray = <T>(source: Array<T>): Array<T> => {
  let index = source.length;
  const copy = new Array(index);

  for (; index-- !== 0; ) {
    const item = source[index];

    if (isPrimitive(item) || isFunction(item)) {
      copy[index] = item;
    } else if (isDate(item)) {
      copy[index] = new Date(item.getTime());
    } else if (isObject(item) && !Array.isArray(item)) {
      copy[index] = copyObject(item);
    } else if (Array.isArray(item)) {
      copy[index] = copyArray(item);
    } else {
      copy[index] = item;
    }
  }

  return copy;
};

export { copyArray };
