import { isObject } from '../type-guards/is-object.ts';
import { copyArray } from './copy-array.ts';
import { copyObject } from './copy-object.ts';

const cloneDeep = <T>(item: T): T => {
  if (!isObject(item)) {
    return item;
  }

  if (Array.isArray(item)) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return copyArray(item);
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return copyObject(item);
};

export { cloneDeep };
