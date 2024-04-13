import { JsonData } from '../../custom-types/json-data.ts';
import { FunctionType, Primitive } from '../../global-types.ts';
import { isDateArray } from '../../type-guards/is-date.ts';
import { isFunctionArray } from '../../type-guards/is-function.ts';
import { isObjectArray } from '../../type-guards/is-object.ts';
import { isPrimitiveArray } from '../../type-guards/is-primitive.ts';
import { copyObject } from './copy-object.ts';

const copyPrimitiveOrFunctionArray = (source: Array<Primitive | FunctionType>) => {
  let index = source.length;
  const copy = new Array(index);

  for (; index-- !== 0; ) {
    copy[index] = source[index];
  }

  return copy;
};

const copyDateArray = (source: Array<Date>) => {
  let index = source.length;
  const copy = new Array(index);

  for (; index-- !== 0; ) {
    copy[index] = new Date(source[index].getTime());
  }

  return copy;
};

const copyObjectArray = (source: Array<Record<string, unknown>>) => {
  let index = source.length;
  const copy: JsonData = new Array(index);

  for (; index-- !== 0; ) {
    copy[index] = copyObject(source[index]);
  }

  return copy;
};

const copyArray = <T>(source: Array<T>): Array<T> => {
  if (isPrimitiveArray(source) || isFunctionArray(source)) {
    return copyPrimitiveOrFunctionArray(source);
  } else if (isDateArray(source)) {
    return copyDateArray(source);
  } else if (isObjectArray(source)) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return copyObjectArray(source);
  }

  let index = source.length;
  const copy = new Array(index);

  for (; index-- !== 0; ) {
    copy[index] = source[index];
  }

  return copy;
};

export { copyArray };
