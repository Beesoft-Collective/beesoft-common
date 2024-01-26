import { isDate } from '../../type-guards/is-date.ts';
import { isFunction } from '../../type-guards/is-function.ts';
import { isObject } from '../../type-guards/is-object.ts';
import { isPrimitive } from '../../type-guards/is-primitive.ts';
import { copyArray } from './copy-array.ts';

const copyObject = (item: Record<string, unknown>) => {
  if (!isObject(item)) {
    return item;
  }

  const copy: Record<string, unknown> = {};
  const keys = Object.keys(item);

  for (let i = keys.length; i-- !== 0; ) {
    const key = keys[i];
    const property = item[key];
    if (isPrimitive(property) || isFunction(property)) {
      copy[key] = property;
    } else if (isDate(property)) {
      copy[key] = new Date(property.getTime());
    } else if (Array.isArray(property)) {
      copy[key] = copyArray(property);
    } else if (isObject(property)) {
      copy[key] = copyObject(property);
    }
  }

  return copy;
};

export { copyObject };
